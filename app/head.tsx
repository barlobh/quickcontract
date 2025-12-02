export default function Head() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Instant Contracts AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://instantcontracts.ai",
    description:
      "AI contract generator delivering vetted NDAs, MSAs, SOWs, and privacy addendums in seconds with clause-level controls.",
    brand: {
      "@type": "Brand",
      name: "Instant Contracts AI",
      logo: "https://instantcontracts.ai/logo.png",
    },
    offers: {
      "@type": "Offer",
      price: "49.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "126",
    },
    audience: {
      "@type": "Audience",
      audienceType: ["Founders", "Agencies", "Legal teams", "Procurement"],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What contracts can Instant Contracts AI generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instant Contracts AI generates NDAs, MSAs, SOWs, DPAs, privacy addendums, employment agreements, and procurement-ready vendor packs with risk flags.",
        },
      },
      {
        "@type": "Question",
        name: "How is compliance handled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Templates are vetted by counsel, with regional toggles for US, UK, and EU norms, plus human-in-the-loop editing and clause-level history for audit trails.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to use for enterprise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SOC 2-aligned controls, encryption at rest and in transit, role-based access, and exportable audit logs keep legal and procurement teams comfortable.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
