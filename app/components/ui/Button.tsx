"use client";

import Link from "next/link";
import {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ReactNode,
} from "react";

type Variant =
    | "white"
    | "whiteOutline"
    | "black"
    | "blackOutline";

interface BaseProps {
    children: ReactNode;
    variant?: Variant;
    className?: string;
}

type ButtonAsButton = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type ButtonAsLink = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type Props = ButtonAsButton | ButtonAsLink;

export default function Button(props: Props) {
    const {
        children,
        variant = "white",
        className = "",
    } = props;

    const baseStyles =
        "px-6 py-3 rounded-xl text-sm font-medium transition duration-300 inline-flex items-center justify-center";

    const variants: Record<Variant, string> = {
        white: "bg-white text-black hover:bg-gray-200",
        whiteOutline:
            "border border-white/20 text-white hover:bg-white hover:text-black",
        black: "bg-black text-white hover:bg-gray-900",
        blackOutline:
            "border border-black/20 text-black hover:bg-black hover:text-white",
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    // 🔹 LINK VERSION
    if ("href" in props && props.href) {
        const { href, ...linkProps } = props;
        return (
            <Link href={href} className={classes} {...linkProps}>
                {children}
            </Link>
        );
    }

    // 🔹 BUTTON VERSION
    const { href, ...buttonProps } = props as ButtonAsButton;

    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
}