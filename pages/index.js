import Image from 'next/image'
import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Row, Col, Space, Avatar, List, } from 'antd'
import SectionItem from '@/app/components/global/SectionItem'
import DrawerRight from '@/app/components/global/DrawerRight'
import { useState } from 'react'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
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
        subtitle='Estos son nuestros mas recientes videos..'
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
        subtitle='Estos son nuestras mas recientes canciones..'
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

      <DrawerRight
        open={displayDrawerRight}
        onClose={onCloseDrawerRight}
        song={songToReadLetter}
      >

      </DrawerRight>
    </MainLayout>
  )
}
