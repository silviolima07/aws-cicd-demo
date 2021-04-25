import logo from './logo.svg';
import cicd from './CICD.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="320" height="320"/>
        <p>
           <center><strong>AWS - Continous Integration / Continous Delivery</strong></center>
		<br></br>
		Example with a React application<br></br>
		Source - github<br></br>
		CodeBuild - when code is pushed by developer, code is built and application zipped.<br></br>
		CodeDeploy - application is unzipped in the bucket created to host a static site<br></br>
        </p>
        <a
          className="App-link"
          href="https://mycloudfun.net/pages/devops-in-aws-ci-cd-codedeploy-codepipeline-part1.html"
          target="_blank"
          rel="noopener noreferrer"
        > 
        <img src={cicd} alt="CI/CD"/>
        </a>
      </header>
    </div>
  );
}

export default App;
