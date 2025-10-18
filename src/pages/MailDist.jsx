function MailDist(){
    return(
        <>
        <div className="grid w-full bg-dark-green h-[186px] ">
            
            <div className="flex justify-center h-10 mt-[30px]">
                <img className="h-10 w-auto pr-5  " src="./src/images/logo-light.svg"></img>
                <h2 className="flex items-center  font-normal text-surface-2 text-[clamp(16px,4vw,24px)]">訂閱你我的甜蜜郵件</h2>
            </div>

            <div className="flex justify-between mx-auto w-full max-w-[315px] h-[56px] bg-surface-2">
            <img className="flex h-6 ml-5 my-auto  " src="./src/images/mail-24px.png"></img>
            <div className=" flex flex-end w-[64px] h-[56px] bg-light-yellow">
                <img className="mx-auto my-auto w-4 h-4  flex items-center justify-center" src="./src/images/arrow_forward-24px.png    "></img>
            </div>

            </div>
        </div>
        </>
    );
}
export default MailDist;