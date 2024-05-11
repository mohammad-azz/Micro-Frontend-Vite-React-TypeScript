import { useEffect } from 'react';
import { CarouselSilder } from '../Components/Carousel/Carousel'
import { Products } from 'remoteApp/Products';
import {EventType} from '../../../Globals'
import {  useNavigate } from 'react-router-dom';

export const Home = () => {
    const nav = useNavigate();
    useEffect(() => {
       document.addEventListener(EventType.PRODUCT_CLICK__VIEW_DETAIL, (event:  any) => {
   
           nav("/ProductDetail",{state: event.detail});
        });
        document.removeEventListener(EventType.PRODUCT_CLICK__VIEW_DETAIL, ()=>{});

    }, []);
    return (
        <div className=" flex flex-col w-screen  bg-white">
            <div >
                <CarouselSilder />
                <Products ItemCount={7} RowCount={'grid-cols-4'} />
            </div>
        </div>
    )

}
export default Home