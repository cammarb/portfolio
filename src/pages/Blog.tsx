import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { blogAPI } from '@/main';

export const Blog = () => {
  const [blogEntries, setBlogEntries] = useState([]);

  const prefetchCache = useRef({});

  const handlePrefetch = async (id) => {
    if (prefetchCache.current[id]) return;

    try {
      const response = await fetch(`${blogAPI}/entries/${id}`);
      const data = await response.json();
      prefetchCache.current[id] = data;
      console.log(`Prefetched blog ${id}:`, data);
    } catch (error) {
      console.error("Failed to prefetch blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${blogAPI}/entries`);
        const data = await response.json();
        setBlogEntries(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

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
          <h1 className="text-2xl">Blog</h1>
          <p>Some notes and thoughts</p>
        </div>
      </div>
      <main>
        <div className="flex flex-col gap-4">
          Nothing to see here yet.
          {blogEntries.map(entry => (
            <Link
              key={entry.id}
              to={`/blog/${entry.id}`}
              state={{ entry: prefetchCache.current[entry.id] ?? entry }}
              onMouseEnter={() => handlePrefetch(entry.id)}
              className="my-2 p-4 flex gap-2 border-l-4"
            >
              <div key={entry.id} className="flex flex-col">
                <h4 className="text-2xl font-medium">{entry.title}</h4>
                <p className="text-sm opacity-50">Published on: {new Date(entry.createdDate).toLocaleDateString()}</p>
              </div>
            </Link>
          ))
          }
        </div>
      </main>
    </div>
  )
};
