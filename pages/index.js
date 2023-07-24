import Image from 'next/image'
// import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Input, Card, } from 'antd'
// import SectionItem from '@/app/components/global/SectionItem'
import DrawerRight from '@/app/components/global/DrawerRight'
import { useState } from 'react'
import SectionList from '@/app/components/global/SectionList'

const contentStyle = {
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

export default function Index() {
  const [displayDrawerRight, setDisplayDrawerRight] = useState(false)
  const [songToReadLetter, setSongToReadLetter] = useState({})

  const onCloseDrawerRight = () => {
    setDisplayDrawerRight(false)
  }

  return (
    <MainLayout>
      {/* Slider */}
      <div className='carousel-container'>
        <Carousel autoplay={false} id='main' className='slider'>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <img src='static/images/slider/slider-3.png'></img>
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <img src='static/images/slider/slider-2.png'></img>
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <img src='static/images/slider/slider-1.png'></img>
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <img src='static/images/slider/slider-4.png'></img>
            </div>
          </div>
        </Carousel>
      </div>


      {/* Sections */}
      <SectionList
        setDisplayDrawerRight={setDisplayDrawerRight}
        setSongToReadLetter={setSongToReadLetter}
      />

      {/* Drawer */}
      <DrawerRight
        open={displayDrawerRight}
        onClose={onCloseDrawerRight}
        song={songToReadLetter}
      />
    </MainLayout >
  )
}
