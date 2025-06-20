import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post(`http://localhost:5000/api/users/login`, {
          email,
          password,
        });

        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log("Response Data:", res.data.type);
        const name = localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );
        console.log(name);
        // return false;

        if (res.data.type == 1) {
          // alert("login to normal type 1");

          navigate("/AdminDashboard");
        } else {
          // alert("login to normal type 0");
          navigate("/");
        }
        window.location.reload();
      } catch (error) {
        const errmsg = error.response?.data?.message || "Login failed";
        // alert(errmsg);

        if (errmsg.toLowerCase().includes("email")) {
          setErrors({ email: errmsg });
        } else if (errmsg.toLowerCase().includes("password")) {
          setErrors({ password: errmsg });
        }
        // if (errMsg.toLowerCase().includes("email")) {
        //   setErrors({ email: errMsg });
        // } else if (errMsg.toLowerCase().includes("password")) {
        //   setErrors({ password: errMsg });
        // }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-yellow-100 dark:from-gray-900 dark:to-black px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition hover:cursor-pointer"
          >
            Login
          </button>
          <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-yellow-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
