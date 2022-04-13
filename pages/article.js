import react,{ useEffect, useState } from "react";
import Header from "../component/Header";
import { Row,Col } from "antd";
import Author from "../component/Author";
import Classification from "../component/Classification";
import ArticleList from "../component/ArticleList";
import Footer from "../component/Footer";
import { http } from "../utls/http";
import servicePath from "../config/appUrl";
import { useRouter } from "next/router";
import { useAsync } from "../utls/use-async";

export default function Article(props){
    const [typeInfo,setTypeInfo] = useState(props.typeInfo.data)
    const [articleList,setArticle] = useState(props.articleList.data)
    const {run,...result} = useAsync()
    const router = useRouter()
    useEffect(()=>{
        run(http(servicePath.getListByTypeId+router.query.id)).then(res=>{
            setArticle(res.data)
        })
    },[router.query.id])

    return(
        <div className="article">
            <title>BONiii的个人博客</title>
            <Header/>
            <div className="contain">
                <Row>
                    <Col span={24} className="contain-title">
                        <span>文章｜Article</span>
                    </Col>
                    <Col span={18}>
                        <div className="article-left">
                            <ArticleList articleList={articleList}/>                         
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="article-right">
                            <Author/>
                            <Classification typeInfo={typeInfo}/>
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
    return {typeInfo:typeInfo,articleList:articleList}
}