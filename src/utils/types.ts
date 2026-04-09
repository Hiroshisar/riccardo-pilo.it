export type fetchedDataType = {
  id: number;
  name: string;
  full_name: string;

  private: boolean;
  visibility: "public" | "private";

  html_url: string;
  description: string | null;
  homepage: string | null;

  created_at: string;
  updated_at: string;
  pushed_at: string;

  language: string | null;
  topics: string[];

  stargazers_count: number;
  watchers_count: number;
  forks_count: number;

  size: number;
  default_branch: string;

  fork: boolean;
  archived: boolean;
  disabled: boolean;

  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;

  open_issues_count: number;

  clone_url: string;
  ssh_url: string;
  svn_url: string;

  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };

  license: {
    key: string;
    name: string;
    spdx_id: string | null;
    url: string | null;
  } | null;
};

export type repoDataType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  repoLink: string;
  default_branch: string;
};

export type curriculumDataType = {
  year: number;
  startDate: string;
  endDate: string;
  type: string;
  employer?: string;
  school?: string;
  link?: string;
  activities?: string[];
};

export type GroupedWork = {
  year: number;
  items: curriculumDataType[];
};

export type presentationType = {
  main: string;
  subtitle: string;
};

export type skillsDataType = {
  activities: {
    description: string;
    activities: string[];
  };
  competences: {
    title: string;
    body: string;
  }[];
};
