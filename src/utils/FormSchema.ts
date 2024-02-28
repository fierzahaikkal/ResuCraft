import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1).max(50),
  summary: z.string().min(1).min(15),
  education: z.object({
    institution: z.string().min(1),
    degree: z.string().min(1),
    fieldOfStudy: z.string().min(1),
    graduationYear: z.string().min(1),
  }),
  experience: z.object({
    company: z.string().min(1),
    title: z.string().min(1),
    startDate: z.string().min(1),
    endDate: z.string().min(1),
    description: z.string().min(1),
  }),
  skills: z.string().min(1),
  projects: z.array(z.string().min(1)),
});

export const formData = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
});

export { formSchema };
