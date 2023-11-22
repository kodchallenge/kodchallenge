export const problemDifficulty: {
    [difficulty: string]: {
        badgeColor: string,
        name: string
    }
} = {
    easy: {
        badgeColor: 'bg-green-500',
        name: 'Kolay'
    },
    normal: {
        badgeColor: 'bg-yellow-500',
        name: 'Orta'
    },
    hard: {
        badgeColor: 'bg-red-500',
        name: 'Zor'
    }
}