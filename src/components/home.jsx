import { Link } from "react-router-dom";


export function Home() {
    return (
        <div className="flex  justify-center items-center h-screen">
            <div className="flex flex-col border-2 p-30 bg-black">
                <Link to="/sign-up" className="px-6 py-2 w-48 text-dark-600 text-center bg-amber-300 border border-amber-300 rounded-md hover:bg-amber-400 cursor-pointer transition duration-200">Sign Up</Link>
                <Link to="/login" className="px-6 py-2 mt-10 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition duration-200">Login</Link>
            </div>
        </div>

    )
}