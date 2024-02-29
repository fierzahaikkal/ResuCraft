import { atom } from "jotai";

export const resumeAtom = atom({
  paper: "LEGAL",
  name: "Gene Woods",
  email: "bo@feesilaz.tw",
  phone: "66432424",
  address: "197.178.213.41",
  summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil corporis voluptatibus laboriosam cumque debitis nemo. Dolor quaerat accusantium, placeat sunt beatae ipsum dolorem delectus optio magni id. Hic, quo!`,
  education: {
    institution: "Institut Ilmu Padi",
    degree: "Bachelor",
    fieldOfStudy: "IT",
    graduationYear: "2025",
  },
  experience: {
    company: "lorem",
    title: "Web Developer",
    startDate: "9/17/2115",
    endDate: "3/2/2058",
    description: "lorem ipsum",
  },
  skills: "Next.js, ts, css",
  project1: "lorem",
  project2: "lorem",
  project3: "lorem",
});
