import { NavLink } from 'react-router-dom'

function Home() {
  const CARDS = [
    {
      img: "images/home-card-1.png",
      overlay: "bg-dark-green/80",
      text: "本日精選",
      textColor: "text-ink-inverse",
    },
    {
      img: "images/home-card-2.png",
      overlay: "bg-dark-green/80",
      text: "人氣推薦",
      textColor: "text-ink-inverse",
    },
    {
      img: "images/home-card-3.png",
      overlay: "bg-dark-green/80",
      text: "新品上市",
      textColor: "text-ink-inverse",
    },
  ];

  const POETRY = [
    { textCol: "青山依舊在，幾度夕陽紅。慣看秋月春" },
    { textCol: "一壺濁酒喜相逢，浪花淘盡英雄。是非" },
    { textCol: "轉頭空，滾滾長江東逝水，白髮漁樵江" },
    { textCol: "古今多少事，都付笑談中。" },
    { textCol: "" },
    { textCol: "是非成敗轉頭空，滾滾長江東逝水，白" },
    { textCol: "樵江渚上，古今多少事，都付笑談中。" },
    { textCol: "" },

  ];

  return (
    <main>
      {/* block1 */}
      <div className="   mx-auto max-w-[940px]">
        {/* bg-1 */}
        <img src="images/home-banner-1.png" className="  w-full bg-cover"></img>
        {/* 三卡片 */}
        <div className=" w-full">
          <div className="mx-auto sm:mt-[-120px]  md:max-w-[780px] grid grid-cols-3 md:grid-cols-3 gap-[1px]">
            {CARDS.map(({ img, overlay, text, textColor }, i) => (
              <div
                key={i}
                className="relative overflow-hidden w-full aspect-[125/180] sm:aspect-[259.67/256] group "
              >
              <NavLink to="/product" >
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 blur  object-cover  aspect-[125/180] sm:aspect-[259.67/256]"
                />
                <div
                  className={`absolute inset-0 ${overlay} mix-blend-normal group-hover:bg-light-yellow/80`}
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <span
                    className={`text-xl sm:text-2xl tracking-[0.24rem] sm:tracking-[0.3rem] leading-none  font-semibold ${textColor} [text-orientation:upright] [writing-mode:vertical-rl] group-hover:text-dark-green `}
                  >
                    {text}
                  </span>
                </div>
              </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 手機-圖文  sm:hidden*/}
      <section className=" sm:hidden">
        <div className="relative flex flex-col h-[120px] items-center justify-center w-auto">
          <img
            className=" mx-auto  h-[60px] "
            src="/images/sm-橫式-為什麼選擇了做甜點@2x.png"
          ></img>
        </div>
        <div className="h-[250px] overflow-hidden">
          <img
            className="w-full h-full object-cover block  object-center"
            src="images/pancake.png"
          ></img>
        </div>
        <div className="bg-surface-2 flex  justify-center">
          <p className=" text-light-green  text-base p-[30px]  min-h-[252px] w-[315px] ">
            青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。{" "}
            <span className="block h-8" aria-hidden />
            是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
          </p>
        </div>

        <div className="relative flex flex-col h-[120px] items-center justify-center w-auto">
          <img
            className=" mx-auto  h-[60px] "
            src="images/sm-橫式-為什麼一定要吃甜點@2x.png"
          ></img>
        </div>
        <div className="h-[250px] overflow-hidden">
          <img
            className="w-full h-full object-cover block  object-center"
            src="images/oat-meal.png"
          ></img>
        </div>
        <div className="bg-surface-2 flex  justify-center">
          <p className=" text-light-green  text-base p-[30px]  min-h-[252px] w-[315px] ">
            青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。{" "}
            <span className="block h-8" />
            是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
          </p>
        </div>
        <div className="relative flex flex-col h-[120px] items-center justify-center w-auto">
          <img
            className=" mx-auto  h-[60px] "
            src="images/sm-橫式-想吃甜點是不需要理由的@2x.png"
          ></img>
        </div>
      </section>
      {/* 桌機-圖文 */}

      <section className="hidden sm:block">
        {/* 1 */}
        <div className="h-[420px] mt-[80px] mx-auto max-w-[1024px] bg-surface-2 ">
          <div className="max-w-[940px] flex mx-auto w-full ">
            <div className="mt-[-20px] grid-cols-1 max-w-[460px] w-full h-[460px] overflow-hidden">
              <img
                className="w-full h-full  object-cover "
                src="images/pancake.png"
              ></img>
            </div>
            <div className="grid gap-y-4 h-[420px] w-[256px] [text-orientation:upright] [writing-mode:vertical-rl] sm:mr-[0px] xl:mr-[55px] p-[30px] ml-auto  ">
              {POETRY.map(({ textCol }, i) => (
                <p
                  key={i}
                  className=" text-light-green font-ping-fang  font-light text-base h-[280px] "
                >
                  {textCol}
                </p>
              ))}
            </div>
            <div className=" w-[89px] h-auto  mt-[-20px] ">
              <img className="" src="images/lg-為什麼選擇了做甜點@2x.png"></img>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" min-h-[420px] mt-[85px] mx-auto max-w-[1024px] bg-surface-2">
          <div className="flex-row-reverse max-w-[940px] flex mx-auto w-full">
            <div className="mt-[-20px] grid-cols-1 max-w-[460px] w-[460px] h-[460px]   overflow-hidden">
              <img
                className="w-full h-full  object-cover "
                src="images/oat-meal.png"
              ></img>
            </div>
            <div className=" w-[89px] h-auto  mt-[-20px] mr-[42px]">
              <img className="" src="images/lg-為什麼一定要吃甜點@2x.png"></img>
            </div>

            <div className="grid gap-y-4    h-[420px] w-[286px] [text-orientation:upright] [writing-mode:vertical-rl]  p-[30px] mr-auto  ">
              {POETRY.map(({ textCol }, i) => (
                <p
                  key={i}
                  className=" text-light-green font-ping-fang  font-light text-base h-[280px] "
                >
                  {textCol}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 mb-20">
          <img
            className="h-[323px]  w-auto"
            alt="想吃甜點是不需要理由的"
            src="images/lg-想吃甜點是不需要理由的@2x.png"
          ></img>
        </div>
      </section>

      {/* 手機-商品購物車 */}
      <section
        className="flex sm:max-w-[940px] sm:mx-auto overflow-hidden snap-mandatory
 items-center w-full mt-20 gap-7 over overflow-x-auto px-[30px] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:px-0"
      >
        <div className="flex-shrink-0 w-full snapp-start  aspect-square  sm:max-w-[315px] relative ">
          <img
            className=" w-full  border border-b-0 aspect-square  border-surface-2  "
            src="images/p-1.png"
          ></img>
          <span className="ml-[21px] tracking-[0.2rem]  text-base bg-dark-green text-surface-2 h-[108px] w-[38px]  inline-flex items-center justify-center  [text-orientation:upright] [writing-mode:vertical-rl] absolute top-0">
            本日精選
          </span>
          <img
            src="images/favorite_border.png"
            className="border-surface-2 absolute top-5 right-6 w-[25px] h-auto "
          ></img>
          <div className="border-surface-2 border h-[56px] grid grid-cols-2">
            <span className="border-surface-2 border-r flex justify-center items-center text-dark-green font-light text-body-lg ">
              水果優格杯
            </span>
            <span className="text-body-lg font-semibold text-dark-green flex justify-center items-center ">
              NT$ 450
            </span>
          </div>
          <button type="submit" className="border-surface-2 border bg-surface-2 h-[65px] flex items-center w-full justify-center hover:bg-light-yellow group ">
            <a className=" text-dark-green text-2xl font-semibold group-hover:scale-110 grouup-hover:brightness-150" href="#">
              加入購物車
            </a>
          </button>
        </div>

        <div className="flex-shrink-0 w-full snap-start sm:max-w-[315px]  aspect-square relative ">
          <img
            className=" w-full  border border-b-0 aspect-square  border-surface-2  "
            src="images/p-2.png"
          ></img>
          <span className="ml-[21px] tracking-[0.2rem]  text-base bg-dark-green text-surface-2 h-[108px] w-[38px]  inline-flex items-center justify-center  [text-orientation:upright] [writing-mode:vertical-rl] absolute top-0">
            本日精選
          </span>
          <img
            src="images/favorite_border.png"
            className="border-surface-2 absolute top-5 right-6 w-[25px] h-auto "
          ></img>
          <div className="border-surface-2 border h-[56px] grid grid-cols-2">
            <span className="border-surface-2 border-r flex justify-center items-center text-dark-green font-light text-body-lg ">
              甜甜圈
            </span>
            <span className="text-body-lg font-semibold text-dark-green flex justify-center items-center ">
              NT$ 450
            </span>
          </div>
          <button type="submit" className="border-surface-2 border bg-surface-2 h-[65px] flex items-center w-full justify-center hover:bg-light-yellow group ">
            <a className=" text-dark-green text-2xl font-semibold group-hover:scale-110 grouup-hover:brightness-150" href="#">
              加入購物車
            </a>
          </button>
        </div>

        <div className="flex-shrink-0 w-full  snap-start aspect-square   sm:max-w-[315px] relative ">
          <img
            className=" w-full  border border-b-0 aspect-square  border-surface-2"
            src="images/p-3.png"
          ></img>
          <span className="ml-[21px] tracking-[0.2rem]  text-base bg-dark-green text-surface-2 h-[108px] w-[38px]  inline-flex items-center justify-center  [text-orientation:upright] [writing-mode:vertical-rl] absolute top-0">
            本日精選
          </span>
          <img
            src="images/favorite_border.png"
            className="border-surface-2 absolute top-5 right-6 w-[25px] h-auto "
          ></img>
          <div className="border-surface-2 border h-[56px] grid grid-cols-2">
            <span className="border-surface-2 border-r flex justify-center items-center text-dark-green font-light text-body-lg ">
              草莓派
            </span>
            <span className="text-body-lg font-semibold text-dark-green flex justify-center items-center ">
              NT$ 450
            </span>
          </div>
          <button type="submit" className="border-surface-2 border bg-surface-2 h-[65px] flex items-center w-full justify-center hover:bg-light-yellow group ">
            <a className=" text-dark-green text-2xl font-semibold group-hover:scale-110 grouup-hover:brightness-150" href="#">
              加入購物車
            </a>
          </button>
          </div>
      </section>
    </main>
  );
}
export default Home;
