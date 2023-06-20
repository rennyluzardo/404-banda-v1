import Image from 'next/image'
import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Row, Col, Space, } from 'antd'

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Index() {
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
      <Row className='section-videos' id='videos'>
        <Col span={24}>
          {/* <Space
            direction='vertical'
            // size={'small'}
          > */}
          <h2 className='title'>
            Videos
          </h2>
          <p className='description'>
            Estos son nuestros mas recientes videos..
          </p>
          {/* </Space> */}
        </Col>
        <Col span={24}>
          <Space
            direction='vertical'
            style={{ width: '100%' }}
          >
            <div>
              <h3>404 - Unx100to (Cover)</h3>
              <iframe width="70%" height="400px" src="https://www.youtube.com/embed/okdlTOmKybs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
              <h3>404 - Mix Vallenato Romantico (Cover)</h3>
              <iframe width="70%" height="400px" src="https://www.youtube.com/embed/PkNMR3J0Gmg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </Space>
          <Space
            direction='vertical'
          >

          </Space>
        </Col>
      </Row>
    </MainLayout>
  )
}
