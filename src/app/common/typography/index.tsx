import { Typography } from '@mui/material'
import React from 'react'

interface IProps {
  [propsName: string]: any
}

function AppTyp(props: IProps) {
  const { children } = props
  return (
    <Typography {...props}>
      {children}
    </Typography>
  )
}

export default AppTyp