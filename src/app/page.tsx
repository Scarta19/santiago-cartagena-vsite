import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { ProofBar } from "@/components/proof-bar";
import { About, Contact, Engagement, Experience, Footer, Moat, Services, Stack, Work } from "@/components/sections";
import { experience, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: `mailto:${site.contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad EAFIT" },
  worksFor: { "@type": "Organization", name: experience[0].company },
  sameAs: [site.contact.github, site.contact.linkedin],
  knowsAbout: ["Machine learning", "Fraud detection", "Risk scoring", "MLOps", "AI agents", "Anomaly detection"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">
        <Hero />
        <ProofBar />
        <Services />
        <Engagement />
        <About />
        <Moat />
        <Experience />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
