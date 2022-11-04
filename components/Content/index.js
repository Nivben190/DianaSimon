'use client'
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = ({data}) => {
    const [images, setImages] = useState(data);
    const [hasMore, setHasMore] = useState(true);
  
            
  return (

        <InfiniteScroll
            dataLength={images.length}
            next={() => {
            }}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            {images}
        </InfiniteScroll>
    
  )
}

export default Content
