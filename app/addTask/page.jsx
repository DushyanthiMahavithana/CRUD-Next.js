"use client";
import {useState} from "react";
import { useRouter } from "next/navigation";


export default function AddTask (){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!title || !description){
            alert("Title and description are required")
            return;
        }

        try{
            const res = await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({title,description})
            });
            if (res.ok){
                router.push('/');
            }else{
                throw new Error("Failed to Create a Topic");
            }

        }catch(error){
            console.log(error);

        }

    };


    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            className="border-8 mx-20 px-8 py-3" type="text" placeholder="Task Name">
            </input>

            <input 
             onChange={(e) => setDescription(e.target.value)} 
             value={description}
            className="border-8 mx-20 px-8 py-3" type="text" placeholder="Description">
            </input>

            <button 
            type = "submit"
            className="bg-orange-600 text-white font-bold py-3 px-10 w-fit mx-20">
                ADD
            </button>
        </form>
        
    )
}