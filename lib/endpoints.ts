import { Lucid, Data, utf8ToHex, Constr, applyParamsToScript, MintingPolicy } from "lucid-cardano";
import * as helios from '@hyperionbt/helios'
import {mintPolicyNoParams} from  '../utils/validators'

export const mintRaffle = async (lucid : Lucid) => {
    if (lucid) {
        console.log("minting")
        const walletUtxos = await lucid.wallet.getUtxos()
        const walletTxHash = walletUtxos[0].txHash
        const walletOutputIndex = walletUtxos[0].outputIndex
        const uplc = helios.deserializeUplc(`{"type": "PlutusScriptV1", "cborHex": "${mintPolicyNoParams.cborHex}"}`).toString();
        console.log(uplc)
        
        const mintingPolicy : MintingPolicy = {
          type: "PlutusV1",
          script: applyParamsToScript(
            mintPolicyNoParams.cborHex,
             new Constr(0, [
               new Constr(0, [
                 walletTxHash,
               ]),
               BigInt(walletOutputIndex),
             ]),
          ),
        }
        console.log(utf8ToHex("sss"))
        const newuplc = helios.deserializeUplc(`{"type": "PlutusScriptV1", "cborHex": "${mintingPolicy.script}"}`).toString();
        console.log(newuplc)

        const mintingPolicyId = lucid.utils.mintingPolicyToId(mintingPolicy);
        console.log(mintingPolicyId)


        const unit = mintingPolicyId + utf8ToHex("yep")
        const asset = {[unit]: BigInt(1)}
        console.log(mintingPolicy)

        const tx = await lucid
                    .newTx()
                    .collectFrom([walletUtxos[0]])
                    .attachMintingPolicy(mintingPolicy)
                    .mintAssets(asset,Data.empty())
                    .complete()

        const signedTx = await tx.sign().complete();
        const txHash = await signedTx.submit();
        console.log('Transaction submitted:', txHash)
    }
  }


  