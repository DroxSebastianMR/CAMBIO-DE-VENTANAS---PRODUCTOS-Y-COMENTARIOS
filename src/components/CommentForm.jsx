import { useState } from 'react';
import commentsData from '../data/commentsData';

function CommentForm({ product, navigate }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    commentsData.push({
      productId: product.id,
      productName: product.name,
      text: comment,
      date: new Date().toLocaleString()
    });

    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu comentario aquí..."
        required
      />
      <div className="buttons">
        <button className="comment" type="submit">Enviar</button>
        <button
          type="button"
          style={{ backgroundColor: '#6c757d' }}
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
