import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';
import './auth.css';
import './admin.css';
import './organizer.css';
import './user.css';
import './react-overrides.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
