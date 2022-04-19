import react,{useState,useEffect} from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import Link from "next/link";
import ArticleNoPic from "./ArticleNoPic";
import ArticleWithPic from "./ArticleWithPic";
import Classification from "./Classification";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleList({articleList,typeInfo}){
    const [article,setArticle] = useState(articleList)
    useEffect(()=>{
        setArticle(articleList)   
    })
    return (
        <div>
            <Classification typeInfo={typeInfo}/>
            {article.length===0?<span className="sorry-nodata">抱歉，暂无数据</span>:
                <ul>
                    {article.map((item)=>
                        <li>
                            <Link href={"/articleDeticles?id="+item.id} key={item.id}>
                                {item.url?<ArticleWithPic item={item}/>:<ArticleNoPic item={item}/>}
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}