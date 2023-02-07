const Card = ({ product: { image, title } }) => {
  console.log(image);
  return (
    <div className="text-center max-w-sm p-5 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 rounded-md grid place-items-center gap-3">
      <img
        className="rounded-full aspect-square border-8 border-primary-950"
        src={`/${image}`}
        alt=""
      />
      <h1 className="text-2xl font-semibold uppercase">{title}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
        dolorum soluta voluptatum saepe maxime fugiat odit ratione corrupti
        assumenda minus.
      </p>
      <a
        className="font-semibold w-full py-3 rounded-full text-black bg-gradient-to-r from-primary-700 to-primary-500 "
        href="#"
      >
        try it now
      </a>
    </div>
  );
};

export default Card;
