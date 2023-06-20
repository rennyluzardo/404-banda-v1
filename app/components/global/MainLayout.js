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
  backgroundColor: '#7dbcea',
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'beige',
}
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


export default function MainLayout({ children }) {
  return (
    <Layout>
      <Header style={headerStyle} className='header'>
        <Row>
          <Col span={12}>
            <Space align="start" className='logo'>
              <img src='static/images/global/logo.png'></img>
            </Space>
          </Col>
          <Col span={12}>
            <Space
              direction='horizontal'
              align='end'
              style={{ width: '100%', justifyContent: 'flex-end' }}
              
            >
              <a href='#videos'>Vídeos</a>
              <a href='#musica'>Música</a>
              <a href='#letras'>Letras</a>
              <a href='#'>Contacto</a>
            </Space>
          </Col>
        </Row>

      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>
      <Footer style={footerStyle}>Hecho con <span className="heart"></span> por Ing. Renny Luzardo. Todos los derechos reservados 2023.</Footer>
    </Layout >
  )
}