import Head from 'next/head';
import CountdownSection from '../components/CountdownSection';
import Banner from '../components/Banner';
import productsData from '../data/products.json';
import Header from '../components/Header';
import ProductList from '@/components/ProductList';
import ProductCategoryList from '@/components/ProductCategoryList';
import { Product } from '@/models/Product';
import { ProductCategory } from '@/models/ProductCategory';


interface ProductsData {
  bestSellings: Product[];
  allProducts: Product[];
  ourProducts: Product[];
  productCategories: ProductCategory[];
}

const Home = () => {
  const data: ProductsData = productsData;

  return (
    <div>
      <Head>
        <title>Ecommerce Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner
        imageSrc="/images/banner.webp"
        title="Welcome to Our Store"
        subtitle="Find the Best Products Here"
        description="Explore our wide range of products and find the best deals and offers. We provide high-quality products to meet all your needs."
        buttonText="EXPLORE NOW"
      />
      <main className="container mx-auto p-4">

        <ProductList
          title="Best Sellings"
          description='Get in on the trend with our curated selection of best-selling styles.'
          products={data.bestSellings}
        />

        <ProductList
          title='Our Products'
          description='Get in on the trend with our curated selection of our products.'
          products={data.ourProducts}
        />

        <CountdownSection
          imageSrc="/images/counterDownImage.png"
          altText="Feature Image"
          title="Limited Time Offerr"
          description="Don't miss out on our special offer! This is a limited-time promotion, and the clock is ticking. Make sure to grab your favorite items before the offer ends."
          days={24}
          hours={12}
          minutes={43}
          buttonText="Shop Now"
        />

        <ProductCategoryList
          title="Designer Clothes for You"
          description="Some random text under the title about designer clothes."
          productCategory={data.productCategories}
        />

      </main>
    </div>
  );
}

export default Home;
