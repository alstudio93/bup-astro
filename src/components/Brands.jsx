// import { Image } from "@astrojs/image/components";
// import Marquee from "react-fast-marquee";

const Brands = () => {
    return (
        <section id="brands" class="max-w-[1100px] w-full mx-auto pt-[200px]">
            <h2
                class="text-section-h2 text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] font-quicksand font-medium text-center w-[70%] sm:w-full mx-auto"
            >
                Brands That Use BŪP
            </h2>
            <div class="flex flex-col mt-20">
                <div
                    class="py-20 grid md:grid-cols-2 justify-items-center items-center gap-x-5 gap-y-20 lg:grid-cols-3 lg:gap-y-32 lg:gap-x-5 border-b-4 border-b-slate-500 border-t-4 border-t-slate-500"
                >
                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/bwim-logo.webp"
                    />

                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/century-21-be3-logo.webp"
                    />

                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/century-21-be3.webp"
                    />
                </div>

                <div
                    class="py-20 grid md:grid-cols-2 justify-items-center items-center gap-x-5 gap-y-20 lg:grid-cols-3 lg:gap-y-32 lg:gap-x-5 border-b-4 border-b-slate-500"
                >
                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/dwntwn-social.webp"
                    />

                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/the-switzer-hych-group-logo.webp"
                    />

                    <img
                        class="w-6/12 md:w-40 object-cover cursor-pointer"
                        src="../assets/brandImages/ut-logo.webp"
                    />
                </div>
            </div>
        </section>

    )
}

export default Brands