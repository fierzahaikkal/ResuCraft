export type Resume = {
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  education: Education;
  experience: WorkExperience;
  skills: string[];
  projects: string[];
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
