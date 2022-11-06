import './App.css';
import Closer from './components/closingP';
import MyCounter from './components/MyCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <MyCounter />
        <MyCounter />
        <br/>
        <Closer />
      </header>
      
    </div>
  );
}

export default App;
