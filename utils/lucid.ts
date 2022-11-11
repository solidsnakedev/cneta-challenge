import { Blockfrost, Lucid, Network } from 'lucid-cardano';
import { createTypeReferenceDirectiveResolutionCache } from 'typescript';

const blockfrostKey = process.env.BLOCKFROST_KEY as string
const apiURL = process.env.API_URL as string
const network = process.env.NETWORK as Network

console.log(blockfrostKey,apiURL,network)

const initLucid = async (wallet: string) => {
    const api = (await window.cardano[
        wallet.toLowerCase()
    ].enable())
    console.log(api)
    const lucid = await Lucid.new(
        new Blockfrost(apiURL, blockfrostKey), network)
    console.log(lucid)
    lucid.selectWallet(api)
    //setLucid(lucid)
    return lucid;
}

export default initLucid;