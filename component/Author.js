import react from "react";
import { Avatar,Divider } from "antd";
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3318613_ywxep1duiq.js',
});

export default function Author(){
    return (
        <div className='author-contain'>
            <div className='avatar'><Avatar size={100} src="https://avatars.githubusercontent.com/u/62984113?s=400&u=83b7b6434419620c6f85520a96092fb5a78d1058&v=4"/></div>
            <div className="name">BONiii</div>
            <div className="inf">🧑🏻‍💻 我也要成为加把劲骑士</div>
            <Divider className="author-divider">社交账号</Divider>
            <div className='author-icon'> 
                <a href="https://github.com/BONiii1212" target="_blank"><Avatar size={30} style={{color:"black", margin:'0 16px', backgroundColor:"rgb(255,255,255,0)" }} icon={<IconFont type="icon-github-fill" style={{ fontSize:"2rem" }}/>}/></a>
                <div className="qq-father"><div className="qq"><Avatar size={30} style={{color:"black", margin:'0 16px', backgroundColor:"rgb(255,255,255,0)" }} icon={<IconFont type="icon-QQ" style={{ fontSize:"2rem" }}/>}/></div></div>
                <div className="weixin-father"><div className="weixin"><Avatar size={30} style={{color:"black", margin:'0 16px', backgroundColor:"rgb(255,255,255,0)" }} icon={<IconFont type="icon-weixin" style={{ fontSize:"2rem" }}/>}/></div></div>
            </div>
        </div>
    )
}