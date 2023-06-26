import Image from 'next/image'
import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Row, Col, Space, Avatar, List, Form, Input, Button, Checkbox, Card, } from 'antd'
import SectionItem from '@/app/components/global/SectionItem'
import DrawerRight from '@/app/components/global/DrawerRight'
import { useState } from 'react'

const mockMusic = [
  {
    title: 'Title 1',
    script: '...'
  },
  {
    title: 'Title 2',
    script: '...'
  },
  {
    title: 'Title 3',
    script: '...'
  },
  {
    title: 'Title 4',
    script: '...'
  },
]

const mockVideos = [
  {
    title: 'Unx100to',
    script: '...',
    url: 'https://www.youtube.com/embed/okdlTOmKybs',

  },
  {
    title: 'Mix Vallenato Romantico',
    script: '...',
    url: 'https://www.youtube.com/embed/PkNMR3J0Gmg',
  },
]

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Index() {
  const [displayDrawerRight, setDisplayDrawerRight] = useState(false)
  const [songToReadLetter, setSongToReadLetter] = useState({})

  const onShowViewLetter = (song, index) => {
    setDisplayDrawerRight(true)
    setSongToReadLetter(song)
  }

  const onCloseDrawerRight = () => {
    setDisplayDrawerRight(false)
  }

  return (
    <MainLayout>
      {/* Slider */}
      <Carousel autoplay id='main'>
        <div>
          <h3 style={contentStyle}>Imagen 1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Imagen 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Imagen 3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Imagen 4</h3>
        </div>
      </Carousel>

      {/* Videos */}
      <SectionItem
        id='videos'
        name='videos'
        title='Vídeos'
        subtitle='Estos son nuestros mas recientes vídeos.'
      >
        <Row gutter={24} style={{ margin: 0 }}>
          {!!mockVideos && mockVideos.map((video, i) => (
            <Col xs={24} sm={24} md={24} lg={8} style={{ marginTop: 20 }}>
              <Card title={video.title} bordered={false}>
                <iframe
                  className='video-frame'
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </Card>
            </Col>
          ))}
        </Row>
      </SectionItem>

      {/* Music */}
      <SectionItem
        id='musica'
        name='musica'
        title='Canciones'
        subtitle='Estas son nuestras mas recientes canciones.'
      >
        <Space
          direction='vertical'
          className='playlist'
        >
          <List
            itemLayout="horizontal"
            dataSource={mockMusic}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <a
                    key="list-loadmore-edit"
                    onClick={() => onShowViewLetter(item, index)}
                  >Ver Letra</a>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Space>
      </SectionItem>

      {/* Contact */}
      <SectionItem
        id='contacto'
        name='contacto'
        title='Contacto'
        subtitle='Comunícate con nosotros a través de éste formulario de contacto.'
      >
        <Space
          direction='vertical'
          className='playlist'
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Número de telefono"
              name="tel"
              rules={[{ required: true, message: 'Please input your telephone number!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </SectionItem>

      {/* Drawer */}
      <DrawerRight
        open={displayDrawerRight}
        onClose={onCloseDrawerRight}
        song={songToReadLetter}
      />
    </MainLayout>
  )
}
