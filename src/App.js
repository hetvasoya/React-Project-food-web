import logo from './logo.svg';
import './App.css';
import Mainpage from './component/mainpaje';
import Mealinfo from './component/mealinfo';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Mainpage />}/>
       <Route path='/:mealid' element={<Mealinfo />}/>
    </Routes>

    // <Mainpage />
  );
}

export default App;
