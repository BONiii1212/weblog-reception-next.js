import React from 'react'
import {Row,Col,Menu} from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});

/* 
页面导航栏
*/
const Header = () =>{
    return(
        <div className='header'>
        <Row type="flex" justify='center'>
            <Col span={8}>
                <span className='header-logo'>BONiii</span>
                <span className='header-text'>个人博客</span>
            </Col>
            <Col span={16}>
                <ul className='header-ul'>
                    <li><IconFont type="icon-shouye" />首页</li>
                    <li><IconFont type="icon-24" />文章</li>
                    <li><IconFont type="icon-yinle" />音乐</li>
                    <li><IconFont type="icon-liuyan" />留言</li>
                    <li><IconFont type="icon-guanyu1" />关于</li>
                </ul>
            </Col>
        </Row>
    </div>
    )
}
export default Header
