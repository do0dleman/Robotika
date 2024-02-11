"use client";

import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
interface CopyButtonProps extends React.ComponentProps<'button'> {
    text?: string
}
function CopyButton({ text, ...rest }: CopyButtonProps) {
    const [isCopied, setCopied] = useState(false)

    function HandleCopyButtonClick() {
        if (!text || isCopied) {
            return
        }
        void navigator.clipboard.writeText(text)
        setCopied(true)
    }
    return (
        <button
            className="hover:bg-bgSecondary active:bg-bgBase 
            transition-colors duration-300 rounded-lg p-2
            disabled:bg-transparent disabled:text-inactive"
            onClick={HandleCopyButtonClick}
            disabled={isCopied}
            {...rest}>
            <FaRegCopy />
        </button>
    )
}
export default CopyButton