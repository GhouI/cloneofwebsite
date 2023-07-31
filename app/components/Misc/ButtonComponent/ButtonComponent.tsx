'use client';

import React from "react";
import { IconType } from "react-icons";

interface ButtonComponentProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
    text,
    onClick,
    isDisabled,
    outline,
    small,
    icon: Icon
}) => {

    return (<button
  disabled={isDisabled}
  onClick={onClick}
  className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
    outline ? 'bg-white text-black border-black' : 'bg-rose-500 text-white border-rose-500'
  } ${small ? 'py-1 text-sm font-light border-[1px]' : 'py-3 text-md font-semibold border-2'}`}
>
  {Icon && <Icon size={25} className="absolute left-4 top-3" />}
  {text}
</button>
  );
}
 
export default ButtonComponent;