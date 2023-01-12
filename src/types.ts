export type Education = {
  university: string;
  major: string;
  address: string;
  duration: string;
};

export type Profile = {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  address: string;
};

export type Skills = { skillType: string; skillItems: string[] }[];

export type Experience = {
  company: string;
  position: string;
  address: string;
  duration: string;
  tasks: string[];
};

export type Project = {
  name: string;
  github?: string;
  deploy?: string;
  duration: string;
  tasks: string[];
};

export type MyInfo = {
  profile: Profile;

  educations: Education[];

  skills: Skills;

  experiences: Experience[];

  projects: Project[];

  patents: string[];
};
