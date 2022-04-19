import react from "react"
import { createFromIconfontCN } from '@ant-design/icons';
import { Row,Col } from "antd";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleWithPic({item}){
    return(
        <div className="articlelist-item">
            <Row style={{borderBottom:"1px solid #F2F2F5"}}>
                <Col span={18}>
                    <div>
                        <div className="title">{item.title}</div>
                        <div style={{color:"#4e5969"}}><IconFont type="icon-24gl-tags"/><span className="tag">{item.typeName}</span><IconFont type="icon-shijian"/><span>{item.addTime}</span></div>
                        <div className="introduce">{item.introduce}</div>
                    </div>
                </Col>
                <Col span={6} style={{position:"relative"}}>
                    <div className="image">
                        <img width={"100%"} height={"100%"} src={item.url}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}