import Link from "next/link";
import IconComponent from "../UI/icon-component";
import CartButton from "./cart-button";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-10 bg-blue-200">
      {/* logo */}
      <Link href={"/"} className="text-2xl font-bold text-red-600">
        LOGO
      </Link>

      {/* right container */}
      <div className="flex items-center space-x-3">
        <CartButton />
        <IconComponent fontSize={"1.8rem"} icon="ant-design:setting-filled" />
      </div>
    </header>
  );
};

export default Header;
