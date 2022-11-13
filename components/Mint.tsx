import { Lucid } from "lucid-cardano"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { mintParam } from "../lib/endpoints"
import initLucid from "../utils/lucid"
import { useStoreState } from "../utils/store"

const Mint: NextPage = () => {

    const walletStore = useStoreState((state: any) => state.wallet)
    const [lucid, setLucid] = useState<Lucid>()
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        if (!lucid) {
            initLucid(walletStore.name).then((Lucid: Lucid) => { setLucid(Lucid) })
        }
        setMounted(true)
      }, [lucid])

    if (!mounted){
        return null
    }

    return (
        <div className='flex '>
            <div className='flex '>
            <button className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-5" onClick={() => { mintParam(lucid as Lucid) }}>Mint</button>
            </div>

        </div>

    )
}

export default Mint
