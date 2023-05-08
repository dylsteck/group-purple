import React, { useEffect, useState } from 'react';
import * as IPFS from 'ipfs-core';


interface GroupProps {
    id: string;
}
  
  export default function Group({ id }: GroupProps) {

    console.log("ID", id);

    const [data, setData] = useState(null);

    const juiceboxSubgraphEndpoint =
  "https://api.studio.thegraph.com/query/30654/mainnet-dev/6.2.0";
    const ipfsEndpoint = 'https://ipfs.io/ipfs'

    const query = `{
      projects(where:{projectId: ${parseInt(id)}}){
        metadataUri
        id
        createdAt
        currentBalance
      }
    }`;

    const repoPath = 'ipfs-' + Math.random();
    const ipfs = (async () => {
      return await IPFS.create({ repo: repoPath });
    })();

    async function getProjectData() {
      const json = await fetch(juiceboxSubgraphEndpoint, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ query }),
      }).then((res) => res.json());
      const jsonData = json.data.projects;
      //
    }
    
    useEffect(() => {
      getProjectData();
    }, []);


    useEffect(() => {
      getProjectData()
    }, [])

    return (
      <div>
        {data !== null && 
        <>
            {/* Note: Further style & animate when we walk thru */ }
            {Object.keys(data).map((key) => {
                return(
                    <div key={`data-${key}`}>
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