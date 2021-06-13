import logo from './logo.svg';
import './App.css';
import GetApi from './components/GetApi';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <GetApi />
    </div>
  );
}

export default App;
