import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { X, Mail, Lock } from "lucide-react";
import logo from "../assets/imclogo1.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (email === "admin@imc.com" && password === "pass@imC") {
        navigate("/admin@IMCBSLLP");
      } else {
        setError("Unauthorized access. Only admins can log in.");
      }
    } catch (err) {
      setError("Failed to log in. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-black/60">
      <div className=" max-w-md w-full bg-gradient-to-r from-[#867d86] via-[#97508e] to-[#500347] overflow-hidden p-[1px] bg-[#3c3333]  rounded-2xl">
      <div className="w-full relative max-w-md bg-[#121212] p-8 text-white rounded-2xl shadow-2xl">
        
        <div className="absolute right-5 top-5">
          <button onClick={() => navigate("/")}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
          </div>
          <div className="flex justify-center text-center items-center mb-6 mt-5">
          <h2 className="text-3xl font-bold flex justify-center text-center textGradient4">LOGIN</h2>
          
        </div>

        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="w-24" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative flex items-center justify-center">
            <Mail className="absolute left-3  text-gray-400" />
            <input
              type="email"
              placeholder="Enter valid email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 py-2 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative flex items-center justify-center">
            <Lock className="absolute left-3  text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-2 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg ${
              loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Forgot password?{" "}
            <a href="#" className="text-purple-500 underline">
              Click here to reset
            </a>
          </p>
          <p
            className="mt-2 text-sm text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go back
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
