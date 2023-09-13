export const popupTitle = "Оставить отзыв";

export const reviewForm = {
    ratingRule: "Укажите рейтинг!",
    textareaRule: "Напишите отзыв!",
    textareaText: "Напишите свой отзыв",
}
export const elemName = {
    form: "form",
    rating: "rating",
    text: "text",
}
export const buttonText = "Позже";

export const formatDate = (dateString: Date) => {
    const originalDate = new Date(dateString);
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const day = originalDate.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
};