import { useEffect, useState } from "react";

export function useFetchRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/users/Hiroshisar/repos?sort=created&direction=desc"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch repos");
        }

        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading };
}
