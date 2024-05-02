import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { faTruckFast, faMoneyBillTransfer, faPhoneVolume, faUserAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { Modal } from "../Components/Modal/modal";

// import CurrencyFormat from 'react-currency-format';

type MenuItems = {
    title: string,
    url: string
}
const Header = () => {
    let CardVal = 0;
    const menuItems: MenuItems[] = [{ 'title': 'BIKES', 'url': 'BIKES' }, { 'title': 'E-BIKES', 'url': 'EBIKES' }, { 'title': 'ROAD BIKES', 'url': 'ROADBIKES' },
    { 'title': 'MOUNTAIN BIKES', 'url': 'MOUNTAINBIKES' }, { 'title': 'GRAVEL BIKES', 'url': 'GRAVELBIKES' }]

    const [showLogin, setshowLogin] = useState(false);

    const userClick = () => {
        if (!localStorage.getItem('useName'))
            setshowLogin(true)
    }
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('http://localhost:5002/src/Login?t=${Date.now()}')
          .then(response => response.text())
          .then(html => setHtmlContent(html))
          .catch(error => console.error('Error fetching remote HTML:', error));
      }, []);
    return (
        <div className="w-full">
            {showLogin && <Modal visible={showLogin} invisible={setshowLogin} title="Log in with email address and password" content={htmlContent} />}
            <div className="w-full  flex flex-row gap-5 justify-end pt-4 -mb-9 pr-12 text-sm text-gray-700">
                <FontAwesomeIcon icon={faUserAlt} size="2x" onClick={() => userClick()} className="cursor-pointer" />
                <div>
                    <FontAwesomeIcon icon={faShoppingBasket} size="2x" className="cursor-pointer" />
                    <span className="text-xl pl-2">
                        {CardVal.toString()}
                        {/* <CurrencyFormat  thousandSeparator={true} value={CardVal.toString()} displayType="text" prefix={'€'}/> */}
                    </span></div>
            </div>

            <div className="flex flex-row items-end pl-10 pr-10">
                <img src={Logo} alt="Vite logo" width={"150px"} />
                <div className="flex flex-row pl-10  ">
                    {
                        menuItems.map(item => <li key={item.url} className="list-none pl-5 pr-5 " > <Link to={item.url} className="text-gray-700 no-underline font-bold hover:text-teal-500" >{item.title}</Link ></li>)
                    }
                </div>
            </div>
            <div className=" h-12 mt-2 flex flex-row">
                <div className="h-full bg-teal-400 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faTruckFast} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">FREE SHIPPING & RETURN</span></div>
                <div className="h-full bg-teal-500 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faMoneyBillTransfer} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">30-DAY RETURN POLICY</span></div>
                <div className="h-full bg-teal-500 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faPhoneVolume} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">ONLINE SUPPORT 24</span></div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Header;