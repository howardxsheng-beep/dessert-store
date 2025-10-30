import { useState } from "react"; 
import { NavLink,Link } from "react-router-dom";
function Invoice() {
  const [invoiceType, setInvoiceType] = useState("electronic");

  return (
    <section className="w-full flex justify-center">
      <div className="w-full sm:max-w-[780px]  sm:px-0 flex flex-col sm:flex-row sm:items-start gap-0">
        {/* 左：運送表單 */}
        <div
          className="bg-dark-green text-surface-2 w-full text-xl
                        sm:flex-1 sm:min-w-[300px] sm:max-w-[460px] sm:shrink-0
                        p-[30px] sm:pb-0 sm:p-[40px]"
        >
          {/* 標題 + 步驟 */}
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="text-4xl font-semibold">發票</h2>
            <ol className="flex items-center gap-6">
              <li className="w-5 h-5 rounded-full border border-surface-2 bg-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
            </ol>
          </div>

          {/* 表單 */}
          <form className="grid grid-cols-1  ">
            {/* 發票按鈕 */}
            <div className="bg-dark-green text-light-green  h-[56px] grid grid-cols-2 mb-[30px]  text-xl font-semibold">
              <button
                type="button"
                onClick={() => setInvoiceType("electronic")}
                className={`h-[56px] grid place-items-center text-xl font-semibold 
              ${
                invoiceType === "electronic"
                  ? " bg-surface-2 text-dark-green"
                  : "text-light-green border border-surface-2 hover:bg-surface-2/10"
              }
              focus-visible:ring-2 focus-visible:ring-light-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green`}
              >
                電子發票
              </button>

              <button
                type="button"
                onClick={() => setInvoiceType("post")}
                className={`h-[56px] grid place-items-center text-xl font-semibold
              ${
                invoiceType === "post"
                  ? " bg-surface-2 text-dark-green"
                  : "text-light-green border border-surface-2 hover:bg-surface-2/10"
              }
              focus-visible:ring-2 focus-visible:ring-light-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green`}
              >
                郵寄發票
              </button>
            </div>
            {/* 郵寄發票表單 */}

            {invoiceType === "post" && (
              <div>
                <div className="w-full grid grid-cols-2 gap-3 mb-2">
                  <label className="flex flex-col">
                    <span className="mb-2">地址</span>
                    <div className="h-[56px] px-5 bg-surface-2 text-light-green flex justify-between items-center text-base">
                      <span className="flex">高雄市</span>
                      <div className="flex flex-col leading-none">
                        <img
                          className="h-6 w-6 -mb-2"
                          src="images/baseline-arrow-drop-up.png"
                        />
                        <img
                          className="h-6 w-6 -mt-2"
                          src="images/baseline-arrow-drop-down.png"
                        />
                      </div>
                    </div>
                  </label>

                  <label className="flex flex-col justify-end">
                    <div className=" hidden items-center sm:inline-flex justify-end mb-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-light-yellow"
                      />
                      <span className="sm:text-base ml-2 md:text-">同運送地址</span>
                    </div>
                    <div className="h-[56px] px-5 bg-surface-2 text-light-green flex justify-between items-center text-base">
                      <span className="flex">新興區</span>
                      <div className="flex flex-col leading-none">
                        <img
                          className="h-6 w-6 -mb-2"
                          src="images/baseline-arrow-drop-up.png"
                        />
                        <img
                          className="h-6 w-6 -mt-2"
                          src="images/baseline-arrow-drop-down.png"
                        />
                      </div>
                    </div>
                  </label>
                </div>

                <label className="block mb-4">
                  <input
                    className="h-[56px] w-full px-5 bg-surface-2 text-dark-green placeholder-light-green text-base"
                    placeholder="幸福路520號"
                  />
                </label>

                <label className="block">
                  <span>統一編號(選填)</span>
                  <input
                    className="h-[56px] w-full px-5 bg-surface-2 text-dark-green placeholder-light-green mt-2 placeholder:text-base"
                    placeholder="12345678"
                  />
                </label>
              </div>
            )}
            {/* 電子郵件表單 */}
            {invoiceType === "electronic" && (
              <div className="space-y-4">
                <label className="block">
                  <span>電子郵件</span>
                  <input
                    className="h-[56px] w-full px-5 bg-surface-2 text-dark-green placeholder-light-green mt-2 placeholder:text-base"
                    placeholder="example@email.com"
                  />
                </label>

                <label className="block ">
                  <span className="">統一編號(選填)</span>
                  <input
                    className="h-[56px] w-full px-5 bg-surface-2 text-dark-green placeholder-light-green mt-2 text-base placeholder:text-base "
                    placeholder="12345678"
                  />
                </label>
              </div>
            )}
          </form>

          {/* 確認結帳 */}
          <NavLink
            to="/checkoutSuccess"
            className="hidden sm:grid place-content-center mt-[30px] h-[65px]  bg-light-yellow text-dark-green text-2xl font-semibold -mx-[40px]  w-[calc(100%+80px)]  hover:brightness-90 hover:text-[29px] "
          >
            確認結帳
          </NavLink>
        </div>

        <div
          className="hidden sm:flex sm:flex-col gap-6 
                          sm:w-[300px] sm:min-w-[220px] sm:shrink-0 ml-5"
        >
          {/* 右:訂單摘要 */}
          <div className=" border text-light-green border-surface-2/60">
            <div className="h-[65px] grid place-items-center text-light-green bg-surface-2 text-2xl font-semibold">
              訂單摘要
            </div>
            <div className="p-4  space-y-2">
              <div className="flex justify-between">
                <span>小計</span>
                <span>NT$ 2,700</span>
              </div>
              <div className="flex justify-between">
                <span>運費</span>
                <span>NT$ 300</span>
              </div>
              <div className="mt-2 pt-2 border-surface-2 flex justify-between text-xl font-semibold">
                <span>總計</span>
                <span>NT$ 3,000</span>
              </div>
            </div>
          </div>

          {/* 購物清單 */}
          <div className=" border text-light-green border-surface-2">
            <div className="h-[65px] grid place-items-center bg-surface-2  text-2xl font-semibold">
              購物清單
            </div>
            <ul className="p-4 space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-5">
                  <div className="max-w-[120px] aspect-120/80 overflow-hidden">
                    <img
                      src="images/cart-01.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className=" truncate">焦糖馬卡龍（2）</p>
                    <p className=" font-semibold">NT$ 900</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 手機-確認結帳*/}
        <NavLink
          to="/checkoutSuccess"
          className="sm:hidden  grid h-[65px] w-full bg-light-yellow text-dark-green text-2xl font-semibold  place-items-center  hover:brightness-90 hover:text-[29px] "
        >
          確認結帳
        </NavLink>
      </div>
    </section>
  );
}

export default Invoice;
