import Header from "../component/Header";
import DayAndNightExchange from "../component/DayAndNightExchange";

export default function AboutUs(){
    return (
        <div className="aboutUs">
            <Header id={2}/>
            <DayAndNightExchange/>
            <div className="info">该功能暂时不可用</div>
        </div>
    )
}