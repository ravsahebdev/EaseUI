import { Layout } from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const usageCode = `import { Layout } from "@/components/Layout";

export default function MyPageLayout() {
  return (
    <Layout>
      <Layout.Header>
        <div className="font-bold text-lg">My App</div>
      </Layout.Header>
      <Layout.Container>
        <Layout.Sidebar>
          <nav className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <a href="#" className="hover:text-black">Dashboard</a>
            <a href="#" className="hover:text-black">Settings</a>
            <a href="#" className="hover:text-black">Profile</a>
          </nav>
        </Layout.Sidebar>
        <Layout.Content>
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p className="text-[var(--text-muted)]">Main content goes here.</p>
        </Layout.Content>
      </Layout.Container>
    </Layout>
  );
}`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "required",
      description: "The layout elements.",
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
        <h1 className="text-3xl font-bold mb-2">Layout</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A set of structural components for building dashboard and application layouts easily.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full h-80 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <Layout className="min-h-full">
              <Layout.Header className="h-12 text-sm px-4">
                <div className="font-bold">App Logo</div>
              </Layout.Header>
              <Layout.Container>
                <Layout.Sidebar className="w-40 p-3 bg-gray-50 border-r-0 border-gray-200 md:border-r">
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </Layout.Sidebar>
                <Layout.Content className="p-4 bg-white">
                  <div className="h-6 bg-gray-100 rounded w-1/3 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-50 rounded w-full"></div>
                    <div className="h-4 bg-gray-50 rounded w-full"></div>
                    <div className="h-4 bg-gray-50 rounded w-2/3"></div>
                  </div>
                </Layout.Content>
              </Layout.Container>
            </Layout>
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

export default LayoutPage;
