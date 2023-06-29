import React from 'react'
import { Row, Col, Space, Avatar, List, Form, Input, Button, Card, } from 'antd'

const { TextArea } = Input

export default function Contact() {
  return (
    <Space
      direction='vertical'
      align='center'
      className='contact-form'
    >
      <Form
        name="contact-form"
        // labelCol={{ span: 4 }}
        // wrapperCol={{ span: 20 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          width: '100%',
          // maxWidth: '35vw'
        }}
        layout='vertical'
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input style={{ backgroundColor: 'beige', borderWidth: '3px' }} />
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="tel"
          rules={[{ required: true, message: 'Please input your telephone number!' }]}
        >
          <Input style={{ backgroundColor: 'beige', borderWidth: '3px' }} />
        </Form.Item>

        <Form.Item label="Mensaje">
          <TextArea rows={4} style={{ backgroundColor: 'beige', borderWidth: '3px' }} />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="primary-btn">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}
