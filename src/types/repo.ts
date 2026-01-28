import type { JSX } from "react/jsx-runtime";

export type RepoProps = {
  map(arg0: (repo: RepoProps) => JSX.Element): import("react").ReactNode;
  length: number;
  name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}