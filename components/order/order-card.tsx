import { Ordertype } from "@/data/type";

const OrderCard = ({ data }: { data: Ordertype }) => {
  return (
    <div className="border-2 border-blue-400 p-3 col-span-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          Order Id: <span className="font-semibold">#{data.orderId}</span>
        </h1>

        <h1>
          Total: <span className="font-semibold">₹{data.total}</span>
        </h1>
      </div>

      <div className="mt-4">
        <h1 className="font-bold">Items</h1>
        {data.items.map((item) => (
          <div className="p-3 flex items-center justify-between border-2 mt-3">
            <div className="flex space-x-1">
              <div className="h-16 w-16">
                <img
                  src={item.strMealThumb}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="font-semibold">{item.strMeal}</h1>
                <h2>₹{item.amount}</h2>
              </div>
            </div>

            <div>
              {item.count} X {item.amount} = {item.count * item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
