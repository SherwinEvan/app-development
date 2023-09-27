import React from "react";
import NavBar from "../components/navbar";
import "../../src/pages/newHome.css";
import ThreeDogs from "../assets/LandingPage/ThreeDogs.jpg";
import { SearchIcon, PawIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="grotesk max-w-8xl mx-auto ">
        <section className="w-full text-black items-center justify-center">
          <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
              <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Discover adorable furry companions waiting to be adopted and
              loving homes for your furry friends!              </h2>

              <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
                Looking for a furry friend to adopt?
              </p>
            </div>
            <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
              <img src={ThreeDogs} alt="Hero" />
            </div>
          </div>
          <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl text-center">
            Adopt a Loving Companion Today!
          </h2>
          <div className="mt-0 bg-white lg:mt-20 text-center">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              About Our Pet Adoption Program
            </h2>
            <div className="text-black">
              <div
                className="
                max-w-9xl
                mx-auto
                flex
                flex-col
                items-center
                justify-center
                px-5
              "
              >
                <div className="mr-0 mb-6 w-full text-center lg:w-2/3">
                  <p className="mb-4 text-lg leading-relaxed">
                    At our pet adoption program, we are dedicated to finding
                    loving homes for animals in need. Our mission is to provide
                    a safe and caring environment for every pet we rescue.
                  </p>
                </div>
                <img
                  className="
                  lg:w-5/7
                  mb-40
                  hidden
                  w-5/6
                  rounded object-cover
                  object-center
                  lg:inline-block 
                  lg:w-4/6
                "
                  src={ThreeDogs}
                  alt="img"
                />

                <img
                  className="
                mb-24
                inline-block
                w-5/6
                rounded
                object-cover object-center
                lg:hidden
                lg:w-4/6 
              "
                  src={ThreeDogs}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-black">
            <div className="mx-auto flex flex-col items-center px-5 lg:flex-row">
              <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Help Us Save More Lives!
                </h2>
                <p className="font-3xl mb-8 font-semibold leading-relaxed">
                  Your support matters. Together, we can make a difference in
                  the lives of these animals. Join us in our mission to provide
                  them with a better future.
                </p>
              </div>
              <div className="lg:w-full lg:max-w-2xl">
                <img src={ThreeDogs} alt="img" />
              </div>
            </div>
            <div className="pt-20">
              <div className="mx-auto flex flex-col px-5 py-2 text-left lg:flex-row">
                <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                  <img src={ThreeDogs} alt="img" />
                </div>
                <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                  <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                    Find a Loving Home for Your Pet!{" "}
                  </h2>
                  <p className="mb-8 font-semibold leading-relaxed text-black">
                    Discover a warm and caring home for your beloved pet! Our
                    platform connects pet owners with compassionate families,
                    ensuring a loving environment for your furry friend's
                    happiness.
                  </p>
                </div>
                <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                  <img src={ThreeDogs} alt="img" />
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="max-w-8xl mx-auto px-5 pt-10 lg:px-24">
                <div className="mt-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="text-5xl font-bold text-black">
                    Help Us Make a Difference!
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black">
              <div className="max-w-8xl mx-auto flex flex-col px-5 mt-6 py-10 text-black lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                  <img
                    className="rounded object-cover object-center"
                    alt="image"
                    src={ThreeDogs}
                  />
                </div>
                <div className="items-left flex flex-col pt-8 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                  <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                    Adopt a Pet, Save a Life!
                  </h2>
                  <h2 className="mb-6 text-lg font-bold sm:text-lg">
                    Be a Hero.
                  </h2>
                  <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                    Every pet deserves a loving home. Make a difference by
                    adopting a furry friend today.
                  </h2>
                  <a
                    href="/allpets"
                    className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                  >
                    Explore Our Pets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
