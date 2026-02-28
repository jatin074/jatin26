"use client";

import Link from "next/link";
import {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ReactNode,
    MouseEvent,
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
        "relative overflow-hidden px-6 py-3 rounded-xl text-sm font-medium inline-flex items-center justify-center transition duration-300 group";

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

        const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
            if (href.startsWith("#")) {
                e.preventDefault();

                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }

            if (linkProps.onClick) {
                linkProps.onClick(e);
            }
        };

        return (
            <Link
                href={href}
                className={classes}
                onClick={handleClick}
                {...linkProps}
            >
                <span className="relative h-[1.2em] overflow-hidden flex items-center">
                    <span className="transition-transform duration-300 group-hover:-translate-y-full">
                        {children}
                    </span>
                    <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                        {children}
                    </span>
                </span>
            </Link>
        );
    }

    // 🔹 BUTTON VERSION
    const { href, ...buttonProps } = props as ButtonAsButton;

    return (
        <button className={classes} {...buttonProps}>
            <span className="relative h-[1.2em] overflow-hidden flex items-center">
                <span className="transition-transform duration-300 group-hover:-translate-y-full">
                    {children}
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                    {children}
                </span>
            </span>
        </button>
    );
}