const NavLink = ({ text, isActive, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={isActive ? "active" : "inactive"}
    >
      <p>{text}</p>
    </button>
  );
};

export default NavLink;
