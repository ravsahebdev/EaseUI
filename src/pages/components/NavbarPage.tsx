import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";

export default function MyNavbar() {
  return (
    <Navbar variant="light" size="default" />
  );
}`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar.",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "The height/size of the navbar.",
    },
    {
      prop: "animation",
      type: "keyof typeof entranceAnimations",
      default: '"fadeIn"',
      description: "Entrance animation for the navbar.",
    },
    {
      prop: "hoverAnimation",
      type: "keyof typeof hoverAnimations",
      default: '"none"',
      description: "Animation applied on hover.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Whether to merge props onto the immediate child instead of rendering a nav element.",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes to apply.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold mb-2">Navbar</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A flexible navigation bar component that supports various styles, sizes, and entrance animations.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full">
            <Navbar />
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

export default NavbarPage;
