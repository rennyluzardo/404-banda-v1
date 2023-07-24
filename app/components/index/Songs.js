import React, { useState } from 'react'
import { Row, Col, Space, Avatar, List, Form, Input, Button, Card, } from 'antd'

const mockMusic = [
  {
    title: 'Mix Cumbia Américo',
    script: '...'
  },
  {
    title: 'Mix Selena',
    script: '...'
  },
  {
    title: 'Mix Vallenato Romántico',
    script: '...'
  },
  {
    title: 'Quiero Que Seas Mi Estrella',
    script: '...'
  },
  {
    title: 'Osito Dormilón',
    script: '...'
  },
  {
    title: 'Cuatro Rosas',
    script: '...'
  },
  {
    title: 'Hoja En Blanco',
    script: '...'
  },
  {
    title: 'Como Te Olvido',
    script: '...'
  },
  {
    title: 'No Podrán Separarnos',
    script: '...'
  },
  {
    title: 'Niña Bonita',
    script: '...'
  },
  {
    title: 'Olvidala',
    script: '...'
  },
  {
    title: 'Como Duele El Frío',
    script: '...'
  },
]


function Songs(props) {
  const [songToReadLetter, setSongToReadLetter] = useState({})

  const onShowViewLetter = song => {
    props.setDisplayDrawerRight(true)
    // setSongToReadLetter(song)
    props.setSongToReadLetter(song)
  }

  return (
    <Space
      direction='vertical'
      className='songs'
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
                className='songs__btn-show-letter'
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

export default Songs