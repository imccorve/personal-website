import { writable } from 'svelte/store';

const projects = [
  { title: 'Project 1', subtitle: 'Description 1', src: '/path/to/resource1', type: 'image' },
  // ... other projects
];

const currentProjectIndex = writable(0);
export const currentProject = writable(projects[0]);

export function nextProject() {
  currentProjectIndex.update(n => {
    const nextIndex = (n + 1) % projects.length;
    currentProject.set(projects[nextIndex]);
    return nextIndex;
  });
}

export function previousProject() {
  currentProjectIndex.update(n => {
    const prevIndex = (n - 1 + projects.length) % projects.length;
    currentProject.set(projects[prevIndex]);
    return prevIndex;
  });
}
