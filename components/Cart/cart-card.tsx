import { useStore } from "@/hooks/useStore";
import AddToCartButton from "../product/add-to-cart-button";

const CartCard = ({ id }: { id: string }) => {
  const { product } = useStore();

  const finalProduct = product.find((item) => item.idMeal === id);
  if (finalProduct) {
    return (
      <div className="p-3 flex items-center justify-between border-2 mt-3">
        <div className="flex space-x-1">
          <div className="h-16 w-16">
            <img
              src={finalProduct.strMealThumb}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="font-semibold">{finalProduct.strMeal}</h1>
            <h2>₹{finalProduct.amount}</h2>
          </div>
        </div>

        <div>
          <AddToCartButton data={finalProduct} />
        </div>
      </div>
    );
  }
};

export default CartCard;
