import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
    return (
        <Marquee>
            <div
                class=" py-2 px-4 mt-10 flex gap-x-10 grayscale bg-[#eaeaea42]"
            >
                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/bwim-logo.webp"
                />

                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/century-21-be3-logo.webp"
                />

                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/century-21-be3.webp"
                />

                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/dwntwn-social.webp"
                />

                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/the-switzer-hych-group-logo.webp"
                />

                <img
                    class="w-[150px] object-contain cursor-pointer"
                    src="../assets/brandImages/ut-logo.webp"
                />
            </div>
        </Marquee>
    )
}

export default MarqueeComp