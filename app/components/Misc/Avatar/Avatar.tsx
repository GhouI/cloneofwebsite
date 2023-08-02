'use client';
import Image from 'next/image';
interface AvatarProps { 
    src?: string  | null | undefined 
}
const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( <Image className="rounded-full" alt="AvatarIcon" height="30" width="30" src={src || "/image/placeholder.png"} />)
}
 
export default Avatar;