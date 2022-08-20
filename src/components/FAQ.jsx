import React, { useState } from 'react'
import Accordian from './Accordian'

const FAQ = () => {
    const FAQItem = [
        {
            title: "What is a Bio Link?",
            description: "A bio link is a clickable URL that you can use on your Instagram, TikTok, and other social media profile descriptions. It is usually the first link people see and is essential to your digital first impression."
        },
        {
            title: "Why BŪP®?",
            description: "BŪP is more than just a bio link tool. We not only provide a hub for all of your links, music, photos, videos, streams, and media content; we provide a nifty device you can put on the back of your phone (or anywhere) to connect with others in a single BŪP!"
        },
        {
            title: "What are BŪP tags?",
            description: "BŪP tags are small tags (sold separately) you can place on the back of your phone (or laptop, counter, etc.) that let you instantly share your BŪP Bios (and other links) just by tapping it to a compatible smartphone!"
        },
        {
            title: "Does the other person need a BŪP tag to receive my info?",
            description: "Nope. The other person does not need a BŪP tag to receive your BŪP Bio. That’s what makes us AWESOME! You can BŪP their phone if it’s on this list of compatible devices. If it is not on the list, just use your downloadable BŪP QR code (located in your link settings) to share your info!"
        },
        {
            title: "Do I need a BŪP account to buy a BŪP tag?",
            description: "Yes, you need to have a registered BŪP account to purchase a BŪP tag."
        },
        {
            title: "How do I purchase a BŪP tag?",
            description: "You can purchase BŪP tags via our store on this page. They are sold separately from the subscription plans as they are one-time purchase items. There will be instructions provided for you upon ordering a tag."
        },
        {
            title: "Can I purchase more than one BŪP tag?",
            description: "Yes, you can purchase more than one BŪP tag. There will be instructions provided for you upon ordering the tags."
        },
    ]

    const [clicked, setClicked] = useState(null);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }
    return (
        <>
            <section id="faq" className='max-w-section mx-auto w-full pt-[150px]'>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] font-quicksand text-section-h2 text-center font-medium'>FAQ</h2>

                {
                    FAQItem.map((faq, index) => (
                        <Accordian
                            title={faq.title}
                            desc={faq.description}
                            index={index}
                            toggle={toggle}
                            clicked={clicked}
                            key={faq.title}
                        />
                    ))
                }
            </section>
        </>
    )
}

export default FAQ