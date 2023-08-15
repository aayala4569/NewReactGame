import { Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from "react-icons"
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa'
import {SiNintendo} from 'react-icons/si'
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'

interface Props {
    platform: Platform[]
}

const PlatformIconsList = ({platform}: Props) => {

    const iconMap: {[key: string]: IconType}= {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe

    }
  return (
    <div>
      {platform.map((platform)=> (
        <Icon as = {iconMap[platform.slug]} color='gray.500'/>
      ))}
    </div>
  )
}

export default PlatformIconsList
