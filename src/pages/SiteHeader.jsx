
function SiteHeader(){
   return(
   <>
     <header>
        <div className="h-[84px] w-full mx-auto max-w-[640px]
         sm:mx-auto sm:w-full sm:max-w-[940px] sm:h-[100px]">
            <div className="flex items-center justify-between h-full ">
                {/* 左邊選單 */}
                <div className="flex  items-center w-[24px] h-[24px] ml-[30px] sm:hidden">
                    <img src="./src/images/dehaze-24px.png" className="h-[24px] w-auto object-cover"></img>
                </div>
               
                {/* 中間logo */}
                <div className="flex items-center w-[114px] h-[18px]">
                    <img src="./src/images/logo-all-dark.svg" 
                    className="hidden h-[24px]   sm:block"></img>

                    <img src="./src/images/logotype-sm-dark.svg" 
                    className="sm:hidden h-[17px] "></img>
                </div>
                {/* 右邊購物車 */}
              

                <div className="flex mr-[30px]">
                    <nav className="hidden sm:flex sm:justify-items-end" aria-label="mainn-nav">
                        <ul className="flex sm:items-end gap-8  text-[#2c5c47]">
                            <li><a href="#">首頁</a></li>
                            <li><a href="#">甜點</a></li>
                            <li><a href="#">登入</a></li>
                        </ul>
                    </nav>
                    <div className="flex justify-center sm:justify-end sm:grid  w-[24px] h-[24px] ">
                        <img src="./src/images/shopping_cart.png"></img>
                    </div>
                </div>
            </div>
        </div>
     </header>
    </> )
}

export default SiteHeader;