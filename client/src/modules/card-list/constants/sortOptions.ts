export const sortTabs = {
    rating: {
        category: "Рейтинг",
        fromUp: {
            label: "Рейтинг",
            value: "rating"
        },
    },
    spots: {
        category: "Места",
        lakes: {
            label: "Озера",
            value: "lakes"
        },
        mountains: {
            label: "Горы",
            value: "mountains"
        }, 
    },
    vocationType: {
        category: "Тип отдыха",
        family: {
            label: "С семьей",
            value: "family"
        },
        friends: {
            label: "С друзьями",
            value: "friends"
        },
        alone: {
            label: "В одиночку",
            value: "alone"
        }, 
    },
    difficulty: {
        category: "Сложность",
        easy: {
            label: "Новичок",
            value: "easy"
        },
        middle: {
            label: "Знающий",
            value: "middle"
        },
        hard: {
            label: "Опытный",
            value: "hard"
        }, 
    },
}

export const sortOptions = [
    { label: sortTabs.rating.category, value: sortTabs.rating.fromUp.value },
    {
        label: sortTabs.spots.category,
        options: [
            { label: sortTabs.spots.lakes.label, value: sortTabs.spots.lakes.value },
            { label: sortTabs.spots.mountains.label, value: sortTabs.spots.mountains.value },
        ],
    },
    {
        label: sortTabs.vocationType.category,
        options: [
            { label: sortTabs.vocationType.family.label, value: sortTabs.vocationType.family.value },
            { label: sortTabs.vocationType.friends.label, value: sortTabs.vocationType.friends.value },
            { label: sortTabs.vocationType.alone.label, value: sortTabs.vocationType.alone.value },
        ],
    },
    {
        label: sortTabs.difficulty.category,
        options: [
            { label: sortTabs.difficulty.easy.label, value: sortTabs.difficulty.easy.value },
            { label: sortTabs.difficulty.middle.label, value: sortTabs.difficulty.middle.value },
            { label: sortTabs.difficulty.hard.label, value: sortTabs.difficulty.hard.value },
        ],
    },
]
