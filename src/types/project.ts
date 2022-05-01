interface CreatorData {
  id: string;
  name: string;
  github_link: string;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  other_creators: CreatorData[];
  icon_path: string;
  preview_path: string;
  link: string;
}
