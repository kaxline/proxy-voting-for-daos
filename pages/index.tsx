import type { NextPage }                from 'next'
import {ethers}                                    from 'ethers'
import { selectApp, updateConnectedWalletAddress } from '../store/slices/app'
import { useAppDispatch, useAppSelector, }         from '../store'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()

  const {connectedWalletAddress,} = useAppSelector(selectApp)

  const handleConnectWalletClick = async (): Promise<void> => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      console.log(`Account: ${address}`)
      dispatch(updateConnectedWalletAddress(address))
    }
  }

  return (
    <div className={''}>
      <nav className={'w-full h-20 text-white bg-purple-900 flex flex-row items-center justify-between px-12'}>
        <div
          className={''}
        >
          <span className={'font-bold'}>Proxy Voting</span>

        </div>
        <div>
          {
            !!connectedWalletAddress && (
              <span className={'font-bold truncate'}>{connectedWalletAddress}</span>
            )
          }
          {
            !connectedWalletAddress && (
              <div
                className={'bg-white text-purple-600 rounded px-3 py-2 cursor-pointer'}
                onClick={handleConnectWalletClick}
              >
                <span className={'font-bold'}>Connect Wallet</span>
              </div>
            )
          }
        </div>
      </nav>
    </div>
  )
}

export default Home
