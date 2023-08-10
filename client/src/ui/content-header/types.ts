import { ReactNode } from "react"

export type IContentHeaderProps = {
    title:string, 
    children?: ReactNode, 
    to?:string, 
    textButton?:string
  }