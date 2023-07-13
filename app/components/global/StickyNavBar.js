import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  HeartOutlined,
  VideoCameraOutlined,
  PlayCircleOutlined,
  ContactsOutlined,
} from '@ant-design/icons'
import { Row, Col, Divider, Space } from 'antd'

function StickyNavBar() {
  return <div className="sticky-nav-bar top-menu">
    <Row className='sticky-nav-bar__container'>
      <Col span={24}>
        <Space
          direction='horizontal'
          align='center'
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <a href='#videos' className='menu-item'><VideoCameraOutlined className='menu-item__icon' /></a>
          {/* <a href='#videos' className='menu-item'><VideoCameraOutlined size={100}/></a> */}
          <a href='#musica' className='menu-item'><PlayCircleOutlined className='menu-item__icon' /></a>
          <a href='#contacto' className='menu-item'><ContactsOutlined className='menu-item__icon' /></a>
        </Space>
      </Col>
    </Row>
  </div>
}

export default StickyNavBar;