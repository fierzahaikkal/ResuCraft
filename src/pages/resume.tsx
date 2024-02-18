import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  renderToStream,
} from "@react-pdf/renderer";
import { useState } from "react";
import type { Education, Resume, WorkExperience } from "@/utils/resume-type";

export default function ResumePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState<Education>();
  const [experience, setExperience] = useState<WorkExperience>();
  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<string[]>([]);

  const handleSubmit = () => {
    // TODO create resume
  };

  return (
    <main className="mx-auto my-8 min-h-screen w-full max-w-screen-md">
      <Card className="w-full max-w-3xl px-6">
        <CardHeader>
          <CardTitle>Resume Builder</CardTitle>
          <CardDescription>
            Create and customize your own resume.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Textarea
                className="min-h-[100px]"
                id="summary"
                placeholder="Enter your summary"
                required
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <fieldset>
                <legend className="mb-2 text-lg font-medium">
                  Education History
                </legend>
                <div className="grid gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="institution1">Institution</Label>
                    <Input
                      id="institution1"
                      placeholder="Enter institution"
                      required
                    />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="degree1">Degree</Label>
                      <Input id="degree1" placeholder="Enter degree" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="field1">Field of Study</Label>
                      <Input
                        id="field1"
                        placeholder="Enter field of study"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduation1">Graduation Year</Label>
                      <Input
                        id="graduation1"
                        placeholder="Enter graduation year"
                        required
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="space-y-2">
              <fieldset>
                <legend className="mb-2 text-lg font-medium">
                  Work Experience
                </legend>
                <div className="grid gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="company1">Company</Label>
                    <Input id="company1" placeholder="Enter company" required />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="title1">Job Title</Label>
                      <Input id="title1" placeholder="Enter job title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="start1">Start Date</Label>
                      <Input
                        id="start1"
                        placeholder="Enter start date"
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end1">End Date</Label>
                      <Input
                        id="end1"
                        placeholder="Enter end date"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description1">Description</Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="description1"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                className="min-h-[100px]"
                id="skills"
                placeholder="Enter skills"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projects">Projects</Label>
              <div className="grid gap-2">
                <div className="space-y-2">
                  <Label htmlFor="project1">Project 1</Label>
                  <Input id="project1" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project2">Project 2</Label>
                  <Input id="project2" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project3">Project 3</Label>
                  <Input id="project3" placeholder="Enter project name" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => handleSubmit()} type="submit">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
