import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Camiseta' },
  { id: 2, name: 'Zapatillas' },
  { id: 3, name: 'Gorra' },
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
