export type Profile = {
  hidden?: boolean;
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  address: string;
};

export type Education = {
  hidden?: boolean;
  university: string;
  major: string;
  address: string;
  duration: string;
};

export type Educations = {
  hidden?: boolean;
  educationList: Education[];
};

export type Skill = {
  skillType: string;
  skillItems: string[];
};

export type Skills = {
  hidden?: boolean;
  skillList: Skill[];
};

export type Experience = {
  hidden?: boolean;
  company: string;
  address: string;
  titles: TitleExperience[];
};

export type TitleExperience = {
  hidden?: boolean;
  position: string;
  duration: string;
  taskList: string[];
};

export type Experiences = {
  hidden?: boolean;
  experienceList: Experience[];
};

export type Project = {
  hidden?: boolean;
  name: string;
  githubLink?: string;
  deployLink?: string;
  duration: string;
  taskList: string[];
};

export type Projects = {
  hidden?: boolean;
  projectList: Project[];
};

export type Patents = {
  hidden?: boolean;
  patentList: string[];
};

export type MyInfo = {
  profile: Profile;

  educations: Educations;

  skills: Skills;

  experiences: Experiences;

  projects: Projects;

  patents: Patents;
};
