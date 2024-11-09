import Link from "next/link";

export const ProjectCard = ({ url, name }: { url: string; name: string }) => {
  return (
    <Link href={url}>
      <div className="border-2 border-gray-600 p-4 rounded-lg hover:opacity-75 cursor-pointer bg-slate-700">
        <h2 className="text-xl text-gray-100">{name}</h2>
      </div>
    </Link>
  );
};
