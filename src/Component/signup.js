import React , {useState} from "react";
import axios from 'axios';
function Signup() {
    const url = `http://127.0.0.1:8000/buyer-api/buyer/`;
    const [data, setData] = useState({
      fullname: '',
      username: '',
      gender: '',
      email: '',
      password: '',
    });

    function Change(e){
        setData({...data,[e.target.name]: e.target.value});
    }

    let Submit = () => {
      axios.post(url, JSON.stringify(data), {
        headers: {
        'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data)
      }).catch(error =>{
        console.log(error.response.data)
      })
    }

  return (
    <div id="signup">
      <div id="signup-form">
        <div id="title">
          <h1>Create a new Account.</h1>
          <small>
            Already a member? <a href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y" target={'_blank'}>Login</a>
          </small>
          <div className="input-contents">
            <input name="fullname" placeholder="Fullname" onChange={Change}></input>
            <input name="username" placeholder="Username"  onChange={Change}></input>
            <select name="gender" id="gender" required onChange={Change}>
              <option id="gender-placeholder">Choose Gender...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
            name="email"
              id="email"
              type={"email"}
              placeholder="asd@gmail.com"
              onChange={Change}
            ></input>
            <input name="password" type={"password"} placeholder="************" onChange={Change}></input>
            {console.log(data)}
            <button>Change Method</button>
            <button style={{backgroundColor:'#2D90F4'}} onClick={Submit}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
