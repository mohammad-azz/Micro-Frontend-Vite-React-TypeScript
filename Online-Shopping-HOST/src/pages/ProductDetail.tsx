import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductDetail as PD } from "remoteApp/ProductDetail"

export const ProductDetail = () => {
    let location = useLocation();
    const [pId, setPId] = useState<string | null>(null);
    useEffect(() => {
        setPId(location.state.key);
    }, [location])
    useEffect(() => {

    }, [pId])
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-3/4  pt-5">

                    {pId && <PD id={pId} />}
                </div>
            </div>
        </>
    )
}