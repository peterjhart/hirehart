import { ReactElement } from 'react'
import { FileTextIcon, GithubIcon, MailIcon } from 'lucide-react'

export default function App(): ReactElement {
  return (
    <div className="header">
      <header className="text-center mb-3">
        <h1>Peter needs a job.</h1>
      </header>

      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <FileTextIcon className="text-primary mb-2" />
              <h4 className="text-uppercase m-0">Résumé</h4>
              <hr className="my-4" />
              <div className="small text-black-50">
                <a href="/assets/peter%20j.%20hart%20resume%202024.pdf">PDF</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <GithubIcon className="text-primary mb-2"></GithubIcon>
              <h4 className="text-uppercase m-0">GitHub</h4>
              <hr className="my-4" />
              <div className="small text-black-50">
                See the source for this website on&nbsp;
                <a
                  href="https://github.com/peterjhart/hirehart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <MailIcon className="text-primary mb-2" />
              <h4 className="text-uppercase m-0">Contact</h4>
              <hr className="my-4" />
              <div className="small text-black-50">
                <a href="mailto:peter@hirehart.com">peter@hirehart.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
