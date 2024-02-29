import Image from "next/image";
import Container from "@/components/container";
import heroImg from "../../public/img/graphics/consulting_1.png";
import config from "@/config";

const Hero = () => {
    return (
        <>
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Elevate Your Business with FTS
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            {`We specialize in crafting solutions tailored to elevate your business in the digital age. From streamlined processes to revolutionary innovations, we're here to turn your challenges into opportunities. Discover how we can propel your organization forward. Let's redefine what's possible, together.`}
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="/contact"
                                target="_blank"
                                rel="noopener"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-ftsBlue-400 rounded-md ">
                                {config.cta.text}
                            </a>
                            <a
                                href="/services"
                                target="_blank"
                                rel="noopener"
                                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>

                                <span> See Services</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            loading="eager"
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col justify-center">
                    <div className="text-xl text-center text-gray-700 dark:text-white">
                        Services trusted by businesses of <em>all sizes</em> and <em>industries</em>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10 md:justify-center">
                        <div className="text-gray-400 dark:text-gray-400">
                            <Image src="/img/graphics/laptop_2.png" alt="Web Design" width="200" height="200" />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <Image src="/img/graphics/market_apps_1.png" alt="Marketing Automation" width="200" height="200" />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <Image src="/img/graphics/laptop_1.png" alt="Marketing Automation" width="200" height="200" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Hero;