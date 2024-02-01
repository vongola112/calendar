import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      currentDay: new Date(),
    }
  }

  nextMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() + 1)) })
  }

  prevMonth = () => {
    this.setState({
      currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() - 1))
    })
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  selectMonth = (day) => {
    this.setState({currentDay: new Date(day.year, day.month, day.number)})
  }


  render() {
    return (
      <div className="calendar">
        <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} nextMonth={this.nextMonth} prevMonth={this.prevMonth} selectMonth={this.selectMonth} />
      </div>

    )
  }
}