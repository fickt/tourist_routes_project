export const sortTabs = {
    rating: {
        category: "Рейтинг",
        fromUp: {
            label: "Рейтинг",
            value: "rating"
        },
    },
    // spots: {
    //     category: "Места",
    //     lakes: {
    //         label: "Озера",
    //         value: "озёра"
    //     },
    //     mountains: {
    //         label: "Горы",
    //         value: "горы"
    //     },
    // },
    // vocationType: {
    //     category: "Тип отдыха",
    //     family: {
    //         label: "С семьей",
    //         value: "с семьей"
    //     },
    //     friends: {
    //         label: "С друзьями",
    //         value: "с друзьями"
    //     },
    //     alone: {
    //         label: "В одиночку",
    //         value: "в одиночку"
    //     },
    // },
    // difficulty: {
    //     category: "Сложность",
    //     easy: {
    //         label: "Новичок",
    //         value: "новичок"
    //     },
    //     middle: {
    //         label: "Знающий",
    //         value: "знающий"
    //     },
    //     hard: {
    //         label: "Опытный",
    //         value: "опытный"
    //     },
    // },
}

// const { rating, spots, vocationType, difficulty } = sortTabs;
const { rating } = sortTabs;

export const sortOptions = [
    { label: rating.category, value: rating.fromUp.value },
    // {
    //     label: spots.category,
    //     options: [
    //         { label: spots.lakes.label, value: spots.lakes.value },
    //         { label: spots.mountains.label, value: spots.mountains.value },
    //     ],
    // },
    // {
    //     label: vocationType.category,
    //     options: [
    //         { label: vocationType.family.label, value: vocationType.family.value },
    //         { label: vocationType.friends.label, value: vocationType.friends.value },
    //         { label: vocationType.alone.label, value: vocationType.alone.value },
    //     ],
    // },
    // {
    //     label: difficulty.category,
    //     options: [
    //         { label: difficulty.easy.label, value: difficulty.easy.value },
    //         { label: difficulty.middle.label, value: difficulty.middle.value },
    //         { label: difficulty.hard.label, value: difficulty.hard.value },
    //     ],
    // },
]
