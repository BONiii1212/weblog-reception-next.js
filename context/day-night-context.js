import React,{useState} from "react";

const SwitchContext = React.createContext()
SwitchContext.displayName = "SwitchContext"

export const SwitchProvider = ({children}) => {
    const [mode, setMode] = useState('light')
    const changeMode = () => {
        setMode(mode=='light'?'dark':'light')
    }
    return(
        <SwitchContext.Provider
            children={children}
            value = {{mode,changeMode}}
        />
    )
}

export const useSwitch = () => {
    const context = React.useContext(SwitchContext)
    if(!context){
        throw new Error("useSwitch必须在AuthProvider中使用")
    }
    return context
}