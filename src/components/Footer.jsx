import { AiOutlineMail } from "react-icons/ai/index.js"
const Footer = () => {

    return (
        <div className="pt-[150px] flex  gap-y-5 items-center pb-3 justify-center ">
            <span className="mr-10 font-nunito text-xs">Copyright &copy; {new Date().getFullYear()} BŪP®</span>
            <div className="flex items-center gap-x-5 ">
                <a href="#"><i className="fab fa-facebook text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0]"></i></a>
                |<a href="#"><i className="fab fa-linkedin text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0]"></i></a>
                |<a href="#"><i className="fab fa-instagram text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0]"></i></a>

                {/* <>
                    <label for="my-modal" class="btn modal-button"><AiOutlineMail
                        className="text-base"

                    /></label>

                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg text-center">What would you like to ask us about?</h3>
                            <div className="flex flex-col gap-y-5 items-center pt-10">
                                <a href="mailto: hello@bup.bio">General - hello@bup.bio</a>
                                <a href="mailto: design@bup.bio">Design - design@bup.bio</a>
                                <a href="mailto: enterprise@bup.bio">Enterprise - enterprise@bup.bio</a>
                            </div>
                            <div class="modal-action">
                                <label for="my-modal" class="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </> */}
                <div className="font-nunito">
                    <h4 className="text-lg">Products</h4>
                    <ul className="text-xs" >
                        <li className="py-3">BŪP Bands</li>
                        <hr />
                        <li className="py-3">BŪP Tags</li>
                        <hr />
                        <li className="py-3">BŪP Flats</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer