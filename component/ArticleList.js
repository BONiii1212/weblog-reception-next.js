import react,{useState,useEffect} from "react";
import Link from "next/link";
import ArticleNoPic from "./ArticleNoPic";
import ArticleWithPic from "./ArticleWithPic";
import Classification from "./Classification";

export default function ArticleList({articleList,typeInfo}){
    const [article,setArticle] = useState(articleList)
    useEffect(()=>{
        setArticle(articleList)   
    })
    return (
        <div>
            <Classification typeInfo={typeInfo}/>
            {article.length===0?<div className="sorry-nodata">抱歉，暂无数据</div>:
                <ul>
                    {article.map((item)=>
                        <li>
                            <Link href={"/article?id="+item.id} key={item.id}>
                                <a>{item.url?<ArticleWithPic item={item}/>:<ArticleNoPic item={item}/>}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}