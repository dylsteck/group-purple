import { db } from "@/lib/kysely";
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { Address } from "@/lib/types.t";
import Create from "./create";

export default function UserGroups(){

    const [userData, setUserData] = useState<Address>();

    const { address } = useAccount()

    // const checkIsUserInGroup = (async() => {
    //     const data = await db
    //     .selectFrom('addresses')
    //     .select(['id', 'address', 'projects', 'created_at'])
    //     .where('address', '=', address)
    //     .executeTakeFirst();
    //     setUserData(data);
    // });

    useEffect(() => {
        console.log(address);
    }, [address]);


    return(
        <>
         <Create />
        </>
    )
}