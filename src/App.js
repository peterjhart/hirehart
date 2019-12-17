import React from "react";

function App() {
  return (
    <div className="header">
      <header className="text-center mb-3">
        <h1>Peter needs a job.</h1>
      </header>

      <div className="row mb-3">
        <div className="col text-center"></div>
        <div className="col text-center">
          <p>
            <strong>The source for this website is on github!</strong>
          </p>
          <p>
            <a
              href="https://github.com/peterjhart/hirehart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="col text-center"></div>
      </div>
    </div>
  );
}

export default App;
