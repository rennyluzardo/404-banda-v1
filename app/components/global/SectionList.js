import React, { useState, useEffect, } from 'react'
import { Row, Col, Space, Avatar, List, Form, Input, Button, Card, } from 'antd'
import SectionItem from './SectionItem'
import Videos from '../index/Videos'
import Music from '../index/Music'
import Contact from '../index/Contact'

function SectionList(props) {
  // const [songToReadLetter, setSongToReadLetter] = useState({})

  // useEffect(() => {
  //   props.setSongToReadLetter(songToReadLetter)
  // }, [songToReadLetter])


  // const onShowViewLetter = song => {
  //   setDisplayDrawerRight(true)
  //   setSongToReadLetter(song)
  // }

  return (
    <div className='section-list'>
      {/* Videos */}
      <SectionItem
        id='videos'
        name='videos'
        title='Vídeos'
        subtitle='Estos son nuestros mas recientes vídeos.'
      >
        <Videos />
      </SectionItem>

      {/* Music */}
      <SectionItem
        id='musica'
        name='musica'
        title='Canciones'
        subtitle='Estas son nuestras mas recientes canciones.'
      >
        <Music />
      </SectionItem>

      {/* Contact */}
      <SectionItem
        id='contacto'
        name='contacto'
        title='Contacto'
        subtitle='Comunícate con nosotros a través de éste formulario de contacto.'
      >
        <Contact />
      </SectionItem>
    </div>
  )
}

export default SectionList