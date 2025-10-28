function MailDist(){
    return(
        <>
        <div className=" w-full flex justify-center items-center  bg-dark-green h-[186px] sm:h-[116px] ">
            
            <div className="grid sm:flex sm:justify-between   sm:items-center w-full sm:max-w-[940px] ">
               
                <div className="flex justify-center h-10  mb-[33px]  sm:mb-0 sm:ml-[20px] md:ml-[80px]" >
                    <img className="h-10 w-auto pr-5  " src="images/logo-light.svg"></img>
                    <h2 className=" flex font-normal text-surface-2 text-h-lg ">訂閱你我的甜蜜郵件</h2>
                </div>

    
                <div className="flex justify-between mx-auto w-full max-w-[315px] h-[56px] bg-surface-2 sm:max-w-[330px] md:max-w-[380px]sm:mx-0 sm:mr-[20px] md:mr-[80px] ">
                <img className="flex h-6 ml-5 my-auto  " src="images/mail-24px.png"></img>
                <input
                    type="email"
                    required
                    autoComplete="email"
                
                    className="ml-3 w-full bg-transparent outline-none text-dark-green
                            placeholder:text-light-green"
                />
                <button type="submit" className="cursor-pointer flex flex-end w-[64px] h-[56px] bg-light-yellow hover:bg-yellow-300 group">
                    <img className="mx-auto my-auto w-4 h-4 group-hover:scale-120 " src="images/arrow_forward-24px.png"></img>
                </button>
                </div>
            </div>
        </div>
        
    
        <footer className="flex flex-col relative  w-full bg-surface-2    ">
            <div className="max-w-[780px] mx-auto w-full ">
            <div className="flex items-center justify-between  ml-[30px] h-[105px] max-x-[235px] sm:ml-0">
                <img src="images/logotype-sm-dark.svg" className="  bolck  h-[27px]"></img>
                <img className="hidden h-[219px] sm:self-start sm:mt-[30px] sm:block" src="images/sm-今天是個吃甜點的好日子@2x.png"></img>
            </div>
            <div className="text-dark-green ml-[30px] flex items-center sm:mt-[53px] sm:ml-0 ">07-1234-5678<br/> sweetaste@email.com<br/>800 高雄市新興區幸福路 520 號</div>
            
            
            <div className="sm:items-end flex flex-col sm:justify-between sm:flex-row">
                <div className="flex mt-[37px] ml-[30px] gap-2 sm:mb-[30px] sm:ml-0">
                    <a target="_blank" href="https://www.instagram.com/"> <img className="h-[32px] aspect-square" src="images/ic-line@.svg"></img></a>
                    <a target="_blank" href="https://www.facebook.com/"><img className="h-[32px] aspect-square" src="images/ic-facebook.svg"></img></a>
                </div>
                <div><p className=" mt-[23px] mb-[30px] ml-[30px] text-dark-green sm:mb-[30px] sm:justify-end">© 2018 Sweetaste* All Rights Reserved</p></div>
            </div>
            </div>
        </footer>
        </>
    );
}
export default MailDist;