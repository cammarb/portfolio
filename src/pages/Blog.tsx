import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return   (

    <div className="mx-6 my-16">
  <div className="my-6">
    <Button asChild>
      <Link to={"/"} className="flex gap-2">
        <ArrowLeft size={13} />
        Back
      </Link>
    </Button>
    <div className="my-8 flex flex-col gap-2">
      <h1 className="text-2xl">Blog</h1>
      <p>Some notes and thoughts</p>
    </div>
  </div>
  <main>
    <div className="flex flex-col gap-4">
      Nothing to see here yet.
    </div>
  </main>
</div>
    ) 
};
