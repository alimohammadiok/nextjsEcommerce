// components/DesignerClothes.tsx
import ProductCategoryCard from './ProductCategoryCard';
import { ProductCategory } from '../models/ProductCategory';


interface ProductCategoryListProps {
  title: string;
  description: string;
  productCategory: ProductCategory[];
}

const ProductCategoryList = ({ title, description, productCategory }: ProductCategoryListProps) => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <p className="mb-4 text-center">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productCategory.slice(0, 3).map(productCategory => (
          <ProductCategoryCard key={productCategory.id} productCategory={productCategory} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategoryList;
