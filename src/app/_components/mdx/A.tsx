import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";

interface AProps extends Omit<LinkProps, "href"> {
    children?: ReactNode
    href?: string
    noIcon?: boolean
}

export default function A({ children, href, noIcon, ...rest }: AProps) {
    return <Link href={href ?? ''}
        className="mdx-a text-link transition-all duration-300 hover:text-link-active
        hover:underline inline-flex"
        {...rest}>
        {children}
        <span className={`${noIcon ? 'hidden' : ''} text-inactive top-0 
        right-0 text-sm -translate-y-1/5`}>
            <FiExternalLink />
        </span>
    </Link >
}