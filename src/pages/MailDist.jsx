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
                <div className=" flex flex-end w-[64px] h-[56px] bg-light-yellow">
                    <img className="mx-auto my-auto w-4 h-4  flex items-center justify-center" src="images/arrow_forward-24px.png    "></img>
                </div>
                </div>
            </div>


        </div>
        <div className="flex flex-col relative  w-full bg-surface-2  ">
            <div className="flex items-center justify-center h-[105px] max-x-[235px]"><img src="images/logotype-sm-dark.svg" className="  bolck  h-[27px]"></img></div>
            <div className="ml-[30px] flex items-center  max-w-[227px] break-words">07-1234-5678<br/> sweetaste@email.com<br/>00 高雄市新興區幸福路 520 號</div>
            <div className="flex flex-col">
                <div className="flex mt-[37px] ml-[30px]">
                <img className="h-[32px] aspect-square" src="images/ic-line@.svg"></img>
                <img className="h-[32px] aspect-square" src="images/ic-facebook.svg"></img>
                </div>
                <p className="block mt-[23px] mb-[30px] ml-[30px]">© 2018 Sweetaste* All Rights Reserved</p>
            </div>
        </div>
        </>
    );
}
export default MailDist;