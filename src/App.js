import logo from './logo.svg';
import './App.css';
import RouterHomer from './Pages/Router/RouterHome'
import { BrowserRouter } from 'react-router-dom';
import Navbarlanding from './Navbarlanding'
function App() {
  return (
    <BrowserRouter>
    <div style={{width:'95%' ,marginLeft:'20px'}}>
   
      <RouterHomer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
