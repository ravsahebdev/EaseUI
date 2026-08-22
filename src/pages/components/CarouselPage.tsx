import { Carousel } from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const usageCode = `import { Carousel } from "@/components/Carousel";

export default function MyCarousel() {
  return (
    <Carousel className="h-64 rounded-xl">
      <div className="w-full h-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
        Slide 1
      </div>
      <div className="w-full h-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
        Slide 2
      </div>
      <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold">
        Slide 3
      </div>
    </Carousel>
  );
}`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode[]",
      default: "required",
      description: "The slides to be displayed in the carousel. Must be an array of nodes.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Whether the carousel should automatically transition to the next slide.",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Time in milliseconds between auto-play transitions.",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Whether to show pagination dots at the bottom.",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Whether to show previous/next navigation arrows.",
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
        <h1 className="text-3xl font-bold mb-2">Carousel</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A slideshow component for cycling through elements like images or text.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full max-w-2xl">
            <Carousel className="h-64 rounded-xl shadow-sm">
              <div className="w-full h-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                Slide 1
              </div>
              <div className="w-full h-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                Slide 2
              </div>
              <div className="w-full h-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold">
                Slide 3
              </div>
            </Carousel>
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

export default CarouselPage;
