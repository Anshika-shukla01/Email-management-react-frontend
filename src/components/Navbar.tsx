import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <nav className="bg-slate-950 border-b border-blue-200 px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Email App</h1>

            <div className="flex gap-6 items-center">
                {token && (
                    <>
                    <Link className="hover:text-blue-700" to="/dashboard">
                    Dashboard
                    </Link>
                    <Link className="hover:text-blue-700" to="/emails">
                    Emails
                    </Link>
                    <button 
                    onClick={logout}
                    className="bg-[#FF8585] text-white px-4 py-2 rounded hover:opacity-90"
                    >
                        Logout
                    </button>
                    </>
                )}
            </div>
        </nav>
    );
}