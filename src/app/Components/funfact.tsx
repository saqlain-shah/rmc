"use client";

import React from 'react'
import Image from 'next/image'
import funfact1 from "../assets/images/service/01.svg";
import funfact2 from "../assets/images/service/02.svg";
import funfact3 from "../assets/images/service/03.svg";

const funfact = () => {
  return (
    <div>
      <div className="fun-facts-area rts-section-gap">
    <div className="container">
        <div className="row g-24">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact1} alt="service"  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="1200">00</span>+
                    </h2>
                    <p className="disc">
                        Over 1,000 projects successfully delivered, from residential homes to large developments...
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact2} alt="service"  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="85">00</span>%
                    </h2>
                    <p className="disc">
                        85% of clients return for future projects, demonstrating our commitment to quality...
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact3} alt="service "  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="20">00</span>%
                    </h2>
                    <p className="disc">
                        Consistent 20% annual revenue growth over the past five years, reflecting our expanding...
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default funfact
