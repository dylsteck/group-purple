import { useState } from 'react';
import { PlusCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { useAccount } from "wagmi"
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState('0');

  const { address } = useAccount()

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOnSave = async() => {
    setIsOpen(false);
    await supabase.from('projects').insert({id: parseInt(projectId)});
    const {data: user, error: userError} = await supabase.from('addresses').select('*').eq('address', address).single();
    console.log(user)
    if(userError){
      await supabase.from('addresses').insert({
        address: address,
        projects: {
          id: parseInt(projectId)
        }
      });
    }
    else{
      // note: make sure works for update in future
      await supabase.from('addresses').update({projects: {id: parseInt(projectId)}}).eq('address', address);
    }
    
  }

  return (
    <div>   
      <button
        className="bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        <PlusCircleIcon width="24" height="24" className="inline-block" />
        <p className="inline-block ml-1.5 align-center items-center">Create</p>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-medium mb-2 text-black">Instructions</h2>
            <p className="text-gray-700">1. Go to <Link href="https://juicebox.money/create" className="font-bold">juicebox.money/create</Link> and choose your settings.<br/><small>(note: we will have the whole process done on this site *very soon*)</small></p>
            <p className="text-gray-700">2. Enter your Project ID here: <input className="ml-1" type="text" placeholder="eg. 503" value={projectId} onChange={(e) => setProjectId(e.target.value)} /></p>
            <button 
              className="bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleOnSave()}>
                <CheckBadgeIcon width="24" height="24" className="inline-block" />
                <p className="inline-block ml-1.5 align-center items-center">Save</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
