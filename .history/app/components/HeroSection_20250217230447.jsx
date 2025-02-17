import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return(
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I'm John
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    Lorem ipsum, this here is awesome!
                </p>
            </div>
            <div className="col-span-5">
                <div className="rounded-full bg-[#362d2d] width">
                    <Image 
                        src="/image/HeroImage.png"
                        alt= "Hero Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection;