import Header from "./Header"
import { CarouselSilder } from '../Components/Carousel/Carousel'
import {Products} from 'remoteApp/Products';
const Layout = () => {

    return (
        <div className="w-full">
            <div className="h-screen flex flex-col">
                <Header />
                <CarouselSilder />
               <Products ItemCount={10} RowCount={2} />
            </div>
        </div>
    )
}
export default Layout;