import React from "react";

function About() {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Animal History
              </h2>
              <p className="mt-6 text-gray-600">
                Roughly 66 million years ago species from the genus Waimanu
                lived in the waters off of New Zealand. The two species of
                Waimanu penguins are currently considered the basal ancestors,
                meaning they are considered the earliest common ancestor of all
                penguins.
              </p>
              <p className="mt-4 text-gray-600">
                An international team of researchers found that penguin
                evolution is closely tied to changing climates throughout the
                past 60 million years of Earth history. The contraction and
                expansion of ancient ice sheets in the last three million years
                gave rise to most modern species, whose evolution has since
                slowed to a crawl
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
