import { KodMainLayout } from '@/components/layouts'
import ProblemListView from '@kod/features/problems/views/ProblemListView'

const ProblemsPage = async () => {
    return (
        <KodMainLayout>
            {/* @ts-expect-error Server Component */}
            <ProblemListView />
        </KodMainLayout>
    )
}

export default ProblemsPage