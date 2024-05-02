import Header from "./Header"
import { CarouselSilder } from '../Components/Carousel/Carousel'
import { Products } from 'remoteApp/Products';

const Layout = () => {


    return (

        <div className=" flex flex-col w-screen  bg-white">
            <div className="h-lvh">

                <Header />
                <CarouselSilder />
            </div>
            <Products ItemCount={7} RowCount={'grid-cols-4'} />

        </div>

    )
}
export default Layout;