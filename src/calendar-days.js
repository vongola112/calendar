import DropdownBarHeader from './change-month.js';

import weekdays from './weekdays.js';
import months from './months.js';
import { DropdownButton, Dropdown, DropdownHeader, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth());
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];
    let calendarDay = {};
    let weekNumber = 0;
    let lastDayOftheWeek = false;

    const changeMonth = (month) => {
        let newDate = new Date()
        for (let i = 0; i < months.length; i++) {
            if (month === months[i]) {
                newDate = new Date(props.day.setMonth(i));
            }
        }

        console.log(newDate);
        return props.changeCurrentDay(newDate);
        
    }

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        if (day % 7 === 0) {
            weekNumber++;
        }

        calendarDay = {
            lastDayOftheWeek: lastDayOftheWeek,
            weekNumber: weekNumber,
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear(),
        }

        currentDays.push(calendarDay);
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <h2 className="title">{months[props.day.getMonth()]} {props.day.getFullYear()}</h2>
                <div className="tools">
                    <button className='gray-button' onClick={() => props.prevMonth()}>
                        <span className="material-icons">
                            arrow_backward
                        </span>
                    </button>
                    <DropdownButton id='button-test' title={months[props.day.getMonth()]}>

                        {
                            months.map((month) => {
                                return (
                                    <Dropdown.Item onClick={() => changeMonth(month)}>
                                        {month}
                                    </Dropdown.Item>
                                )
                            })
                        }

                    </DropdownButton>
                    <button className='gray-button' onClick={() => props.nextMonth()}>
                        <span className="material-icons">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
            <table></table>
            <div className="table-header">
                {
                    weekdays.map((weekday) => {
                        return <div className="weekday"><p>{weekday}</p></div>
                    })
                }
            </div>
            <div className="calendar-content">
                <div className="table-content">
                    {
                        currentDays.map((day) => {
                            return (
                                <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                                    onClick={() => props.changeCurrentDay(day)}>
                                    <p>{day.number}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default CalendarDays;




