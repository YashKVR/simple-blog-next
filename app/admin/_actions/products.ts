"use server"

import db from "@/db/db";
import { redirect } from "next/navigation";
import { z } from "zod";

const addSchema = z.object({
    title: z.string().min(3),
    image: z.string().min(3),
    content: z.string().min(10)
})
export async function addBlog(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success == false) {
        console.log(result.error.formErrors.fieldErrors);
        return result.error.formErrors.fieldErrors
    }

    const data = result.data
    console.log("Creating...");

    await db.post.create({
        data: {
            title: data.title,
            content: data.content,
            published: true,
            imageUrl: data.image
        }
    })
    console.log("Created!");


    redirect("/admin/blogs")

}