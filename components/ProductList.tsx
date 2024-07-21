// components/DesignerClothes.tsx
import Card from './Card';
import { Product } from '../models/Product';


interface ProductListProps {
  title: string;
  description: string;
  products: Product[];
}

const ProductList = ({ title, description, products }: ProductListProps) => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <p className="mb-4 text-center">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.slice(0, 3).map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
