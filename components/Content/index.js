'use client'
import React, { useState } from "react";

const Content = ({data}) => {
    const [images, setImages] = useState(data);
    const [hasMore, setHasMore] = useState(true);
  
            
  return (

        
            {data}
    
  )
}

export default Content
