import { ReactElement } from 'react'
import { FileTextIcon, SquareCodeIcon, MailIcon } from 'lucide-react'

export default function App(): ReactElement {
  return (
    <div className="py-8">
      <header className="text-center mb-3">
        <h1 className="text-6xl mb-8">Peter needs a job.</h1>
      </header>

      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 mx-12">
        <div className="mb-3 p-4 border rounded-lg h-full">
          <div className="flex justify-center">
            <FileTextIcon
              className="h-12 w-12 mb-2 text-cyan-600"
              strokeWidth={1.5}
            />
          </div>
          <h2 className="text-center text-uppercase text-3xl text-cyan-600">
            Résumé
          </h2>
          <hr className="my-4" />
          <div className="text-center">
            <a
              className="text-cyan-600 underline underline-offset-4"
              href="/assets/peter%20j.%20hart%20resume%202024.pdf"
            >
              PDF
            </a>
          </div>
        </div>

        <div className="mb-3 p-4 border rounded-lg h-full">
          <div className="flex justify-center">
            <SquareCodeIcon
              className="h-12 w-12 mb-2 text-cyan-600"
              strokeWidth={1.5}
            />
          </div>
          <h4 className="text-center text-uppercase text-3xl text-cyan-600">
            GitHub
          </h4>
          <hr className="my-4" />
          <div className="text-center">
            See the source for this website on&nbsp;
            <a
              className="text-cyan-600 underline underline-offset-4"
              href="https://github.com/peterjhart/hirehart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mb-3 p-4 border rounded-lg h-full">
          <div className="flex justify-center">
            <MailIcon
              className="h-12 w-12 mb-2 text-cyan-600"
              strokeWidth={1.5}
            />
          </div>
          <h4 className="text-center text-uppercase text-3xl text-cyan-600">
            Contact
          </h4>
          <hr className="my-4" />
          <div className="text-center">
            <a
              className="text-cyan-600 underline underline-offset-4"
              href="mailto:peter@hirehart.com"
            >
              peter@hirehart.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
