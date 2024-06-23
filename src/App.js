import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import List from './component/List';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
      <Home/>
      <List/>
      <Add/>
    </div>
  );
}

export default App;
