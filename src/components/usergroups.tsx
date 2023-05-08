import { use, useEffect, useState } from "react"
import Create from "./create";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useAccount } from "wagmi";
import { Json } from "@/lib/types.t";

interface Project {
  address: string | null;
  created_at: string | null;
  id: number;
  projects: Json;
}

export default function Groups(){

    const [projects, setProjects] = useState<Project[]>([]);
    const { address } = useAccount();
      

    useEffect(() => {
      const getData = async () => {
        const { data, error } = await supabase.from('addresses').select('*').eq('address', address);
        if (!error) {
          console.log(data);
          setProjects(data);
        }
      };
    
      getData();
    }, [address]);
    
    return(
        <div className="p-[15vh] pb-[10vh]">
         {typeof projects !== 'undefined' ? projects.map((project, id) => {
            return(
                <div key={id} className="w-40 h-40 mb-10">
                    <div className="w-[90%] h-[90%] bg-[#7342DC]"></div>
                    <Link href={`https://juicebox.money/v2/p/${project?.id}`} target="_blank">
                        <p>Juicebox {project?.id}</p>
                    </Link>
                </div>
            )
         }) : <p className="mb-5 font-medium"> You have no projects. </p>}
         <Create />
        </div>
    )
}