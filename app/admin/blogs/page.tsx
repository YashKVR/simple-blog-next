import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminBlogsPage() {
    return <>
        <div className="flex justify-between items-center gap-4">
            <p className="text-3xl">Blogs</p>
            <Button asChild>
                <Link href="/admin/blogs/new">Add Blog</Link>
            </Button>
        </div>
    </>
}