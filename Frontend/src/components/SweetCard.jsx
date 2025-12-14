function SweetCard({ sweet, onPurchase }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-pink-600">
        {sweet.name}
      </h3>

      <p className="text-sm text-gray-600">
        Category: {sweet.category}
      </p>

      <p className="mt-2 font-semibold">
        ₹{sweet.price}
      </p>

      <p className="text-sm">
        Stock:{" "}
        <span
          className={
            sweet.quantity === 0 ? "text-red-500" : "text-green-600"
          }
        >
          {sweet.quantity}
        </span>
      </p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet._id)}
        className={`mt-4 w-full py-2 rounded text-white ${sweet.quantity === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-pink-500 hover:bg-pink-600"
          }`}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}

export default SweetCard;
