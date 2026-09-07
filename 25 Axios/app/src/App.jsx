import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {

  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(
    {
      name: '',
      age: ''
    });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      }
    })
  }

  // fecth data
  const fetchData = async () => {
    const response = await axios({
      url: `https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users`
    })

    setUsers(response.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const posthData = async () => {
    const response = await axios({
      url: `https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users`,
      method: 'POST',
      data: {
        name: userDetails.name,
        age: userDetails.age
      }
    })
    fetchData();
  }

  return (
  <div className="my-40">

    <input
      type="text"
      placeholder="Enter Your Name"
      name="name"
      className="w-[400px] items-center text-center h-[45px] m-auto"
      value={userDetails.name}
      onChange={handleOnChange}
    />

    <input
      type="number"
      placeholder="Enter Your age"
      name="age"
      className="w-[400px] items-center text-center h-[45px] m-auto"
      value={userDetails.age}
      onChange={handleOnChange}
    />

    <button
      className="w-[200px] h-[45px] m-auto"
      onClick={posthData}
    >
      Post Data
    </button>

    {users.map((user) => {
      return (
        <div
          key={user.id}
          className="w-[400px] h-[200px] m-auto mt-5 border-2 bg-white border-blue-500 rounded-md flex flex-col justify-center items-center"
        >
          <p>Name : {user.name}</p>
          <p>Age : {user.age}</p>
        </div>
      )
    })}

  </div>
)
}

export default App