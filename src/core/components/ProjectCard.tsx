import Link from "next/link";

export const ProjectCard = ({ url, name }: { url: string; name: string }) => {
  return (
    <Link href={url}>
      <div className="border-2 border-gray-600 p-4 rounded-lg hover:opacity-75 cursor-pointer ">
        <h2 className="text-xl">{name}</h2>
      </div>
    </Link>
  );
};
