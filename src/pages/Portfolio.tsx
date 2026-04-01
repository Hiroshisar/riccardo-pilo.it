import { useState } from "react";
import Card from "../components/Card";
import { useFetchRepos } from "../hooks/useFetchRepos";
import type { GitHubRepo } from "../utils/types";
import Spinner from "../components/Spinner";

function Portfolio() {
  const [curOpen, setIsOpen] = useState<number>(0);
  const { repos, loading } = useFetchRepos();

  if (loading) return <Spinner />;

  return (
    <div>
      {repos.map((repo: GitHubRepo) => (
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
