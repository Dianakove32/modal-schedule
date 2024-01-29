import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import {useSchedule} from '../../../context/scheduleContext';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './index.css'

const TimeCounter = ({type }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [valueStart, onChange] = useState('07:00');
    const [valueEnd, onChangeEnd] = useState( '');
    const { data } = useSchedule()

    useEffect(()=>{
        let dayEnd = new Date(startDate)
        let dayEnd2 = dayEnd.setDate(dayEnd.getDate() + data.totalHours)
        let day = new Date(dayEnd2)
        setEndDate(day)

    },[data.totalHours, startDate])

    useEffect(()=>{
        let time
        let breakH
        // let minutesFromStart = +data.timeStart.split(':')[1]
        if(data.break.value === 'without') {
            breakH = 0
        }else{
            breakH = parseInt(data.break.label)
        }

        if(data.typeHours.value === 'academ'){
            let h = +data.dayHours * 45 / 60
            let h2 = Math.trunc(h)
            let min2 = h - h2
            let res = min2 * 60 + breakH
            let hourEnd = +data.timeStart.split(':')[0] + h
            if(res == 60){
                time = `${hourEnd+1}:00`
            }else {
                time = `${hourEnd}:${res}`
            }
            onChangeEnd(time)
        }else {
            let hourEnd = +data.timeStart.split(':')[0] + +data.dayHours
            let time = `${hourEnd}:${breakH}`
            onChangeEnd(time)
        }

    },[data.typeHours.value,data.dayHours, data.break])

    return (<>
        { type === 'day' ?
            <div className={'time-block'}>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                <div className={'middle_block'}>до</div>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
            </div> :
            <div className={'time-block'}>
                <TimePicker onChange={onChange} value={valueStart} clearIcon = {null} clockIcon={null} openClockOnFocus={false}/>
                <div className={'middle_block'}>до</div>
                <TimePicker onChange={onChangeEnd} value={ valueEnd } clearIcon = {null} clockIcon={null} openClockOnFocus={false}/>
            </div>
        }</>
    );
};

export default TimeCounter;