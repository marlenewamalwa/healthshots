import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <div className="min-h-screen bg-[#FFFBEF] text-[#36441F] p-6">
      <h1 className="text-3xl font-bold text-[#7D9457] mb-6">Shop Health Shots</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ProductCard
          name="Ginger Lemon Shot"
          description="Strong blend of ginger, lemon & cayenne. Great for immunity."
          price="200"
        />
        <ProductCard
  name="Ginger Lemon Shot"
  description="Strong blend of ginger, lemon & cayenne. Great for immunity."
  price="200"
/>
<ProductCard
  name="Turmeric Booster"
  description="Anti-inflammatory shot with turmeric, black pepper & honey."
  price="220"
/>
<ProductCard
  name="Mint Cooler"
  description="Refreshing mint, cucumber, lemon & a dash of apple."
  price="180"
/>

      </div>
    </div>
  );
}

export default Shop;
