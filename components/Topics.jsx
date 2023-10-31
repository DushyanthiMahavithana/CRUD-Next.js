import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function Topics(){
    return (
        <>
        <div className="p-4 border border-gray-500 my-3 flex justify-between gap-5">
            <div>
                <h2 className="text-3xl font-bold">Task Title</h2>
                <div>Task Description</div>
            </div>
            <div>
                <RemoveBtn />
                <Link href={'/editTopic/012'}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        </>
    )
}   