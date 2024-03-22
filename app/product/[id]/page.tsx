import ProductDetail from "@/components/product/product-detail";

const ProductDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <ProductDetail id={params.id} />;
};

export default ProductDetailPage;
