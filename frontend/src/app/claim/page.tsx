"use client";

import dynamic from "next/dynamic";
import { ThirdwebProvider } from "thirdweb/react";

const ClaimButton = dynamic(() => import("@/components/ClaimButton"), {
  ssr: false,
});

export default function ClaimPage() {
  return (
    <ThirdwebProvider>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-2">Founding Member NFT</h1>
        <p className="text-gray-400 text-center max-w-md mb-8">
          Connect your wallet and claim your Founding Member NFT. Limited to 100 members.
        </p>
        <ClaimButton />
      </main>
    </ThirdwebProvider>
  );
}