import react,{useState,useEffect} from "react";
import Link from "next/link";
import ArticleNoPic from "./ArticleNoPic";
import ArticleWithPic from "./ArticleWithPic";
import Classification from "./Classification";
import { Spin } from "antd";

export default function ArticleList({articleList,isLoading,typeInfo}){
    const [article,setArticle] = useState(articleList)
    useEffect(()=>{
        setArticle(articleList)   
    })
    return (
        <div>
            <Classification typeInfo={typeInfo}/>
            <Spin spinning={isLoading}>
                {article.length===0?<div className="sorry-nodata">抱歉，暂无数据</div>:
                    <ul className="article-list">
                        {article.map((item)=>
                            <li key={item.id}>
                                <Link href={"/article?id="+item.id} key={item.id}>
                                    <a>{item.url?<ArticleWithPic item={item}/>:<ArticleNoPic item={item}/>}</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                }
            </Spin>
            
        </div>
    )
}