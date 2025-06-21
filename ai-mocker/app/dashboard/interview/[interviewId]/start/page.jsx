
"use client";
import { db } from '@/utils/db';
import { mockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {
    const unwrappedParams=use(params)
    const [interviewData, setInterviewData] = useState("");
    const [mockInterviewQuestion, setmockInterviewQuestion] = useState([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    useEffect(()=>{
         GetInterviewDetails();
    },[]);

    const GetInterviewDetails = async () => {
  const result = await db
    .select()
    .from(mockInterview)
    .where(eq(mockInterview.mockId, unwrappedParams.interviewId));

    const jsonMockResp= JSON.parse(result[0].jsonMockResp)
  if (!result || result.length === 0) {
    console.error("No interview data found for ID:", unwrappedParams.interviewId);
    return;
  }

  // const rawJson = result[0].jsonMockResp;

  // try {
  //   const jsonMockResp = typeof rawJson === "string" ? JSON.parse(rawJson) : rawJson;
  //   setmockInterviewQuestion(jsonMockResp);
  //   setInterviewData(result[0]);
  // } catch (err) {
  //   console.error("Error parsing JSON from mockInterview:", rawJson, err);
  // }
  setmockInterviewQuestion(jsonMockResp);
  setInterviewData(result[0]);
};

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

      
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
        </div>
        <div className='flex justify-end gap-6'>
          { activeQuestionIndex>0 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Prev Question</Button>}
          { activeQuestionIndex!=mockInterviewQuestion?.length-1 &&  <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
          { activeQuestionIndex==mockInterviewQuestion.length-1 &&  
          <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
          <Button>End Interview</Button> </Link>}
        </div>
      
    </div>
  )
}

export default StartInterview
