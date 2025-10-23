import products from "../data/products.json";
// function Product{

// }

function Product() {
  return (
    <>
      {/* banner */}
    <section className="w-full flex justify-center items-center  ">
      <div className="relative w-full max-w-[940px] max-h-[277px] sm:max-h-[496px] sm:h-full flex items-center justify-center overflow-hidden">
        <div className="relative">
        <img
          className=" block inset-0 object-cover   max-w-full sm:hidden "
          alt="banner"
          src="/images/banner-sm.png" >
        </img>
        <img
          className="hidden object-cover h-auto w-auto max-w-full sm:block "
          alt="banner"
          src="/images/banner.png" >
        </img>
        </div>
        <img className=" absolute right-0 mr-[30px]  max-w-[60px] max-h-[218px] sm:hidden  max-[370px]:w-[36px] max-[370px]:right-[10px]" src="/images/sm-想吃甜點是不需要理由的@2x.png"></img>
      </div>
    </section>

    {/* 商品列表 */}
    <section className="max-w-[940px] mx-auto md:flex md:justify-between">
    {/* 甜點分類 */}
      <div className="md:flex md:mt-[60px]">
        <ul className=" items-center md:w-[300px]">
          <li className=" font-semibold text-surface-2 text-h-lg bg-dark-green h-[65px] flex justify-center items-center"><a className="" href="#">甜點類別</a></li>
          <li className=" border-surface-2 border-b font-semibold text-dark-green text-h-lg bg-surface-2 h-[65px] flex justify-center items-center"><a href="#">所有甜點</a></li>
          <li className=" border-surface-2 border-b font-semibold text-dark-green text-h-lg h-[65px] flex justify-center items-center"><a href="#">本日精選</a></li>
          <li className=" border-surface-2 border-b font-semibold text-dark-green text-h-lg h-[65px] flex justify-center items-center"><a href="#">人氣推薦</a></li>
          <li className=" border-surface-2 border-b font-semibold text-dark-green text-h-lg h-[65px] flex justify-center items-center"><a href="#">新品上市</a></li>
        </ul>
      </div>
      
      {/* 購物車卡片 */}
      <div className="md:flex">
       <div className="grid grid-cols-1 sm:max-w-[620px] sm:mx-auto items-center w-full mt-[30px] gap-5 over overflow-x-auto px-[30px] [scrollbar-width:none] md:grid-cols-2 md:px-0 md:mt-[60px] ">
          {products.map((p, idx) => (
          <div key={p.id} className={`flex-shrink-0 w-full   aspect-square  md:max-w-[300px] relative ${idx >= 3 ? 'hidden sm:block' : ''}${idx >= 6 ? 'sm:hidden ' : ''}`}>
          <img className=" w-full  border border-b-0 aspect-square  border-surface-2  " src={p.img} alt={p.name}></img>
          <span className="ml-[21px] tracking-[0.2rem]  text-base bg-dark-green text-surface-2 h-[108px] w-[38px]  inline-flex items-center justify-center  [text-orientation:upright] [writing-mode:vertical-rl] absolute top-0">本日精選</span>
          <img src="images/favorite_border.png" className="border-surface-2 absolute top-5 right-6 w-[25px] h-auto "></img>
          <div className="border-surface-2 border h-[56px] grid grid-cols-2"><span className="border-surface-2 border-r flex justify-center items-center text-dark-green font-light text-body-lg ">{p.name}</span><span className="text-body-lg font-semibold text-dark-green flex justify-center items-center ">NT$ {p.price}</span></div>
          <div className="border-surface-2 border bg-surface-2 h-[65px] flex items-center justify-center "><a className=" text-dark-green text-2xl font-semibold" href="#">加入購物車</a></div>
          
          </div>
          ))}
        
      </div>
      </div>
    </section>

    {/* 頁碼 */}

      {/* 分頁列 */}
     <div className="w-full flex justify-center">
  <nav
    className="mt-[30px] flex h-[60px] border border-surface-2
               divide-x divide-surface-2 rounded-md overflow-hidden select-none"
  >
    <button
      type="button"
      aria-label="上一頁"
      className="grid place-items-center aspect-square"
    >
      <img
        src="images/arrow_left.png"
        alt=""
        className="w-[24px] h-[24px]"
      />
    </button>

    <a className="text-dark-green grid place-items-center aspect-square text-[clamp(12px,3.2vw,20px)]">1</a>
    <a className="text-dark-green grid place-items-center aspect-square text-[clamp(12px,3.2vw,20px)]">2</a>
    <a className="text-dark-green grid place-items-center aspect-square text-[clamp(12px,3.2vw,20px)]">3</a>

    <button
      type="button"
      aria-label="下一頁"
      className="grid place-items-center aspect-square"
    >
      <img
        src="images/arrow_right.png"
        alt=""
        className="w-[24px] h-[24px]"
      />
    </button>
  </nav>
</div>

    </>
  );
}

export default Product;
