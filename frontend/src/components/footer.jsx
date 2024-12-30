import leetcode from "/leetcode.png"
import github from "/github.png"
import linkedin from "/linkedin.png"
import instagram from  "/instagram.png"
import codeforces from "/codeforces.png"
function Footer(){
    return (
        <div className="bg-black h-fit w-full text-white p-2">
            <div className=" gap-2 flex justify-center items-center">
                <span className="text-lg font-semibold">Designed & Made by -</span> 
                <span className="text-lg">Arjun Verma</span>
            </div>
            {/* <div className="gap-x-5 flex justify-center items-center w-full mt-3">
                <a href="https://in.linkedin.com/in/arjun-verma-59962528a" target="_blank">
                    <img src={linkedin} alt="" className="group" loading="lazy"/>
                </a>
                <a href="https://www.instagram.com/vermarjun_/" target="_blank">
                    <img src={instagram} alt="" loading="lazy"/>
                </a>
                <a href="https://github.com/vermarjun" target="_blank">
                    <img src={github} alt="" loading="lazy"/>
                </a>
                <a href="https://codeforces.com/profile/vermarjun" target="_blank">
                    <img src={codeforces} alt="" loading="lazy"/>
                </a>
                <a href="https://leetcode.com/u/vermarjun/" target="_blank">
                    <img src={leetcode} alt="" className="h-[40px]" loading="lazy"/>
                </a>
            </div> */}
        </div>
    )
}

export default Footer