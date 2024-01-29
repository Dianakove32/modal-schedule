import React from 'react';
import {useSchedule} from '../../../context/scheduleContext';
import './index.css'

const HourCounter = ({ title,type   }) => {
    const {data, setData} = useSchedule()

    const clickHandler = (act) => {
        if ((data.totalHours === 0 &&  type === 'day' && act === 'min') ) return
        if ((data.dayHours === 0 && type === 'hour' && act === 'min') ) return
        if (  act === 'plus' ) {
            if (type === 'day') {
                let sum = data.totalHours + 1
                setData({
                    ...data,
                    totalHours: sum
                })
            }else{
                let sum = data.dayHours + 1
                setData({
                    ...data,
                    dayHours: sum
                })
            }

        } else if (  act === 'min') {
            if (type === 'day') {
                let sum = data.totalHours - 1
                setData({
                    ...data,
                    totalHours: sum
                })
            }else{
                let sum = data.dayHours - 1
                setData({
                    ...data,
                    dayHours: sum
                })
            }
        }
    }

    return (
        <div className='hour-block' >
            <div className={'colored__btn counter-up'} onClick={()=> clickHandler( 'min')}>-</div>
            <div className={'num_block'}> {type === 'day' ? data.totalHours : data.dayHours}</div>
            <div className={'text_block'}>{title}</div>
            <div className={'colored__btn counter-down'}  onClick={()=> clickHandler( 'plus')}>+</div>
        </div>
    );
};

export default HourCounter;