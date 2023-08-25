import { useEffect } from 'react'
import Image from 'next/image'
// import styles from '../scss/page.module.css'
import MainLayout from '@/app/components/global/MainLayout'
import { Carousel, Input, Card, } from 'antd'
// import SectionItem from '@/app/components/global/SectionItem'
import DrawerRight from '@/app/components/global/DrawerRight'
import { useRef, useState } from 'react'
import SectionList from '@/app/components/global/SectionList'
import { getCurrentDimension } from '@/libs/utils'

const contentStyle = {
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

export default function Index() {
  const defaultSliderDimensions = {
    width: 320,
    height: 120
  }
  const [displayDrawerRight, setDisplayDrawerRight] = useState(false)
  const [songToReadLetter, setSongToReadLetter] = useState({})
  const [screenSize, setScreenSize] = useState(defaultSliderDimensions);

  useEffect(() => {
    setScreenSize(getCurrentDimension())
  }, [])

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

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
              <Image
                src={'/static/images/slider/slider-3.png'}
                alt='slider 1'
                width={screenSize.width}
                height={screenSize.width / 3}
              />
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <Image
                src={'/static/images/slider/slider-2.png'}
                alt='slider 2'
                width={screenSize.width}
                height={screenSize.width / 3}
              />
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <Image
                src={'/static/images/slider/slider-1.png'}
                alt='slider 3'
                width={screenSize.width}
                height={screenSize.width / 3}
              />
            </div>
          </div>
          <div className='slider__img-box'>
            <div style={contentStyle}>
              <Image
                src={'/static/images/slider/slider-4.png'}
                alt='slider 4'
                width={screenSize.width}
                height={screenSize.width / 3}
              />
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
