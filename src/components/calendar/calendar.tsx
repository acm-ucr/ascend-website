"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "../calendar/calendarcall";
import CalendarDay from "@/components/calendar/month/calendarday";
import CalendarTop from "@/components/calendar/month/calendartop";
import UpcomingEvents from "@/components/calendar/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          months: "",
          month: "",
          caption: "",
          caption_label: "",
          nav: "space-x-8",
          button: "",
          button_previous: "hidden",
          button_next: "hidden",
          table: "space-y-1",
          head_row:
            "border border-ascend-red-orange mt-[2vw] w-full rounded-t-xl text-center grid grid-cols-7",
          head_cell:
            "text-ascend-red-orange border border-ascend-red-orange text-md md:text-3xl py-1 md:py-2",
          row: "grid grid-cols-7 w-full",
          cell: "border border-ascend-red-orange p-0 bg-white h-[15vh] md:h-[20vh]",
          day: "",
          range_end: "",
          selected: "",
          outside: "",
          disabled: "",
          range_middle: "",
          hidden: "",
          ...classNames,
        }}
        components={{
          Day: ({ day }) => (
            <CalendarDay
              date={day.date}
              displayMonth={day.displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
      <UpcomingEvents />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
