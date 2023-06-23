import Image from 'next/image'
import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Row, Col, Space, Avatar, List, Form, Input, Button, Checkbox, } from 'antd'
import SectionItem from '@/app/components/global/SectionItem'
import DrawerRight from '@/app/components/global/DrawerRight'
import { useState } from 'react'

const data = [
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

      <Carousel autoplay id='main'>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <SectionItem
        id='videos'
        name='videos'
        title='Vídeos'
        subtitle='Estos son nuestros mas recientes vídeos.'
      >
        <Space
          direction='vertical'
          style={{ width: '100%' }}
        >
          <div className='video-box'>
            <div style={{
              display: 'flex',
              height: '380px'
            }}>
              <iframe
                className='video-frame'
                src="https://www.youtube.com/embed/okdlTOmKybs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>

            <h3 className='item-title'>404 - Unx100to (Cover)</h3>
          </div>
          <div className='video-box'>
            <div style={{
              display: 'flex',
              height: '380px'
            }}>
              <iframe
                className='video-frame'
                src="https://www.youtube.com/embed/PkNMR3J0Gmg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <h3 className='item-title'>404 - Mix Vallenato Romantico (Cover)</h3>
          </div>
        </Space>
      </SectionItem>

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
            dataSource={data}
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

      <DrawerRight
        open={displayDrawerRight}
        onClose={onCloseDrawerRight}
        song={songToReadLetter}
      />
    </MainLayout>
  )
}
