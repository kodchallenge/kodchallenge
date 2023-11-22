import { KodMarkdown } from '@kod/lib/markdown';
type Props = {
    markdown: string;
}

const Introduction = ({ markdown }: Props) => {
    return (
        <div className='h-full overflow-y-auto'>
            <KodMarkdown markdown={markdown} />
        </div>
    )
}

export default Introduction