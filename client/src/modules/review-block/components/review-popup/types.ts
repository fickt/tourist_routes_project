export type TReviewPopupProps = {
    title: string,
    spotId: number,
    closePopup: () => void,
    isPopupOpen: boolean,
    setIsPopupOpen: (value: boolean) => void,
}

export type TFormValues = {
    text: string,
    rating: number,
}