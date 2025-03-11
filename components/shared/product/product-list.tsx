import { Product } from '@/types';
import ProductCard from './product-card';

const ProductList = ({
  title,
  data,
  limit,
}: {
  title?: string;
  data: Product[];
  limit?: number;
}) => {
  const products = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product: Product) => (
              <ProductCard
                product={product}
                key={product.slug}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No found products</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
