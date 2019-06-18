import React, { useState } from 'react';
import moment from 'moment';
import './calendar.css';
import Select from '../Select/Select';
const Calendar = () => {
  const [dateContext, setDateContext] = useState(moment);

  const weekDays = moment.weekdaysShort();
  const months = moment.months();
  const blanks = [];

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td className="emptySlot"> {''}</td>);
  }

  const year = () => {
    return dateContext.format('Y');
  };
  const month = () => {
    return dateContext.format('MMMM');
  };
  const daysInMonth = () => {
    return dateContext.daysInMonth();
  };
  const currentDate = () => {
    return dateContext.get('date');
  };
  const currentDay = () => {
    return dateContext.format('d');
  };
  function firstDayOfMonth() {
    let dateContext1 = dateContext; // Days of the week 0..1...5...6
    let firstDay = moment(dateContext1)
      .startOf('month')
      .format('d');
    return firstDay;
  }

  let daysOfMonth = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    let className = d === currentDay() ? 'current-day' : 'day';
    daysOfMonth.push(
      <td key={d} className={className}>
        <span>{d}</span>
      </td>,
    );
  }
  var totalSlots = [...blanks, ...daysOfMonth];
  let rows = [];
  let cells = [];
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });
  let trElems = rows.map((d, i) => {
    return <tr key={i}> {d}</tr>;
  });

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td colspan={5}>
              <Select
                options={months}
                value={months}
                placeholder={'Select Month'}
              />
            </td>
            <td colspan={6} className="label-year">
              {month()} {year()}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekDays.map((day, index) => {
              return (
                <td key={index} className="week-day">
                  {day}
                </td>
              );
            })}
          </tr>
          {trElems}
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
