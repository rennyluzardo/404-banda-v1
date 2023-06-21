import { Drawer } from 'antd'
import React, { useState, useEffect } from 'react'

export default function DrawerRight(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  return (
    <Drawer
      title={`Letra de ${props.song.title}`}
      placement="right"
      onClose={props.onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}
