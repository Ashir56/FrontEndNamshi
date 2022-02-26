import React , {useState , useEffect}from "react";
import axios from 'axios'
const Addproduct = () => {

    const [data, setData] = useState([])
    const url = 'http://127.0.0.1:8000/product-api/brand/'

    useEffect( ()=>{


    axios.get(url)
    .then(response => {
        setData(response.data)
    })
}, [])

function del(){
axios.delete('http://127.0.0.1:8000/product-api/brand/1')
.then(response =>{
    console.log("deleted")
}).catch(error => {
  console.log(error.response)
})}

  return (
    <div id="addproduct-dashboard">
      <div id="add-brand">
    {console.log(data)}
    <button onClick={del}>Delete</button>
        {/* <label> Add Brand</label>
        <input type={"text"} placeholder={"Add Brand Name"} onChange={getData}></input>
        {console.log(data)} */}
      </div>
    </div>
  );
};

export default Addproduct;
