import { useEffect, useState } from "react"
import { GetAllProducts } from "./Services/APIs"
import { Product } from "./components/Product";
import '../src/product.css'
export const Products = ({ ItemCount = 6, RowCount = 'grid-cols-2' }: { ItemCount?: number, RowCount?: string }) => {
  
    const [productsList, setProductsList] = useState<ProductsList[]>([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        GetAllProducts().then(Response => setProductsList(Response)).then(()=>setIsLoad(true));
        
    }, [])

    return (
        <>
            {isLoad &&
                <div className={`grid gap-3 w-screen ${RowCount}`}>
                    {
                        productsList.slice(0, ItemCount).map(productItem =>
                            <Product key={productItem.id + productItem.Name} {...productItem} />
                        )
                    } </div>
            }
        </>
    )
}

