
const Carousel = () => {
    const Images = [
        {
            // id: "item1",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item2",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item3",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item4",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item5",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item6",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item7",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },
        {
            // id: "item8",
            source: "/carousel/pugs-350w.png",
            alt: "Bubbly Pug"
        },

    ]
    return (
        <div className="pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-section mx-auto">

            {/* {
                Images.map((image) => (
                    <div key={image.id} id={image.id} className="carousel-item w-full md:w-1/2 lg:w-3/12 pt-32">
                        <img src={image.source} className="w-full" alt={image.alt} />
                    </div>
                ))
            } */}
            {
                Images.map((image) => (
                    <div key={image.source} id={image.id} className="flex justify-center gap-y-10">
                        <img src={image.source} className="w-1/2 md:w-3/4 xl:w-1/2" alt={image.alt} />
                    </div>
                ))
            }
        </div>
    )
}

export default Carousel
