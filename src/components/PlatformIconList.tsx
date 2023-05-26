import { FaWindows, FaPlaystation, FaApple, FaLinux, FaAndroid, FaXbox } from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: {[key: string] : IconType} = {
    'pc': FaWindows,
    'playstation': FaPlaystation,
    'xbox': FaXbox,
    'ios': FaApple,
    'macos': FaApple,
    'linux': FaLinux,
    'android': FaAndroid,
    'nintendo': SiNintendo,
    'web': BsGlobe,
    'iphone': MdPhoneIphone,
    'ipad': MdPhoneIphone,
    'xbox360': FaXbox,
    'xbox-one': FaXbox,
    'playstation3': FaPlaystation,
    'apple-arcade': FaApple,
    'mac': FaApple,
  }
  return (
    <HStack marginY={1}>
      {platforms.map(platform =>
        <Icon as={platformIcons[platform.slug]} key={platform.slug} marginRight='5px' color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformIconList