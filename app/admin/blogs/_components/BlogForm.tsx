"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addBlog } from "../../_actions/products"
import { useFormState, useFormStatus } from "react-dom"

export function BlogForm() {
    const [error, action] = useFormState(addBlog, {})

    return <form action={action} className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" required />
            {error.title && <div className="text-destructive">{error.title}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input type="text" id="image" name="image" required />
            {error.image && <div className="text-destructive">{error.image}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" required />
            {error.content && <div className="text-destructive">{error.content}</div>}
        </div>
        <SubmitButton />
    </form>
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}</Button>
}