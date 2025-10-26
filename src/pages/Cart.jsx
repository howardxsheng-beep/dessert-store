function Cart(){
    return(
        <>
        <section className="flex flex-col justify-center items-center">
            <div className=" h-[110px] flex items-center justify-center bg-surface-2 w-full sm:h-[105px]">
                <h1 className="text-dark-green text-2xl font-semibold">您的購物車</h1>
            </div>
            <ul className="">
                <li className="mt-[30px] grid max-w-[315px]  border-light-green border-b pb-2 ">
                    <div className="w-full max-w-[157px] aspect-[157/106] ">
                        <img  className="inset-0 w-full h-full object-cover object-center" src="images/cart-01.png"></img>
                    </div>
                     <div className=" w-[clamp(80px,40vw,141px)] flex  flex-col  ml-4">
                        <p className="text-dark-green flex text-xl">焦糖馬卡龍<br/>NT$ 450</p>
                        <div className="flex  flex-nowrap">
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green">-</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">1</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">+</div>
                        </div>
                    </div>
                    <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t">NT$ 900
                    </div>
                </li>
               
                <li className="mt-[30px] grid max-w-[315px]  border-light-green border-b pb-2 ">
                    <div className="w-full max-w-[157px] aspect-[157/106] ">
                        <img  className="inset-0 w-full h-full object-cover object-center" src="images/cart-01.png"></img>
                    </div>
                     <div className=" w-[clamp(80px,40vw,141px)] flex  flex-col  ml-4">
                        <p className="text-dark-green flex text-xl">焦糖馬卡龍<br/>NT$ 450</p>
                        <div className="flex  flex-nowrap">
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green">-</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">1</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">+</div>
                        </div>
                    </div>
                    <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t">NT$ 900
                    </div>
                </li>
                <li className="mt-[30px] grid max-w-[315px]  border-light-green border-b pb-2 ">
                    <div className="w-full max-w-[157px] aspect-[157/106] ">
                        <img  className="inset-0 w-full h-full object-cover object-center" src="images/cart-01.png"></img>
                    </div>
                     <div className=" w-[clamp(80px,40vw,141px)] flex  flex-col  ml-4">
                        <p className="text-dark-green flex text-xl">焦糖馬卡龍<br/>NT$ 450</p>
                        <div className="flex  flex-nowrap">
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green">-</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">1</div>
                            <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px">+</div>
                        </div>
                    </div>
                    <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t">NT$ 900
                    </div>
                </li>
            </ul>
            <section className="flex max-w-[315px] justify-center items-center flex-col w-full mt-[32px]">
                <div className="bg-surface-2  w-full h-[65px] flex justify-center items-center text-dark-green text-2xl font-semibold">
                    訂單摘要
                </div>
                <div className="w-full  text-dark-green ">
                   <div className="flex justify-between w-full"> 
                    <p >小記</p>
                    <p >NT$ 2,700</p>
                    </div>
                    <div className="flex justify-between w-full"> 
                    <p >運費</p>
                    <p >NT$ 300</p>
                    </div>
                    <div className="text-xl font-semibold flex justify-between w-full"> 
                    <p >總計</p>
                    <p >NT$ 3,000</p>
                    </div>
                </div>
            </section>
            <div className="w-full flex justify-center items-center h-[65px] mt-4 font-semibold text-2xl text-dark-green bg-light-yellow">結帳

            </div>
                
        </section>
        </>
    )
}
export default Cart;