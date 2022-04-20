import { UpOutlined } from '@ant-design/icons';

export default function BackToTop(){
    return(
        <div className='back-to-top'>
            <a href="javascript: void(0)"> 
                <p style={{textAlign:"center"}}>Back to Top</p>
                <p style={{textAlign:"center",marginTop:"-12px"}}><UpOutlined style={{fontSize:"20px"}}/></p>
            </a>
        </div>
        
    )
}