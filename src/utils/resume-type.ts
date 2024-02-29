export type Resume = {
  paper: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  education: Education;
  experience: WorkExperience;
  skills: string[];
  project1: string;
  project2: string;
  project3: string;
};

export type Education = {
  institution: string;
  degree: string;
  major: string;
  graduationYear: string;
};

export type WorkExperience = {
  company: string;
  jobTitle: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
};
