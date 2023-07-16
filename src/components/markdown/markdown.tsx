"use client"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import './markdown.scss'
import { useTheme } from "next-themes"
import { THEMES } from "@/constants"
type Props = {
    markdown: string;
}


export const Markdown = ({ markdown }: Props) => {
    const { theme } = useTheme()
    return (
        <ReactMarkdown
            className='kod-md psrose psrose-sm md:sprose !max-w-full w-full'
            remarkPlugins={[remarkGfm]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            //@ts-ignore
                            style={theme == THEMES.DARK ? oneDark : oneLight}
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