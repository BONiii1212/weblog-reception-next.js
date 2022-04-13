const ipUrl = 'http://127.0.0.1:7001/default/'

const servicePath = {
    articleList : ipUrl+'articleList',       //首页获取博客列表
    getArticleById : ipUrl+'getArticleById/', //单篇博客详细信息
    getTypeInfo : ipUrl+'getTypeInfo',         //获取导航栏分类
    getListByTypeId : ipUrl+'getListByTypeId/' //导航栏获取对应内容
}
export default servicePath