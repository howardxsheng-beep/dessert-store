function SiteHeader() {
  return (
    <>
      <header className="w-full">
        <div className="w-full min-w-0 h-[84px]  max-w-[940px] mx-auto px-4 sm:px-6 md:px-[30px] sm:h-[100px]">
  <div className="flex items-center justify-between h-full">
    {/* 左側漢堡 */}
    <div className="flex items-center w-[24px] h-[24px] shrink-0  sm:hidden">
      <img
        src="images/dehaze-24px.png"
        className="h-[24px] w-auto object-cover"
        alt="menu"
      />
    </div>

    {/* 中間 logo */}
    <div className="flex items-center ">
      <img
        src="images/logo-all-dark.svg"
        className="hidden h-[40px] w-auto sm:block"
        alt="logo-large"
      />
      <img
        src="images/logotype-sm-dark.svg"
        className="sm:hidden h-[17.74px] w-auto"
        alt="logo-small"
      />
    </div>

    {/* 右邊購物車 & nav */}
    <div className="flex items-center gap-4">
      <nav className="hidden sm:flex">
        <ul className="flex items-center gap-8 pr-4 text-[#3F5D45]">
          <li><a href="#">首頁</a></li>
          <li><a href="#">甜點</a></li>
          <li><a href="#">登入</a></li>
        </ul>
      </nav>
      <a href="#" className="flex justify-center w-[24px] h-[24px]">
        <img src="images/shopping_cart.png" alt="cart" />
      </a>
    </div>
  </div>
</div>
      </header>
    </>
  );
}

export default SiteHeader;