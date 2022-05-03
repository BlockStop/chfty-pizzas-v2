import React, {useState, useEffect} from 'react';

const useProgressiveImage = src => {  
    const [sourceLoaded, setSourceLoaded] = useState(null);

  
    useEffect(() => {
      console.log(`starting use effect: ${sourceLoaded}`);
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src])
    console.log(`after use effect: ${sourceLoaded}`)
    return sourceLoaded
  }

export default useProgressiveImage;
