import { createSlice, } from '@reduxjs/toolkit'
import { RootState, }   from '../index'


export type ProxyVotingAppState = {
  connectedWalletAddress?: string | null
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    connectedWalletAddress: null,
  } as ProxyVotingAppState,
  reducers: {
    updateConnectedWalletAddress: ( state, {payload,}, ): void => {
      state.connectedWalletAddress = payload
    },

  },
},)

export const selectApp = ( state: RootState, ): ProxyVotingAppState => state.app

export const {
  updateConnectedWalletAddress,
} = appSlice.actions

export default appSlice.reducer
