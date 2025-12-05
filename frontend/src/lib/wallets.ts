'use client';

import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { isConnected, getAddress } from '@stellar/freighter-api';

const POLKADOT_RPC = process.env.NEXT_PUBLIC_POLKADOT_RPC || 'wss://rpc.polkadot.io';

export async function connectPolkadotWallet() {
    // Ask extensions (Talisman/SubWallet/polkadot.js) for access
    const extensions = await web3Enable('Neon Arena');
    if (!extensions || extensions.length === 0) {
        throw new Error('No Polkadot wallet extension found (install Talisman/SubWallet).');
    }

    const accounts = await web3Accounts();
    if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found in Polkadot wallet.');
    }

    const address = accounts[0].address;

    const provider = new WsProvider(POLKADOT_RPC);
    const api = await ApiPromise.create({ provider });

    return {
        address,
        api,
    };
}

export async function connectStellarWallet() {
    const connected = await isConnected();
    if (!connected) {
        throw new Error('Freighter wallet not found or not connected.');
    }

    const result = await getAddress();

    if (result.error) {
        throw new Error(result.error);
    }

    return {
        address: result.address,
    };
}
