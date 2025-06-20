import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { use } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/users/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );
        const token = res.data.token;
        // ✅ Save token to localStorage
        localStorage.setItem("token", token);
        if (res.data.type == 1) {
          console.log(res.data.type);
          alert("You are registered successfully!");
          navigate("/AdminDashboard");
        }
        console.log(res.data.type);

        navigate("/");
        window.location.reload();
      } catch (error) {
        const errmsg =
          error.response?.data?.message || "error while creating user";
        console.log(errmsg);

        // Optional: show message below email field
        if (errmsg.includes("already")) {
          setErrors({ email: errmsg }); // attach error to email field
        } else {
          alert(errmsg);
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-gray-100 dark:from-gray-900 dark:to-black px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              onChange={handleChange}
              value={formData.email}
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
              name="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition hover:cursor-pointer"
          >
            Register
          </button>
          <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
