import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <>
    <section className="features">
        <div>
            <span><img src="/icons/populer.svg" alt="" /><p>Popular Coupons</p></span>
        </div>
        <div>
            <span><img src="/icons/end.svg" alt="" /><p>Ending Soon</p></span>
        </div>
        <div>
            <span><img src="/icons/latest.svg" alt="" /><p>Latest Coupons</p></span>
        </div>
    </section>
    </>
  )
}

export default Features
