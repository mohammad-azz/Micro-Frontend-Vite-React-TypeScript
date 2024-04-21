import { useEffect, useState } from "react"
import { GetAllProducts } from "./Services/APIs"
import { Product } from "./components/Product";
import '../src/product.css'
export const Products = ({ItemCount=10}: { ItemCount?: number }) => {
    console.log("Items Count : " + ItemCount)
    const [productsList, setProductsList] = useState<ProductsList[]>([]);
    useEffect(() => {
        GetAllProducts().then(Response => setProductsList(Response));
    }, [])
    return (
        <>
            {
                <div className="grid gap-3 w-screen grid-cols-3" >
                    {
                        productsList.slice(0, ItemCount).map(productItem =>
                            <Product {...productItem} />
                        )
                    } </div>
            }
        </>
    )
}

