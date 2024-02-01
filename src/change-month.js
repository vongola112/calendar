
import { DropdownButton, Dropdown, DropdownHeader, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import months from './months.js';

function DropdownBarHeader(props) {

    const changeMonth = (month) => {
        console.log(month);
    }

    return (
        <div className="tools">
            <button onClick={() => props.item.prevMonth()}>
                <span className="material-icons">
                    arrow_backward
                </span>
            </button>
            {/* <p className='calendar-month'>{months[props.item.day.getMonth()]}</p>
             */}

            <DropdownButton title={months[props.item.day.getMonth()]}>
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

            <button onClick={() => props.item.nextMonth()}>
                <span className="material-icons">
                    arrow_forward
                </span>
            </button>
        </div>
    )
}

export default DropdownBarHeader;