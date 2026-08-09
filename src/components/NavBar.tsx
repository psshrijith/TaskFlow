import { FormattedMessage } from "react-intl";

const NavBar = () => {
    console.log("navbar");
    return (
        <nav className="flex w-full flex-row items-start justify-between text-white list-none border-b border-red-100">
                <p className="text-white p-3">
                    <FormattedMessage id="landing.title" />
                </p>

                <div className="flex gap-4">
                    <ul className="flex list-none p-3 rounded-lg gap-6 items-center">
                        <li>Product</li>
                        <li>Resources</li>
                        <button className="p-3 bg-white text-black rounded-lg">SignUp</button>
                    </ul>
                </div>
            
        </nav>
    )

}

export default NavBar;
