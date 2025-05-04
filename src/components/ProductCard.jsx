import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const [likes, setLikes] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Likes: {likes}</p>
      <div className="buttons">
        <button className="like" onClick={() => setLikes(likes + 1)}>👍 Me gusta</button>
        <button className="comment" onClick={() => navigate(`/confirm/${product.id}`)}>💬 Comentar</button>
      </div>
    </div>
  );
}

export default ProductCard;
