"use client";

import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
interface CopyButtonProps extends React.ComponentProps<'button'> {
    copyText?: string
    completeText: string
}
function CopyButton({ copyText, completeText, ...rest }: CopyButtonProps) {
    const [isCopied, setCopied] = useState(false)

    function HandleCopyButtonClick() {
        if (!copyText || isCopied) {
            return
        }
        void navigator.clipboard.writeText(copyText)
        setCopied(true)
    }

    useEffect(() => {
        if (isCopied === false) {
            return
        }

        const timeoutId = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [isCopied])
    return (
        <button
            className="hover:bg-bgSecondary active:bg-bgBase 
            transition-colors duration-300 rounded-lg p-2
            disabled:bg-transparent disabled:text-inactive relative"
            onClick={HandleCopyButtonClick}
            // disabled={isCopied}
            {...rest}>
            <FaRegCopy />
            <div className={`absolute left-1/2 -bottom-1 
            translate-y-full -translate-x-1/2 text-base
            bg-bgBase px-1.5 rounded-md transition-opacity
            duration-300 shadow-inner shadow-bgSecondary
            ${isCopied ? "opacity-100" : "opacity-0"}`}>
                {completeText}
            </div>
        </button>
    )
}
export default CopyButton