import { Link } from "react-router-dom";
import { faker } from '@faker-js/faker'
import Logo from '../assets/Logo.png'
import {faTruckFast,faMoneyBillTransfer,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type MenuItems = {
    title: string,
    url: string
}
const Header = () => {
    const menuItems: MenuItems[] = [{ 'title': 'BIKES', 'url': 'BIKES' }, { 'title': 'E-BIKES', 'url': 'EBIKES' }, { 'title': 'ROAD BIKES', 'url': 'ROADBIKES' },
    { 'title': 'MOUNTAIN BIKES', 'url': 'MOUNTAINBIKES' }, { 'title': 'GRAVEL BIKES', 'url': 'GRAVELBIKES' }]
    faker.commerce.department;
    return (
        <div className="w-full">
            <div className="w-full  flex flex-row justify-end pt-4 -mb-9 text-sm"> SIGN IN | CONTACT US | CREATE AN ACCOUNT</div>

            <div className="flex flex-row items-end pl-10 pr-10">

                <img src={Logo} alt="Vite logo" width={"150px"} />
                <div className="flex flex-row pl-10">
                    {
                        menuItems.map(item => <li key={item.url} className="list-none pl-5 pr-5" > <Link to={item.url} className="text-gray-700 no-underline font-bold hover:text-teal-500" >{item.title}</Link ></li>)
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