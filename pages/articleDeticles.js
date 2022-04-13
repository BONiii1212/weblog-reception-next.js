import react,{useState,useEffect} from "react";
import Header from "../component/Header";
import {Row,Col} from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';
import { marked } from 'marked'
import hljs from 'highlight.js'
import servicePath from "../config/appUrl";
import Tocify from '../component/tocify.tsx'
import { http } from "../utls/http";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

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
    const tocify = new Tocify()
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    return (
    <div>
        <Header/>
        <title>文章详情</title>
        <div className="deticles">
            <div className="deticles-header">
                <div className="title"><strong>{props.title}</strong></div>
                <div className="inf"><IconFont type="icon-24gl-tags"/>{props.typeName}<span className="kongge"></span><IconFont type="icon-shijian"/>{props.addTime}</div>
            </div>
            <div>
                <Row>
                    <Col span={5}></Col>
                    <Col span={14}><div className="show-html" dangerouslySetInnerHTML={{__html:marked(article.article_content)}}></div></Col>
                    <Col span={5}>
                        <div className="show-nav-title">
                            <div className='nav-title'><strong>文章目录</strong></div>
                            {tocify && tocify.render()}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    )
}

ArticleDeticle.getInitialProps = async(context) => {
    let id = context.query.id
    const article = await http(servicePath.getArticleById+id)
    return article
}