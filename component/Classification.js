import react from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import Link from "next/link";
import router from "next/router";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});
export default function Classification({typeInfo}){

    const handleClick = (id)=>{
        router.push('article?id='+id)
    }
    return(
        <div className="classification-contain">
            <IconFont type="icon-24gl-tags"/><span style={{marginLeft:'6px'}}>分类</span>
            <div className="classification-tags">
                {typeInfo?.map(item=>
                    <div onClick={()=>handleClick(item.id)} id={item.id}>
                        {item.typeName+'('+item.countSum+')'}
                    </div>)}
            </div>
        </div>
    )
}
