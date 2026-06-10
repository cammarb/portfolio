import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { blogAPI } from '@/main';

export const BlogEntry = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [entry, setEntry] = useState(state?.entry ?? null);

  useEffect(() => {
    if (entry && String(entry.id) === String(id)) return;
    const fetchEntry = async () => {
      try {
        const response = await fetch(`${blogAPI}/entries/${id}`);
        const data = await response.json();
        setEntry(data);
      } catch (error) {
        console.error("Failed to fetch entry:", error);
      }
    };
    fetchEntry();
  }, [id, entry]);

  if (!entry) return <p>Loading...</p>;

  return (
    <div className="mx-6 my-16">
      <div className="my-6">
        <Button asChild>
          <Link to={"/blog"} className="flex gap-2">
            <ArrowLeft size={13} />
            Back
          </Link>
        </Button>
        <div className="my-8 flex flex-col gap-2">
          <h1 className="text-2xl">{entry.title}</h1>
        </div>
      </div>
      <main>
        <div className="flex flex-col gap-4">
          {entry.content || "No content available."}
        </div>
      </main>
    </div>
  )
};
