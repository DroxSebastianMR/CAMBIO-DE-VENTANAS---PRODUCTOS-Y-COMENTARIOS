import commentsData from '../data/commentsData';

function CommentList() {
  return (
    <div>
      {commentsData.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        commentsData.map((c, index) => (
          <div key={index} className="card">
            <h3>{c.productName}</h3>
            <p><strong>Comentario:</strong> {c.text}</p>
            <p><small>{c.date}</small></p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;
