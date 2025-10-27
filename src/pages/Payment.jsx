function Payment() {
  return (
    <section className="w-full flex justify-center">
      <div></div>
      <div className="w-full sm:max-w-[780px]  sm:px-0 flex flex-col sm:flex-row sm:items-start gap-0">
        {/* 左：運送表單 */}
        <div
          className="bg-dark-green text-surface-2 w-full text-xl
                        sm:flex-1 sm:min-w-[300px] sm:max-w-[460px] sm:shrink-0
                        p-[30px] sm:pb-0 sm:p-[40px]"
        >
          {/* 標題 + 步驟 */}
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="text-4xl font-semibold">付款</h2>
            <ol className="flex items-center gap-6">
              <li className="w-5 h-5 rounded-full border border-surface-2 bg-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
            </ol>
          </div>

          {/* 表單 */}
          <form className="grid grid-cols-1  ">
            <label className="flex flex-col sm:col-span-2 mb-4">
              <span className="mb-2">信用卡卡號</span>
              <input
                className="h-[56px] px-5 bg-surface-2 text-dark-green placeholder-light-green bg-[right_16px_center] bg-no-repeat bg-[length:24px_24px] bg-[url('images/credit_card.png')]"
                placeholder="9012-3456-7890-1234"
              />
            </label>

            <div className="grid grid-cols-2 gap-3 sm:col-span-2 mb-4">
              <label className="flex flex-col">
                <span className="mb-2">持卡人姓名</span>
                <input
                  className="h-[56px] px-5 bg-surface-2 text-light-green placeholder-light-green"
                  placeholder="王"
                />
              </label>
              <label className="flex flex-col justify-end">
                <input
                  className="h-[56px] px-5 bg-surface-2 text-dark-green placeholder-light-green"
                  placeholder="小明"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:col-span-2 mb-2 ">
              <label className="flex flex-col">
                <span className="mb-2">有效期限</span>
                <div className="h-[56px] px-5 bg-surface-2 text-light-green flex justify-between items-center">
                  <span className="flex">月</span>
                  <div className=" flex-col flex leading-none">
                    <img
                      className="  h-6 w-6 -mb-2"
                      src="images/baseline-arrow-drop-up.png"
                    />
                    <img
                      className="  h-6 w-6 -mt-2"
                      src="images/baseline-arrow-drop-down.png"
                    />
                  </div>
                </div>
              </label>
              <label className="flex justify-end flex-col">
                <div className="h-[56px] px-5 bg-surface-2 text-light-green flex justify-between items-center">
                  <span className="flex">年</span>
                  <div className=" flex-col flex leading-none">
                    <img
                      className="  h-6 w-6 -mb-2"
                      src="images/baseline-arrow-drop-up.png"
                    />
                    <img
                      className="  h-6 w-6 -mt-2"
                      src="images/baseline-arrow-drop-down.png"
                    />
                  </div>
                </div>
              </label>
            </div>

            <label className="block">
              <span className="flex-col flex ">背面末三碼</span>
              <input
                className="h-[56px]  w-1/2 px-5 mr-3 bg-surface-2 text-dark-green placeholder-light-green "
                placeholder="123"
              />
            </label>
          </form>

          {/* 下一步 */}
          <a
            href="#"
            className="hidden sm:grid place-content-center mt-[30px] h-[65px]  bg-light-yellow text-dark-green text-2xl font-semibold -mx-[40px]  w-[calc(100%+80px)]"
          >
            下一步
          </a>
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

        {/* 手機-下一步*/}
        <a
          href="#"
          className="sm:hidden  grid h-[65px] w-full bg-light-yellow text-dark-green text-2xl font-semibold  place-items-center"
        >
          下一步
        </a>
      </div>
    </section>
  );
}

export default Payment;
