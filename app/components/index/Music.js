import React, { useState } from 'react'
import { Row, Col, Space, Avatar, List, Form, Input, Button, Card, } from 'antd'

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


function Music(props) {
  const [songToReadLetter, setSongToReadLetter] = useState({})

  const onShowViewLetter = song => {
    props.setDisplayDrawerRight(true)
    // setSongToReadLetter(song)
    props.setSongToReadLetter(song)
  }

  return (
    <Space
      direction='vertical'
      className='playlist'
      align='center'
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
              title={<a href="#music">{item.title}</a>}
              description="Description.."
            />
          </List.Item>
        )}
      />
    </Space>
  )
}

export default Music