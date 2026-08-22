import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";

export default function MyTooltip() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Add to library" position="top">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
      
      <Tooltip content="Saved!" position="right">
        <Button>Click me</Button>
      </Tooltip>
    </div>
  );
}`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "required",
      description: "The content to display inside the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The preferred placement of the tooltip.",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before the tooltip appears.",
    },
    {
      prop: "children",
      type: "React.ReactElement",
      default: "required",
      description: "The element that triggers the tooltip on hover/focus.",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes to apply to the tooltip.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold mb-2">Tooltip</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex items-center justify-center gap-8 py-10">
            <Tooltip content="Tooltip on Top" position="top">
              <Button variant="outline">Top</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on Bottom" position="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>

            <Tooltip content="Tooltip on Left" position="left">
              <Button variant="outline">Left</Button>
            </Tooltip>

            <Tooltip content="Tooltip on Right" position="right">
              <Button variant="outline">Right</Button>
            </Tooltip>
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

export default TooltipPage;
