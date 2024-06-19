"use client";
import React from "react";
import "./goal.css";
import Link from "next/link";


const Goal =  ({ goal }:any) => {

  return (
    <Link href={`/about/${goal.code}`} className="goal-box border text-white" >
      <div className="goal-number text-2xl">{goal.code}</div>
      <div className="goal-title mt-2">{goal.title}</div>
    </Link>
  );
};

export default Goal;
