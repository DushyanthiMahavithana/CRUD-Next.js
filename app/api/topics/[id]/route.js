import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongodb();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "updeted..."}, {status:200}); 

}
