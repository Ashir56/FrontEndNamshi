import './App.scss';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import SignUp from './Component/signup';
import Dashboard from './Component/dashboard';
import AddProduct from './Component/addproduct';
function App() {
  return (
    
    <div className="App">
      <Navbar />
      {/* <div style={{display:'grid', height:'auto' , placeItems:'center'}}> */}
      <SignUp />

      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
