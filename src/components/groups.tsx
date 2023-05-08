import Link from "next/link";
import { useEffect, useState } from "react";
import Iframe from 'react-iframe'

// export function Create(){

// }

export default function Groups(){

    const [frame, setFrame] = useState(null);


    useEffect(() => {
        //console.log(frame?.src)
        // if (frame?.src.startsWith("https://juicebox.money/@")) {
        // console.log("URL starts with https://juicebox.money/@");
        // } else {
        // console.log("URL does not start with https://juicebox.money/@");
        // }
    }, [frame])
    
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
                {/* for iframe: ref={(f) => setFrame(f)} */ }
                {/* <iframe className="w-[100%] rounded-xl" src="https://juicebox.money/create" width="1000" height="700"> </iframe> */}
                <div>
                    <p>While we want to do this natively on the site, that's something we're still in the process of finishing up. 
                    To make things safer for you, <Link href="https://juicebox.money/create" target="_blank">click here to create a project on Juicebox</Link>.
                    When you're done, come back here and enter your project ID -- we'll load your settings and add you to the list of Group Purples.
                    When you put your ID in, you can use our site and not have to worry about going back to Juicebox.</p>
                </div>
            </div>
        </div>
    )
}