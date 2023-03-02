import { useParams } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import useFetchData from './hooks/useFetchData';
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
