import React, { useState } from 'react';
import { X, Lock, Mail, User, ArrowRight } from 'lucide-react';
import SpinLogo from './SpinLogo';
import './AuthModal.css';

export default function AuthModal({ onClose, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthSuccess(isLogin ? `Welcome back, ${email.split('@')[0]}!` : `Account created! Welcome to Spin Global, ${name || 'Traveler'}!`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card auth-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close auth modal">
          <X size={20} />
        </button>

        <div className="auth-header">
          <SpinLogo size="small" />
          <h2 className="auth-title">{isLogin ? 'Sign In to Your Account' : 'Create Free Account'}</h2>
          <p className="auth-sub">Access exclusive flight deals, tour rewards and booking history.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="auth-input-group">
              <label>Full Name</label>
              <div className="input-wrap">
                <User size={16} className="auth-icon" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="input-wrap">
              <Mail size={16} className="auth-icon" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <div className="input-wrap">
              <Lock size={16} className="auth-icon" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="auth-footer-toggle">
          <span>{isLogin ? "Don't have an account?" : 'Already have an account?'}</span>
          <button className="toggle-mode-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register Now' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
