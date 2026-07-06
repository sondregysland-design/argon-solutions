import { google } from "googleapis";
import http from "node:http";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(resolve(__dirname, "..", ".env.local"), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")];
    })
);

const CLIENT_ID = env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:4321/oauth-callback";
const SCOPES = ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.readonly"];

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Mangler GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET i .env.local");
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oauth2.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
});

console.log("\nAdd this redirect URI in Google Cloud Console > Credentials > OAuth 2.0 Client (if missing):");
console.log("  " + REDIRECT_URI);
console.log("\n1. Open this URL in your browser:\n");
console.log(authUrl);
console.log("\n2. Sign in with the calendar account, click 'Continue' on the warning, allow access.");
console.log("3. The script will capture the refresh token automatically.\n");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:4321`);
  if (url.pathname !== "/oauth-callback") {
    res.writeHead(404);
    res.end();
    return;
  }
  const code = url.searchParams.get("code");
  if (!code) {
    res.writeHead(400);
    res.end("Missing code");
    return;
  }
  try {
    const { tokens } = await oauth2.getToken(code);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>OK</h1><p>Du kan lukke fanen og se i terminalen.</p>");
    if (!tokens.refresh_token) {
      console.error("\nIngen refresh_token returnert. Gå til https://myaccount.google.com/permissions, fjern tilgangen for denne appen, og kjør scriptet på nytt.");
    } else {
      console.log("\n=== NY REFRESH TOKEN ===");
      console.log(tokens.refresh_token);
      console.log("========================\n");
      console.log("Oppdater Vercel:");
      console.log("  vercel env rm GOOGLE_REFRESH_TOKEN production -y");
      console.log("  printf '%s' '<token>' | vercel env add GOOGLE_REFRESH_TOKEN production");
      console.log("  vercel --prod\n");
    }
    server.close();
  } catch (err) {
    res.writeHead(500);
    res.end("Error: " + err.message);
    console.error("Token exchange failed:", err);
  }
});

server.listen(4321, () => {
  // listening
});
