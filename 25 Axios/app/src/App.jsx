import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });

  // Input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  // Fetch data
  const fetchData = async () => {
    const response = await axios({
      url: "https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users",
    });

    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add / Update data
  const posthData = async () => {
    // Empty data validation
    if (!userDetails.name.trim() || !userDetails.age) {
      alert("Please enter Name and Age");
      return;
    }

    // Update existing user
    if (userDetails.edited) {
      await axios.put(
        `https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users/${userDetails.id}`,
        {
          name: userDetails.name,
          age: userDetails.age,
        }
      );
    }

    // Add new user
    else {
      await axios.post(
        "https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users",
        {
          name: userDetails.name,
          age: userDetails.age,
        }
      );
    }

    // Reset form
    setUserDetails({
      name: "",
      age: "",
    });

    fetchData();
  };

  // Edit data
  const editData = (user) => {
    setUserDetails({
      ...user,
      edited: true,
    });
  };

  // Delete data
  const deleteData = async (id) => {
    await axios.delete(
      `https://6a9ecb7b2f89be7fb70e9d71.mockapi.io/users/${id}`
    );

    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 px-4">

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            User Manager
          </h1>

          <p className="text-slate-400">
            Add, edit and manage users
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl mb-8">

          <div className="grid gap-4">

            {/* Name */}
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={userDetails.name}
              onChange={handleOnChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />

            {/* Age */}
            <input
              type="number"
              placeholder="Enter Your Age"
              name="age"
              value={userDetails.age}
              onChange={handleOnChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />

            {/* Add / Update */}
            <button
              onClick={posthData}
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition duration-200 shadow-lg shadow-blue-600/20"
            >
              {userDetails.edited ? "Update User" : "Add User"}
            </button>

          </div>
        </div>

        {/* Users List */}
        <div className="space-y-4">

          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl flex items-center justify-between"
              >

                {/* User Details */}
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {user.name}
                  </h2>

                  <p className="text-slate-400 mt-1">
                    Age: {user.age}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  {/* Edit */}
                  <button
                    onClick={() => editData(user)}
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition"
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteData(user.id)}
                    className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition"
                  >
                    Delete
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default App;