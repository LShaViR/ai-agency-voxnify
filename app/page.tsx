import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Agitation } from "@/components/agitation";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { siteContent } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar content={siteContent.navbar} />
      <Hero content={siteContent.hero} />
      <Agitation content={siteContent.agitation} />
      <Services content={siteContent.services} />
      <Testimonials content={siteContent.testimonials} />
      <About content={siteContent.about} />
      <Contact content={siteContent.contact} />
      <Footer content={siteContent.footer} />
    </main>
  );
}
