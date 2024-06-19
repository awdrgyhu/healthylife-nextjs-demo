"use client";
import React from "react";

const GoalDetails = ({ goal }: any) => {
  console.log("target", goal);
  return (
    <>
      <div className=" mx-auto mt-5">
        <div className="head max-w-full flex justify-center items-center">
          <h4 className="text-center font-bold">GOAL {goal.code}</h4>
        </div>
        <div className="container goal-info mt-5 p-3">
          <div className="flex flex-row gap-5">
            <div className="basis-1/4 text-xl font-bold text-black">Title:</div>
            <div className="basis-3/4">{goal.title}</div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="basis-1/4 font-bold text-black text-xl">Description:</div>
            <div className="basis-3/4">{goal.description}</div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="basis-1/4 text-xl font-bold text-black">Targets:</div>
            <div className="basis-3/4">
              {goal.targets.map((target:any) => (
                <>
                     <div className="font-bold text-black">{target.code}</div>
                     <div>{target.title}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalDetails;
