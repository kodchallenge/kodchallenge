import React from 'react'
import ProblemListItem from '../components/ProblemListItem'

const problems = [
    { id: 1, title: 'Problem 1', slug: 'problem-1', difficulty: 'easy', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
    { id: 2, title: 'Problem 2', slug: 'problem-2', difficulty: 'medium', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
    { id: 3, title: 'Problem 3', slug: 'problem-3', difficulty: 'hard', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
]

const ProblemListView = () => {
    return (
        <main className='mt-32'>
            <div className='container'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Problemler</h1>
                    <div className='my-12 grid grid-cols-2 grid-flow-row gap-4 w-full'>
                        {problems.map((problem) => (
                            <ProblemListItem problem={problem} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProblemListView