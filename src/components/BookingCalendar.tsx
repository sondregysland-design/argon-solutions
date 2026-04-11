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
import { nb } from "date-fns/locale";

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
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const earliest = useMemo(() => addDays(new Date(), MIN_ADVANCE_DAYS), []);

  const days = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    return eachDayOfInterval({ start: calStart, end: calEnd });
  }, [currentMonth]);

  const weekDays = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 rounded-lg hover:bg-sand transition-colors text-text-light hover:text-text"
          aria-label="Forrige måned"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-semibold text-text capitalize">
          {format(currentMonth, "MMMM yyyy", { locale: nb })}
        </h3>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 rounded-lg hover:bg-sand transition-colors text-text-light hover:text-text"
          aria-label="Neste måned"
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

      <div className="grid grid-cols-7 gap-1">
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
                relative aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-150
                ${!isCurrentMonth ? "text-text-muted/50" : ""}
                ${isDisabled && isCurrentMonth ? "text-text-muted/50 cursor-not-allowed" : ""}
                ${!isDisabled && hasSlots && !isSelected ? "text-text hover:bg-primary-light/10 hover:text-primary cursor-pointer" : ""}
                ${!isDisabled && !hasSlots ? "text-text-muted/50 cursor-not-allowed" : ""}
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
