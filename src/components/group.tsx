import React, { useState } from 'react';


interface GroupProps {
    id: string;
}
  
  export default function Group({ id }: GroupProps) {

    const [data, setData] = useState(null);

    const juicebox_subgraph_endpoint = "https://api.studio.thegraph.com/query/30654/mainnet-dev/6.2.0"

    const query = `{
        projects(where:{id: ${id}}){
          # Participants are wallets which have held a project's token at any point in time
          # Only 100 participants will be returned
          participants(orderBy: totalPaid, orderDirection: desc){
            totalPaid
            balance
          }
        }
      }`

    async function getProjectData(){
        const json = await fetch(juicebox_subgraph_endpoint, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ query }),
        }).then(res => res.json());
        setData(json.json());
        // for(const {beneficiary, amount, amountUSD} of json.data.payEvents)
        //     console.log(`${amount / 1e18} ETH paid worth ${amountUSD / 1e18} USD with beneficiary ${beneficiary}.`
    }

    return (
      <div>
        {data !== null && 
        <>
            {/* Note: Further style & animate when we walk thru */ }
            {Object.keys(data).map((key) => {
                return(
                    <div>
                        <p>
                            {`${key}: ${data[key]}`}
                        </p>
                    </div>
                )
            })}
        </>}
     </div>
    );
  }