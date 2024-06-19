import GoalDetails from '@/app/component/GoalDetails/GoalDetails';
import React from 'react'


const getData = async (slug:any) => {

  const res = await fetch(
    `https://unstats.un.org/sdgapi/v1/sdg/Goal/${slug}/Target/List?includechildren=true`)

  if(!res.ok){
    throw new Error("Something Went Wrong");
  }

  return res.json();
};


const GoalDetailPage = async({params}:any) => {

  const {slug} = params;
  const goal = await getData(slug);


  return (
    goal.map((data:any) => (
      <GoalDetails goal={data}></GoalDetails>
    ))
    
  )
}

export default GoalDetailPage