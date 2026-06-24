import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Mock login for now, this would normally call api.post('/auth/login')
      setTimeout(() => {
        login('dummy-token', { id: '1', name: 'Admin', email, role: 'admin' });
        navigate('/internal/dashboard');
      }, 1000);
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-md glass-tile p-8">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl mb-4">✨</span>
          <h1 className="text-2xl font-bold">Portal GBB</h1>
          <p className="text-muted-foreground mt-2">Masuk ke akun Anda</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg focus:outline-none focus:border-primary"
              placeholder="nama@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg focus:outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-2.5 mt-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'Memeriksa...' : 'Masuk'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">Khusus untuk Admin, Mentor, Donatur, dan Beswan GBB.</p>
        </div>
      </div>
    </div>
  );
}
