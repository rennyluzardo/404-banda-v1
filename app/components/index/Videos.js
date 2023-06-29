import React from 'react'
import { Row, Col, Space, Avatar, List, Form, Input, Button, Card, } from 'antd'

const { Meta } = Card

const mockVideos = [
  {
    title: 'Unx100to',
    script: '...',
    url: 'https://www.youtube.com/embed/okdlTOmKybs',
    description: 'Cover de Unx100to al estilo de 404',
  },
  {
    title: 'Mix Vallenato Romantico',
    script: '...',
    url: 'https://www.youtube.com/embed/PkNMR3J0Gmg',
    description: 'Muy felices de compartir con ustedes esta sesión cover en vivo al estilo 404.',
  },
]

function Videos() {
  return (
    <Row gutter={24} style={{ margin: 0 }}>
      {!!mockVideos && mockVideos.map((video, i) => (
        <Col xs={24} sm={24} md={24} lg={8} style={{ marginTop: 20 }} key={i}>
          <Card
            title={video.title}
            bordered={false}
            // style={{ backgroundColor: '#313131' }}
          >
            <iframe
              className='video-frame'
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>

            <Meta
              // title="Card title"
              description={video.description}
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Videos