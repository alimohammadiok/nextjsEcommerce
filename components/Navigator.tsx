import CartIcon from "./CartIcon";
import LoginButton from "./LoginButton";

const Navigator = () => {
    return (
        <nav className="container mx-auto flex justify-between">
            <div className="text-lg font-bold">Ecommerce</div>
            <ul className="flex space-x-4">
                <li>Home</li>
                <li>Shop</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>
            <div className="flex items-center space-x-4">
                <CartIcon />
                <LoginButton />

            </div>
        </nav>
    )
}

export default Navigator;
