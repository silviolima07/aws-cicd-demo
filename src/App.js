import logo from './logo.svg';
import cicd from './CICD.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
		<strong>AWS - Continous Integration / Continous Delivery</strong>
		<br>
		<strong>React application</strong>
		<strong>Source:</strong>GitHub
		<strong>CodeBuild:</strong>
		After executing push by git, code is compiled and application is zipped
		<strong>CodeDeploy:</strong>
		Application is unzipped in the bucket created to host a static site
        </p>
        <a
          className="App-link"
          href="https://mycloudfun.net/pages/devops-in-aws-ci-cd-codedeploy-codepipeline-part1.html"
          target="_blank"
          rel="noopener noreferrer"
        > 
        <img src={cicd}/>
        </a>
      </header>
    </div>
  );
}

export default App;
