import { NavLink, Link } from "react-router-dom";
function Cart() {
  return (
    <>
      <section className="flex flex-col justify-center items-center sm:flex-row ">
        <div className="w-full sm:w-auto sm:max-w-[620px] flex flex-col items-center">
          <div className=" h-[110px] flex items-center justify-center bg-surface-2 w-full sm:h-[65px] sm:max-w-[620px]  ">
            <h1 className="text-dark-green text-2xl font-semibold group-hover:scale-110">
              您的購物車
            </h1>
          </div>
          <ul className="w-full max-w-[315px] sm:max-w-[620px] mx-auto">
            <li className="mt-[30px] grid max-w-[315px] w-full  border-light-green border-b pb-2 sm:max-w-[620px] sm:flex sm:h-[130px] sm:items-center sm:gap-3 md:gap-7 xl:gap-10">
              <div className="w-full max-w-[157px] aspect-[157/106] sm:aspect-[1/1] sm:h-[110px] sm:w-auto  ">
                <img
                  className="inset-0 w-full h-full object-cover object-center"
                  src="images/cart-01.png"
                ></img>
              </div>
              <div className="  flex  flex-col  ml-4 sm:flex-row sm:flex-1 sm:h-[110px] sm:ml-0 sm:min-w-0">
                <p className="text-dark-green flex text-xl sm:justify-center sm:items-center sm:w-[110px] sm:mr-10  ">
                  焦糖馬卡龍
                  <br />
                  NT$ 450
                </p>
                <div className="flex  flex-nowrap sm:items-center ">
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green sm:w-12 sm:h-12">
                    -
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    1
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    +
                  </div>
                </div>
              </div>

              <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t sm:border-0 sm:h-[130px] sm:mt-0 sm:ml-auto whitespace-nowrap">
                NT$ 900
                <img
                  className="hidden sm:ml-[10px] md:ml-[25px] xl:ml-[40px] sm:block"
                  src="images/delete.png"
                ></img>
              </div>
            </li>
            <li className="mt-[30px] grid max-w-[315px] w-full  border-light-green border-b pb-2 sm:max-w-[620px] sm:flex sm:h-[130px] sm:items-center sm:gap-3 md:gap-7 xl:gap-10">
              <div className="w-full max-w-[157px] aspect-[157/106] sm:aspect-[1/1] sm:h-[110px] sm:w-auto  ">
                <img
                  className="inset-0 w-full h-full object-cover object-center"
                  src="images/cart-01.png"
                ></img>
              </div>
              <div className="  flex  flex-col  ml-4 sm:flex-row sm:flex-1 sm:h-[110px] sm:ml-0 sm:min-w-0">
                <p className="text-dark-green flex text-xl sm:justify-center sm:items-center sm:w-[110px] sm:mr-10  ">
                  焦糖馬卡龍
                  <br />
                  NT$ 450
                </p>
                <div className="flex  flex-nowrap sm:items-center ">
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green sm:w-12 sm:h-12">
                    -
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    1
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    +
                  </div>
                </div>
              </div>

              <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t sm:border-0 sm:h-[130px] sm:mt-0 sm:ml-auto whitespace-nowrap">
                NT$ 900
                <img
                  className="hidden sm:ml-[10px] md:ml-[25px] xl:ml-[40px] sm:block"
                  src="images/delete.png"
                ></img>
              </div>
            </li>
            <li className="mt-[30px] grid max-w-[315px] w-full  border-light-green border-b pb-2 sm:max-w-[620px] sm:flex sm:h-[130px] sm:items-center sm:gap-3 md:gap-7 xl:gap-10">
              <div className="w-full max-w-[157px] aspect-[157/106] sm:aspect-[1/1] sm:h-[110px] sm:w-auto  ">
                <img
                  className="inset-0 w-full h-full object-cover object-center"
                  src="images/cart-01.png"
                ></img>
              </div>
              <div className="  flex  flex-col  ml-4 sm:flex-row sm:flex-1 sm:h-[110px] sm:ml-0 sm:min-w-0">
                <p className="text-dark-green flex text-xl sm:justify-center sm:items-center sm:w-[110px] sm:mr-10  ">
                  焦糖馬卡龍
                  <br />
                  NT$ 450
                </p>
                <div className="flex  flex-nowrap sm:items-center ">
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  aspect-square flex justify-center items-center border border-light-green sm:w-12 sm:h-12">
                    -
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    1
                  </div>
                  <div className="text-base basis-[clamp(28px,40vw,48px)]  flex justify-center items-center border border-light-green -ml-px sm:w-12 sm:h-12">
                    +
                  </div>
                </div>
              </div>

              <div className="h-[45px] col-span-2 mt-3 flex items-center justify-end text-dark-green font-semibold border-light-green border-t sm:border-0 sm:h-[130px] sm:mt-0 sm:ml-auto whitespace-nowrap">
                NT$ 900
                <img
                  className="hidden sm:ml-[10px] md:ml-[25px] xl:ml-[40px] sm:block"
                  src="images/delete.png"
                ></img>
              </div>
            </li>
          </ul>
        </div>
        <section className="flex max-w-[315px] justify-center items-center flex-col w-full mt-[32px] sm:self-start sm:mt-0 sm:bg-dark-green sm:max-w-[300px] sm:ml-5 sm:min-w-[140px]">
          <div className="bg-surface-2  w-full h-[65px] flex justify-center items-center text-dark-green text-2xl font-semibold sm:bg-dark-green sm:text-surface-2 sm:border-b sm:border-surface-2 sm:max-w-[260px] ">
            訂單摘要
          </div>
          <div className="w-full  text-dark-green sm:text-surface-2 sm:max-w-[260px]">
            <div className="flex justify-between w-full mt-4">
              <p className="">小記</p>
              <p>NT$ 2,700</p>
            </div>
            <div className="flex justify-between w-full mt-2">
              <p>運費</p>
              <p>NT$ 300</p>
            </div>
            <div className="text-xl font-semibold flex justify-between w-full mt-4 sm:text-base md:text-xl ">
              <p>總計</p>
              <p>NT$ 3,000</p>
            </div>
          </div>
          <NavLink
            to="/payment"
            className=" hidden sm:flex h-[65px] w-full bg-light-yellow justify-center items-center text-dark-green text-2xl font-semibold hover:brightness-90 group cursor-pointer"
          >
            <span className="group-hover:scale-110">結帳</span>
          </NavLink>
        </section>
        <button
          type="submit"
          className=" sm:hidden w-full flex justify-center items-center h-[65px] mt-4 font-semibold text-2xl text-dark-green bg-light-yellow hover:brightness-90 group cursor-pointer hover:text-3xl"
        >
          結帳
        </button>
      </section>
    </>
  );
}
export default Cart;
