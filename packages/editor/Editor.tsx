import { KodServerTrpc } from '@kod/server/next'
import { KodLogoWithLabel, Split } from '@kod/ui'
import KodEditor from './components/editor'
import Header from './components/header'
import ProblemPanel from './components/problem'
import './editor.css'
import { redirect } from 'next/navigation'
import { RouterOutputs } from '@kod/server/trpc'

type Props = {
  problem: NonNullable<RouterOutputs["problem"]["getBySlug"]>
}

const Editor = ({ problem }: Props) => {

  return (
    <div id='k-editor' className='h-full flex flex-col max-h-screen overflow-hidden'>
      <Header title={problem.title} />

      <main id='kc-editor-main' className='h-full flex-1 bg-editor-background'>
        <Split
          className='px-4 h-full py-2 flex'
          sizes={[50, 50]}
          minSize={[300, 400]}
        >
          <ProblemPanel problem={problem} />
          <KodEditor problem={problem} />
        </Split>
      </main>

    </div>
  )
}

export default Editor