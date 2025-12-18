const CartItem = ({ item, index, refreshCartItems }) => {

  return (
    <div
      key={index}
      className="flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200"
    >
      <div className="flex items-center gap-4">
        <img
          src={item.image_src}
          alt={item.plant_name}
          className="w-20 h-20 object-cover rounded-lg border border-slate-200"
        />
        <div>
          <div className="flex items-center">
            <div className="font-semibold text-emerald-800 text-lg mr-3">
              {item.plant_name}
            </div>
            <div className="text-slate-500 text-md">${item.price_per_unit * (item.quantity ?? 1)}</div>
          </div>
          <div className="text-gray-400 text-sm">
            Pot color: <span className="font-medium">{item.pot_color}</span>
          </div>
            <div className="text-gray-600 mt-1">Qty: {item.quantity}</div>
        </div>
      </div>
      <button
        className="flex items-center gap-2 text-slate-400 hover:text-red-700 font-medium transition-colors cursor-pointer"
        onClick={async (e) => {
          e.preventDefault();
          refreshCartItems(item.id);
        }}
      >
        <i className="fa-solid fa-trash-can"></i> Remove
      </button>
    </div>
  );
};

export default CartItem;
