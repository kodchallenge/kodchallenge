"use client"
import { cn } from '@kod/ui';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import { SyntaxThemes } from '../common';
import { useKodTheme } from '../hoc';
import './markdown.css';
type Props = {
    markdown: string;
}


const KodMarkdown = ({ markdown }: Props) => {
    const { theme } = useKodTheme()
    return (
        <ReactMarkdown
            className='kod-md !max-w-full w-full'
            remarkPlugins={[remarkGfm]}
            // @ts-ignore
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={SyntaxThemes[theme]}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={cn(className, "inline after:contents before:contents")} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {markdown}
        </ReactMarkdown>
    )
}

export default KodMarkdown