import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#222',
      padding: '10px 20px',
      marginBottom: '20px'
    }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Productos</Link>
      <Link to="/comentarios" style={{ color: 'white', textDecoration: 'none' }}>Comentarios</Link>
    </nav>
  );
}

export default Navbar;
