import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'
import meh from '../assets/meh.webp'
import thumbsup from '../assets/thumbs-up.webp'
import bullsEye from '../assets/bulls-eye.webp'

interface Props {
    rating: number;
}

const Emoji = ({rating}:Props) => {

    if(rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} ={
        3: {src: meh, alt: 'meh', blockSize: '25px' },
        4: {src: thumbsup, alt: 'recommended', boxSize: '25px' },
        5: {src: bullsEye, alt: 'exceptional', boxSize: '35px' },
    }
  return (
    <Image {...emojiMap[rating]} marginTop={3}/>
      
    
  )
}

export default Emoji