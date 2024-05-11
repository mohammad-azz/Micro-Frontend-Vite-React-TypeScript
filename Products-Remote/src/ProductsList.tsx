import React, { useEffect, useState } from "react"
import { GetAllProducts } from "./Services/APIs"
import { Product } from "./components/Product";
import '../src/product.css'
import {EventType} from '../../Globals'
export const Products = ({ ItemCount = 6, RowCount = 'grid-cols-2' }: { ItemCount?: number, RowCount?: string }) => {

    const [productsList, setProductsList] = useState<Product[]>([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        GetAllProducts().then(Response => setProductsList(Response)).then(() => setIsLoad(true));

    }, [])
    const ClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log("click")
        const e = new CustomEvent(EventType.PRODUCT_CLICK__VIEW_DETAIL, { detail: { key: event.currentTarget.id } });
        document.dispatchEvent(e);

    }
    return (
        <>
            {isLoad &&
                <div className={`grid gap-3 w-screen ${RowCount}`} >
                    {
                        productsList.slice(0, ItemCount).map(productItem =>
                            <Product key={productItem.id + productItem.Name} {...productItem} onClickfn={(e) => ClickHandler(e)} />
                        )
                    } </div>
            }
        </>
    )
}

