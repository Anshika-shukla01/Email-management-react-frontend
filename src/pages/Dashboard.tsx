import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { sendEmail } from '../api/email';

export default function Dashboard() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/login'); //  clean redirect
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPreviewUrl('');

    const res = await sendEmail(subject, message);

    if (res.success) {
      setPreviewUrl(res.preview);
      setSubject('');
      setMessage('');
    } else {
      setError(res.message || 'Failed to send email');
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar />

      <div className="flex justify-center mt-12 px-4 bg-slate-800">
        <div className="bg-slate-900 w-full max-w-xl p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Send Test Email
          </h2>
          <p className="text-sm text-slate-300 mb-6">
            Emails are sent using Ethereal (test inbox)
          </p>

          <form onSubmit={submit} className="space-y-4">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border px-4 py-2 rounded-md bg-slate-800"
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full border px-4 py-2 rounded-md bg-slate-800"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3B82F6] text-white py-2 rounded-md font-semibold"
            >
              {loading ? 'Sending...' : 'Send Email'}
            </button>
            <button type="button" onClick={logout}>
              Logout
            </button>

          </form>

          {error && (
            <p className="mt-4 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {previewUrl && (
            <p className="mt-4 text-sm text-green-600 text-center">
              ✅ Email sent successfully {' '}
              <a
                href={previewUrl}
                target="_blank"
                className="underline font-medium"
              >
                Preview Email
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
