import React, { Fragment, useState } from 'react';
import Calendar from 'react-calendar';
import {getFormattedDate, dayDifference} from '../../helpers/methods';
import currencyLogo from '../../assets/Dashboard/Row/Group 4/Price.png';
import csvLogo from '../../assets/Dashboard/Row/Group 3/file.png';
import reportLogo from '../../assets/Dashboard/Row/Group 2/statistics-report.png';
import calenderLogo from '../../assets/Dashboard/Row/Group/calendar.png';
import itemImage from '../../assets/Dashboard/Row/Thumb/Bitmap.png'

const Event = (props) => {
    const [openCalender, setOpenCalender] = useState(false);
    // set date object initially
    const [chosenDate, setChosenDate] = useState(new Date());
    const handleOpenCalender = (e) => {
        setOpenCalender(!openCalender);
    }
    const handleChosenDate = (newDate) => {
        setChosenDate(newDate);
    }
    const handleSaveDate = () => {
        // new timestamp to be registered corresponding to the event row
        props.onChangeDate(props.event.hash, chosenDate.getTime());
        // close calender after saving the new date
        setOpenCalender(false);
    }
    const { onViewPrice, event, currentTab} = props;
    const status = (days) => {
        switch(currentTab.name){
            case 'live':
                return 'LIVE'
            case 'upcoming': 
                return days + ' Days to go'
            case 'past':
                return days + ' Days ago'
            default:
        }
    }
    return (
        <Fragment>
            <tr>
                <td className='date-wrapper'>
                    <p>{getFormattedDate(new Date(event.createdOn))}</p>
                    <p>{status(dayDifference(event.createdOn))}</p>
                </td>
                <td>
                    <div className='d-flex title-wrapper'>
                        <div className='item-image'>
                            <img src={itemImage} alt='' />
                        </div>
                        <div className='item-details'>
                            <p>{event.name}</p>
                            <p>US</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div onClick={onViewPrice} className='price-wrapper'>
                        <span className='logo'><img src={currencyLogo} /></span>
                        <span>View pricing</span>
                    </div>
                </td>
                <td>
                    <div className='d-flex justify-content-between action-wrapper'>
                        <div>
                            <span className='logo'><img src={csvLogo} /></span>
                            <span>CSV</span>
                        </div>
                        <div>
                            <span className='logo'><img src={reportLogo} /></span>
                            <span>Report</span>
                        </div>
                        <div className='calendar-wrapper' onClick={handleOpenCalender}>
                            <span className='logo'><img src={calenderLogo} /></span>
                            <span>Schedule Again</span>
                            <div className='calendar-content' style={openCalender ? { opacity: 1, visibility: 'visible' } : null} onClick={(e)=>{e.stopPropagation()}}
                            >
                                <div>
                                    <div className='calendar-date'>
                                        <p>Date : {getFormattedDate(chosenDate)}</p>
                                        <button type="button" onClick={handleSaveDate}>Save</button>
                                    </div>
                                    <Calendar
                                        value={chosenDate}
                                        onChange={handleChosenDate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

        </Fragment>
    )
}

export default Event