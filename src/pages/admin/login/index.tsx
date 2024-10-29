import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "@/api/axiosClient";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    const username = (event.target as any).username.value;
    const password = (event.target as any).password.value;

    axiosClient.post("/admin/login", {
      username,
      password
    })
    .then(response => {
      if (response.data?.message == "Invalid credentials") {
        setError("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
      } 
      localStorage.setItem("token", response.data?.token);
      navigate("/admin/dashboard");
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  return (
    
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="h-20 mr-2" src="/assets/images/logo.png" alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Đăng nhập cho Admin
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tên đăng nhập
                </label>
                <input
                  name="username"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <p className="block text-md font-medium dark:text-white text-red-500">{error}</p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  border-2"
              >
                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
                  Đăng nhập
                </h3>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}