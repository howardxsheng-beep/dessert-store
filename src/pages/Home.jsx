function Home() {
  const CARDS = [
    {
      img: "./src/images/home-card-1.png",
      overlay: "bg-light-yellow/80",
      text: "本日精選",
      textColor: "text-dark-green",
    },
    {
      img: "./src/images/home-card-2.png",
      overlay: "bg-dark-green/80",
      text: "人氣推薦",
      textColor: "text-ink-inverse",
    },
    {
      img: "./src/images/home-card-3.png",
      overlay: "bg-dark-green/80",
      text: "新品上市",
      textColor: "text-ink-inverse",
    },
  ];

  return (
    <main>
      {/* block1 */}
      <div className="   mx-auto max-w-[940px]">
        {/* bg-1 */}
        <img
          src="src/images/home-banner-1.png"
          className="  w-full bg-cover"
        ></img>
        {/* 三卡片 */}
        <div className=" w-full">
          <div className="mx-auto sm:mt-[-120px]  md:max-w-[780px] grid grid-cols-3 md:grid-cols-3 gap-[1px]">
            {CARDS.map(({ img, overlay, text, textColor }, i) => (
              <div
                key={i}
                className="relative overflow-hidden w-full aspect-[125/180] sm:aspect-[259.67/256]  "
              >
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 blur  object-cover  aspect-[125/180] sm:aspect-[259.67/256]"
                />
                <div
                  className={`absolute inset-0 ${overlay} mix-blend-normal`}
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <span
                    className={`text-xl sm:text-2xl tracking-[0.24rem] sm:tracking-[0.3rem] leading-none  font-semibold ${textColor} [text-orientation:upright] [writing-mode:vertical-rl] `}
                  >
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 手機-圖文  sm:hidden*/}
      <section className="sm:hidden">
        <div className="relative flex flex-col h-[120px] items-center justify-center w-auto">
          <img
            className=" mx-auto  h-[60px] "
            src="/src/images/sm-橫式-為什麼選擇了做甜點@2x.png"
          ></img>
        </div>
        <div class="h-[250px] overflow-hidden">
          <img
            className="w-full h-full object-cover block  object-center"
            src="src/images/pancake.png"
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
            src="src/images/sm-橫式-為什麼一定要吃甜點@2x.png"
          ></img>
        </div>
        <div class="h-[250px] overflow-hidden">
          <img
            className="w-full h-full object-cover block  object-center"
            src="src/images/oat-meal.png"
          ></img>
        </div>
        <div className="bg-surface-2 flex  justify-center">
          <p className=" text-light-green  text-base p-[30px]  min-h-[252px] w-[315px] ">
            青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。{" "}
            <span className="block h-8" aria-hidden />
            是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
          </p>
        </div>
      </section>
      
      <section>
        <div className="h-[420px]  mx-auto max-w-[1024px] bg-surface-2">
            <div className="max-w-[940px] grid ">
                <div className="grid-cols-1">
                    <h1>32</h1>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
}
export default Home;
