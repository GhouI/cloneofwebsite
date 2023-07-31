'use client';

import React from "react";

interface HeadingProps {
    title: string, 
    subtitle?: string, 
    center?: boolean,

}
const Heading : React.FC<HeadingProps> = ({
    title, 
    subtitle, 
    center
}) => {
    return ( <div className={center ? 'text-center' : 'text-start'}> 

    </div> );
}
 
export default Heading;