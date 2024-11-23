import React from "react";
import HeroPhoto2 from "../assets/Hero2.png";
import Donate from "../assets/Donate.png";
import Hero1 from "../assets/Hero1.png";
import CarouselLogo from "../component/CarouselLogo";
import { Link } from "react-router-dom";
import HeroSection from "../component/HeroSection";
import DataDisplay from "../component/DataDisplay";
import AccordionComponent from "../component/AccordionComponent";
import Subscribe from "../component/Subscribe";
function Home() {
  return (
    <div>
      {/* <div>
        <div className="pt-12 pb-24">
          <section className="text-gray-600 body-font bg-gradient-to-r from-customYellow2 to-customLightYellow w-full rounded-lg">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={Hero1}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  Empowering{" "}
                  <span className="hidden lg:inline-block text-customRed">
                    Journalists
                  </span>{" "}
                  for a Better Tomorrow
                </h1>
                <p className="mb-8 leading-relaxed">
                  Join us in our mission to uphold the highest standards of
                  journalism. Together, we can promote integrity, excellence,
                  and impactful storytelling.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <div className="pt-12 pb-12">
        <HeroSection />
      </div>
      <div className="pt-12 pb-24">
        {" "}
        <CarouselLogo />
      </div>
      {/* <div className="pt-28 pb-24">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
              Why Choose Us?
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base text-left">
                At the School Press Advisers Movement (SPAM) Inc., we are
                dedicated to supporting and developing school paper advisers,
                student journalists, and school publications across the
                Philippines.
              </p>
              <div className="flex md:mt-4 mt-6">
                <Link
                  to="/about"
                  className="text-customRed inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div className="pt-12 pb-24">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-sm text-red-500 tracking-widest font-medium title-font mb-1">
                Why Choose Us?
              </h2>
              <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900">
                Empower your journalism with SPAM
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 21h8m-4-4v4m-4.5-9.5l-2-2m11 2l2-2M12 3c1.7 0 3 1.3 3 3 0 .8-.3 1.5-.8 2l-.7.7c-.4.4-.5.9-.5 1.3v1h-2v-1c0-.8.3-1.5.8-2l.7-.7c.4-.4.5-.9.5-1.3 0-.6-.4-1-1-1s-1 .4-1 1H9c0-1.7 1.3-3 3-3z" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Expertise and Experience{" "}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      With over a decade of experience, our organization is a
                      trusted name in campus journalism. We bring a wealth of
                      knowledge to help you excel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium text-left">
                      Comprehensive Training Programs
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      We offer training programs and workshops to enhance the
                      skills of school paper advisers and student journalists,
                      tailored to meet the evolving needs of the journalism
                      community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Extensive Network
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      Join a nationwide network of campus journalism educators
                      and professionals, providing opportunities for
                      collaboration, mentorship, and professional growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 15l-3-3m0 0l3-3m-3 3h12M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Recognition and Awards
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      We recognize and celebrate the achievements of outstanding
                      school paper advisers and student journalists through our
                      prestigious awards and recognition programs. Your hard
                      work and dedication deserve to be acknowledged.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Innovative Resources
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      Our website is a hub of resources, including the latest
                      news, updates, and educational materials. We strive to
                      provide tools that empower you to stay informed and excel
                      in your field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Commitment to Excellence
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-left">
                      Our commitment to excellence drives us to continuously
                      improve our services and support. We are dedicated to
                      fostering a vibrant and dynamic community of campus
                      journalists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-24">
        <section className="text-gray-600 body-font bg-customYellow max-w-screen-xl mx-auto rounded-lg ">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
                Empowering Journalists to Uphold Integrity and Excellence in
                Reporting
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
                At our organization, we are dedicated to promoting ethical
                journalism that informs and empowers communities. Our mission is
                to foster a culture of integrity, transparency, and excellence
                in media, ensuring that every voice is heard.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-24 ">
        <section className="text-gray-600 body-font">
          <div className="max-w-screen-xl container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h4 className="font-semibold sm:text-4  xl text-3xl mb-4 font-lg text-customRed">
                Empowering Journalists to Uphold Truth and Foster Informed
                Communities.
                <span className="hidden lg:inline-block"> </span>
              </h4>
              <p className="mb-8 leading-relaxed text-left">
                At our organization, we champion the principles of integrity and
                excellence in journalism. Join us in our mission to promote
                transparency and accountability in the media.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={HeroPhoto2}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-12">
        <section className="text-gray-600 body-font bg-customYellow max-w-screen-xl mx-auto rounded-lg">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Commitment to Integrity and Excellence in Journalism Starts
                Here
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                At our organization, we strive to uphold the highest standards
                in journalism. Our dedicated team works tirelessly to promote
                transparency and accountability in media. Join us as we champion
                the values that define quality journalism.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-12">
        <h1 className="sm:text-3xl md:text-3xl lg:text-4xl font-medium title-font mb-4 text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-4 md:mb-8 lg:mb-10">
          {" "}
          We're happy to answer your questions!
        </p>
        <AccordionComponent />
      </div>
      <div className="pt-12 pb-12">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center max-w-screen-xl">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Support Journalism with Your Donation
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                Your contribution helps us promote integrity and excellence in
                journalism for a better tomorrow.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]">
                  Donate
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={Donate}
              ></img>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-12">
        <Subscribe />
      </div>
    </div>
  );
}

export default Home;
