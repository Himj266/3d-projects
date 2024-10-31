import { ProjectCard } from "@/core/components/ProjectCard";

// constants
import { PROJECTS } from "@/core/projects";

export default function Home() {
  return (
    <div className="flex gap-5">
      {PROJECTS.map(({ id, url, name }) => (
        <ProjectCard url={url} name={name} key={id} />
      ))}
    </div>
  );
}
