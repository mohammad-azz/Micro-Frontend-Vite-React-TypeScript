
export const Product = (product: Product & {onClickfn:React.MouseEventHandler<HTMLDivElement> }) => {

    return (
        
            <div className="flex flex-col h-full">
                <div className="self-center w-4/5 " id={product.id.toString()} onClick={product.onClickfn}>
                    <img src={import.meta.env.VITE_BASE_URL + '/images/Bikes/'+product.image} />
                </div>
                <div className="flex flex-col pl-2 pr-2 pt-1 h-full">
                <div  className=" text-left text-zinc-800 font-bold uppercase">{product.BrandName}</div>
                    <div  className=" text-center text-zinc-500 ">{product.Name}</div>
                    <div className={`text-l text-center text-zinc-700 ${ product.discount? 'line-through' :''}`}>{product.Price}$</div>
                    {
                        product.discount ?  <div className="text-l text-center text-rose-600">{product.Price -((product.Price * product.discount) / 100)}$</div>
                         : ''
                    }
                    <div className="self-center  h-full content-end"> <button className="uppercase bg-cyan-400 pl-3 pr-3 pt-1 pb-1">ADD TO CART</button></div>
                </div>
            </div>
        
    )
}