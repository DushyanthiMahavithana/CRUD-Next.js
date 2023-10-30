import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-cente bg-amber-200 px-10 py-4 my-8">
            <Link className="text-orange-600 font-bold" href={"/"}>MY CRUD APP</Link>
            <Link className=" bg-white p-3 text-orange-600 font-bold" href={"/addTask"}> ADD TASK</Link>
        </nav>

    );
}