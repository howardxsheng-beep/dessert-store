function Login(){
    return(
        <>
        <section className="flex flex-col w-full sm:flex-row sm:justify-center sm:items-center sm:mt-[30px] sm:mb-[60px] ">
            <div className="sm:max-w-[390px] sm:w-full">
                {/* 會員登入 */}
                <div className=" h-[110px] flex items-center justify-center bg-dark-green w-full sm:h-[105px]">
                    <h1 className="text-surface-2 text-4xl font-semibold">會員登入</h1>
                </div>
                {/* 手機版-社群登入 */}
                <div className="flex justify-center items-center h-[116px] w-full bg-surface-2 sm:hidden">
                    <div className="flex flex-cols-3 justify-center items-center h-[56px] max-w-[315px] bg-ink-inverse">
                        <div className="px-3 flex items-center justify-center max-w-[105px] h-[56px] border-light-green border-r"><img className="h-[15px]" src="images/ic-facebook-logotype@2x.png"></img></div>
                        <div className="px-4 flex items-center justify-center max-w-[105px] h-[56px] border-light-green border-r"><img className="h-[24px] " src="images/ic-google@2x.png"></img></div>
                        <div className="px-4 flex items-center justify-center max-w-[105px] h-[56px]"><img className="h-[15px]" src="images/ic-yahoo@2x.png"></img></div>
                    </div>
                </div>

                {/* 輸入 */}
                <div className="bg-dark-green w-full flex  flex-col sm:items-center">
                    <div className="flex  mx-auto w-full max-w-[315px] h-[56px] bg-surface-2 sm:max-w-[330px]    mt-[30px] sm:mt-[20px] ">
                    <img className="flex h-6 ml-5 my-auto  " src="images/person.png"></img>
                    <input className="place-holder-light-green text-dark-green ml-[20px] min-w-0"  placeholder="電子信箱/手機號碼"></input>
                    </div>

                    <div className="flex  mx-auto w-full max-w-[315px] h-[56px] bg-surface-2 sm:max-w-[330px]   mt-[16px]">
                    <img className="flex h-6 ml-5 my-auto  " src="images/key.png"></img>
                    <input className="place-holder-light-green text-dark-green ml-[20px] min-w-0" placeholder="請輸入使用者密碼"></input>
                    </div>

                    <label className="mx-auto w-full max-w-[315px] sm:max-w-[330px] md:max-w-[380px] mt-4 flex items-center mb-[30px] sm:mb-[25px]">
                    <input type="checkbox" className="shrink-0" />
                    <span className="ml-2 text-surface-2">記住我</span>
                    </label>
                </div>
                {/* 登入帳號 */}
                <div className="bg-light-yellow w-full flex justify-center items-center h-[65px]">
                    <h1 className="text-dark-green text-2xl font-semibold">登入帳號</h1>
                </div>



            </div>
            
            <div className="hidden sm:flex sm:flex-col sm:bg-surface-2 sm:max-w-[390px] sm:w-full sm:h-[350px] sm:items-center">
                <h2 className="text-2xl text-light-green font-light mt-10">—— 連結社群帳號 ——</h2>
                <div className="bg-ink-inverse max-w-[330px] h-[56px] w-full flex justify-center items-center mt-9"><img className="max-w-[109px] h-auto" src="images/ic-facebook-logotype@2x.png"></img></div>
                <div className="bg-ink-inverse max-w-[330px] h-[56px] w-full flex justify-center items-center mt-4"><img className="max-w-[109px] h-auto" src="images/ic-google@2x.png"></img></div>
                <div className="bg-ink-inverse max-w-[330px] h-[56px] w-full flex justify-center items-center mt-4"><img className="max-w-[109px] h-auto" src="images/ic-yahoo@2x.png"></img></div>

            </div>
                
            
        </section>

        </>
    );
}

export default Login;