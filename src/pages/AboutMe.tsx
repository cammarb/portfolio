import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <div className="mx-6 my-16">
      <div className="my-6">
        <Button asChild>
          <Link to={"/"} className="flex gap-2">
            <ArrowLeft size={13} />
            Back
          </Link>
        </Button>
        <div className="my-8 flex flex-col gap-2">
          <h1 className="text-2xl">About Me</h1>
        </div>
      </div>
      <main>
      <div className="flex flex-col gap-4">
      I was born and raised in Lima, Peru. Everything else is kind of a blur. After finishing high school, I switched careers too many times, but the good news is that I found the right path for me (despite what every company is claiming right now because of AI). This led me to move to Berlin right after COVID to complete my studies.
          I'm currently working as a Software Engineer and honestly just enjoying the ride.
            </div>
        </main>
    </div>
  )
};
