import react from "react";
import router from "next/router";

export default function Classification({typeInfo}){
    const handleClick = (id)=>{
        id?router.push('posts?id='+id):router.push('/posts')
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
