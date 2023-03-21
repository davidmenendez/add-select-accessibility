import { prefix } from "../../constants"

const Header = ({
  children,
}) => (
  <div className={`${prefix}__header`}>
    {children}
  </div>
);

export default Header;
