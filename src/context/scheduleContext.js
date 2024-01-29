import React, {useState} from "react";
const defaultValue = {
    countedHours: ''
}

export const ScheduleContext = React.createContext();

export const ScheduleProvider = ({ children }) => {
    const [data, setData] =  useState(defaultValue)
    return (
        <ScheduleContext.Provider value={{data, setData}}>{children}</ScheduleContext.Provider>
    )
}