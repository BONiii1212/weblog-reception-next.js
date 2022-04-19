import react,{ useEffect, useState } from "react";
import Header from "../component/Header";
import { Row,Col } from "antd";
import Author from "../component/Author";
import Classification from "../component/Classification";
import ArticleList from "../component/ArticleList";
import Footer from "../component/Footer";
import { http } from "../utls/http";
import servicePath from "../config/appUrl";

export default function Article(props){
    const [typeInfo,setTypeInfo] = useState(props.typeInfo.data)
    const [articleList,setArticle] = useState(props.articleList.data)
    useEffect(()=>{
     setArticle(props.articleList.data)   
    })
    return(
        <div className="article">
            <title>BONiii的个人博客</title>
            <Header/>
            <div className="contain">
                <Row>
                    <Col span={18}>
                        <div className="article-left">
                            <ArticleList articleList={articleList} typeInfo={typeInfo}/>                         
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="article-right">
                            <Author/>
                        </div>
                    </Col>
                </Row>
                <Footer/>
            </div>
        </div>
    )
}
Article.getInitialProps = async (context) => {
    let id = context.query.id
    const typeInfo = await http(servicePath.getTypeInfo)
    const articleList = id?await http(servicePath.getListByTypeId+id):await http(servicePath.articleList)
    return {articleList:articleList,typeInfo:typeInfo}
}