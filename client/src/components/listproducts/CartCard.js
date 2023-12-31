import React, { useEffect, useState } from "react";
import { removefromcart } from "../../api";

const CartCard = (props) => {
    const {product} = props;
    const { image, name, description, price, pid, _id, quantity } = product;
    const remove = ()=>{
        const body = {_id}
        const res = removefromcart(body);
        console.log(res);
        window.location.reload();
    }
    return (
        <>
            <div key={_id} className="md:flex items-center py-8 border-t border-lime-950">
                <div className="w-1/4">
                    <img
                        src={`${image}`}
                        alt="product img"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="md:pl-3 md:w-3/4 h-48 flex flex-col  justify-between ">
                    <div className="flex w-full pt-1">
                        <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">
                            {pid}
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800" text-2xl	>
                            {name}
                        </p>
                        <p className="text-base font-black leading-none text-gray-800">
                            {quantity}
                        </p>

                    </div>

                    <p className=" text-xs leading-3 text-gray-800">
                        {description}
                    </p>
                    <div className="flex items-center justify-end pt-5 pr-6">
                        <p className="text-base font-black leading-none text-gray-800">
                            ₹{price}
                        </p>
                       
                    </div>
                    <div className="flex items-center justify-end pt-5 pr-3">
                            <button className=" bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={remove}>
                                Remove
                            </button>
                        </div>
                </div>

            </div>
        </>
    )
}

export default CartCard;