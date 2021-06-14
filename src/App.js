import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Shop/>
    </div>
  );
}

export default App;
