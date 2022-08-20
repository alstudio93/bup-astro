import Marquee from "react-fast-marquee";

const Images = () => {
    const imageArray = [
        {
            src: "../assets/brandImages/bwim-logo.webp",
        },
        {
            src: "../assets/brandImages/century-21-be3-logo.webp",
        },
        {
            src: "../assets/brandImages/century-21-be3.webp",
        },
        {
            src: "../assets/brandImages/dwntwn-social.webp",
        },
        {
            src: "../assets/brandImages/the-switzer-hych-group-logo.webp",
        },
        {
            src: "../assets/brandImages/ut-logo.webp",
        },
    ]
    return (
        <>
            {
                imageArray.map((img) => (
                    <img key={img.src} className="w-[150px] object-contain cursor-pointer" src={img.src} />
                ))
            }
        </>
    )
}

const MarqueeComp = () => {
    return (
        <Marquee>
            Hello
        </Marquee>
    )
}

export default MarqueeComp
{/* <Images /> */ }