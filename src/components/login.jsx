import { Link,useNavigate } from "react-router-dom";
import React,{useState} from "react";
import {app} from "../firebase/firebase.config";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User signed in:", user);
            alert("User signed in successfully!");
            navigate("/dashboard"); // Redirect to dashboard after login
          } catch (error) {
            console.error("Error signing in:", error);
            alert("Error signing in. Please check your credentials.");
          }
    }
    return (
        <div className="flex items-center justify-center bg-gray-100 mt-20">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email :</label>
                        <input
                            type="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password :</label>
                        <input
                            type="password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4">
                    New User <Link className="text-blue-500 hover:underline" to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
