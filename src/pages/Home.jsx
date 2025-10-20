function Home(){
    const CARDS = [
    { img: "./src/images/home-card-1.png", overlay: "bg-light-yellow/80", text:"本日精選",textColor: 'text-dark-green' },
    { img: "./src/images/home-card-2.png", overlay: "bg-dark-green/80", text:"人氣推薦",textColor: 'text-ink-inverse' },
    { img: "./src/images/home-card-3.png", overlay: "bg-dark-green/80", text:"新品上市",textColor: 'text-ink-inverse'},];


    return(
        
        <main>
            {/* block1 */}
            <div className="   mx-auto max-w-[940px]" >
                {/* bg-1 */}
                <img src="src/images/home-banner-1.png" className="  w-full bg-cover"></img>
                {/* 三卡片 */}
                <div className=" w-full">
                    <div className="mx-auto sm:mt-[-120px]  md:max-w-[780px] grid grid-cols-3 md:grid-cols-3 gap-[1px]">
                        {CARDS.map(({img, overlay,text, textColor},i )=> (
                        <div key={i} className="relative overflow-hidden w-full aspect-[125/180] sm:aspect-[259.67/256]  ">
                            <img src={img} alt="" className="absolute inset-0 blur  object-cover  aspect-[125/180] sm:aspect-[259.67/256]"  />
                            <div className={`absolute inset-0 ${overlay} mix-blend-normal`}/>
                            <div className="absolute inset-0  flex items-center justify-center">
                            <span className={`text-xl sm:text-2xl tracking-[0.24rem] sm:tracking-[0.3rem] leading-none  font-semibold ${textColor} [text-orientation:upright] [writing-mode:vertical-rl] `}>
                                {text}
                            </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div></div>

        </main>
    );

}
export default Home;