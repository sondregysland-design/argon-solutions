"use client";

import { useState, useMemo } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isWeekend,
  addDays,
  isBefore,
} from "date-fns";
import { nb, enUS } from "date-fns/locale";
import { useLanguage } from "@/i18n/LanguageProvider";

interface BookingCalendarProps {
  availability: Record<string, string[]>;
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

const MIN_ADVANCE_DAYS = 2;

export function BookingCalendar({
  availability,
  selectedDate,
  onSelectDate,
}: BookingCalendarProps) {
  const { locale } = useLanguage();
  const dfnsLocale = locale === "en" ? enUS : nb;
  const m =
    locale === "en"
      ? {
          weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          prevMonth: "Previous month",
          nextMonth: "Next month",
        }
      : {
          weekDays: ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"],
          prevMonth: "Forrige måned",
          nextMonth: "Neste måned",
        };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const earliest = useMemo(() => addDays(new Date(), MIN_ADVANCE_DAYS), []);

  const days = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    return eachDayOfInterval({ start: calStart, end: calEnd });
  }, [currentMonth]);

  const weekDays = m.weekDays;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-text-light hover:text-text"
          aria-label={m.prevMonth}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-semibold text-text capitalize">
          {format(currentMonth, "MMMM yyyy", { locale: dfnsLocale })}
        </h3>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-text-light hover:text-text"
          aria-label={m.nextMonth}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-text-light py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = selectedDate ? isSameDay(day, new Date(selectedDate + "T00:00:00")) : false;
          const isDisabled = !isCurrentMonth || isWeekend(day) || isBefore(day, earliest);
          const hasSlots = dateStr in availability;

          return (
            <button
              key={dateStr}
              disabled={isDisabled || !hasSlots}
              onClick={() => onSelectDate(dateStr)}
              className={`
                relative aspect-square min-h-11 flex items-center justify-center rounded-lg text-sm transition-all duration-150
                ${!isCurrentMonth ? "text-gray-300" : ""}
                ${isDisabled && isCurrentMonth ? "text-gray-300 cursor-not-allowed" : ""}
                ${!isDisabled && hasSlots && !isSelected ? "text-text hover:bg-primary-light/10 hover:text-primary cursor-pointer" : ""}
                ${!isDisabled && !hasSlots ? "text-gray-300 cursor-not-allowed" : ""}
                ${isSelected ? "bg-primary text-white shadow-sm font-semibold" : ""}
              `}
            >
              {format(day, "d")}
              {hasSlots && !isSelected && isCurrentMonth && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-light" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
