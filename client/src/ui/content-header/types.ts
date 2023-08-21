import { ReactNode } from "react";

export type TContentHeaderProps = {
    title: string,
    subtitle?: string, 
    children?: ReactNode, 
    to?: string,
    textButton?: string
  }