"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, validationSchemaType } from "@/utils/FormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";

export default function ResumePage() {
  const formData = useForm<validationSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: validationSchemaType) => {
    try {
      // TODO create resume
      toast({
        title: "Kamu telah berhasil submit CV, dan sedang dibuat",
        description: "Harap tunggu sebentar",
      });
      console.log(data);
    } catch (error) {
      // Form data is invalid, handle error
      console.error("Form data is invalid:", error);
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Harap isi semua field secara lengkap.",
        action: <ToastAction altText="Try again">Coba lagi</ToastAction>,
      });
    }
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
          <Form {...formData}>
            <form
              onSubmit={formData.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={formData.control}
                  name="paper"
                  render={({ field }) => (
                    <FormItem className="col-span-2 space-y-2">
                      <FormLabel>Ukuran kertas</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Harap pilih jenis kertas" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="A4">A4</SelectItem>
                          <SelectItem value="Letter">Letter</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formData.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} required />
                      </FormControl>
                      <FormDescription>
                        Harap isi dengan nama lengkap.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formData.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} required />
                      </FormControl>
                      <FormDescription>Gunakan email utamamu.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formData.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+621234567890"
                          {...field}
                          type="tel"
                          required
                        />
                      </FormControl>
                      <FormDescription>
                        Pastikan pakai nomor aktif.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formData.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your addres"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormDescription>Tuliskan email utamamu.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formData.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Ringkasan</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[100px]"
                          required
                          placeholder="Masukkan Ringkasan dirimu"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Harap isi mengenai dirimu secara singkat.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Education History */}
                <div className="col-span-1 sm:col-span-2">
                  <legend className="mb-2 text-lg font-medium">
                    Education History
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <FormField
                      control={formData.control}
                      name="education.institution"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-3">
                          <FormLabel>Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} required />
                          </FormControl>
                          <FormDescription>
                            Isi institusi terakhirmu.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="education.degree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} required />
                          </FormControl>
                          <FormDescription>
                            Isi gelar yang kamu raih.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="education.fieldOfStudy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Field of study</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} required />
                          </FormControl>
                          <FormDescription>
                            Isi bidang institusimu.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="education.graduationYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Graduation year</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} required />
                          </FormControl>
                          <FormDescription>
                            Isi tahun kelulusanmu.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Work Experience */}
                <div className="sm:col-span-2">
                  <legend className="mb-2 text-lg font-medium">
                    Work Experience
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <FormField
                      control={formData.control}
                      name="experience.company"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-3">
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} required />
                          </FormControl>
                          <FormDescription>
                            Harap isi nama lengkap perusahaan.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="experience.title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormDescription>Isi pekerjaanmu.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="experience.startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} type="date" />
                          </FormControl>
                          <FormDescription>
                            Isi tanggal masukmu.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="experience.endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} type="date" />
                          </FormControl>
                          <FormDescription>
                            Isi tanggal keluarmu.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formData.control}
                      name="experience.description"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-3">
                          <FormLabel>Deskripsi</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[100px]"
                              required
                              placeholder="Masukkan Ringkasan dirimu"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Harap deskripsikan pengalamanmu secara lengkap.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={formData.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[100px]"
                          required
                          placeholder="Masukkan Ringkasan dirimu"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Harap isi skills yang kamu raih.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="sm:col-span-2">
                  <FormField
                    control={formData.control}
                    name="project1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 1</FormLabel>
                        <FormControl>
                          <Input placeholder="Project 1" {...field} />
                        </FormControl>
                        <FormDescription>
                          Isi dengan projek pertamamu.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formData.control}
                    name="project2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 2</FormLabel>
                        <FormControl>
                          <Input placeholder="Project 2" {...field} />
                        </FormControl>
                        <FormDescription>
                          Isi dengan projek keduamu.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formData.control}
                    name="project3"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 3</FormLabel>
                        <FormControl>
                          <Input placeholder="Project 3" {...field} />
                        </FormControl>
                        <FormDescription>
                          Isi dengan projek ketigamu.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" onClick={() => onSubmit}>
                Buat CV!
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
