// src/components/BusinessModel/BusinessModel.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  Truck,
  Store,
  Package,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";
import BusinessContent from "./BusinessContext";

export type Model = {
  id: string;
  title: string;
  short: string;
  description: string[];
  idealFor: string;
  caseStudy?: string; // ← add this
  examples?: {
    title: string;
    result?: string;
    metric?: string;
    blurb?: string;
  }[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const MODELS: Model[] = [
  {
    id: "dropshipping",
    title: "Dropshipping Model",
    short: "End-to-end logistics support including warehousing.",
    description: [
      "Warehousing: We store inventory at partner fulfillment centers for faster delivery.",
      "Order Fulfillment: Orders sync from marketplaces and brand sites automatically.",
      "Logistics: End-to-end delivery, tracking, and returns management.",
    ],
    idealFor:
      "New brands, D2C labels, and online resellers seeking a zero-inventory model.",
    caseStudy:
      "Our dropshipping model provides a comprehensive, end-to-end logistics solution for global consumer appliance brands seeking to strengthen their D2C and offline presence in India. We have successfully partnered with world-renowned brands to manage every touchpoint of their retail journey — from product listing and order processing to in-store demonstrations, consumer installations, and after-sales service. By seamlessly integrating warehousing, logistics, and retail operations, we ensure a consistent brand experience and operational efficiency. Acting as a true extension of the brand, we help companies solve their entire last-mile challenge, ensuring customer satisfaction and brand consistency across all platforms.",
    Icon: Truck,
  },
  {
    id: "bulk-liquidation",
    title: "Bulk Purchase / Liquidation Model",
    short: "Brand-respecting liquidation for slow-moving or closeout stock.",
    description: [
      "Procurement: We buy excess inventory at negotiated bulk rates.",
      "Channel Strategy: Controlled liquidation through selective channels.",
      "Brand Protection: No indiscriminate deep discounting on public marketplaces.",
    ],
    idealFor:
      "Brands needing discreet, structured liquidation without market dilution.",
    caseStudy:
      "When a multinational retailer decided to shut its retail operations, it was left with a significant amount of unsold inventory. Instead of relying on traditional models like Sale or Return (SOR) or Pay on Sales (POS), which they typically avoid, we offered a practical solution — purchasing the entire inventory outright and liquidating it through approved channels. This approach allowed the brand to maintain normal business continuity while efficiently clearing stock without diluting its market presence. Our structured, brand-respecting liquidation strategy ensures that every transaction protects the brand’s integrity and market positioning, while solving the excess inventory problem in a responsible and profitable manner.",
    Icon: Package,
  },
  {
    id: "buy-sell",
    title: "Buy-and-Sell Fulfillment Model",
    short: "Tailored for online marketplace sales.",
    description: [
      "Inventory Ownership: We purchase selected SKUs and manage pricing.",
      "Marketplace Ops: Listings, promotions, and operations managed by our team.",
      "Fulfillment: Warehousing + delivery via marketplace or our logistics network.",
    ],
    idealFor:
      "Established sellers and brands wanting scalable marketplace presence.",
    caseStudy:
      "For a leading global travel retail brand seeking to strengthen its presence in a specific geography, we became their complete operational partner — managing both their online and offline business. Our team handled every aspect, including pick, pack, dispatch, returns, and after-sales service, ensuring a seamless experience across all channels. This model allows us to function as a true extension of the company, adhering to its brand philosophy, guidelines, and operational policies. The result is a unified, high-performance marketplace presence that drives sales, maintains brand identity, and offers a consistent customer experience.",
    Icon: Store,
  },
  {
    id: "franchisee",
    title: "Franchisee Business Development",
    short: "End-to-end franchise development across categories.",
    description: [
      "Category Focus: Consumer durables, fashion, premium fashion.",
      "Model: Franchisee onboarding, retail setup and operational support.",
      "Network: Scalable rollout into urban and emerging markets.",
    ],
    idealFor:
      "Brands seeking capital-efficient retail expansion via franchise partners.",
    caseStudy:
      "We enable brands in the consumer durable and fashion lifestyle segments to expand their retail footprint through well-structured franchise partnerships. Our expertise covers end-to-end franchise development — from onboarding potential partners to retail setup, marketing support, and store sale-out operations. Over time, we have built a trusted network of energetic and capable entrepreneurs eager to represent premium brands across categories. By combining our industry experience with local business networks, we deliver asset-light retail expansion that enhances offline brand visibility and consumer experience while driving long-term growth.",
    Icon: Users,
  },
  {
    id: "retail-formats",
    title: "Retail Formats",
    short: "Mall / High-street / Dept stores / Concessions / Airport retail.",
    description: [
      "Formats: Flagship, mall outlets, concessions, airport retail.",
      "Operations: Visual merchandising, inventory and staffing handled in-house.",
      "Focus: Curated brand experiences and consistent retail standards.",
    ],
    idealFor:
      "Brands targeting visibility-driven, experience-led retail presence.",
    caseStudy:
      "Our retail operations span multiple formats — from flagship stores and high-street outlets to department store concessions and airport retail. We manage every operational detail, including visual merchandising, inventory planning, staffing, and customer engagement, to ensure a consistent and premium brand experience. Each store is tailored to the audience and environment, maintaining high standards of design and service. This multi-format approach enables brands to achieve maximum visibility and experiential engagement, ensuring that every consumer interaction strengthens the brand’s perception and desirability.",
    Icon: Building2,
  },
  {
    id: "co-branding",
    title: "Co-Branding",
    short: "Strategic cross-brand collaborations and limited collections.",
    description: [
      "Partnerships: Cross-category tie-ups for product or campaign collaborations.",
      "Execution: Joint branding, production, and marketing under unified creative direction.",
      "Outcome: Fresh audience reach, elevated perception, and high engagement.",
    ],
    idealFor:
      "Brands seeking buzz, category tests, or elevated positioning through synergy.",
    caseStudy:
      "We actively facilitate strategic co-branding collaborations across consumer, fashion, and accessory categories to create impactful, limited-edition collections and high-engagement campaigns. Our role covers the complete process — from conceptualization and creative direction to production and marketing execution. These partnerships allow brands to cross-pollinate audiences, enhance brand perception, and generate fresh excitement in the market. By uniting complementary strengths under a cohesive strategy, our co-branding initiatives drive visibility, innovation, and meaningful consumer connection.",
    Icon: Sparkles,
  },
];

export default function BusinessModel() {
  const [active, setActive] = useState<string>(MODELS[0].id);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top on change (desktop)
  useEffect(() => {
    if (rightRef.current) {
      rightRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block mx-auto lg:mx-0 text-center lg:text-left">
          <span className="inline-block relative">
            Business
            {/* small-screen underline anchored to the word 'Business' */}
            <span className="absolute left-6 -bottom-3 w-12 h-1 rounded-full bg-primary-primary transform -translate-x-1/2 lg:hidden" />
          </span>{" "}
          Models We Drive
          {/* large-screen underline: left-aligned under the heading start */}
          <span className="hidden lg:block absolute left-0 -bottom-3 w-16 h-1 rounded-full bg-primary-primary" />
        </h2>

        <BusinessContent
          MODELS={MODELS}
          active={active}
          setActive={setActive}
          openAccordion={openAccordion}
          setOpenAccordion={setOpenAccordion}
          rightRef={rightRef}
        />
      </div>
    </section>
  );
}
