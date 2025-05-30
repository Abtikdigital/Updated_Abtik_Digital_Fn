import React from "react";

type SectionType = "grid" | "list" | "testimonial" | "info";

interface Item {
  title?: string;
  description?: string;
  quote?: string;
  client?: string;
}

interface SectionDisplayProps {
  title: string;
  description?: string;
  items: Item[];
  type?: SectionType;
  columns?: number;
  bgColor?: string;
  textColor?: string;
}

const SectionDisplay: React.FC<SectionDisplayProps> = ({
  title,
  description,
  items,
  type = "grid",
  columns = 3,
  bgColor = "bg-white",
  textColor = "text-black",
}) => {
  const gridCols = `md:grid-cols-${columns}`;

  return (
    <section className={`${bgColor} px-6 md:px-16 py-10 ${textColor}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
        {description && (
          <p className="text-[#9f9f9f] text-lg leading-relaxed mb-8">
            {description}
          </p>
        )}

        {type === "grid" && (
          <div className={`grid ${gridCols} gap-8`}>
            {items.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {type === "list" && (
          <ul className="list-disc list-inside text-[#9f9f9f] text-lg leading-relaxed space-y-3 text-left mx-auto">
            {items.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        )}

        {type === "testimonial" && (
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl w-72 shadow-md"
              >
                <p className="text-gray-700">{item.quote}</p>
                <p className="mt-4 font-semibold text-[#f56015]">
                  - {item.client}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionDisplay;
