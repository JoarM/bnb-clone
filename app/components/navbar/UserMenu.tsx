"use client";

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])
    

    return (
        <div className="relative">
            <div className="flex items-center gap-3">
                <button className="hidden md:block text-sm 
                font-semibold py-3 px-4 rounded-full 
                hover:bg-neutral-100 transition"
                >
                    Airbnb your home
                </button>
                <button className="p-4 md:py-1 md:px-2 
                border border-neutral-200 flex 
                items-center gap-3 rounded-full 
                hover:shadow-md transition"
                onClick={toggleOpen}>
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md 
                w-[40vw] md:w-3/4 bg-white overflow-hidden 
                right-0 top-12 text-sm flex flex-col 
                cursor-pointer">
                    <MenuItem 
                    onClick={() => {}}
                    label="Login"/>
                    <MenuItem 
                    onClick={() => {}}
                    label="Sign up"/>
                </div>
            )}
        </div>
    )
}