import { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://hostel-backend-x46l.onrender.com/api/auth/student/signin", {
        email,
        password
      })
      .then((response) => {
        const user = response.data.result;
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user));
        // Handle data
        alert('login sucsess')
      })
      .catch((error) => {
        alert('something went wrong')
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' >Login</button>
      </form>
    </div>
  )
}

export default Login