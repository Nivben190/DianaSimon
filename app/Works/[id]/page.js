'use client'

import React from 'react'
import { useRouter } from 'next/router'
const ClickedPictured = ({params}) => {
    const router = useRouter()
    alert(JSON.stringify(params))   
  return (
    <div>
  
      
    </div>
  )
}

export default ClickedPictured
