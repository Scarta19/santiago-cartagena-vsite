"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  children: ReactNode;
};

/** An anchor that records a Vercel Analytics custom event on click. */
export function TrackedLink({ event, children, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
