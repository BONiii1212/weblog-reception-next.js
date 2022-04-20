import '../styles/globals.css'
import 'antd/dist/antd.css'
import '../styles/component/Header.css'
import '../styles/page/index.css'
import '../styles/component/ArticleList.css'
import '../styles/page/posts.css'
import '../styles/component/Author.css'
import '../styles/component/Classification.css'
import '../styles/component/ArticleList.css'
import '../styles/component/Footer.css'
import '../styles/page/article.css'
import 'highlight.js/styles/monokai-sublime.css'
import '../styles/component/LoadingPage.css'
import '../styles/component/BackToTop.css'
import '../styles/page/talk.css'
import '../styles/page/aboutUs.css'
import {useLoading} from '../utls/loading'
import LoadingPage from '../component/LoadingPage'

function MyApp({ Component, pageProps }) {
  let pageLoading = useLoading()

  return (
      pageLoading?<LoadingPage/>:<Component {...pageProps} />
    )
}

export default MyApp
