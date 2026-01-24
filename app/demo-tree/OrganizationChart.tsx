import React, { JSX } from "react";

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  className?: string;
}

const OrganizationChart: React.FC = () => {
  const orgData: TreeNode = {
    id: "root",
    label: "Betopia Limited",
    className:
      "bg-orange-400 text-black font-bold px-8 py-4 rounded-full text-2xl",
    children: [
      {
        id: "md",
        label: "Managing Director",
        className:
          "bg-white border-2 border-teal-400 text-black font-semibold px-6 py-3 rounded-lg",
        children: [
          {
            id: "tech",
            label: "Technology Team",
            className:
              "bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-lg",
            children: [
              {
                id: "product",
                label: "Product",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
              },
              {
                id: "enterprise",
                label: "Enterprise",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
                children: [
                  {
                    id: "identify",
                    label: "Identify and Modern Works",
                    className:
                      "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
                  },
                  {
                    id: "hybrid",
                    label: "Hybrid cloud / infrastructure",
                    className:
                      "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
                  },
                  {
                    id: "cyber",
                    label: "Cyber-Security",
                    className:
                      "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
                  },
                  {
                    id: "data",
                    label: "Data & AI",
                    className:
                      "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
                  },
                ],
              },
            ],
          },
          {
            id: "bd",
            label: "Business Development Team",
            className:
              "bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-lg",
            children: [
              {
                id: "local",
                label: "Local",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
              },
              {
                id: "intl",
                label: "International",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
              },
              {
                id: "fsi",
                label: "⊸ FSI",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "ngo",
                label: "⊸ NGO & Helthcare",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "congla",
                label: "⊸ Congla Heritage",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "govt",
                label: "⊸ Government",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "manu",
                label: "⊸ Manufacturer",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "country-sbu",
                label: "Country-wise SBU",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-3 py-1.5 rounded",
              },
              {
                id: "market",
                label: "Market Place",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-lg",
              },
              {
                id: "upwork",
                label: "⊸ UpWork",
                className: "text-sm text-gray-700 pl-4",
              },
              {
                id: "fiverr",
                label: "⊸ Fiverr",
                className: "text-sm text-gray-700 pl-4",
              },
            ],
          },
          {
            id: "ops",
            label: "Operation Team",
            className:
              "bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-lg",
            children: [
              {
                id: "sales",
                label: "Sales Operation",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "oem",
                label: "OEM Management",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "project",
                label: "Project Management",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "tender",
                label: "Tender & Proposal Management",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
            ],
          },
          {
            id: "backend",
            label: "Backend Team",
            className:
              "bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-lg",
            children: [
              {
                id: "accounts",
                label: "Accounts",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "finance",
                label: "Finance",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "hr",
                label: "HR",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
              {
                id: "admin",
                label: "Admin",
                className: "bg-white text-black text-xs px-3 py-1.5",
              },
            ],
          },
          {
            id: "dc",
            label: "Data Center Service",
            className:
              "bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-lg",
            children: [
              {
                id: "datacenter",
                label: "Data Center",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-3 py-1.5 rounded",
              },
              {
                id: "zenex",
                label: "Zenex Cloud",
                className:
                  "bg-white border border-gray-300 text-black text-sm px-3 py-1.5 rounded",
              },
            ],
          },
        ],
      },
    ],
  };

  const renderNode = (node: TreeNode, level: number = 0): JSX.Element => {
    const hasChildren = node.children && node.children.length > 0;

    if (level === 0) {
      return (
        <div className="flex flex-col items-center">
          <div className={node.className}>{node.label}</div>
          {hasChildren && (
            <>
              <div className="w-0.5 h-8 bg-red-400"></div>
              {node.children!.map((child) => renderNode(child, level + 1))}
            </>
          )}
        </div>
      );
    }

    if (level === 1) {
      return (
        <div key={node.id} className="flex flex-col items-center">
          <div className={node.className}>{node.label}</div>
          {hasChildren && (
            <>
              <div className="w-0.5 h-8 bg-red-400"></div>
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-full h-0.5 bg-red-400 -translate-x-1/2"></div>
                <div className="flex gap-4 pt-8">
                  {node.children!.map((child) => renderNode(child, level + 1))}
                </div>
              </div>
            </>
          )}
        </div>
      );
    }

    if (level === 2) {
      return (
        <div key={node.id} className="flex flex-col items-center relative">
          <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-red-400"></div>
          <div className={node.className}>{node.label}</div>
          {hasChildren && (
            <>
              <div className="w-0.5 h-6 bg-red-400"></div>
              <div className="flex flex-col gap-2">
                {node.children!.map((child) => renderNode(child, level + 1))}
              </div>
            </>
          )}
        </div>
      );
    }

    if (level === 3) {
      return (
        <div key={node.id} className="flex flex-col items-center">
          <div className={node.className}>{node.label}</div>
          {hasChildren && (
            <>
              <div className="w-0.5 h-8 bg-red-400"></div>
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-full h-0.5 bg-red-400 -translate-x-1/2"></div>
                <div className="flex gap-4 pt-8">
                  {node.children!.map((child) => renderNode(child, level + 1))}
                </div>
              </div>
            </>
          )}
        </div>
      );
    }

    if (level === 4 && node.children) {
      return (
        <div key={node.id} className="flex gap-4 items-start">
          {node.children.map((child, idx) => (
            <div key={child.id} className="flex flex-col items-center">
              {idx > 0 && (
                <div
                  className="absolute h-0.5 bg-red-400"
                  style={{ width: "2rem", left: "-2rem", top: "50%" }}
                ></div>
              )}
              <div className={child.className}>{child.label}</div>
              {child.children && (
                <>
                  <div className="w-0.5 h-4 bg-red-400"></div>
                  <div className="flex flex-col gap-1">
                    {child.children.map((subChild) => (
                      <div key={subChild.id} className={subChild.className}>
                        {subChild.label}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key={node.id} className={node.className}>
        {node.label}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 overflow-x-auto">
      <div className="inline-block min-w-full">{renderNode(orgData)}</div>
    </div>
  );
};

export default OrganizationChart;
