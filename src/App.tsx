import { ElementType, ReactElement, ReactNode } from 'react'
import { FileTextIcon, SquareCodeIcon, MailIcon } from 'lucide-react'

export default function App(): ReactElement {
  return (
    <div className="py-8">
      <header className="text-center mb-3">
        <h1 className="text-8xl text-cyan-600 mb-8">
          Peter needs a{` `}
          <span className="highlighted-text" data-text="job">
            job
          </span>
          .
        </h1>
      </header>

      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 mx-12">
        <Card icon={FileTextIcon}>
          <h2 className="text-center text-3xl text-cyan-600">Résumé</h2>
          <hr className="my-4" />
          <div className="text-center text-balance">
            <a href="/assets/peter%20j.%20hart%20resume%202024.pdf">PDF</a>
          </div>
        </Card>

        <Card icon={SquareCodeIcon}>
          <h4 className="text-center text-3xl text-cyan-600">GitHub</h4>
          <hr className="my-4" />
          <div className="text-center text-balance">
            See the source for this website on&nbsp;
            <a
              href="https://github.com/peterjhart/hirehart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Card>

        <Card icon={MailIcon}>
          <h4 className="text-center text-3xl text-cyan-600">Contact</h4>
          <hr className="my-4" />
          <div className="text-center text-balance">
            <a href="mailto:peter@hirehart.com">peter@hirehart.com</a>
          </div>
        </Card>
      </div>
    </div>
  )
}

interface CardProps {
  children: ReactNode
  icon: ElementType
}

function Card({ children, icon: IconComponent }: CardProps): ReactElement {
  return (
    <div className="animated-card">
      <div className="card">
        <div className="flex justify-center">
          <IconComponent
            className="h-12 w-12 mb-2 text-cyan-600"
            strokeWidth={1.5}
          />
        </div>
        {children}
      </div>
    </div>
  )
}
