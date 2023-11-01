export default function EditTopicForm (){
    return(
        <form className="flex flex-col gap-3">
            <input className="border-8 mx-20 px-8 py-3" type="text" placeholder="Task Name">
            </input>
            <input className="border-8 mx-20 px-8 py-3" type="text" placeholder="Description">
            </input>
            <button className="bg-orange-600 text-white font-bold py-3 px-10 w-fit mx-20">
                UPDATE
            </button>
        </form>

    );
    
}