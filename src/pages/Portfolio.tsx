import { useState } from "react";
import Card from "../components/Card";
/*
import { useFetchRepos } from "../hooks/useFetchRepos";*/
import type { fetchedDataType } from "../utils/types";
import Spinner from "../components/Spinner";

const test: fetchedDataType[] = [
  {
    id: 1047543330,
    name: "Memory",
    full_name: "Hiroshisar/Memory",
    private: false,
    owner: {
      login: "Hiroshisar",
      id: 129801360,
      avatar_url: "https://avatars.githubusercontent.com/u/129801360?v=4",
      url: "https://api.github.com/users/Hiroshisar"
    },
    html_url: "https://github.com/Hiroshisar/Memory",
    description:
      "A simple Memory Game built with .NET MAUI. Flip the cards, find the pairs, and challenge your memory!",
    fork: false,
    created_at: "2025-08-30T16:50:18Z",
    updated_at: "2026-04-01T13:43:19Z",
    pushed_at: "2025-08-30T21:12:19Z",
    ssh_url: "git@github.com:Hiroshisar/Memory.git",
    clone_url: "https://github.com/Hiroshisar/Memory.git",
    svn_url: "https://github.com/Hiroshisar/Memory",
    homepage: "",
    size: 214,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null
    },
    topics: [],
    visibility: "public",
    default_branch: "master"
  },
  {
    id: 1045871903,
    name: "IndIWare",
    full_name: "Hiroshisar/IndIWare",
    private: false,
    owner: {
      login: "Hiroshisar",
      id: 129801360,
      avatar_url: "https://avatars.githubusercontent.com/u/129801360?v=4",
      url: "https://api.github.com/users/Hiroshisar"
    },
    html_url: "https://github.com/Hiroshisar/IndIWare",
    description:
      "IndIWare is a personal project, created both as a learning exercise and to address a practical need.  The application is developed with .NET MAUI and C#, and its purpose is to index files on a PC in order to provide a faster and more organized search system compared to the default Windows search.",
    fork: false,

    created_at: "2025-08-27T20:52:19Z",
    updated_at: "2026-04-01T11:56:50Z",
    pushed_at: "2025-08-30T17:22:47Z",
    ssh_url: "git@github.com:Hiroshisar/IndIWare.git",
    clone_url: "https://github.com/Hiroshisar/IndIWare.git",
    svn_url: "https://github.com/Hiroshisar/IndIWare",
    homepage: "",
    size: 286,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null
    },
    topics: [],
    visibility: "public",
    default_branch: "master"
  }
];

function Portfolio() {
  const [curOpen, setIsOpen] = useState<number>(0);
  // TODO: ripristinare l'hook e togliere i dati di test
  //const { repos, loading } = useFetchRepos();

  const loading = false;
  const repos = test;

  if (loading) return <Spinner />;

  return (
    <div className="mt-10">
      {repos.map((repo: fetchedDataType) => (
        <Card
          key={repo.id}
          curOpen={curOpen}
          onOpen={setIsOpen}
          card={{
            id: repo.id,
            name: repo.name,
            description: repo.description ?? "",
            createdAt: repo.created_at,
            repoLink: repo.html_url,
            default_branch: repo.default_branch
          }}
        />
      ))}
    </div>
  );
}

export default Portfolio;
