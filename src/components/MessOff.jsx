import axios from "axios";
import { useState } from "react"

const MessOff = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const student = user._id

  const [leaving_date, setLeavingDate] = useState('')
  const [return_date, setReturningDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student, leaving_date, return_date)
    axios.post("https://hostel-backend-x46l.onrender.com/api/mess/request-messoff",{
          student,
          leaving_date,
          return_date,
        }
      )
      .then((response) => {
        // Handle data
        alert("sucsessfully requsted");
        console.log(response.data)
      })
      .catch((error) => {
        alert("something went wrong");
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Leaving date</label>
        <input type="date" name="leaving-date" id="" onChange={(e) => setLeavingDate(e.target.value)}/>
        <label>Returning date</label>
        <input type="date" name="returning-date" id="" onChange={(e) => setReturningDate(e.target.value)}/>
        <button type="submit" onSubmit={handleSubmit}>request messoff</button>
      </form>
    </div>
  )
}

export default MessOff