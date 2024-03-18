import { useDispatch } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";

const MenuToggler = () => {
  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  return (
    <div className="mb-4 ms-0 show-1023">
      <button
        onClick={menuToggleHandler}
        type="button"
        className="theme-btn toggle-filters"
      >
        <span className="flaticon-menu-1"></span> Menu
      </button>
    </div>
  );
};

export default MenuToggler;
