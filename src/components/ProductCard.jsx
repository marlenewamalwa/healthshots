import { useCart } from '../context/CartContext';

function ProductCard({ name, description, price }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ name, description, price });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
      <h2 className="text-xl font-bold text-[#7D9457]">{name}</h2>
      <p className="text-[#36441F] mt-1">{description}</p>
      <p className="text-[#DC951E] font-semibold mt-2">Ksh {price}</p>
      <button
        onClick={handleAdd}
        className="mt-4 bg-[#EDBE2B] text-white px-4 py-2 rounded hover:bg-[#DC951E] transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
