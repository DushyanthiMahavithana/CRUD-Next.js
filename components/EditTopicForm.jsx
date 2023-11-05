"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditTopicForm ({id, title, description}){
    const [newTitle, setNewTitle]=useState(title);
    const [newDescription, setNewDescription]=useState(description);

    const router = useRouter();


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const res = await fetch (`http://localhost:3000/api/topics/${id}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({newTitle,newDescription}),  
            });
            if (!res.ok){
                throw new Error("Failed to Update")
            }

            router.refresh();
            router.push("/"); 
            
        }catch(error){
            console.log(error);

        }
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            onChange={(e)=>setNewTitle(e.target.value)}
            value={newTitle}
            className="border-8 mx-20 px-8 py-3" type="text" placeholder="Task Name">
            </input>

            <input 
            onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
            className="border-8 mx-20 px-8 py-3" type="text" placeholder="Description">
            </input>

            <button className="bg-orange-600 text-white font-bold py-3 px-10 w-fit mx-20">
                UPDATE
            </button>
        </form>

    );
    
    
};