'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Logo = () => {
    const Router = useRouter();
    return (
    <Image height="100" width="100" alt="Logo" className="hidden md:block cursor-pointer" src="/image/icon.png" />
     );
}
 
export default Logo;