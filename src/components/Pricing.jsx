import { useState } from 'react'
// import monthly from '../src/assets/pricing/bup-plus-monthly.webp'

const Pricing = () => {

    const [showMonthly, setShowMonthly] = useState(true);
    const [showYearly, setShowYearly] = useState(false);

    const handleShowMonthly = () => {
        setShowMonthly(true)
        setShowYearly(false)
    }
    const handleShowYearly = () => {
        setShowMonthly(false)
        setShowYearly(true)
    }

    return (
        <section id="pricing" className='max-w-[1200px] mx-auto w-[98%] flex flex-col items-center'>
            <h2 className='font-quicksand text-section-h2 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] text-center tracking-wide font-medium'>Choose <br className='md:hidden' /> Go Pro with BŪP®</h2>
            <div className='flex gap-5 mt-3'>
                <button onClick={handleShowMonthly} className={`text-sm lg:text-lg shadow-lg p-2 w-[100px] lg:w-[150px] rounded-xl ${showMonthly ? 'bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0]' : ''}`}>Monthly</button>
                <button onClick={handleShowYearly} className={`text-sm lg:text-lg shadow-lg p-2 w-[100px] lg:w-[150px] rounded-xl ${showYearly ? 'bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0]' : ''}`}>Annual</button>
            </div>
            <div className='mt-[60px] grid lg:grid-cols-2 justify-items-center'>
                {showMonthly && <img src="/assets/pricing/monthly.webp" height="600" width="800" />}
                {showYearly && <img src="/assets/pricing/yearly.webp" height="600" width="800" />}
                <img src="/assets/pricing/enterprise.webp" height="600" width="800" />
            </div>
        </section>
    )
}

export default Pricing
