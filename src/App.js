import "./App.css";
import {gsap} from 'gsap';
import React, { useEffect } from 'react';
import logo from "./assets/logo-dstudio.svg";
import logoW from "./assets/logo-white.svg";
import company1 from "./assets/image4.svg";
import company2 from "./assets/image5.svg";
import company3 from "./assets/image6.svg";
import company4 from "./assets/image7.svg";
import company5 from "./assets/image8.svg";
import company6 from "./assets/image9.svg";
import slider1 from "./assets/slide-1.png";
import slider2 from "./assets/slide-2.png";
import slider3 from "./assets/slide-3.png";

function App() {


  return (
    <div className="App">
      <header>
        
        <div className="bg-green-300">
          <div className="container mx-auto">
            <div className="flex items-center px-4 justify-center py-4 font-medium">
              <p className="pe-2">
                Get 20% OFF on Monthly Subscription - Onboard your best UI/UX
                Team Now
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16666 7H12.8333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1.1665L12.8333 6.99984L7 12.8332"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <nav
          className="flex items-center justify-between p-5 lg:px-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dstudio Digital</span>
              <img
                className="h-8 sm:h-12 w-auto"
                src={logo}
                alt="Dstudio Digital"
              ></img>{" "}
            </a>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 px-5 hover:text-green-400 ease-in duration-75"
            >
              Log in
            </a>

            <a
              href="#"
              className="ease-in group text-sm font-semibold leading-6 text-gray-900 px-5 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white flex items-center"
            >
              Get Started{" "}
              <span aria-hidden="true" className="inline-block ps-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="group-hover:stroke-white"
                    d="M1.83356 10.1668L10.1669 1.8335"
                    stroke="black"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path className="group-hover:stroke-white"
                    d="M1.83356 1.8335H10.1669V10.1668"
                    stroke="black"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </nav>
      </header>
      <section className="text-left pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-semibold max-w-xl">
            We Create Remarkable Digital Products.
          </h1>
          <div className="flex justify-start lg:justify-end">
            <div className="max-w-xl mt-4 lg:-mt-8 ">
              <p className="text-xl heading-text">
                Design subscriptions to scale your business. Get quality design
                shipped as early as 2-3 days.
              </p>
              <div className="pt-4 inline-block">
                <a
                  href="#"
                  className="px-6 sm:px-10 py-4 rounded-full bg-black hover:bg-gray-900 hover:shadow-lg text-white flex items-center font-semibold"
                >
                  See Plans{" "}
                  <svg
                    className="ms-2 animate-bounce"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1.1665V12.8332"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.8333 7L7.00001 12.8333L1.16667 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="pt-4 inline-block ms-2">
                <a
                  href=""
                  className="flex px-6 sm:px-8 py-4 rounded-full bg-white hover:bg-gray-200 text-black flex items-center font-semibold"
                >
                  <span>Contact Sales</span>
                  <svg
                    className="ms-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.83334 10.1668L10.1667 1.8335"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.83334 1.8335H10.1667V10.1668"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-16">
        <div className="-my-4 flex justify-start gap-2 overflow-hidden py-4 md:gap-6">
          <div className="col-3">
            <img src={slider1} className="w-full" />
          </div>
          <div className="col-6">
            <img src={slider2} className="w-full" />
          </div>
          <div className="col-3">
            <img src={slider3} className="w-full" />
          </div>
        </div>
      </section>
      <section className="logo-section pt-16 border-b-2 px-4">
        <div className="container mx-auto">
          <div className="text-center text-xl">
            Trusted by 50+ companies.{" "}
            <span className="underline font-semibold">Watch our showreel</span>
          </div>
          <div className="flex flex-wrap justify-center ">
            <a href="#" className="p-11">
              <img src={company1} />
            </a>
            <a href="#" className="p-11">
              <img src={company2} />
            </a>
            <a href="#" className="p-11">
              <img src={company3} />
            </a>
            <a href="#" className="p-11">
              <img src={company4} />
            </a>
            <a href="#" className="p-11">
              <img src={company5} />
            </a>
            <a href="#" className="p-11">
              <img src={company6} />
            </a>
          </div>
        </div>
      </section>

      <section className="pt-28">
        <div className="container mx-auto px-4">
          <p className="uppercase text-sm mb-3">Who is this designed for</p>
          <h2 className="text-5xl font-semibold max-w-xl mx-auto">
            We didn't reinvent the wheel, just design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left mt-16">
            <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M37.6094 19.0301L33.75 20.952L28.75 11.3895L32.6562 9.43639C32.9465 9.28842 33.2836 9.26122 33.5938 9.36074C33.9041 9.46026 34.1624 9.67842 34.3125 9.96764L38.1562 17.327C38.2342 17.4743 38.2819 17.6358 38.2965 17.8018C38.3112 17.9678 38.2925 18.1351 38.2415 18.2938C38.1906 18.4524 38.1084 18.5993 37.9998 18.7258C37.8913 18.8523 37.7585 18.9557 37.6094 19.0301V19.0301Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.24973 20.7981L2.39036 18.8606C2.24176 18.7878 2.10932 18.6858 2.00092 18.5607C1.89251 18.4357 1.81036 18.2901 1.75934 18.1327C1.70832 17.9753 1.68948 17.8092 1.70394 17.6444C1.71839 17.4795 1.76585 17.3192 1.84348 17.1731L5.68723 9.81371C5.8376 9.52469 6.09485 9.3058 6.40421 9.20366C6.71357 9.10151 7.05059 9.12418 7.34348 9.26683L11.2497 11.22L6.24973 20.7981Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.75 20.9521L31.25 23.8896L25.5 29.6396C25.3433 29.7862 25.1534 29.8926 24.9466 29.9497C24.7398 30.0069 24.5222 30.0131 24.3125 29.9678L15.25 27.7021C15.0845 27.656 14.9302 27.5762 14.7969 27.4678L6.25 20.7959"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.2501 23.8916L24.3751 18.8916L22.3751 20.3916C21.5086 21.0383 20.4564 21.3877 19.3751 21.3877C18.2939 21.3877 17.2416 21.0383 16.3751 20.3916L15.5314 19.751C15.3887 19.6425 15.2707 19.505 15.1852 19.3475C15.0996 19.19 15.0485 19.0161 15.0352 18.8373C15.0219 18.6586 15.0468 18.4791 15.108 18.3107C15.1693 18.1422 15.2657 17.9887 15.3908 17.8604L21.5158 11.751C21.6308 11.6365 21.7673 11.5458 21.9175 11.4842C22.0676 11.4225 22.2284 11.391 22.3908 11.3916H28.7501"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.344 11.2179L19.3596 8.87411C19.6444 8.79244 19.949 8.81459 20.219 8.93662L25.6252 11.3897"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 33.2656L12.7969 32.0781C12.6052 32.0348 12.4278 31.9434 12.2812 31.8125L8.75 28.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6">
                Subscribe to a plan & request as many designs as you'd like.
              </div>
              <p className="mt-3">Clients interests comes first. Always.</p>
            </div>

            <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M15 18.75C21.9036 18.75 27.5 16.2316 27.5 13.125C27.5 10.0184 21.9036 7.5 15 7.5C8.09644 7.5 2.5 10.0184 2.5 13.125C2.5 16.2316 8.09644 18.75 15 18.75Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 13.125V19.375C2.5 22.4844 8.09375 25 15 25C21.9063 25 27.5 22.4844 27.5 19.375V13.125"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 18.2812V24.5312"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5 15.1099C33.2031 15.6411 37.5 17.9067 37.5 20.6255C37.5 23.7349 31.9063 26.2505 25 26.2505C21.9375 26.2505 19.125 25.7505 16.9531 24.938"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 24.8906V26.875C12.5 29.9844 18.0937 32.5 25 32.5C31.9063 32.5 37.5 29.9844 37.5 26.875V20.625"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 25.7812V32.0312"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 18.2812V32.0312"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6">
                Receive your design within a few business days on average,
                Monday to Friday.
              </div>
              <p className="mt-3">
                Be transparent. At all times. Own up and stay responsible
              </p>
            </div>

            <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M29.375 30.625C31.4461 30.625 33.125 28.9461 33.125 26.875C33.125 24.8039 31.4461 23.125 29.375 23.125C27.3039 23.125 25.625 24.8039 25.625 26.875C25.625 28.9461 27.3039 30.625 29.375 30.625Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.5312 34.375C24.8066 33.2995 25.4321 32.3462 26.3091 31.6655C27.1861 30.9847 28.2648 30.6152 29.375 30.6152C30.4852 30.6152 31.5639 30.9847 32.4409 31.6655C33.3179 32.3462 33.9434 33.2995 34.2188 34.375"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12.5V8.75001C5 8.41849 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.50001 6.25 7.50001H14.4844C14.6467 7.49944 14.8075 7.53089 14.9577 7.59255C15.1078 7.65422 15.2443 7.74489 15.3594 7.85938L20 12.5"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.8437 32.5H6.15625C6.00441 32.5 5.85405 32.4701 5.71377 32.412C5.57349 32.3539 5.44603 32.2687 5.33866 32.1613C5.23129 32.054 5.14612 31.9265 5.08801 31.7862C5.02991 31.6459 5 31.4956 5 31.3438V12.5H33.75C34.0815 12.5 34.3995 12.6317 34.6339 12.8661C34.8683 13.1005 35 13.4185 35 13.75V18.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6">
                We'll revise the designs until you're 100% satisfied.
              </div>
              <p className="mt-3">Take risks that suit the client’s needs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 mb-28">
            <div className="text-left p-8 md:p-16 bg-gray-200 col-span-2">
              <div>
                <svg
                  width="104"
                  height="36"
                  viewBox="0 0 104 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6914 11.4101H30.6704L33.1974 26.3101C33.2601 26.1661 33.3152 26.0189 33.3624 25.8691C34.4157 21.1657 35.4707 16.4631 36.5274 11.7611C36.5594 11.6181 36.7524 11.4031 36.8714 11.4021C39.6264 11.3821 42.3804 11.3861 45.1814 11.3861L48.6134 26.2611L48.7134 26.2721L51.1874 11.4141H58.7094C58.4824 12.3251 58.2624 13.2231 58.0344 14.1141C56.3797 20.6074 54.7284 27.1017 53.0804 33.5971C52.9444 34.1371 52.7444 34.3091 52.1804 34.2971C49.4424 34.2631 46.7034 34.2821 43.8994 34.2821L40.7854 20.7281L40.6734 20.7111L37.4324 34.2831H28.4784L22.6914 11.4101Z"
                    fill="black"
                  />
                  <path
                    d="M26.702 34.2941H20.355C19.402 34.2941 18.449 34.2781 17.497 34.3021C17.3405 34.3173 17.183 34.2877 17.0426 34.2169C16.9022 34.1461 16.7848 34.037 16.704 33.9021C13.9373 30.0108 11.161 26.1261 8.375 22.2481C8.291 22.1301 8.20401 22.0151 8.04201 21.7951V34.2641H0V5.55612H8.01801V17.6761L8.11801 17.7131L9.912 15.2241C12.1467 12.1221 14.38 9.01878 16.612 5.91412C16.6888 5.78742 16.7991 5.68436 16.9308 5.61627C17.0624 5.54817 17.2102 5.51768 17.358 5.52813C20.25 5.54313 23.142 5.53713 26.151 5.53713L15.597 19.4771L26.702 34.2941Z"
                    fill="black"
                  />
                  <path
                    d="M69.4722 34.2621V4.13916H77.4652V20.3252C78.4072 18.9912 79.2652 17.7792 80.1172 16.5652C81.2522 14.9542 82.3802 13.3392 83.5272 11.7372C83.5842 11.6512 83.6578 11.5775 83.7437 11.5203C83.8295 11.4631 83.9259 11.4236 84.0272 11.4041C87.1022 11.3841 90.1782 11.3892 93.3872 11.3892L84.3712 22.8991L93.5342 34.2651C93.3172 34.2781 93.1712 34.2932 93.0252 34.2932C90.0992 34.2932 87.1732 34.2872 84.2482 34.3032C84.0919 34.3137 83.936 34.279 83.799 34.203C83.6621 34.1271 83.55 34.0133 83.4762 33.8752C81.5142 30.9392 79.5352 28.0142 77.4982 24.9932V34.2611L69.4722 34.2621Z"
                    fill="black"
                  />
                  <path
                    d="M66.932 11.4221V34.2731H58.978V11.4221H66.932Z"
                    fill="black"
                  />
                  <path
                    d="M94.1611 29.8401C94.1596 28.9169 94.4316 28.0139 94.9428 27.2452C95.4539 26.4765 96.1814 25.8764 97.0333 25.5208C97.8853 25.1651 98.8233 25.0698 99.7294 25.2469C100.635 25.424 101.469 25.8656 102.124 26.5159C102.779 27.1662 103.227 27.996 103.411 28.9006C103.595 29.8053 103.507 30.7442 103.158 31.5988C102.809 32.4534 102.215 33.1855 101.45 33.7026C100.685 34.2196 99.7843 34.4985 98.8611 34.5041C97.6194 34.5086 96.4268 34.0198 95.5454 33.1452C94.6641 32.2706 94.1662 31.0817 94.1611 29.8401Z"
                    fill="#FFD065"
                  />
                  <path
                    d="M62.9643 1.0082C63.7512 0.961064 64.537 1.11781 65.2456 1.46327C65.9542 1.80874 66.5617 2.33122 67.0093 2.9802C67.3865 3.56487 67.6072 4.23662 67.6502 4.93108C67.6932 5.62553 67.5572 6.31939 67.255 6.94615C66.9529 7.57291 66.4948 8.11156 65.9247 8.51045C65.3546 8.90935 64.6916 9.15511 63.9993 9.2242C63.0746 9.37191 62.1287 9.31316 61.2293 9.05219C60.3408 8.82173 59.5603 8.28921 59.0216 7.54601C58.483 6.8028 58.2198 5.89527 58.2773 4.97919C58.3218 4.05543 58.6801 3.1745 59.293 2.48193C59.906 1.78937 60.7368 1.32664 61.6483 1.1702C62.0853 1.0882 62.5273 1.0612 62.9643 1.0082Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="text-2xl font-medium mt-8 max-w-lg">
                Design Pixelone shows that they know the art of subtlety.
              </div>
              <div className="mt-16">
                <div className="text-xl font-medium">Brady Cooper</div>
                <p>Head of Product at Kwik</p>
              </div>
            </div>
            <div className="client-bg"></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28  bg-black px-4">
        <div className="container mx-auto">
          <h2 className="text-white text-5xl font-bold">Membership Benefits</h2>
          <p className="text-lg text-gray-300 max-w-lg mx-auto mt-6">
            For everybody else it’s the simplest way to send big files Around
            the world. and for bigger impact.
          </p>
          <div className="text-center inline-block mt-12">
            <a
              href="#"
              className="px-10 py-4 rounded-full bg-green-300 hover:bg-green-400 hover:shadow-lg text-black flex items-center font-semibold"
            >
              See Plans{" "}
              <svg
                className="ms-2 animate-bounce"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1.1665V12.8332"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8333 7L7.00001 12.8333L1.16667 7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center mt-20">
            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M37.6094 19.0301L33.75 20.952L28.75 11.3895L32.6562 9.43639C32.9465 9.28842 33.2836 9.26122 33.5938 9.36074C33.9041 9.46026 34.1624 9.67842 34.3125 9.96764L38.1562 17.327C38.2342 17.4743 38.2819 17.6358 38.2965 17.8018C38.3112 17.9678 38.2925 18.1351 38.2415 18.2938C38.1906 18.4524 38.1084 18.5993 37.9998 18.7258C37.8913 18.8523 37.7585 18.9557 37.6094 19.0301V19.0301Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.24973 20.7981L2.39036 18.8606C2.24176 18.7878 2.10932 18.6858 2.00092 18.5607C1.89251 18.4357 1.81036 18.2901 1.75934 18.1327C1.70832 17.9753 1.68948 17.8092 1.70394 17.6444C1.71839 17.4795 1.76585 17.3192 1.84348 17.1731L5.68723 9.81371C5.8376 9.52469 6.09485 9.3058 6.40421 9.20366C6.71357 9.10151 7.05059 9.12418 7.34348 9.26683L11.2497 11.22L6.24973 20.7981Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.75 20.9521L31.25 23.8896L25.5 29.6396C25.3433 29.7862 25.1534 29.8926 24.9466 29.9497C24.7398 30.0069 24.5222 30.0131 24.3125 29.9678L15.25 27.7021C15.0845 27.656 14.9302 27.5762 14.7969 27.4678L6.25 20.7959"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.2501 23.8916L24.3751 18.8916L22.3751 20.3916C21.5086 21.0383 20.4564 21.3877 19.3751 21.3877C18.2939 21.3877 17.2416 21.0383 16.3751 20.3916L15.5314 19.751C15.3887 19.6425 15.2707 19.505 15.1852 19.3475C15.0996 19.19 15.0485 19.0161 15.0352 18.8373C15.0219 18.6586 15.0468 18.4791 15.108 18.3107C15.1693 18.1422 15.2657 17.9887 15.3908 17.8604L21.5158 11.751C21.6308 11.6365 21.7673 11.5458 21.9175 11.4842C22.0676 11.4225 22.2284 11.391 22.3908 11.3916H28.7501"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.344 11.2179L19.3596 8.87411C19.6444 8.79244 19.949 8.81459 20.219 8.93662L25.6252 11.3897"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 33.2656L12.7969 32.0781C12.6052 32.0348 12.4278 31.9434 12.2812 31.8125L8.75 28.75"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Design board
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                Add as many design requests to your board as you'd like.
              </p>
            </div>

            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M15 18.75C21.9036 18.75 27.5 16.2316 27.5 13.125C27.5 10.0184 21.9036 7.5 15 7.5C8.09644 7.5 2.5 10.0184 2.5 13.125C2.5 16.2316 8.09644 18.75 15 18.75Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 13.125V19.375C2.5 22.4844 8.09375 25 15 25C21.9063 25 27.5 22.4844 27.5 19.375V13.125"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 18.2812V24.5312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5 15.1099C33.2031 15.6411 37.5 17.9067 37.5 20.6255C37.5 23.7349 31.9063 26.2505 25 26.2505C21.9375 26.2505 19.125 25.7505 16.9531 24.938"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 24.8906V26.875C12.5 29.9844 18.0937 32.5 25 32.5C31.9063 32.5 37.5 29.9844 37.5 26.875V20.625"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 25.7812V32.0312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 18.2812V32.0312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Lightning fast delivery
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                Get your design one at a time in just a few days on average.
              </p>
            </div>

            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M29.375 30.625C31.4461 30.625 33.125 28.9461 33.125 26.875C33.125 24.8039 31.4461 23.125 29.375 23.125C27.3039 23.125 25.625 24.8039 25.625 26.875C25.625 28.9461 27.3039 30.625 29.375 30.625Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.5312 34.375C24.8066 33.2995 25.4321 32.3462 26.3091 31.6655C27.1861 30.9847 28.2648 30.6152 29.375 30.6152C30.4852 30.6152 31.5639 30.9847 32.4409 31.6655C33.3179 32.3462 33.9434 33.2995 34.2188 34.375"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12.5V8.75001C5 8.41849 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.50001 6.25 7.50001H14.4844C14.6467 7.49944 14.8075 7.53089 14.9577 7.59255C15.1078 7.65422 15.2443 7.74489 15.3594 7.85938L20 12.5"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.8437 32.5H6.15625C6.00441 32.5 5.85405 32.4701 5.71377 32.412C5.57349 32.3539 5.44603 32.2687 5.33866 32.1613C5.23129 32.054 5.14612 31.9265 5.08801 31.7862C5.02991 31.6459 5 31.4956 5 31.3438V12.5H33.75C34.0815 12.5 34.3995 12.6317 34.6339 12.8661C34.8683 13.1005 35 13.4185 35 13.75V18.75"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Fixed monthly rate
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                No surprises here! Pay the same fixed price each month.
              </p>
            </div>

            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M37.6094 19.0301L33.75 20.952L28.75 11.3895L32.6562 9.43639C32.9465 9.28842 33.2836 9.26122 33.5938 9.36074C33.9041 9.46026 34.1624 9.67842 34.3125 9.96764L38.1562 17.327C38.2342 17.4743 38.2819 17.6358 38.2965 17.8018C38.3112 17.9678 38.2925 18.1351 38.2415 18.2938C38.1906 18.4524 38.1084 18.5993 37.9998 18.7258C37.8913 18.8523 37.7585 18.9557 37.6094 19.0301V19.0301Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.24973 20.7981L2.39036 18.8606C2.24176 18.7878 2.10932 18.6858 2.00092 18.5607C1.89251 18.4357 1.81036 18.2901 1.75934 18.1327C1.70832 17.9753 1.68948 17.8092 1.70394 17.6444C1.71839 17.4795 1.76585 17.3192 1.84348 17.1731L5.68723 9.81371C5.8376 9.52469 6.09485 9.3058 6.40421 9.20366C6.71357 9.10151 7.05059 9.12418 7.34348 9.26683L11.2497 11.22L6.24973 20.7981Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.75 20.9521L31.25 23.8896L25.5 29.6396C25.3433 29.7862 25.1534 29.8926 24.9466 29.9497C24.7398 30.0069 24.5222 30.0131 24.3125 29.9678L15.25 27.7021C15.0845 27.656 14.9302 27.5762 14.7969 27.4678L6.25 20.7959"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.2501 23.8916L24.3751 18.8916L22.3751 20.3916C21.5086 21.0383 20.4564 21.3877 19.3751 21.3877C18.2939 21.3877 17.2416 21.0383 16.3751 20.3916L15.5314 19.751C15.3887 19.6425 15.2707 19.505 15.1852 19.3475C15.0996 19.19 15.0485 19.0161 15.0352 18.8373C15.0219 18.6586 15.0468 18.4791 15.108 18.3107C15.1693 18.1422 15.2657 17.9887 15.3908 17.8604L21.5158 11.751C21.6308 11.6365 21.7673 11.5458 21.9175 11.4842C22.0676 11.4225 22.2284 11.391 22.3908 11.3916H28.7501"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.344 11.2179L19.3596 8.87411C19.6444 8.79244 19.949 8.81459 20.219 8.93662L25.6252 11.3897"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 33.2656L12.7969 32.0781C12.6052 32.0348 12.4278 31.9434 12.2812 31.8125L8.75 28.75"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Top-notch quality
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                Insane design quality at your fingertips whenever you need it.
              </p>
            </div>

            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M15 18.75C21.9036 18.75 27.5 16.2316 27.5 13.125C27.5 10.0184 21.9036 7.5 15 7.5C8.09644 7.5 2.5 10.0184 2.5 13.125C2.5 16.2316 8.09644 18.75 15 18.75Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 13.125V19.375C2.5 22.4844 8.09375 25 15 25C21.9063 25 27.5 22.4844 27.5 19.375V13.125"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 18.2812V24.5312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5 15.1099C33.2031 15.6411 37.5 17.9067 37.5 20.6255C37.5 23.7349 31.9063 26.2505 25 26.2505C21.9375 26.2505 19.125 25.7505 16.9531 24.938"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 24.8906V26.875C12.5 29.9844 18.0937 32.5 25 32.5C31.9063 32.5 37.5 29.9844 37.5 26.875V20.625"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 25.7812V32.0312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 18.2812V32.0312"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Flexible and scalable
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                Scale up or down as needed, and pause or cancel at anytime.
              </p>
            </div>

            <div>
              <div>
                <svg
                  className="inline-block"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M29.375 30.625C31.4461 30.625 33.125 28.9461 33.125 26.875C33.125 24.8039 31.4461 23.125 29.375 23.125C27.3039 23.125 25.625 24.8039 25.625 26.875C25.625 28.9461 27.3039 30.625 29.375 30.625Z"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.5312 34.375C24.8066 33.2995 25.4321 32.3462 26.3091 31.6655C27.1861 30.9847 28.2648 30.6152 29.375 30.6152C30.4852 30.6152 31.5639 30.9847 32.4409 31.6655C33.3179 32.3462 33.9434 33.2995 34.2188 34.375"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12.5V8.75001C5 8.41849 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.50001 6.25 7.50001H14.4844C14.6467 7.49944 14.8075 7.53089 14.9577 7.59255C15.1078 7.65422 15.2443 7.74489 15.3594 7.85938L20 12.5"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.8437 32.5H6.15625C6.00441 32.5 5.85405 32.4701 5.71377 32.412C5.57349 32.3539 5.44603 32.2687 5.33866 32.1613C5.23129 32.054 5.14612 31.9265 5.08801 31.7862C5.02991 31.6459 5 31.4956 5 31.3438V12.5H33.75C34.0815 12.5 34.3995 12.6317 34.6339 12.8661C34.8683 13.1005 35 13.4185 35 13.75V18.75"
                      stroke="#eeeeee"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xl font-medium mt-3 md:mt-6 text-white">
                Unique and all yours
              </div>
              <p className="mt-3 text-gray-400 mb-4">
                Each of your designs is made especially for you and is 100%
                yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="news py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="mb-4">
              <a href="#" className="block">
                <img src={slider2} className="w-full"></img>
              </a>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <p>Amazon</p>
                <p className="text-right">Finance</p>
              </div>
              <div className="mt-2 text-2xl font-medium">
                <a href="#">
                  How Youtube found freedom, Flexibility, and Success.
                </a>
              </div>
            </div>
            <div className="mb-4">
              <a href="#" className="block">
                <img src={slider2} className="w-full"></img>
              </a>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <p>Amazon</p>
                <p className="text-right">Finance</p>
              </div>
              <div className="mt-2 text-2xl font-medium">
                <a href="#">
                  How Youtube found freedom, Flexibility, and Success.
                </a>
              </div>
            </div>
            <div className="mb-4">
              <a href="#" className="block">
                <img src={slider2} className="w-full"></img>
              </a>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <p>Amazon</p>
                <p className="text-right">Finance</p>
              </div>
              <div className="mt-2 text-2xl font-medium">
                <a href="#">
                  How Youtube found freedom, Flexibility, and Success.
                </a>
              </div>
            </div>
            <div className="mb-4">
              <a href="#" className="block">
                <img src={slider2} className="w-full"></img>
              </a>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <p>Amazon</p>
                <p className="text-right">Finance</p>
              </div>
              <div className="mt-2 text-2xl font-medium">
                <a href="#">
                  How Youtube found freedom, Flexibility, and Success.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services py-16 py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-white uppercase font-medium mb-4">
            What we do
          </div>
          <h2 className="text-5xl font-bold text-white">
            Apps, websites, logos & more.
          </h2>

          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 lg:gap-x-24 lg:gap-y-18 mt-20 text-left">
              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Websites Design
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>

              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Logos & branding
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>

              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Mobile apps
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>

              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Design systems
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>

              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Illustration
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>

              <div>
                <div className="text-white text-2xl text-white font-medium">
                  Brandbook
                </div>
                <div className="text-gray-400 mt-4">
                  Our design agency in Paris worked on the Axelhire presentation
                  for their Series C round of fundraising and guess what!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-black uppercase font-medium mb-4">
            Memberships levels
          </div>
          <h2 className="text-5xl font-bold text-black">
            Choose a plan that's right for you.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 text-left">
            <div className="border p-8 hover:bg-orange-100 ease-in duration-75 hover:shadow-xl">
              <div className="text-2xl font-medium">Monthly</div>
              <p className="mt-2">
                No minimum commitment. Pause or cancel anytime.
              </p>

              <div className="text-2xl font-medium mt-8">$4,995/m</div>
              <p className="mt-2">Pause or cancel anytime</p>
              <a
                href="#"
                className="mt-8 transition ease-in-out ease-in duration-75 border border-black rounded-full bg-white hover:bg-black hover:text-green-300 inline-block md:block text-center px-8 py-3 font-medium"
              >
                Get Started
              </a>
              <div>
                <div className="text-lg font-medium mt-8 mb-4">
                  What's included:
                </div>
                <ul className="price-list-ul text-gray-700">
                  <li>Unlimited requests</li>
                  <li>Unlimited brands</li>
                  <li>Unlimited users</li>
                  <li>Pause or cancel anytime</li>
                </ul>
              </div>
            </div>
            <div className="border p-8 bg-green-200 border-green-200 relative hover:shadow-xl">
              <div className="most-popular absolute px-3 py-1 text-lg font-medium text-black -top-4 bg-orange-300 rounded text-sm">
                Most Popular
              </div>
              <div className="text-2xl font-medium">Quaterly</div>
              <p className="mt-2">
                Save $500 per month. <br></br> <br></br>
              </p>

              <div className="text-2xl font-medium mt-8">
                <sup>$</sup>4,995/m
              </div>
              <p className="mt-2">Pause or cancel anytime</p>
              <a
                href="#"
                className="mt-8 border border-black rounded-full bg-black text-green-300 inline-block md:block text-center px-8 py-3 font-medium"
              >
                Get Started
              </a>
              <div>
                <div className="text-lg font-medium mt-8 mb-4">
                  What's included:
                </div>
                <ul className="price-list-ul text-gray-700">
                  <li>Unlimited requests</li>
                  <li>Unlimited brands</li>
                  <li>Unlimited users</li>
                  <li>Pause or cancel anytime</li>
                </ul>
              </div>
            </div>

            <div className="border p-8 hover:bg-orange-100 ease-in duration-75 hover:shadow-xl">
              <div className="text-2xl font-medium">Yearly</div>
              <p className="mt-2">
                Save $1,000 per month. <br></br>
                <br></br>
              </p>

              <div className="text-2xl font-medium mt-8">$4,995/m</div>
              <p className="mt-2">Pause or cancel anytime</p>
              <a
                href="#"
                className="mt-8 border border-black rounded-full bg-white hover:bg-black hover:text-green-300 inline-block md:block text-center px-8 py-3 font-medium"
              >
                Get Started
              </a>
              <div>
                <div className="text-lg font-medium mt-8 mb-4">
                  What's included:
                </div>
                <ul className="price-list-ul text-gray-700">
                  <li>Unlimited requests</li>
                  <li>Unlimited brands</li>
                  <li>Unlimited users</li>
                  <li>Pause or cancel anytime</li>
                </ul>
              </div>
            </div>

            <div className="border p-8 bg-gray-100 md:col-span-3 lg:col-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-8">
                <div>
                  <div>
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="72" height="72" rx="36" fill="white" />
                      <g clip-path="url(#clip0_1_340)">
                        <path
                          d="M40 25C41.6819 25.4429 43.2161 26.3243 44.4459 27.5541C45.6757 28.7839 46.5571 30.3181 47 32"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 29C41.065 29.5525 42.4475 30.935 43 33"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M40.5488 38.168C40.6872 38.0758 40.8465 38.0197 41.0122 38.0046C41.1779 37.9895 41.3447 38.016 41.4975 38.0817L47.3925 40.723C47.5912 40.8079 47.757 40.9548 47.8651 41.1419C47.9733 41.3289 48.018 41.5459 47.9925 41.7605C47.7983 43.2118 47.0836 44.5432 45.9813 45.507C44.8791 46.4709 43.4642 47.0016 42 47.0005C37.4913 47.0005 33.1673 45.2094 29.9792 42.0213C26.7911 38.8332 25 34.5091 25 30.0005C24.9989 28.5362 25.5296 27.1214 26.4935 26.0191C27.4573 24.9169 28.7887 24.2022 30.24 24.008C30.4545 23.9825 30.6716 24.0272 30.8586 24.1353C31.0456 24.2435 31.1926 24.4093 31.2775 24.608L33.9188 30.508C33.9836 30.6595 34.0101 30.8247 33.9957 30.9889C33.9813 31.1532 33.9265 31.3113 33.8363 31.4492L31.165 34.6255C31.0702 34.7684 31.0142 34.9336 31.0024 35.1047C30.9906 35.2758 31.0233 35.4471 31.0975 35.6017C32.1313 37.718 34.3188 39.8792 36.4413 40.903C36.5967 40.9768 36.7688 41.0089 36.9404 40.9959C37.112 40.983 37.2773 40.9255 37.42 40.8292L40.5488 38.168Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_340">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(20 20)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-6 text-xl font-medium">Book a call</div>
                  <p className="mt-2 mb-4 text-sm">
                    Learn more about how we works and how it can help you.
                  </p>
                  <p className="inline-block">
                    <a
                      href=""
                      class="flex py-2 rounded-full text-black flex items-center font-semibold"
                    >
                      <span>Book Now</span>
                      <svg
                        class="ms-2"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83334 10.1668L10.1667 1.8335"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1.83334 1.8335H10.1667V10.1668"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
                <hr className="-mx-8 my-6 md:hidden lg:block"></hr>
                <div>
                  <div>
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="72" height="72" rx="36" fill="white" />
                      <g clip-path="url(#clip0_1_347)">
                        <path
                          d="M21.2788 44.9997C22.2777 43.4639 23.6443 42.2019 25.2546 41.3283C26.865 40.4547 28.668 39.9971 30.5001 39.9971C32.3321 39.9971 34.1351 40.4547 35.7455 41.3283C37.3558 42.2019 38.7224 43.4639 39.7213 44.9997"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M41.5 40C43.332 39.9989 45.1351 40.4558 46.7456 41.329C48.356 42.2022 49.7227 43.4641 50.7213 45"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30.5 40C34.0899 40 37 37.0899 37 33.5C37 29.9101 34.0899 27 30.5 27C26.9101 27 24 29.9101 24 33.5C24 37.0899 26.9101 40 30.5 40Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39.0862 27.4625C39.9754 27.1079 40.9319 26.954 41.8874 27.0119C42.8429 27.0698 43.7738 27.338 44.6136 27.7974C45.4535 28.2568 46.1815 28.896 46.7456 29.6694C47.3097 30.4428 47.6961 31.3312 47.8771 32.2712C48.058 33.2112 48.0291 34.1795 47.7925 35.1071C47.5558 36.0346 47.1172 36.8984 46.5079 37.6368C45.8987 38.3752 45.1339 38.9698 44.2682 39.3784C43.4025 39.7869 42.4572 39.9992 41.5 40"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_347">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(20 20)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-6 text-xl font-medium">
                    Refer a friend & earn
                  </div>
                  <p className="mt-2 mb-4 text-sm">
                    Learn more about how we works and how it can help you.
                  </p>
                  <p className="inline-block">
                    <a
                      href=""
                      class="flex py-2 rounded-full text-black flex items-center font-semibold"
                    >
                      <span>Join Now</span>
                      <svg
                        class="ms-2"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83334 10.1668L10.1667 1.8335"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1.83334 1.8335H10.1667V10.1668"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats py-16 md:py-28 bg-yellow-300">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm uppercase mb-2">
            Who is this designed for
          </div>
          <div className="text-2xl text-3xl  font-semibold text-black text-center">
            Some stats we achieved so far!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            <div className="text-left">
              <h2 className="text-7xl font-bold">$75M</h2>
              <div className="text-xl font-medium mt-4">
                Funds raised by <span className="underline">Axlehire</span>
              </div>
              <p className="mt-2">
                Our design agency in Paris worked on the Axelhire presentation
                for their Series C round of fundraising and guess what!
              </p>
            </div>

            <div className="text-left">
              <h2 className="text-7xl font-bold">$104M</h2>
              <div className="text-xl font-medium mt-4">
                Funds raised by <span className="underline">Qonto</span>
              </div>
              <p className="mt-2">
                Bruno had accompanied Qonto in the creation of it’s very first
                branding, allowing fundraising, followed by obtaining the title.{" "}
              </p>
            </div>

            <div className="text-left">
              <h2 className="text-7xl font-bold">2022</h2>
              <div className="text-xl font-medium mt-4">
                Greenly <span className="underline">rebranding</span>
              </div>
              <p className="mt-2">
                Greenly, the rising startup, called on our design agency for
                rebranding. In 2022 they were everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
        <section>
        
        </section>
      <footer className="pt-16 bg-black text-white pb-6">
        <div className="container mx-auto px-4 text-left">
          <div className="text-normal md:text-lg font-bold pb-10">
            Let’s Create Something Better Together
          </div>

          <h3 className="text-xl md:text-5xl font-bold mb-2">Write us on</h3>
          <h4 className="text-4xl md:text-8xl font-bold">
            <a href="mailto:hello@Vivi.digital">hello@Vivi.digital</a>
          </h4>
          <div className="pt-4 inline-block mt-14">
            <a
              href="#"
              class="px-10 py-4 rounded-full bg-white hover:bg-green-300 hover:shadow-lg text-black flex items-center font-semibold"
            >
              Get Quote{" "}
              <svg
                class="ms-2 animate-bounce"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1.1665V12.8332"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.8333 7L7.00001 12.8333L1.16667 7"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <hr className="my-16 border-bottom border-gray-800"></hr>
          </div>

          <div className="grid grid-col-1 md:grid-cols-3 gap-8  lg:gap-16">
            <div className=" max-w-lg">
              <div className="footer-logo">
                <img src={logoW}></img>
              </div>

              <div className="text-3xl font-bold mt-6">5.0</div>
              <div className="font-medium mt-2">Rated on Clutch</div>
            </div>
            <div>
              <div className="font-semibold text-2xl">Location</div>
              <div className="font-bold text-lg mt-6">India</div>
              <p className="mt-3">Gurugram, Badha Sec - 86 122004 , Haryana</p>

              <div className="font-bold text-lg mt-10">United States</div>
              <p className=" mt-3">
                585 West 500 south, Suite 130 Bountiful, Salt Lake City, Utah
                84010
              </p>
            </div>
            <div>
              <div className="font-semibold text-2xl">Social</div>
              <ul className="mt-6">
                <li>
                  <a href="#" className="py-1 hover:text-green-300 block">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 hover:text-green-300 block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 hover:text-green-300 block">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 hover:text-green-300 block">
                    Clutch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-20 gap-4 lg:gap-10">
            <div className="text-sm">
              <a href="" className="me-7 hover:text-green-400">
                About Us
              </a>
              <a href="" className="me-7  hover:text-green-400">
                Case Study
              </a>
              <a href="" className="me-7  hover:text-green-400">
                Contact
              </a>
            </div>
            <div className="text-sm text-left md:text-right">
              c 2023 Dstudio Digital - All rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
