// export default function BlogCard({ blog }) {
//   return (
//     <a
//       href={blog.link}
//       target="_blank"
//       rel="noreferrer"
//       className="
//         block rounded-xl p-5
//         bg-white
//         border border-gray-200

//         hover:border-blue-400
//         hover:-translate-y-1
//         transition-all duration-200

//         text-gray-900
//       "
//     >
//       {/* Title */}
//       <h3 className="text-base font-medium leading-snug">
//         {blog.title}
//       </h3>

//       {/* Date */}
//       <p className="mt-2 text-sm text-gray-500">
//         {new Date(blog.pubDate).toDateString()}
//       </p>

//       {/* CTA */}
//       <span className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600">
//         Read on Medium
//         <span aria-hidden>↗</span>
//       </span>
//     </a>
//   );
// }


export default function BlogCard({ blog }) {
  const image = blog.thumbnail || blog.enclosure?.link;

  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noreferrer"
      className="
        group
        flex flex-col
        rounded-xl
        border border-gray-200
        bg-white
        overflow-hidden

        hover:border-blue-400
        hover:-translate-y-1
        transition-all duration-200
      "
    >

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {new Date(blog.pubDate).toDateString()}
        </p>

        {/* Spacer pushes CTA to bottom */}
        <div className="flex-1" />

        {/* Footer CTA */}
        <div className="mt-4 text-sm text-blue-600 font-medium">
          Read on Medium ↗
        </div>
      </div>
    </a>
  );
}

