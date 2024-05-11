import { Fragment, useEffect, useState } from "react"
import { GetProductDetail } from "./Services/APIs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const ProductDetail = ({ id }: { id: string }) => {
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        GetProductDetail(id).then(Response => setProduct(Response));

    }, [])
    return (
        <>
            {product &&
                <Fragment>
                    <div className="flex flex-row">
                        <div className="w-1/2 flex flex-col">
                            <span className="text-2xl">{product.Name}</span>
                            <img src={import.meta.env.VITE_BASE_URL + '/images/Bikes/' + product.image} />
                        </div>
                        <div className="w-1/2 flex flex-col pl-10 gap-2 self-center pb-9">
                            {product.discount ? (
                                <div className="flex flex-row gap-3  items-center">
                                    <span className="text-red-600 text-3xl font-bold">
                                        {product.Price - (product.Price * product.discount / 100)} €
                                    </span>
                                    <FontAwesomeIcon icon={faPercent} size="xl" />
                                    <span className="text-lg">{product.Price} ({product.discount}%) OFF</span>
                                </div>
                            ) :
                                (
                                    <div className="flex flex-row">
                                        <span className="text-3xl">{product.Price}€</span>
                                    </div>
                                )}
                            <span className="text-green-600">Prices include VAT plus shipping costs</span>
                            <div className=" pt-5 pb-5"> 
                                <span>Frame height</span>
                                <div>
                                    <fieldset className="flex gap-10">
                                        <div className="relative flex items-center">
                                            <input className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50" type="radio" value="huey" checked id="huey" name="drone" />
                                            <label htmlFor="huey" className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" >
                                                35CM
                                            </label>
                                            <svg className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-1 description-1" role="graphics-symbol">
                                                <title id="title-1">Circle Shape</title>
                                                <circle cx="8" cy="8" r="4" />
                                            </svg>
                                        </div>
                                        <div className="relative flex items-center">
                                            <input className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50" type="radio" value="dewey" id="dewey" name="drone" />
                                            <label className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" htmlFor="dewey">
                                                53CM
                                            </label>
                                            <svg className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-2 description-2" role="graphics-symbol">
                                                <title id="title-2">Circle Shape</title>
                                                <circle cx="8" cy="8" r="4" />
                                            </svg>
                                        </div>
                                       
                                    </fieldset>
                                </div>
                            </div>
                            <span className="text-lg">delivery time: 4 - 6 working days</span>
                            {/* <input type="button" id="addcart" className="w-1/6" value="" /> */}
                            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                                <span className="order-2">Add to Cart</span>
                                <span className="relative only:-mx-5">
                                    <FontAwesomeIcon icon={faCartShopping} size="1x" />
                                </span>
                            </button>

                        </div>

                    </div>
                    <div className="flex flex-col">

                        <span>Description : </span>
                        {product.detail}
                    </div>
                </Fragment>
            }
        </>

    )
}