import { useState } from "react";
import Card from "../components/Card";
import type { fetchedDataType } from "../utils/types";
import Spinner from "../components/Spinner";
import { useFetchRepos } from "../hooks/useFetchRepos";

function Portfolio() {
  const [curOpen, setIsOpen] = useState<number>(0);
  const { repos, loading } = useFetchRepos();

  if (loading) return <Spinner />;

  return (
    <div className="mx-auto mt-10 max-w-6xl px-4">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold sm:text-3xl">Progetti</h1>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Una selezione dei miei lavori ed esperimenti.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
              default_branch: repo.default_branch,
              language: repo.language ?? ""
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
