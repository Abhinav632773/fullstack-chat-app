import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattren";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const validateForm = ()=>{
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;

  }
  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const sucess = validateForm();
    if(sucess===true) signup(formData)
  };

  return (
    <div className="  min-h-screen grid lg:grid-cols-2 bg-gray-900 text-white">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center px-6 sm:px-12">
        <div className="w-full max-w-md space-y-6 bg-gray-800 p-8 rounded-2xl shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300">
                <MessageSquare className="size-7 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mt-2">Create Account</h1>
              <p className="text-gray-400">Get started with your free account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-medium">Full Name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>
              {/* submit option */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all duration-300"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center text-gray-400">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side with Animated Grid */}
      <AuthImagePattern />
    </div>
  );
};

export default SignUpPage;
