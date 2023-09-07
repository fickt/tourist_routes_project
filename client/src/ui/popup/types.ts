export type TPopupProps = {
    review?: boolean,
    image?: boolean,
    isPopupOpen?: boolean,
    setIsPopupOpen?: (value: boolean) => void,
    closePopup?: () => void,
    spotId?: number,
}