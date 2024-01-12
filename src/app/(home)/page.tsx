import Container from '@/components/Common/Container';
import EmptyState from '@/components/Common/EmptyState';
import FlotingButton from '@/components/Common/FlotingButton';
import ProductCard from '@/components/Products/ProductCard';
import getCurrentUser from '../actions/getCurrentUser';
import getProducts, { ProductsParams } from '../actions/getProducts';

interface HomeProps {
  searchParams: ProductsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {/* Category */}

      {products?.data.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="sm:gird-cols-2 lg:gird-cols-4 grid grid-cols-1 gap-8 pt-12 md:grid-cols-3 2xl:grid-cols-6">
            {products.data.map((product) => (
              <ProductCard key={product.id} currentUser={currentUser} data={product} />
            ))}
          </div>
        </>
      )}
      <FlotingButton href="/products/upload">+</FlotingButton>
    </Container>
  );
}
