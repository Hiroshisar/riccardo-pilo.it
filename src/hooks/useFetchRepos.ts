import { useEffect, useState } from "react";

export function useFetchRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // TODO rimuovere chiamata con token
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/users/Hiroshisar/repos?sort=created&direction=desc",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
          }
        );

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
