function Shipping() {
  return (
    <section className="w-full flex justify-center">
        <div></div>
      <div className="w-full sm:max-w-[780px]  sm:px-0 flex flex-col sm:flex-row sm:items-start gap-0">
        {/* 左：運送表單 */}
        <div className="bg-dark-green text-surface-2 w-full text-xl
                        sm:flex-1 sm:min-w-[300px] sm:max-w-[460px] sm:shrink-0
                        p-[30px] sm:pb-0 sm:p-[40px]">
          {/* 標題 + 步驟 */}
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="text-4xl font-semibold">運送</h2>
            <ol className="flex items-center gap-6">
              <li className="w-5 h-5 rounded-full border border-surface-2 bg-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
              <li className="w-5 h-5 rounded-full border border-surface-2"></li>
            </ol>
          </div>

          {/* 表單 */}
          <form className="grid grid-cols-1  ">

            <div className="grid grid-cols-2 gap-3 sm:col-span-2 mb-4">
            <label className="flex flex-col">
              <span className="mb-2">姓氏</span>
              <input className="h-[56px] px-5 bg-surface-2 text-light-green placeholder-light-green" placeholder="王" />
            </label>
            <label className="flex flex-col">
              <span className="mb-2">名字</span>
              <input className="h-[56px] px-5 bg-surface-2 text-dark-green placeholder-light-green" placeholder="小明" />
            </label>
            </div>

            <label className="flex flex-col sm:col-span-2 mb-4">
              <span className="mb-2">電話</span>
              <input className="h-[56px] px-5 bg-surface-2 text-dark-green placeholder-light-green" placeholder="0912-345-678" />
            </label>

            <div className="grid grid-cols-2 gap-3 sm:col-span-2 mb-2 ">
              <label className="flex flex-col">
                <span className="mb-2">地址</span>
                <select className="h-[56px] px-5 bg-surface-2 text-light-green">
                  <option>高雄市</option>
                </select>
              </label>
              <label className="flex justify-end flex-col">
                <select className="h-[56px] px-5 bg-surface-2 text-light-green">
                  <option>新興區</option>
                </select>
              </label>
            </div>

            <label className="block">

              <input className="h-[56px] w-full px-5 bg-surface-2 text-dark-green placeholder-light-green" placeholder="幸福路 520 號" />
            </label>
          </form>

          {/* 下一步 */}
          <button type="submit" className="hidden sm:block mt-[30px] h-[65px]  bg-light-yellow text-dark-green text-2xl font-semibold -mx-[40px] hover:brightness-90 group cursor-pointer hover:text-3xl w-[calc(100%+80px)]">
            下一步
          </button>
        </div>


        <div className="hidden sm:flex sm:flex-col gap-6 
                          sm:w-[300px]
                           sm:min-w-[220px] sm:shrink-[3] ml-5">
          {/* 右:訂單摘要 */}
          <div className=" border text-light-green border-surface-2/60">
            <div className="h-[65px] grid place-items-center text-light-green bg-surface-2 text-2xl font-semibold">
              訂單摘要
            </div>
            <div className="p-4  space-y-2">
              <div className="flex justify-between"><span>小計</span><span>NT$ 2,700</span></div>
              <div className="flex justify-between"><span>運費</span><span>NT$ 300</span></div>
              <div className="mt-2 pt-2 border-surface-2 flex justify-between text-xl font-semibold">
                <span>總計</span><span>NT$ 3,000</span>
              </div>
            </div>
          </div>

          {/* 購物清單 */}
          <div className=" border text-light-green border-surface-2">
            <div className="h-[65px] grid place-items-center bg-surface-2  text-2xl font-semibold">
              購物清單
            </div>
            <ul className="p-4 space-y-4">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-center gap-5">
                  <div className="w-[120px] aspect-120/80 overflow-hidden">
                    <img src="images/cart-01.png" className="w-full h-full object-cover" />
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
        <div className="sm:hidden grid h-[65px] w-full bg-light-yellow text-dark-green text-2xl font-semibold  place-items-center hover:brightness-90 group cursor-pointer hover:text-3xl ">
          下一步
        </div>
      </div>
    </section>
  );
}

export default Shipping;