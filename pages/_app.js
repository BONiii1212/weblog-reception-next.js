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
import react,{useState, useEffect} from 'react'
import router from "next/router";
import LoadingPage from '../component/LoadingPage'

function MyApp({ Component, pageProps }) {
  const [pageLoading,setPageLoading] = useState(false)
  useEffect(()=>{
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  },[router])

  return (
      pageLoading?<LoadingPage/>:<Component {...pageProps} />
    )
}

export default MyApp
