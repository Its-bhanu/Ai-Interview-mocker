import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Account</h1>
        <SignUp path="/sign-up" routing="path" />
      </div>
    </div>
  );
}
