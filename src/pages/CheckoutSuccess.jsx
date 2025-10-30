import { NavLink, Link } from "react-router-dom";
function CheckoutSuccess() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full sm:max-w-[940px]">
        {/* 背景圖 */}
        <div className="relative w-full h-[518px] sm:h-[460px] ">
          <img
            src="/images/checkout-success.png"   

            className="absolute inset-0 w-full h-full object-cover "
          />


          {/* 置中box */}
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-dark-green ">
            {/* 步驟節點 */}
            <div className="flex items-center  mb-8">
              <span className="w-5 h-5 grid place-items-center rounded-full bg-dark-green text-ink-inverse place-content-center">✓</span>
                <span aria-hidden className=" h-px w-[65px] bg-dark-green"></span>
              <span className="w-5 h-5 grid place-items-center rounded-full bg-dark-green text-ink-inverse  place-content-center">✓</span>
                <span aria-hidden className=" h-px w-[65px] bg-dark-green"></span>
              <span className="w-5 h-5 grid place-items-center rounded-full bg-dark-green text-ink-inverse  place-content-center">✓</span>
            </div>

            <img src="images/lg-付款成功@2x.png" className="max-w-[190px] w-full mb-13"></img>

            {/* 桌機版按鈕 */}
            <NavLink to="/" className="hidden w-full sm:max-w-[300px] sm:inline-flex justify-center items-center mt-2 h-[65px]  bg-light-yellow text-dark-green text-xl font-semibold hover:brightness-90 hover:text-2xl">
              繼續逛逛
            </NavLink>
          </div>
        </div>

        {/* 手機按鈕 */}
        <NavLink to="/" className="sm:hidden h-[65px] w-full bg-light-yellow text-dark-green text-2xl font-semibold hover:brightness-90 hover:text-2xl">
          繼續逛逛
        </NavLink>
      </div>
    </section>
  );
}

export default CheckoutSuccess;