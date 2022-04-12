import react,{useState,useEffect} from "react";
import Header from "../component/Header";
import {Row,Col} from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';
import { marked } from 'marked'
import hljs from 'highlight.js'

import Tocify from '../component/tocify.tsx'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleDeticle(){
    const [markdown,setMarkdown] = useState('')

    useEffect(()=>{
        fetch('http://127.0.0.1:7001/admin/getArticleById/42').then(async response=>{
            if(response.ok){
                let data = await response.json()
                console.log(data)
                setMarkdown(data.article_content)
            }
        })
    },[])
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
        <div className="deticles">
            <div className="deticles-header">
                <div className="title"><strong>Check It Again: Progressive Visual Question Answeringvia Visual Entailment</strong></div>
                <div className="inf"><IconFont type="icon-24gl-tags"/>论文阅读<span className="kongge"></span><IconFont type="icon-shijian"/>2022-3-16</div>
            </div>
            <div>
                <Row>
                    <Col span={5}></Col>
                    <Col span={14}><div className="show-html" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div></Col>
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