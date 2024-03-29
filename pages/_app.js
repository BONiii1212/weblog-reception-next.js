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
import '../styles/component/DayAndNightExchange.css'
import '../styles/page/body.css'
import {useLoading} from '../utls/loading'
import LoadingPage from '../component/LoadingPage'
import {Head} from 'next/document'
import {MathJaxContext} from 'better-react-mathjax'
import { SwitchProvider } from '../context/day-night-context'

function MyApp({ Component, pageProps }) {
  let pageLoading = useLoading()
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
      ],
      displayMath: [
        ["$$", "$$"],
      ]
    }
  };
  return (
    <MathJaxContext config={config}>
      <SwitchProvider>
        {pageLoading?<LoadingPage/>:<Component {...pageProps} />}
      </SwitchProvider>
    </MathJaxContext>
    )
}

export default MyApp
