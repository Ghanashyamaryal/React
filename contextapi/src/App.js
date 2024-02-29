
import './App.css';
import UseContextapiprovider from './contextapi/UseContextapiprovider';
import Login from './component/login';
import Profile from './component/profile';
function App() {
  return (
     <UseContextapiprovider>
      <Login/>
      <Profile/>
     </UseContextapiprovider>
  
  );
}

export default App;
