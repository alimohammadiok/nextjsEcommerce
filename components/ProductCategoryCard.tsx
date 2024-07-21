import TextHeading from './TextHeading';
import { ProductCategory } from '../models/ProductCategory';
import TextBody from './TextBody';

interface ProductCategoryCardProps {
    productCategory: ProductCategory;
}

const ProductCategoryCard = ({ productCategory }: ProductCategoryCardProps) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="relative w-full pb-[150%]">
                <img
                    src={productCategory.image}
                    alt={productCategory.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <TextHeading>{productCategory.name}</TextHeading>
            <TextBody>{productCategory.description}</TextBody>
        </div>
    );
};

export default ProductCategoryCard;
