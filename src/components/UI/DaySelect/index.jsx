import React, {useState} from 'react';
import  '../../modal/Schedule/Scedule.css';
import cn from "classnames";
import './index.css'

const DaySelect = ( ) => {
    const [selectDay, setSelectDay] = useState('0' );
    const [threeDaysSelect, setThreeDaysSelect] = useState(false);
    const [twoDaysSelect, setTwoDaysSelect] = useState(false);

    const handleChooseDays = (ind) =>{
        setSelectDay('0')
        setThreeDaysSelect(false)
        setTwoDaysSelect(false)
        ind === 1 && setThreeDaysSelect(true)
        ind === 2 && setTwoDaysSelect(true)
    }

    const handleSetData = (e) => {
        setSelectDay(e.target.dataset.itemValue)
    }

    return (
        <div className={'week_layout'}   data-total-value={selectDay}>
            <div onClick={()=>handleChooseDays(1)}>ПН/СР/ПТ</div>
            <div onClick={()=>handleChooseDays(2)}>ВТ/ЧТ</div>
            <div onClick={(e)=>handleSetData(e)} className={ 'select_item' } data-item-value="7">ВС</div>
            <div onClick={(e)=>handleSetData(e)} className={ 'select_item' } data-item-value="6">СБ</div>
            <div onClick={(e)=>handleSetData(e)} className={cn('select_item', { 'active': threeDaysSelect })} data-item-value="5">ПТ</div>
            <div onClick={(e)=>handleSetData(e)} className={cn('select_item', { 'active': twoDaysSelect })} data-item-value="4">ЧТ</div>
            <div onClick={(e)=>handleSetData(e)} className={cn('select_item', { 'active': threeDaysSelect })} data-item-value="3">СР</div>
            <div onClick={(e)=>handleSetData(e)} className={cn('select_item', { 'active': twoDaysSelect })} data-item-value="2">ВТ</div>
            <div onClick={(e)=>handleSetData(e)} className={cn('select_item', { 'active': threeDaysSelect })}  data-item-value="1">ПН</div>
            </div>
    );
};

export default DaySelect;