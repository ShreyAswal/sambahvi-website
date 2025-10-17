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
    examples: [
      {
        title: "D2C Label A — Zero-Inventory Launch",
        result: "Onboarded without inventory risk",
        metric: "+60% SKU coverage in 8 weeks",
        blurb:
          "Launched core SKUs through dropship and marketplace integrations to test demand before committing to stock.",
      },
      {
        title: "Homeware Brand B — Peak Season Scaling",
        result: "Handled surges smoothly",
        metric: "99% fulfillment accuracy",
        blurb:
          "Temporary partner warehouse capacity scaled to match seasonal demand without long-term storage costs.",
      },
    ],
    Icon: Truck,
  },
  {
    id: "buy-sell",
    title: "Buy-and-Sell Fulfillment",
    short: "Tailored for online marketplace sales.",
    description: [
      "Inventory Ownership: We purchase selected SKUs and manage pricing.",
      "Marketplace Ops: Listings, promotions, and operations managed by our team.",
      "Fulfillment: Warehousing + delivery via marketplace or our logistics network.",
    ],
    idealFor:
      "Established sellers and brands wanting scalable marketplace presence.",
    examples: [
      {
        title: "Fashion Brand X — Market Expansion",
        result: "2.4x increase in weekly sales",
        metric: "+140% revenue in 12 weeks",
        blurb:
          "We handled SKU selection, pricing and marketplace promotions to increase velocity without discounting.",
      },
      {
        title: "Electronics Reseller Y — Logistics Optimization",
        result: "Improved SLAs",
        metric: "99.2% on-time delivery",
        blurb:
          "Consolidated fulfillment routes and optimized packing to reduce delays and returns.",
      },
    ],
    Icon: Store,
  },
  {
    id: "bulk-liquidation",
    title: "Bulk Purchase & Liquidation",
    short: "Brand-respecting liquidation for slow-moving or closeout stock.",
    description: [
      "Procurement: We buy excess inventory at negotiated bulk rates.",
      "Channel Strategy: Controlled liquidation through selective channels.",
      "Brand Protection: No indiscriminate deep discounting on public marketplaces.",
    ],
    idealFor:
      "Brands needing discreet, structured liquidation without market dilution.",
    examples: [
      {
        title: "Apparel Closeout C — Channel Control",
        result: "Reduced market leakage",
        metric: "-30% brand exposure on open marketplaces",
        blurb:
          "Selective channeling ensured inventory cleared without hurting full-price retail channels.",
      },
      {
        title: "Accessory Line D — Bulk Offload",
        result: "Fast cash realization",
        metric: "Cleared 85% stock in 6 weeks",
        blurb:
          "Strategic bundling and limited-time promos preserved brand perception while moving inventory.",
      },
    ],
    Icon: Package,
  },
  {
    id: "franchisee",
    title: "Franchisee Development",
    short: "End-to-end franchise development across categories.",
    description: [
      "Category Focus: Consumer durables, fashion, premium fashion.",
      "Model: Franchisee onboarding, retail setup and operational support.",
      "Network: Scalable rollout into urban and emerging markets.",
    ],
    idealFor:
      "Brands seeking capital-efficient retail expansion via franchise partners.",
    examples: [
      {
        title: "Lifestyle Brand E — Pilot Rollout",
        result: "Successful pilot conversion",
        metric: "3 pilot stores -> 12 in 9 months",
        blurb:
          "Managed franchise onboarding and local operations to validate the retail playbook.",
      },
      {
        title: "Durables Brand F — Ops Support",
        result: "Consistent standards",
        metric: "90% store compliance score",
        blurb:
          "Operational SOPs and field training reduced setup time and improved customer experience.",
      },
    ],
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
    examples: [
      {
        title: "Flagship Launch G — Experience Design",
        result: "Strong footfall",
        metric: "+22% walk-in conversion",
        blurb:
          "Curated merchandising and trained store staff elevated early customer satisfaction metrics.",
      },
      {
        title: "Airport Outlet H — Travel Retail",
        result: "High-ticket conversions",
        metric: "Average transaction value +35%",
        blurb:
          "Optimized product mix and display for travel shoppers increased basket sizes.",
      },
    ],
    Icon: Building2,
  },
  {
    id: "co-branding",
    title: "Co-Branding & Partnerships",
    short: "Strategic cross-brand collaborations and limited collections.",
    description: [
      "Partnerships: Cross-category tie-ups for product or campaign collaborations.",
      "Execution: Joint branding, production, and marketing under unified creative direction.",
      "Outcome: Fresh audience reach, elevated perception, and high engagement.",
    ],
    idealFor:
      "Brands seeking buzz, category tests, or elevated positioning through synergy.",
    examples: [
      {
        title: "Limited Collab I — Launch Campaign",
        result: "Strong engagement",
        metric: "+80% social uplift",
        blurb:
          "Cross-brand campaign and co-created product drove engagement and swift sell-through.",
      },
      {
        title: "Capsule Collection J — New Audience",
        result: "New buyer acquisition",
        metric: "+18% new customers",
        blurb:
          "Partnered designs introduced the brand to adjacent audiences and drove trial purchases.",
      },
    ],
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block">
          Business Models We Drive
          <span className="absolute left-0 -bottom-3 w-16 h-1 rounded-full bg-primary-primary" />
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
