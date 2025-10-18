function SiteHeader() {
  return (
    <>
      <header>
        <div
          className=" h-[84px] w-full mx-auto max-w-[640px]
         sm:mx-auto sm:w-full sm:max-w-[940px] sm:h-[100px]"
        >
          <div className="flex items-center justify-between h-full ">
            {/* 左邊選單 */}
            <div className="flex  items-center w-[24px] h-[24px] ml-[30px] shrink-0 sm:hidden">
              <img
                src="./src/images/dehaze-24px.png"
                className="h-[24px] w-auto object-cover"
              ></img>
            </div>

            {/* 中間logo */}
            <div className="flex items-center w-auto shrink-0 h-[18px]">
              <img
                src="./src/images/logo-all-dark.svg"
                className="hidden h-[40px] w-auto   sm:block"
              ></img>

              <img
                src="./src/images/logotype-sm-dark.svg"
                className="sm:hidden h-[17.74px] w-auto "
              ></img>
            </div>
            {/* 右邊購物車 */}

            <div className="flex mr-[30px] sm:mr-0">
              <nav
                className="hidden sm:flex sm:justify-items-end"

              >
                <ul className="flex sm:items-end gap-[60px] pr-[79px] text-[#3F5D45]">
                  <li>
                    <a href="#">首頁</a>
                  </li>
                  <li>
                    <a href="#">甜點</a>
                  </li>
                  <li>
                    <a href="#">登入</a>
                  </li>
                </ul>
              </nav>
              <div className="flex justify-center sm:justify-end sm:grid  w-[24px] h-[24px] ">
                <a href="#">
                <img src="./src/images/shopping_cart.png"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default SiteHeader;