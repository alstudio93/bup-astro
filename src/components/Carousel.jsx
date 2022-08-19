
const Carousel = () => {
    const Images = [
        {
            id: "item1",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item2",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item3",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item4",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item5",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item6",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item7",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            id: "item8",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },

    ]
    return (
        <>

            {
                Images.map((image) => (
                    <div key={image.id} id={image.id} className="carousel-item w-full md:w-1/2 lg:w-3/12 pt-32">
                        <img src={image.source} className="w-full" alt={image.alt} />
                    </div>
                ))
            }
        </>
    )
}

export default Carousel
