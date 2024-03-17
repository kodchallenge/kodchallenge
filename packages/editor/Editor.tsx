import { KodThemeProvider } from '@kod/lib/hoc'
import { RouterOutputs } from '@kod/server/trpc'
import { Split } from '@kod/ui'
import KodEditor from './components/editor'
import Header from './components/header'
import ProblemPanel from './components/problem'
import './editor.css'

type Props = {
  problem: NonNullable<RouterOutputs["problem"]["getBySlug"]>
}

const Editor = ({ problem }: Props) => {

  return (
    <KodThemeProvider themes={["editor-dark", "editor-light"]} defaultTheme='editor-dark' storageKey='editor.theme'>
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
    </KodThemeProvider>
  )
}

export default Editor