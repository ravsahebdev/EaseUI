interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border shadow-sm" style={{ borderColor: 'var(--card-bg)' }}>
      <table className="w-full">
        <thead style={{ backgroundColor: 'var(--card-bg)' }}>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--text-color)' }}>Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--text-color)' }}>Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--card-bg)' }}>
          {data.map((row, i) => (
            <tr key={i} className="transition-colors" style={{ borderBottomColor: 'var(--card-bg)' }}>
              <td className="px-4 py-3 text-sm font-mono text-blue-600">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-500">
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-400">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-color)' }}>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
