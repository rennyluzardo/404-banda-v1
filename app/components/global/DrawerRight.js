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
      style={{ color: 'rgba(0, 0, 0, 0.45)' }}
    >
      <p>{props.song.script}</p>
      <p>{props.song.script}</p>
      <p>{props.song.script}</p>
    </Drawer>
  )
}
