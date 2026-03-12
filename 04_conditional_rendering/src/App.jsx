import Nologin from './components/Nologin'
import Login from './components/login';
import './App.css'

function App() {
 var isloggedin =true;

    
    // if(isloggedin){
    //   return <Login/>
    // }else{
    //   return <Nologin/>
    // }
    return isloggedin? <Login/>:<Nologin/>

      
    
}

export default App
