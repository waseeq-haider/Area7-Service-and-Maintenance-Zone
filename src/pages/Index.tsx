import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Features } from "@/components/Features";
import { Location } from "@/components/Location";
import { SiteMap } from "@/components/SiteMap";
import { FloorPlan } from "@/components/FloorPlan";
import { SpecificItems } from "@/components/SpecificItems";
import { References } from "@/components/References";
import { ImageGallery } from "@/components/ImageGallery";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation currentAreaId={7} />
      <div className="min-h-screen pt-16">
        <Hero />
        <Summary />
        <Features />
        <Location />
        <SiteMap />
        <FloorPlan />
        <SpecificItems />
        <References />
        <ImageGallery />
        <Footer />
      </div>
    </>
  );
};

export default Index;

