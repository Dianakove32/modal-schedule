import React, {useContext, useEffect, useState} from 'react';
const defaultValue = {
    color: '',
    typeHours:   {
        label: 'Академические',
        value: 'academ'
    },
    totalHours: 2,
    dateStart: '',
    // dateEnd: '',
    daysWeek: [],
    break:  {
        label: '15 мин',
        value: 'break15'
    },
    dayHours: 3,
    timeStart: '7:00'

}

export const ScheduleContext = React.createContext();
export const useSchedule = () => {
    return useContext(ScheduleContext)
}

export const ScheduleProvider = ({ children }) => {
    const [data, setData] =  useState({})

    useEffect(()=>{
        setData(defaultValue)
    },[])

    return (
        <ScheduleContext.Provider value={{data, setData}}>
            {children}
        </ScheduleContext.Provider>
    )
}