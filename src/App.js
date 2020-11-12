import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Deployed on AWS S3. Automated build</h1>
      </header>
    </div>
  );
}

export default App;
