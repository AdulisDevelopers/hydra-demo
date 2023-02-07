import Card from "./Card";

const Products = () => {
  const products = [
    { image: "oculus_1.png", title: "SIMULATION" },
    { image: "oculus_2.png", title: "EDUATION" },
    { image: "oculus_3.png", title: "SELF-CARE" },
    { image: "oculus_4.png", title: "OUTDOOR" },
  ];
  return (
    <div className="px-6 py-3 mt-20 grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default Products;
