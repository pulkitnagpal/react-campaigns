import React from 'react';
import itemImage from '../../assets/Dashboard/Row/Thumb/Bitmap.png';

const PriceDetail = (props) => {
    const {onClose} = props
    return (
        <div className='p-modal-wrapper'>
            <div className='p-content-wrapper'>
                <div className="p-content">
                    <div className="p-content-header">
                        <img src={itemImage}/>
                        <div>
                            <p>pubg mobile</p>
                            <p>US</p>
                        </div>
                    </div>
                    <div className='p-content-details mt-4'>
                        <h2>Pricing</h2>
                        <div className='d-flex justify-content-between'>
                            <p>1 Week- 1 Month</p>
                            <p>$ 100.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>6 Months</p>
                            <p>$ 500.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>1 Year</p>
                            <p>$ 900.00</p>
                        </div>
                    </div>
                    <div className='mt-4 p-content-footer'>
                        <div onClick={onClose}>Close</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceDetail;