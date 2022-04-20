import react,{useState} from "react";
import router from "next/router";

export default function Classification({typeInfo}){
    const [selectId,setSelectId] = useState(0)
    const handleClick = (id)=>{
        if(id!=selectId){
            setSelectId(id)
            id?router.push('posts?id='+id,undefined,{shallow:true}):router.push('/posts',undefined,{shallow:true})
        }
    }
    return(
        <div className="classification">
            <ul>
                {selectId==0?
                    <span key={0}>
                        <li onClick={()=>handleClick(0)}>所有文章</li>
                    </span>:
                    <a href="javascript:;" key={0}>
                        <li onClick={()=>handleClick(0)}>所有文章</li>
                    </a>
                }
                {typeInfo?.map(item=>
                    selectId==item.id?
                    <span key={item.id}>
                        <li onClick={()=>handleClick(item.id)}>{item.typeName}</li>
                    </span>:
                    <a href="javascript:;" key={item.id}>
                        <li onClick={()=>handleClick(item.id)}>{item.typeName}</li>
                    </a>
                )}
            </ul>
        </div>  
    )
}
