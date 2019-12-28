import React from 'react';
import currencyLogo from '../../assets/Dashboard/Row/Group 4/Price.png';
import csvLogo from '../../assets/Dashboard/Row/Group 3/file.png';
import reportLogo from '../../assets/Dashboard/Row/Group 2/statistics-report.png';
import calenderLogo from '../../assets/Dashboard/Row/Group/calendar.png';
import itemImage from '../../assets/Dashboard/Row/Thumb/Bitmap.png'

const Table = () => {
    return (
        <table width='100%' className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Campaign</th>
                    <th>View</th>
                    <th width='33%'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    [1,2,3,4].map(()=> {
                        return (
                            <tr>
                                <td className='date-wrapper'>
                                    <p>Oct 2019,28</p>
                                    <p>5 Days to Go</p>
                                </td>
                                <td>
                                    <div className='d-flex'> 
                                        <div className='item-image'>
                                            <img src={itemImage}/>
                                        </div>
                                        <div className='item-details'>
                                            <p>Auto Chess</p>
                                            <p>US</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='logo'><img src={currencyLogo}/></span>
                                    <span>View pricing</span>
                                </td>
                                <td>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <span className='logo'><img src={csvLogo}/></span>
                                            <span>CSV</span>
                                        </div>
                                        <div>
                                            <span className='logo'><img src={reportLogo}/></span>
                                            <span>Report</span>
                                        </div>
                                        <div>
                                            <span className='logo'><img src={calenderLogo}/></span>
                                            <span>Schedule Again</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;