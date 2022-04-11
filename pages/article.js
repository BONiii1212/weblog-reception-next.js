import react from "react";
import Header from "../component/Header";
import { Row,Col } from "antd";
import Author from "../component/Author";

export default function Article(){

    return(
        <div className="article">
            <Header/>
            <div className="contain">
                <Row>
                    <Col span={24} className="contain-title">
                        文章｜Article
                    </Col>
                    <Col span={18}>
                        <div className="article-left">左侧</div>
                        
                    </Col>
                    <Col span={6}>
                        <div className="article-right">
                            <Author/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}