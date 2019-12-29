import React, {useState, Fragment} from 'react';
import Event from './Event';
import PriceDetail from './PriceDetail';

const Table = (props) => {
    const [openPrice, setOpenPrice] = useState(false);

    const handleViewPricing = () => {
        setOpenPrice(true);
    }
    const handleClosePricing = () => {
        setOpenPrice(false);
    }
    return (
        <Fragment>
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
                        props.events.map((event)=> {
                            return (
                                <Event key={event.hash} onViewPrice={handleViewPricing} event={event} onChangeDate={props.onChangeDate} currentTab={props.currentTab}/>
                            )
                        })
                    }
                </tbody>
            </table>
            {openPrice ? (<PriceDetail onClose={handleClosePricing}/>) : null}
        </Fragment>
    )
}

export default Table;