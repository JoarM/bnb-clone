"use client";

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";

export default function Button({
    label,
    onClick,
    disabeld,
    outline,
    small,
    icon
} : {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabeld?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: Icon;
}) {
    return (
        <button className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border' : 'border-2'}
        `}>
            {label}
            
        </button>
    )
}