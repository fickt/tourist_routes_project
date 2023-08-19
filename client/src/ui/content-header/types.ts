import { ReactNode } from "react";

export type IContentHeaderProps = {
    title: string,
    subtitle?: string, 
    children?: ReactNode, 
    to?: string,
    textButton?: string
  }