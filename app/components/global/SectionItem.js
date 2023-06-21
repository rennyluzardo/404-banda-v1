import React from 'react'
import { Carousel, Row, Col, Space, Avatar, List, } from 'antd'

function SectionItem(props) {
  return (
    <Row className={`section-${props.name}`} id={props.id}>
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
      <Col span={24}>
        {props.children}
      </Col>
    </Row>
  )
}

export default SectionItem