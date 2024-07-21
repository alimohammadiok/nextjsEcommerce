import TextHeading from './TextHeading';
import PriceText from './PriceText';
import Rating from './Rating';
import { Product } from '../models/Product';

interface CardProps {
    product: Product;
}

const Card = ({ product }: CardProps) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="relative w-full pb-[150%]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <TextHeading>{product.name}</TextHeading>
            <div className="mt-4 flex items-center">
                <div className="flex-1">
                    <PriceText amount={product.price} />
                </div>
                <div className="border-l border-gray-300 h-6 mx-4"></div>
                <div className="flex-1">
                    <Rating value={product.rating} />
                </div>
            </div>
        </div>
    );
};

export default Card;
