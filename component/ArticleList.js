import react,{useState} from "react";
import { Col, List, Row,} from "antd";
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

export default function ArticleList(){
    const [article,setArticle] = useState([
        {title:"关于我转生成为雷电将军然后天下无敌",type:'杂七杂八',addTime:'2022-04-08',introduce:"淳酱最喜欢的轻小说",url:"https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/e7cd7b899e510fb3130ab163baefbc9dd0430c13.jpeg"},
        {title:"关于我转生成为雷电将军然后天下无敌",type:'杂七杂八',addTime:'2022-04-08',introduce:"淳酱最喜欢的轻小说",url:"https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/e7cd7b899e510fb3130ab163baefbc9dd0430c13.jpeg"},
        {title:"关于我转生成为雷电将军然后天下无敌",type:'杂七杂八',addTime:'2022-04-08',introduce:"淳酱最喜欢的轻小说",url:"https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/e7cd7b899e510fb3130ab163baefbc9dd0430c13.jpeg"},
        {title:"关于我转生成为雷电将军然后天下无敌",type:'杂七杂八',addTime:'2022-04-08',introduce:"淳酱最喜欢的轻小说",url:"https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/e7cd7b899e510fb3130ab163baefbc9dd0430c13.jpeg"},
        {title:"关于我转生成为雷电将军然后天下无敌",type:'杂七杂八',addTime:'2022-04-08',introduce:"淳酱最喜欢的轻小说",url:"https://blog-1305899292.cos.ap-shanghai.myqcloud.com/BONiii/e7cd7b899e510fb3130ab163baefbc9dd0430c13.jpeg"},
    ])

    return (
        <div>
        {article===""?<span>暂无数据</span>:
            article.map((item)=>
                <div className="articlelist-item">
                    <Row>
                        <Col span={6}>
                            <div className="articlelist-img">
                                <img width={"100%"} height={"100%"} src={item.url}/>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <div className="articlelist-title"><strong>{item.title}</strong></div>
                                <div className="articlelist-inf"><IconFont type="icon-24gl-tags"/>{item.type}<span className="kongge"></span><IconFont type="icon-shijian"/>{item.addTime}</div>
                                <div className="articlelist-introduce">简介：{item.introduce}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}