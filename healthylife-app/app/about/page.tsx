import React from 'react'
import Image from "next/image";
import background from "../../public/backgroung.avif";
import Goal from "../component/Goal/Goal";



// interface Goal {
//   goal: number;
//   title: string;
//   description: string;
// }

const getData = async () => {

  const res = await fetch(
    "https://unstats.un.org/sdgapi/v1/sdg/Goal/List?includechildren=false",{cache:'no-store'})

  if(!res.ok){
    throw new Error("Something Went Wrong");
  }

  return res.json();
};

const AboutPage = async() => {
  const goals = await getData();
  return (
    <div className="about-wrapper">
    <div className="head max-w-full flex justify-center items-center">
      <h4 className="text-center font-bold">THE GOALS</h4>
    </div>
    <div
      className="background"
      style={{ position: "relative", height: "400px" }}
    >
      <Image
        src={background}
        alt="background"
        className="contrast-75"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: "-5" }}
      ></Image>
      <div className="backdrop-opacity-35 max-w-full">
        <div className="bg-content text-white">
          <h1 className="text-4xl font-extralight">
            17 GOALS TO TRANSFORM OUR WORLD
          </h1>
        </div>
        <div className="goals mt-5">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {goals.map((goal: any) => (
              // (goal.code+"").split(".")[1] === "1" &&
              <Goal goal={goal} key={goal.code}></Goal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutPage