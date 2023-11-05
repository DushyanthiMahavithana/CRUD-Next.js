import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


const getTitle = async() =>{
    try{
        const res = await fetch ("http://localhost:3000/api/topics", {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to Fetch Topics...");
        }
        return res.json();

    }catch (error){
        console.log("Error Loading Topics...",error);   

    }
}

export default async function Topics(){
    

    const {topics} = await getTitle();

    return (
        <>
        {topics.map ((t) => (
        <div key={t._id} className="p-4 border border-gray-500 my-3 flex justify-between gap-5">
            <div>
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <div>{t.description}</div>
            </div>
            <div>
                <RemoveBtn />
                <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        ))}
        
        </>
    )
}   