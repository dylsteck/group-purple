import { useEffect, useState, useCallback } from "react"
import { supabase } from "@/lib/supabase";
import Link from "next/link";


interface Project {
    created_at: string | null;
    id: number;
  }

export default function Groups(){

    const [projects, setProjects] = useState<Project[]>([]);

    const getData = useCallback(async () => {
        const { data, error } = await supabase.from('projects').select('*');
        console.log(data);
        if (!error) {
            setProjects(data);
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return(
        <div className="p-[15vh] pb-[10vh]">
         {projects.map((project) => {
            return(
                <div key={project.id} className="w-40 h-40">
                    <div className="w-[90%] h-[90%] bg-[#7342DC]"></div>
                    <Link href={`https://juicebox.money/v2/p/${project.id}`} target="_blank">
                        <p>Juicebox {project.id}</p>
                    </Link>
                </div>
            )
         })}
        </div>
    )
}