import { ProjectCard } from "@/core/components/ProjectCard";

// constants
import { PROJECTS } from "@/core/projects";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-5 h-screen w-screen bg-slate-900">
      {PROJECTS.map(({ id, url, name }) => (
        <ProjectCard url={url} name={name} key={id} />
      ))}
    </div>
  );
}
