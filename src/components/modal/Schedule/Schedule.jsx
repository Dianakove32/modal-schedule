import React  from 'react';
import {useSchedule} from "../../../context/scheduleContext";
import HourCounter from "../../UI/HourCounter";
import TimeCounter from "../../UI/TimeCounter";
import Select from "../../UI/Select";
import DaySelect from "../../UI/DaySelect";
import './Scedule.css'

const typeOfHourse = [
    {
        label: 'Академические',
        value: 'academ'
    },
    {
        label: 'Астрономические',
        value: 'astranom'
    },
]
const typeOfBreak = [
    {
        label: 'Без перерыва',
        value: 'without'
    },
    {
        label: '5 мин',
        value: 'break5'
    },
    {
        label: '10 мин',
        value: 'break10'
    },
    {
        label: '15 мин',
        value: 'break15'
    },
    {
        label: '20 мин',
        value: 'break20'
    },
    {
        label: '25 мин',
        value: 'break25'
    },
    {
        label: '30 мин',
        value: 'break30'
    },
]
const teacher = [ {
    label: 'Выберите преподавателя на это время',
    value: 'teach'
},]
const classChoose = [ {
    label: 'Аудитория',
    value: 'class'
},]

export  const Schedule = ({setIsOpen}) => {
    const { data, setData } = useSchedule()

const handleSubmit = () => {
    console.log( data )
}

const getDat = (e) => {
    setData({
        ...data,
        typeHours:e })
}

const getBreak = (e) => {
    setData({
        ...data,
        break:e })
}

        return (
        <div className={'modal'}>
            <div className={'header'}>
            <h3 className={'title'}>Редактирование расписания</h3>
                <div onClick={()=>setIsOpen(false)} className={'cross'}>&#10006;</div>
            </div>
            <div className={'row_3_layout'}>
                <div className={'base__b'}>Школа "Мамыр"</div>
                <div></div>
                <div className={'color'}>Цвет группы:  </div>
                <Select select={data.typeHours}  options={typeOfHourse} onChange={getDat}/>
                <HourCounter type={'day'} data={data.totalHours}  title={'Всего часов'}/>
                <TimeCounter data={data} type={'day'} />
                <div className={'row_2_layout'}>
                    <DaySelect/>
                </div>
                <Select select={data.break} options={typeOfBreak} onChange={getBreak}/>
                <HourCounter type={'hour'} data={data.dayHours}   title={'Часов в день'}/>
                <TimeCounter type={'hour'}/>
                <Select className={'teacher'}  options={teacher}  />
                <Select className={'class-choose'}  options={classChoose}  />
            </div>
            <div className={'notes'}>Выбор <b>преподавателя</b> и <b>аудитории</b> не обязателен.</div>
            <div className={'footer'}>
                <button onClick={()=>setIsOpen(false)}  className={'bnt'}>Отмена</button>
                <button className={'bnt bordered'}  onClick={()=>handleSubmit()} >Добавить расписание</button>
            </div>
        </div>
    );
};

