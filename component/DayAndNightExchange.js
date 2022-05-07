import react,{useRef,useState,useEffect} from "react"
import { createFromIconfontCN } from '@ant-design/icons';
import { useSwitch } from "../context/day-night-context";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3382911_ufha9tinysl.js',
});

export default function DayAndNightExchange(){
    const {mode, changeMode} = useSwitch()
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    useEffect(()=>{
        if(mode==darkTheme){
            body.classList.add(darkTheme)
            body.classList.remove(lightTheme)
        }else{
            body.classList.add(lightTheme)
            body.classList.remove(darkTheme)
        }
    },[mode])
    return(
       <div onClick={changeMode}>
           {mode==='light'?<div className="light">
               <IconFont type="icon-taiyang-copy"></IconFont>
           </div>:<div className="dark">
               <IconFont type="icon-yueliang"></IconFont>
           </div>}    
       </div> 
    )
}