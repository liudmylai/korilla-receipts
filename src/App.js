import './App.css';
import receipts from './data.js'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1>Korilla</h1>
      <Main receipts={receipts} />

    </div>
  );
}

export default App;
