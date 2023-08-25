import React, { useEffect, useState, useRef, } from 'react'
import { Inter } from 'next/font/google'
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
import {
  Layout, Space, Button, Row, Col, Divider,
} from 'antd'
import StickyNavBar from './StickyNavBar'
import Image from 'next/image'
import { getCurrentDimension } from '@/libs/utils'

const { Header, Footer, Content } = Layout

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404 Banda',
  description: 'Haciendo musica desde el 2023',
}

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  // height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  // backgroundColor: 'beige',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
  marginBottom: 30,
  marginTop: '21vh',
  boxShadow: '1px 1px 20px 3px #00000085',
}
const footerStyle = {
  textAlign: 'center',
  // backgroundColor: 'beige',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

function MainLayout({ children }) {
  const defaultSliderDimensions = {
    width: 320,
    height: 120
  }

  const [rotate, setRotate] = useState(false)
  const [showTopNavBar, setShowTopNavBar] = useState(false);
  const [screenSize, setScreenSize] = useState(defaultSliderDimensions);

  const refDoor = useRef(null)
  const refLogo = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setRotate(!rotate)
    }, 2000)
  }, [rotate])

  useEffect(() => {
    setScreenSize(getCurrentDimension())
  }, [])

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }

    window.addEventListener('resize', updateDimension)

    if (screenSize.width > 768) {
      setShowTopNavBar(true)
    } else {
      setShowTopNavBar(false)
    }

    return (() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [screenSize])

  useEffect(() => {
    getCurrentDimension()
    const door = refDoor.current
    const logo = refLogo.current

    // var thickness = document.querySelector(".thickness")
    door.addEventListener('click', toggleDoor)

    function toggleDoor() {
      door.classList.toggle('door-open')
      // thickness.classList.toggle("thickness-open")

      setTimeout(() => {
        logo.classList.toggle('hide')
      }, 250)
    }
  }, [])

  return (
    <Layout className='main-layout'>
      <Header className='header top-logo'>
        <Row
          className='header__container'
        >
          <Col span={24}>
            <Space align="center" justifycontent="center" className='space-door'>
              <div className="back-door">
                <p className='about-us'>
                  Somos una agrupación de música con acordeón que nace en la ciudad de Quito, Ecuador.
                  Buena música que va desde el despecho a las caderas. ¡Ay ay ayyyyy!
                </p>
                <div className="frame-door">
                </div>
                <div className="door" ref={refDoor}>
                  <a href='#' ref={refLogo}>
                    <Image
                      className={rotate ? `rotate` : ''}
                      src='/static/images/global/logo.png'
                      alt=''
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                {/* <div class="thickness"></div> */}
              </div>
            </Space>
          </Col>
        </Row>
      </Header>
      {
        showTopNavBar &&
        <Header className='header top-menu'>
          <Row
            className='header__container'
          >
            <Col span={24}>
              <Space
                direction='horizontal'
                align='end'
                style={{
                  width: '100%',
                  justifyContent: 'flex-end',
                  paddingRight: '1em'
                }}
              >
                <a href='#videos' className='menu-item'><VideoCameraOutlined className='menu-item__icon' /> Vídeos</a>
                {/* <a href='#videos' className='menu-item'><VideoCameraOutlined size={100}/></a> */}
                <Divider type="vertical" style={{ color: 'white' }} />
                <a href='#musica' className='menu-item'><PlayCircleOutlined className='menu-item__icon' /> Canciones</a>
                <Divider type="vertical" style={{ color: 'white' }} />
                <a href='#contacto' className='menu-item'><ContactsOutlined className='menu-item__icon' /> Contacto</a>
              </Space>
            </Col>
          </Row>
        </Header>
      }

      <Content className='content'>
        <div
          className='content-container'>
          {children}
        </div>
      </Content>

      {
        !showTopNavBar &&
        <StickyNavBar />
      }

      <Footer
        style={footerStyle}
        className='footer'
      >
        <Row justify={'center'}>
          <Col span={24} className='social'>
            <ul>
              <li><InstagramOutlined /></li>
              <li><FacebookOutlined /></li>
              <li><YoutubeOutlined /></li>
              <li><MailOutlined /></li>
              <li><PhoneOutlined /></li>
            </ul>
          </Col>
          <Col span={24}>
            <p
              className='footer-text'
            >Hecho con <HeartOutlined /> por Renny Luzardo. © 2023 404banda.com.</p>
          </Col>
        </Row>
      </Footer>
    </Layout >
  )
}

export default MainLayout