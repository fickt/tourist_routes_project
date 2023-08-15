export type TRatingProps = {
    isEditable?: boolean, 
    currentRating: number, 
    setCurrentRating?: (number:number) => void,
    error?: any
}