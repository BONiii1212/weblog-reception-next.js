import React,{useState} from 'react'
import {Row,Col} from 'antd'
import Link from 'next/link'
import { createFromIconfontCN } from '@ant-design/icons';
import dynamic from 'next/dynamic'
//页面使用ssr渲染的时候，react的生命周期中render()阶段负责创建虚拟dom，进行diff算法，更新dom树，
//render及之前的阶段，并没有将组件渲染为实际的dom节点，所以不能获取window对象，如果是下面这样是可以拿到window对象的
const DayAndNightExchange = dynamic(()=>import('./DayAndNightExchange'),{ssr: false})

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

/* 
页面导航栏
*/
const Header = ({id}) =>{
    const [selectPage,setSelectPage] = useState(id)
    return(
        <div className='header'>
        <Row type="flex" justify='center'>
            <Col span={9}>
                <span className='header-logo'>BONiii</span>
                <span className='header-text'>个人博客</span>
            </Col>
            <Col span={14}>
                <ul className='header-ul'>
                    {selectPage==0?
                        <li><span className='active'><IconFont type="icon-24" />文章</span></li>:
                        <li className='header-li' key={0}><Link href="/posts"><a><IconFont type="icon-24" />文章</a></Link></li>
                    }
                    {selectPage==1?
                        <li><span className='active'><IconFont type="icon-liuyan" />杂谈</span></li>:
                        <li className='header-li' key={1}><Link href="/talk"><a><IconFont type="icon-liuyan" />杂谈</a></Link></li>
                    }
                    {selectPage==2?
                        <li><span className='active'><IconFont type="icon-guanyu1" />关于</span></li>:
                        <li className='header-li' key={2}><Link href="/aboutUs"><a><IconFont type="icon-guanyu1" />关于</a></Link></li>
                    }
                </ul>
            </Col>
            <Col span={1}>
                <div className='day-night-switch'>
                    <DayAndNightExchange/>
                </div>
            </Col>
        </Row>
    </div>
    )
}
export default Header
