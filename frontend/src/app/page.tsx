import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">We Gather</h1>
      <p className="text-gray-400 text-center max-w-md mb-8">
        A community platform for collective action, mutual aid, and solidarity.
      </p>
      <Link
        href="/claim"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Claim Founding Member NFT
      </Link>
    </main>
  );
}