"use client";

import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
interface CopyButtonProps extends React.ComponentProps<"button"> {
  copyText?: string;
  completeText: string;
}
function CopyButton({ copyText, completeText, ...rest }: CopyButtonProps) {
  const [isCopied, setCopied] = useState(false);

  function HandleCopyButtonClick() {
    if (!copyText || isCopied) {
      return;
    }
    void navigator.clipboard.writeText(copyText);
    setCopied(true);
  }

  useEffect(() => {
    if (isCopied === false) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);
  return (
    <button
      className="relative rounded-lg 
            p-2 transition-colors duration-300 hover:bg-bgSecondary
            active:bg-bgBase disabled:bg-transparent disabled:text-inactive"
      onClick={HandleCopyButtonClick}
      // disabled={isCopied}
      {...rest}
    >
      <FaRegCopy />
      <div
        className={`absolute -bottom-1 left-1/2 
            -translate-x-1/2 translate-y-full rounded-md
            bg-bgBase px-1.5 text-base shadow-inner
            shadow-bgSecondary transition-opacity duration-300
            ${isCopied ? "opacity-100" : "opacity-0"}`}
      >
        {completeText}
      </div>
    </button>
  );
}
export default CopyButton;
