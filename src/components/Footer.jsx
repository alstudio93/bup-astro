import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs/index.js"
import { AiOutlineMail } from "react-icons/ai/index.js"
const Footer = () => {

    return (
        <div className="pt-[150px] flex  gap-y-5 items-center pb-3 justify-center">
            <span className="mr-10">Copyright &copy; {new Date().getFullYear()} BŪP®</span>
            <div className="flex items-center gap-x-5">
                <BsFacebook className="text-base" /> | <BsLinkedin className="text-base" />
                | <BsInstagram className="text-base" /> |

                <>
                    <label for="my-modal" class="btn modal-button"><AiOutlineMail
                        className="text-base"

                    /></label>

                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg text-center">What would you like to ask us about?</h3>
                            <div className="flex flex-col items-center pt-10">
                                <a href="mailto: hello@bup.bio">hello@bup.bio</a>
                                <a href="mailto: design@bup.bio">design@bup.bio</a>
                                <a href="mailto: enterprise@bup.bio">enterprise@bup.bio</a>
                            </div>
                            <div class="modal-action">
                                <label for="my-modal" class="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Footer