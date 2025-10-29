import { NavLink, Link } from 'react-router-dom'

function SiteHeader() {
  return (
    <>
      <header className="w-full">
        <div className="w-full min-w-0 h-[84px]  max-w-[940px] mx-auto px-4 sm:px-6 md:px-[30px] sm:h-[100px]">
  <div className="flex items-center justify-between h-full">
    {/* 左側漢堡 */}
    <div className="hover:scale-125 flex items-center w-[24px] h-[24px] shrink-0  sm:hidden">
      <img
        src="images/dehaze-24px.png"
        className="h-[24px] w-auto object-cover"
        alt="menu"
      />
    </div>

    {/* 中間 logo */}
    <div className="flex items-center hover:brightness-120 hover:scale-110  ">
      <a href="#">
        <img
        src="images/logo-all-dark.svg"
        className="hidden h-[40px] w-auto sm:block"
        alt="logo-large"
      />
      </a>
      <a href="#">
      <img
        src="images/logotype-sm-dark.svg"
        className="sm:hidden h-[17.74px] w-auto"
        alt="logo-small"
      />
      </a>
    </div>

    {/* 右邊購物車 & nav */}
    <div className="flex items-center gap-4">
      <nav className="hidden sm:flex">
        <ul className="flex items-center gap-8 pr-4  text-dark-green">
          <li className="hover:scale-125 hover:brightness-120"><NavLink className={({ isActive }) => ` ${isActive ? 'underline text-black' : ''}`} to="/" end>首頁</NavLink></li>
          <li className="hover:scale-125 hover:brightness-120"><NavLink className={({isActive})=>`${isActive ? 'underline text-black': '' }`} to="/product" end>甜點</NavLink></li>
          <li className="hover:scale-125 hover:brightness-120"><NavLink className={({isActive})=> `${isActive ? 'underline text-black':''}`} to="/login" end>登入</NavLink></li>
        </ul>
      </nav>
      <a href="#" className="flex justify-center w-[24px] h-[24px]">
        <img className="hover:scale-125 hover:brightness-120" src="images/shopping_cart.png" alt="cart" />
      </a>
    </div>
  </div>
</div>
      </header>
    </>
  );
}

export default SiteHeader;