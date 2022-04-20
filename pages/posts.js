import react,{ useEffect, useState } from "react";
import Header from "../component/Header";
import { Row,Col } from "antd";
import Author from "../component/Author";
import ArticleList from "../component/ArticleList";
import Footer from "../component/Footer";
import { http } from "../utls/http";
import servicePath from "../config/appUrl";
import { useRouter } from 'next/router'
import { useAsync } from "../utls/use-async";

export default function Article(props){
    const [typeInfo,setTypeInfo] = useState(props.typeInfo.data)
    const [articleList,setArticle] = useState(props.articleList.data)
    const [mounted,setMounted] = useState(false)
    const router = useRouter()
    const {run,isLoading} = useAsync()
    //当发生浅路由变化的时候，在客户端进行渲染（仅首页使用服务器渲染,并且首次渲染时不使用该钩子）
    useEffect(()=>{
        !mounted && setMounted(true)
    },[])
    useEffect(()=>{
        if(mounted){
            let id = router.query.id
            run(http(id?servicePath.getListByTypeId+id:servicePath.articleList)).then(res=>{
                setArticle(res.data)
            })
        }
        
    },[router])
    return(
        <div className="article">
            <title>BONiii的个人博客</title>
            <Header id={0}/>
            <div className="contain">
                <Row>
                    <Col span={18}>
                        <div className="article-left">
                            <ArticleList articleList={articleList} isLoading={isLoading} typeInfo={typeInfo}/>                         
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