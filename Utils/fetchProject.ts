import { Project } from "../typings"

export const fetchProject = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/projects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return projects;
}