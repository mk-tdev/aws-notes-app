import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50">
        <div className="w-full h-64 bg-gray-900 flex flex-col items-center justify-center mb-8 p-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to AWS Services Explorer
          </h1>
          <p className="text-2xl text-white font-semibold">
            Explore a comprehensive list of AWS services with details! click the
            button to get started!
          </p>
        </div>

        {/* Link to AWS Services Page */}
        <Link
          href="/aws-notes"
          className="px-6 py-3 bg-gray-600 text-white text-lg rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          Go to AWS Services
        </Link>
      </div>
    </main>
  );
}
