import { TMarker } from "components/ymap/constants/markers"
import { ReactNode } from "react"

export type TSpotItemProps = {
    spotItem: TMarker
} & { children?: ReactNode }