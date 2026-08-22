import { useState } from "react";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Input/Textarea";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const FormPage = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!String(data.email).includes("@")) newErrors.email = "Invalid email";
    if (!data.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const usageCode = `import { useState } from "react";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Input/Textarea";
import { Button } from "@/components/Button";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      
      <Input label="Name" name="name" required placeholder="John Doe" />
      <Input label="Email" name="email" type="email" required placeholder="john@example.com" />
      <Textarea label="Message" name="message" required placeholder="How can we help?" rows={4} />
      
      <Button type="submit" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-sm text-center">
          Message sent successfully!
        </div>
      )}
    </Form>
  );
}`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "required",
      description: "The form elements (inputs, buttons, etc).",
    },
    {
      prop: "onSubmit",
      type: "(e: React.FormEvent) => void",
      default: "undefined",
      description: "Function called when the form is submitted.",
    },
    {
      prop: "className",
      type: "string",
      default: '"space-y-6 w-full max-w-md"',
      description: "Additional CSS classes to apply.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold mb-2">Form</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A wrapper component for building forms consistently with default spacing and default submit prevention.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full flex justify-center py-8">
            <Form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
                <p className="text-sm text-gray-500 mt-1">We'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-4">
                <Input 
                  label="Name" 
                  name="name" 
                  placeholder="John Doe" 
                  error={errors.name} 
                  tone={errors.name ? "error" : "default"} 
                />
                <Input 
                  label="Email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  error={errors.email} 
                  tone={errors.email ? "error" : "default"} 
                />
                <Textarea 
                  label="Message" 
                  name="message" 
                  placeholder="How can we help?" 
                  rows={4} 
                  className={errors.message ? "border-red-400 focus:border-red-400 focus:ring-red-400" : ""}
                />
                {errors.message && <p className="text-sm text-red-500 -mt-3">{errors.message}</p>}
              </div>
              
              <Button type="submit" disabled={status === "submitting"} className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md text-sm text-center font-medium">
                  Message sent successfully!
                </div>
              )}
            </Form>
          </div>
        </ComponentDemo>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">API Reference</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
};

export default FormPage;
