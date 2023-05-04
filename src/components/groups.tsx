import { useEffect, useState } from "react";
import Iframe from 'react-iframe'

// export function Create(){

// }

export default function Groups(){

    const [frame, setFrame] = useState(null)


    const juicebox_subgraph_endpoint = "https://api.studio.thegraph.com/query/30654/mainnet-dev/6.2.0"

    const query = `{
        payEvents(first: 10, where: {project: "2-1"}, orderBy: timestamp, orderDirection: desc){
          beneficiary
          amount
          amountUSD
        }
      }`

    //   const json = await fetch(juicebox_subgraph_endpoint, {
    //     headers: { 'Content-Type': 'application/json' },
    //     method: 'POST',
    //     body: JSON.stringify({ query }),
    //   }).then(res => res.json())
      
    //   // amount and amountUSD both have 18 decimals
    //   for(const {beneficiary, amount, amountUSD} of json.data.payEvents)
    //     console.log(`${amount / 1e18} ETH paid worth ${amountUSD / 1e18} USD with beneficiary ${beneficiary}.`)


    useEffect(() => {
        //console.log(frame?.src)
        // if (frame?.src.startsWith("https://juicebox.money/@")) {
        // console.log("URL starts with https://juicebox.money/@");
        // } else {
        // console.log("URL does not start with https://juicebox.money/@");
        // }
    }, [frame])
    // get links
    // call gql api
    // map fxns?

    
    return(
        <div className="mt-[10vh]">
            <div className="p-5 w-[90%] ml-[5%]">
            <div className="mb-5">
                <div className="inline-block">
                    <div className="flex justify-center items-center rounded-full w-10 h-10 bg-white text-black">
                        <p className="font-bold text-center">1.</p>
                    </div>
                </div>
                <div className="inline-block ml-2">
                    <p className="text-xl">Choose your settings on Juicebox</p>
                </div>
            </div>
                <iframe className="w-[100%] rounded-xl" src="https://juicebox.money/create" width="1000" height="700" ref={(f) => setFrame(f)}> </iframe>
            </div>
        </div>
    )
}