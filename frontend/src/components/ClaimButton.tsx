"use client";

import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { ConnectButton, TransactionButton } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc721";
import { useActiveAccount } from "thirdweb/react";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

const contract = getContract({
  client,
  chain: baseSepolia,
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
});

export default function ClaimButton() {
  const account = useActiveAccount();

  const registerMember = async (walletAddress: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress }),
      });

      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/members/${walletAddress}/founding`, {
        method: "PATCH",
      });
    } catch (error) {
      console.error("Failed to register member:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <ConnectButton client={client} />

      {account && (
        <TransactionButton
          transaction={() =>
            claimTo({
              contract,
              to: account.address,
              quantity: BigInt(1),
            })
          }
          onTransactionConfirmed={async () => {
            await registerMember(account.address);
            alert("Welcome to We Gather! You are now a Founding Member.");
          }}
          onError={(error) => {
            console.error(error);
            alert("Claim failed. You may have already claimed your NFT.");
          }}
        >
          Claim Founding Member NFT
        </TransactionButton>
      )}
    </div>
  );
}