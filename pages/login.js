import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
        username,
        password,
      });
      router.push("/admin");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="min-h-[56vh]">
      <div className="flex flex-col  items-center mt-4">
        <h1 className="text-2xl font-bold mb-3">
          Admin <span className="text-yellow-600">Login</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={username}
            className="block py-2 px-4 outline-none mb-2 w-[250px] md:w-[350px] shadow bg-gray-200"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="block py-2 px-4 outline-none mb-2 w-[250px] md:w-[350px] shadow bg-gray-200"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-[250px] md:w-[350px] py-2 bg-blue-500 text-white uppercase hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        {error && <p className="text-red-500 mt-1">Wrong Credentials.</p>}
      </div>
    </div>
  );
};

export default Login;
