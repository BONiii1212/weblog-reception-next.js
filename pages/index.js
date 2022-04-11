import Header from "../component/Header"
import { Card,Avatar,Divider } from "antd"

export default function Home() {
  return (
    <div className="home-background">
      <Header/>
      <div className="home-div">
        <div className="avatar-div"><Avatar size={150} src="https://avatars.githubusercontent.com/u/62984113?s=400&u=83b7b6434419620c6f85520a96092fb5a78d1058&v=4"/></div>
        <Divider/>
        <Card className="inf-card">欢迎来到BONii的个人博客</Card>
      </div>
    </div>
  )
}
