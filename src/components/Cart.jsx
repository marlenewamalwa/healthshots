import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-md mt-6">
      <h2 className="text-xl font-bold text-[#7D9457] mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border-b py-2">
              <span className="text-[#36441F] font-medium">{item.name}</span>{' '}
              - Ksh {item.price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4 font-semibold text-[#DC951E]">
          Total: Ksh {total}
        </div>
      )}
    </div>
  );
}

export default Cart;
