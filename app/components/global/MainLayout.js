import React from 'react'
import { Inter } from 'next/font/google'
import { Layout, Space, Button, Row, Col, } from 'antd'
const { Header, Footer, Content } = Layout

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404 Banda',
  description: 'Haciendo musica desde el 2023',
}

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  zIndex: 1,
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
  zIndex: 0,
  marginBottom: 30,
}
const footerStyle = {
  textAlign: 'center',
  color: 'darkgrey',
  // backgroundColor: 'beige',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

export default function MainLayout({ children }) {
  return (
    <Layout className='main-layout'>
      <Header style={headerStyle} className='header'>
        <Row
          className='header__container'
        >
          <Col span={8}>
            <Space align="start" className='logo'>
              <a href='#'>
                <img src='static/images/global/logo.png' href='#'></img>
              </a>
            </Space>
          </Col>
          <Col span={16}>
            <Space
              direction='horizontal'
              align='end'
              style={{
                width: '100%',
                justifyContent: 'flex-end',
                paddingRight: '1em'
              }}
            >
              <a href='#videos' className='menu-item'>Vídeos</a>
              <a href='#musica' className='menu-item'>Canciones</a>
              <a href='#contacto' className='menu-item'>Contacto</a>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content style={contentStyle}>
        <div
          className='content-container'>
          {children}
        </div>
      </Content>
      <Footer
        style={footerStyle}
        className='footer'
      >
        <div style={{
          maxWidth: '1440px',
          width: '100%',
        }}>
          Hecho con <span className="heart"></span> por Ing. Renny Luzardo. © 2023 404banda.com.
        </div>
      </Footer>
    </Layout >
  )
}