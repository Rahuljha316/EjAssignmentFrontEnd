
import './App.css';
import Home from './components/Home';
import { createBrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
     <Home />
    </div>
  );
}

const appRouter = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  }
])

export default App;
