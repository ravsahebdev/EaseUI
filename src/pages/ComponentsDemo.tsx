import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-sm" 
      style={{ borderColor: 'var(--card-bg)', backgroundColor: 'var(--card-bg)' }}
    >
      <div 
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: 'var(--card-bg)', backgroundColor: 'var(--bg-color)' }}
      >
        <span className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors cursor-pointer"
          style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-20 px-4 flex items-center justify-center">{children}</div>

      {isCodeVisible && (
        <div className="border-t" style={{ borderColor: 'var(--card-bg)' }}>
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
