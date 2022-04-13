import react,{useState} from "react";
import { Col, Row} from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import Link from "next/link";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleList({articleList}){
    const [article,setArticle] = useState(articleList)
    return (
        <div>
        {article.length===0?<span></span>:<div className="article-icon-word"><IconFont type="icon-24" />文章别表</div>}
        {article.length===0?<span className="sorry-nodata">抱歉，暂无数据</span>:
            article.map((item)=>
                <Link href={"/articleDeticles?id="+item.id}>
                    <div className="articlelist-item" key={item.id}>
                        <Row>
                            <Col span={8}>
                                <div className="articlelist-img">
                                    <img width={"100%"} height={"100%"} src={item.url}/>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div className="articlelist-title"><strong>{item.title}</strong></div>
                                    <div className="articlelist-inf"><IconFont type="icon-24gl-tags"/>{item.typeName}<span className="kongge"></span><IconFont type="icon-shijian"/>{item.addTime}</div>
                                    <div className="articlelist-introduce">简介：{item.introduce}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Link>
            )}
        </div>
    )
}