import { useParams, useNavigate } from 'react-router-dom';
import CommentForm from '../components/CommentForm';

const products = [
  { id: 1, name: 'Camiseta' },
  { id: 2, name: 'Zapatillas' },
  { id: 3, name: 'Gorra' },
];

function ConfirmPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="container">
      <h1>Comentario para Producto #{product.id}</h1>
      <h3 style={{ textAlign: 'center', color: '#555' }}>
        Comentario del artículo: <em>{product.name}</em>
      </h3>
      <CommentForm product={product} navigate={navigate} />
    </div>
  );
}

export default ConfirmPage;
