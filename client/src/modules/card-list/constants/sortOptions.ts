export const sortTabs = {
    rating: {
        category: "Рейтинг",
        fromUp: {
            label: "Рейтинг",
            value: "rating"
        },
    }
}

const {rating} = sortTabs;

export const sortOptions = [
    {label: rating.category, value: rating.fromUp.value}
]
