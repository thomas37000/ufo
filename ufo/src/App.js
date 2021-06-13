import logo from './logo.svg';
import './App.css';
import Routter from './router/Router';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Routter />
    </div>
  );
}

export default App;
