import { Leaf, Layers, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const References = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">References</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Design specifications and references for the Eco Lodges & Family Accommodation
          </p>
        </div>

        {/* Technical References Section */}
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-nature-green-light">
                  <Leaf className="h-6 w-6 text-nature-green" />
                </div>
                <CardTitle>Planting References</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/assets/Planting screening trees and shrubs (Eucalyptus scoparia, Acacia spp.).jfif"
                    alt="Planting"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Planting</h3>
                <p className="text-muted-foreground">
                  Screening trees and shrubs (Eucalyptus scoparia, Acacia spp.) to provide visual buffers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/assets/Ground surfaces gravel, compacted earth, permeable paving.jfif"
                    alt="Ground Surfaces"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Ground Surfaces</h3>
                <p className="text-muted-foreground">
                  Durable surfaces including gravel, compacted earth, and permeable paving for heavy use.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/assets/Designed by Sandara Passos and Veronica Bosque.jfif"
                    alt="Landscape Designers"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Landscape Designers</h3>
                <p className="text-muted-foreground">
                  Design by Sandara Passos and Veronica Bosque.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
