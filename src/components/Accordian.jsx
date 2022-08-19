import React from 'react'

const Accordian = ({
    title,
    desc,
    index,
    toggle,
    clicked
}) => {

    return (
        <div
            className='accordian max-w-3xl py-2 px-5 my-5 mx-auto flex flex-col gap-x-5 items-center shadow-lg rounded-2xl'
        >

            <div className='py-5 flex justify-between items-center w-full cursor-pointer' onClick={() => toggle(index)}>
                {
                    <h6 className='font-medium text-[0.95rem] md:text-lg leading-relaxed font-nunito w-[86%]'>
                        {title}
                    </h6>
                }

                <button className={clicked === index ? 'accordian-active accordian-trigger' : 'accordian-trigger'}
                    aria-expanded={clicked === index ? 'true' : 'false'}
                    aria-controls="answer"
                />

            </div>

            {
                <div className={clicked === index ? 'content accordian-active' : 'content'}
                >
                    <p className='font-normal text-[0.9rem] sm:text-base'>{desc}</p>

                </div>
            }

        </div>
    )
}

export default Accordian