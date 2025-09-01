// import { FaTruck, FaHandshake, FaTags, FaGlobeAsia } from "react-icons/fa";

// export default function CompetenciesSection() {
//   const competencies = [
//     {
//       icon: <FaTruck className="text-primary text-4xl mb-4" />,
//       title: "Efficient Distribution",
//       desc: "10,000 sq. ft. warehouse with streamlined logistics to ensure on-time delivery nationwide.",
//     },
//     {
//       icon: <FaHandshake className="text-primary text-4xl mb-4" />,
//       title: "Trusted Partnerships",
//       desc: "Exclusive partnerships with leading global and Indian brands built on reliability and trust.",
//     },
//     {
//       icon: <FaTags className="text-primary text-4xl mb-4" />,
//       title: "Diverse Portfolio",
//       desc: "From lifestyle to tech accessories, we bring a wide range of innovative products to consumers.",
//     },
//     {
//       icon: <FaGlobeAsia className="text-primary text-4xl mb-4" />,
//       title: "Pan-India Reach",
//       desc: "Expanding accessibility through major online marketplaces and retail channels across India.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           Why Choose Sambahvi?
//         </h2>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
//           Combining global expertise with local trust, we deliver premium
//           products backed by strong partnerships and efficient distribution.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {competencies.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
//             >
//               {item.icon}
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-600 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function CompetenciesSection() {
  const competencies = [
    {
      title: "Deep Market Expertise",
      description:
        "Decades of experience in lifestyle, fashion, and tech distribution across India.",
    },
    {
      title: "Robust Logistics",
      description:
        "10,000 sq. ft. warehouse with efficient supply chain and delivery capabilities.",
    },
    {
      title: "Trusted Partnerships",
      description:
        "Strong collaborations with global brands and India’s leading online marketplaces.",
    },
    {
      title: "Consumer Focus",
      description:
        "Delivering innovative, high-quality products tailored to Indian consumers’ needs.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Cards */}
        <div className="space-y-6 lg:overflow-y-auto lg:h-[500px] pr-2">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Sticky Text */}
        <div className="lg:sticky lg:top-32 self-start">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Competencies
          </h2>
          <p className="text-lg text-gray-700 max-w-md">
            We combine market knowledge, strong logistics, and trusted
            partnerships to deliver premium lifestyle and tech brands across
            India with unmatched efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
