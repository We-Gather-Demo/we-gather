import { createThirdwebClient, getContract } from 'thirdweb'
import { baseSepolia } from 'thirdweb/chains'
import { ConnectButton, TransactionButton } from 'thirdweb/react'
import { claimTo } from 'thirdweb/extensions/erc1155'
import { useActiveAccount } from 'thirdweb/react'

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'

if (!clientId) {
  console.warn('Missing VITE_THIRDWEB_CLIENT_ID environment variable')
}

if (!contractAddress) {
  console.warn('Missing VITE_CONTRACT_ADDRESS environment variable')
}

const client = clientId ? createThirdwebClient({ clientId }) : null
const contract = client && contractAddress ? getContract({
  client,
  chain: baseSepolia,
  address: contractAddress,
}) : null

export default function ClaimButton() {
  const account = useActiveAccount()

  if (!client || !contract) {
    return (
      <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md">
        <h3 className="text-red-400 font-semibold mb-2">Configuration Required</h3>
        <p className="text-gray-300 text-sm mb-4">
          Please set up your environment variables:
        </p>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• VITE_THIRDWEB_CLIENT_ID</li>
          <li>• VITE_CONTRACT_ADDRESS</li>
          <li>• VITE_BACKEND_URL (optional)</li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
          Copy .env.example to .env and add your values
        </p>
      </div>
    )
  }

  const registerMember = async (walletAddress: string) => {
    try {
      await fetch(`${backendUrl}/api/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress }),
      })

      await fetch(`${backendUrl}/api/members/${walletAddress}/founding`, {
        method: 'PATCH',
      })
    } catch (error) {
      console.error('Failed to register member:', error)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <ConnectButton client={client} />

      {account && (
        <TransactionButton
          transaction={() =>
            claimTo({
              contract,
              to: account.address,
              tokenId: BigInt(0),
              quantity: BigInt(1),
            })
          }
          onTransactionConfirmed={async () => {
            await registerMember(account.address)
            alert('Welcome to WeGather! You are now a Founding Member.')
          }}
          onError={(error) => {
            console.error(error)
            alert('Claim failed. You may have already claimed your NFT.')
          }}
        >
          Claim Founding Member NFT
        </TransactionButton>
      )}
    </div>
  )
}