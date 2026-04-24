import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/${params.id}`,
  );

  if (!res.ok) throw new Response("Project not found", { status: 400 });

  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-orange-400 hover:text-orange-500  mb-6 transition">
        <FaArrowLeft className="mr-2" /> Back To Projects
      </Link>

      <div className="grid gap-8 items-start md:grid-cols-2">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-orange-400 mb-4">
            {project.title}
          </h1>
          <p className="text-orange-200 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} * {project.category}
          </p>
          <p className="text-orange-300 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded transition">
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
