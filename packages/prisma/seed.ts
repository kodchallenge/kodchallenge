import { prisma } from '.'


const main = async () => {
    const user = await prisma.users.create({
        data: {
            email: 'admin@kodchallenge.com',
            username: 'admin',
            password: 'admin',
            firstname: 'KodChallenge',
            lastname: 'Platform',
            is_verified: true,
            location: 'Ankara, Turkey',
            avatar: 'https://cdn.kodchallenge.com/users/avatars/admin.png',
            biography: 'KodChallenge is a platform for developers to showcase their skills and get hired by top tech companies.',
            github: 'https://github.com/kodchallenge',
            linkedin: 'https://www.linkedin.com/company/kodchallenge',
            twitter: 'https://twitter.com/kodchallenge',
            website: 'https://kodchallenge.com',
        }
    })

    await prisma.roles.createMany({
        data: [
            { id: 1, name: 'Admin' },
            { id: 2, name: 'User' },
        ]
    })

    await prisma.user_roles.create({
        data: {
            user_id: user.id,
            role_id: 1
        }
    })

    const category = await prisma.categories.create({
        data: {
            name: 'Algorithm',
        }
    })

    await prisma.problems.create({
        data: {
            title: 'Hello KodCahllenge',
            subtitle: 'Welcome to KodChallenge',
            slug: 'hello-kodchallenge',
            score: 10,
            difficulty: 'easy',
            icon: 'https://cdn.kodchallenge.com/problems/icons/hello-kodchallenge.png',
            is_private: false,
            is_deleted: false,
            category_id: category.id,
        }
    })

    await prisma.languages.createMany({
        data: [
            { name: 'C', slug: 'c', },
            { name: 'C++', slug: 'cpp', },
            { name: 'C#', slug: 'cs', },
            { name: 'Java', slug: 'java', },
            { name: 'JavaScript', slug: 'js', },
            { name: 'TypeScript', slug: 'ts', },
            { name: 'Python', slug: 'py', },
        ]
    })
}

main().then(() => {
    console.log('Seed completed.')
    process.exit(0)
}).catch(err => {
    console.error(err)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
