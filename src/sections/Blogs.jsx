import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const MEDIUM_FEED =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bagulpragati";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(MEDIUM_FEED)
      .then((res) => res.json())
      .then((data) => setBlogs(data.items || []))
      .catch(console.error);
  }, []);

  return (
  <section className="max-w-5xl mx-auto px-6 md:px-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.guid} blog={blog} />
        ))}
      </div>
      </div>
    </section>
  );
}
