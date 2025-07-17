function Instruction() {
  return (
    <div className="mb-[100px]">
      <h3 className="text-2xl text-green my-6 mx-0">How to Order?</h3>
      <ul className="p-0">
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> Sign in (or create an
          account) and set your delivery address.
        </li>
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> Choose the restaurant you
          want to order from.
        </li>
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> Select your items and tap
          “Add to Cart”.
        </li>
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> To place your order, select
          “View cart” or “Checkout”.
        </li>
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> Review your order and tap
          “Place Order”...
        </li>
        <li className="text-lg font-medium leading-[30px] list-none flex items-start">
          <span className="text-green mr-2">•</span> Track your order progress.
        </li>
      </ul>
    </div>
  );
}

export default Instruction;
