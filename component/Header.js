import React from 'react'
import {Row,Col,Menu} from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_puqi5nmv788.js',
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
                <Menu mode='horizontal'>
                    <Menu.Item key="0" icon={<IconFont type="icon-shouye" style={{fontSize:"1.5rem"}}/>}>
                            首页
                    </Menu.Item>
                    <Menu.Item key="1" icon={<IconFont type="icon-24" style={{fontSize:"1.5rem" }}/>}>
                       文章
                    </Menu.Item>
                    <Menu.Item key="2" icon={<IconFont type="icon-yinle" style={{fontSize:"1.5rem"}}/>}> 
                       音乐
                    </Menu.Item>
                    <Menu.Item key="3" icon={<IconFont type="icon-liuyan" style={{fontSize:"1.5rem"}}/>}> 
                        留言
                    </Menu.Item>
                    <Menu.Item key="4" icon={<IconFont type="icon-guanyu1" style={{fontSize:"1.5rem"}}/>}> 
                        关于
                    </Menu.Item>
                    
                </Menu>
            </Col>
        </Row>
    </div>
    )
}
export default Header
