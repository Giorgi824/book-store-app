function Button({ children, handleOrderPopup }) {
  const className =
    children === "Order Now"
      ? "bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 flex gap-2 justify-between items-center"
      : "bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300";
  return (
    <div>
      <button
        data-aos='zoom-in'
        className={className}
        onClick={() => handleOrderPopup()}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
