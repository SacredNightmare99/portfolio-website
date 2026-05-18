const GITHUB_OWNER = "ishaan-jindal";
const GITHUB_REPO = "portfolio-website";
const FILE_PATH = "data/projects.json";

type GitHubFileResponse = {
  content: string;
  sha: string;
  encoding: string;
};

/**
 * Fetch the current projects.json content and SHA from GitHub.
 */
export async function fetchProjectsFromGitHub(): Promise<{
  content: string;
  sha: string;
}> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN not configured");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  const data: GitHubFileResponse = await res.json();
  const decoded = Buffer.from(data.content, "base64").toString("utf-8");

  return { content: decoded, sha: data.sha };
}

/**
 * Update projects.json on GitHub, creating a commit.
 * If sha is undefined, creates the file for the first time.
 */
export async function updateProjectsOnGitHub(
  content: string,
  sha: string | undefined,
  commitMessage?: string
): Promise<{ commitUrl: string }> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN not configured");

  const body: Record<string, string> = {
    message: commitMessage ?? "chore: update projects via admin panel",
    content: Buffer.from(content).toString("base64"),
  };

  // Only include sha if we have one (omit for file creation)
  if (sha) {
    body.sha = sha;
  }

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return { commitUrl: data.commit?.html_url ?? "" };
}

