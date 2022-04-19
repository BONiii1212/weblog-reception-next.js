import react from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import router from "next/router";
import { Menu } from "antd";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});
export default function Classification({typeInfo}){
    const handleClick = (id)=>{
        id?router.push('article?id='+id):router.push('article')
    }
    return(
        <div className="classification">
            <ul>
                <li onClick={()=>handleClick(0)}>所有文章</li>
                {typeInfo?.map(item=>
                   <li onClick={()=>handleClick(item.id)}>{item.typeName}</li>
                )}
            </ul>
        </div>
            
    )
}
