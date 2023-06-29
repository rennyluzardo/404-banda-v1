import React from 'react'
import { Carousel, Row, Col, Space, Avatar, List, } from 'antd'

function SectionItem(props) {
  return (
    <Row className={`section-${props.name} section-item`} id={props.id}>
      <Col span={24}>
        <div className='section-header'>
          <h2 className='title'>
            {props.title}
          </h2>
          <p className='description'>
            {props.subtitle}
          </p>
        </div>
      </Col>
      <Col span={24} style={{ padding: '0px 4.6vw' }}>
        {props.children}
      </Col>
    </Row>
  )
}

export default SectionItem