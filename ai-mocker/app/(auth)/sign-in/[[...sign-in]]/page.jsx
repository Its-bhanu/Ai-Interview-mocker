

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}
