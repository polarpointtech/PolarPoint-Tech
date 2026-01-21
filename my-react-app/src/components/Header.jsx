import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '20px', 
      background: '#1a1a1a', 
      color: 'white' 
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/manufacturing" style={{ color: 'white', textDecoration: 'none' }}>Manufacturing</Link>
      <Link to="/construction" style={{ color: 'white', textDecoration: 'none' }}>Construction</Link>
      <Link to="/technology" style={{ color: 'white', textDecoration: 'none' }}>Technology</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
    </nav>
  );
}