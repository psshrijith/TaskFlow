import { FormattedMessage } from "react-intl";

const NavBar = ({setOpenForm}) => {

    return (
        <nav className="flex w-full flex-row items-start justify-between text-white list-none border-b border-red-100 px-10">
                <p className="text-white p-3 text-3xl">
                    <FormattedMessage id="landing.title" />
                </p>

                <div className="flex gap-4">
                    <ul className="flex list-none p-3 rounded-lg gap-6 items-center">
                        <li>Product</li>
                        <li>Resources</li>
                        <button 
                            className="px-3 py-2 bg-white text-black rounded-lg"
                            onClick={() => setOpenForm(true)}
                        >
                        SignUp</button>
                    </ul>
                </div>
            
        </nav>
    )

}

export default NavBar;
