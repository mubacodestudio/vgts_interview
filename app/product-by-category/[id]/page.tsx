import Product from "@/components/product";

const ProductByCategoryPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <Product id={params.id} />;
};

export default ProductByCategoryPage;
