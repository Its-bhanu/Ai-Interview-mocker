"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { Camera } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockInterview } from '@/utils/schema'; // adjust path if needed
import Webcam from 'react-webcam'; // real webcam component

function Interview() {
  const params = useParams();
  const interviewId = params?.interviewId;
  const router=useRouter();

  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(mockInterview)
      .where(eq(mockInterview.mockId, interviewId));
    setInterviewData(result[0]);
  };

  const handleStartInterview = () => {
    setInterviewStarted(true);
    router.push('/dashboard/interview/'+interviewId+'/start')
    
  };

  return (
    <div className="flex my-10 items-center justify-center flex-col px-4">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="my-6">
        {webcamEnabled ? (
          <>
            <Webcam
              onUserMedia={() => setWebcamEnabled(true)}
              onUserMediaError={() => setWebcamEnabled(false)}
              style={{ height: 300, width: 800, borderRadius: 12 }}
            />
            <p className="text-yellow-600 mt-4 text-sm text-center font-medium">
              ⚠️ Your camera is now active. Video will be monitored during the interview. Please ensure you're in a quiet and well-lit place.
            </p>
            {!interviewStarted && (
              <Button onClick={handleStartInterview} className="mt-4 w-full"
              
              >
                Start Interview
              </Button>
            )}
          </>
        ) : (
          <>
            <Camera className="h-72 w-full my-8 p-20 bg-secondary rounded-lg border" />
            <Button onClick={() => setWebcamEnabled(true)} className="w-full">
              Enable Camera
            </Button>
          </>
        )}
      </div>

      {interviewData && (
        <div className="flex flex-col my-5 text-left w-full max-w-xl px-4">
          <h2><strong>Job Role/Position:</strong> {interviewData.jobPosition}</h2>
          <h2><strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}</h2>
          <h2><strong>Years of Experience:</strong> {interviewData.jobExperience}</h2>
        </div>
      )}
    </div>
  );
}

export default Interview;
