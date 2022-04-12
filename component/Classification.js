import react from "react";

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3317189_69g0yf9l0eb.js',
});
export default function Classification(){
    return(
        <div className="classification-contain">
            <IconFont type="icon-24gl-tags"/><span style={{marginLeft:'6px'}}>分类</span>
            <div className="classification-tags">
                <span>前端学习（10）</span><br/>
                <span>论文阅读（9）</span><br/>
                <span>算法刷题（20）</span><br/>
                <span>杂七杂八（3）</span><br/>
            </div>
        </div>
    )
}