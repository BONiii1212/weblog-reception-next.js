import react,{useState,useEffect} from "react";
import {Row,Col} from 'antd'
import { marked } from 'marked'
import hljs from 'highlight.js'
import servicePath from "../config/appUrl";
import Tocify from '../component/tocify.tsx'
import { http } from "../utls/http";
import Link from "next/link";

export default function ArticleDeticle(props){
    const [article,setArticle] = useState(props)
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer:renderer,
        gfm:true,
        pedantic:false,
        sanitize:false,
        breaks:false,
        smartLists:true,
        smartypants:false,
        highlight:function(code){
            return hljs.highlightAuto(code).value
        }
    })
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    const tocify = new Tocify()
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    return (
    <div>
        <title>{article.title}</title>
        <Row>
            <Col span={6}></Col>
            <Col span={12}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className="meta-line">
                        <div className="meta">
                            <time>
                                {`${month[Number(article.addTime.split('-')[1])]} ${Number(article.addTime.split('-')[2])} ${Number(article.addTime.split('-')[0])}`}
                            </time>
                            {` • `}
                            <span>{article.typeName}</span> 
                        </div>
                        <Link href="/posts"><a>back</a></Link>
                    </div>
                    <h1 style={{color:"#111827", margin:"0px 0px 32px", fontSize:"36px"}}>{article.title}</h1>
                    <div className="show-html" dangerouslySetInnerHTML={{__html:marked(article.article_content)}}></div>
                </div>
            </Col>
            <Col span={6}>
                <div className="show-nav-title">
                    <div className='nav-title'><strong>文章目录</strong></div>
                    {tocify && tocify.render()}
                </div>
            </Col>
        </Row>
    </div>
    )
}

ArticleDeticle.getInitialProps = async(context) => {
    let id = context.query.id
    const article = await http(servicePath.getArticleById+id)
    return article
}