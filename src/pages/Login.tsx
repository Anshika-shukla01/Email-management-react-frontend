import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await loginUser(email, password);

    if (res.success) {
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    } else {
      setError(res.message || 'Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-950 p-8 rounded-xl shadow-lg w-[360px]">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-900 text-white px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-900 text-white px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 rounded-md font-semibold hover:bg-green-400 transition"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-green-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
