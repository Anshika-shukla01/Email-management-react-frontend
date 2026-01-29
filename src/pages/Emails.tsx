import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getSentEmails } from '../api/email';

export default function Emails() {
  const [emails, setEmails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    async function fetchEmails() {
      try {
        const res = await getSentEmails();
        if (res.success) {
          setEmails(res.emails);
        } else {
          setError(res.message || 'Failed to load emails');
        }
      } catch {
        setError('Server error');
      } finally {
        setLoading(false);
      }
    }

    fetchEmails();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 mt-10 bg-slate-900">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Sent Emails
        </h2>

        {loading && (
          <p className="text-gray-500">Loading emails...</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && emails.length === 0 && (
          <p className="text-gray-500">
            No emails sent yet.
          </p>
        )}

        <div className="space-y-4">
          {emails.map((email) => (
            <div
              key={email.id}
              className="bg-slate-800 p-5 rounded-lg shadow-sm border"
            >
              <h3 className="font-semibold text-lg text-white">
                {email.subject}
              </h3>

              <p className="text-sm text-white mt-1">
                {new Date(email.created_at).toLocaleString()}
              </p>

              <p className="text-sm text-white mt-2">
                <span className="font-medium">Recipients:</span>{' '}
                {JSON.parse(email.recipients).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
