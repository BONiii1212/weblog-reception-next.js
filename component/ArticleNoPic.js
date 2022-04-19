import react from "react"
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleNoPic({item}){
    return(
        <div className="articlelist-item">
            <div style={{borderBottom:"1px solid #F2F2F5"}}>
                <div className="title">{item.title}</div>
                <div style={{color:"#4e5969"}}><IconFont type="icon-24gl-tags"/><span className="tag">{item.typeName}</span><IconFont type="icon-shijian"/><span>{item.addTime}</span></div>
                <div className="introduce">{item.introduce}</div>
            </div>
        </div>
    )
}