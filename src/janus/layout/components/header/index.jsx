import { Link } from 'react-router-dom'
import { Dropdown, Row, Col } from 'antd'
import styles from './index.module.scss'
import logo from '@/assets/image/logo.png'
import { MenuOutlined } from '@ant-design/icons'

const menuData = [
  { key: 1, name: "Home", link: <Link to="/home">Home</Link> },
  { key: 2, name: "JanusQ", link: <a href="http://janusq.zju.edu.cn" target="_blank" rel="noreferrer">JanusQ</a> },
  { key: 4, name: "Resource", link: <Link to="/resource">Resource</Link> },
  { key: 5, name: "Github", link: <a href="https://github.com/JanusQ/Janus4" target="_blank" rel="noreferrer">Github</a> },
  { key: 6, name: "Team", link: <a href="https://janusq.github.io/team/home" target="_blank" rel="noreferrer">Team</a> },
]

export default function JanusHeader() {
  const headerMenu = menuData.map(({ link }, index) => (
    <div key={index} className={"menu_item"}>
      <span className={"header_menu_item_black"}>{link}</span>
    </div>
  ))
  const dropdownItems = menuData.map(({ key, link }) => ({
    key,
    label: link,
  }))
  return (
    <div className={styles.root}>
      <Row
        style={{ height: 60 }}
        justify="center"
        className="headerContent"
        align="middle"
      >
        <Col span={18} offset={1}>
          <div className="header_container">
            <div className="logo_content">
              <li className="logo">
                <Link to="/home">
                  <img className="logo" src={logo} alt="" />
                </Link>
              </li>
              <Link to="/home">
                <li className="myname">Janus Quantum</li>
              </Link>
            </div>
            <div className="menuContent">{headerMenu}</div>
            <div className="min_menu">
              <Dropdown menu={{ items: dropdownItems }}>
                <MenuOutlined style={{ 
                  fontSize: '32px', 
                  color: 'black', 
                  lineHeight: '74px', 
                  }} 
                />
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
