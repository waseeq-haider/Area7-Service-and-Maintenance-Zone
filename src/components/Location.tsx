import { MapPin, Route, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locationDetails = [
  {
    icon: MapPin,
    title: "Adjacent to Area 4",
    description: "Located adjacent to Eco Lodges (Area 4) for easy access."
  },
  {
    icon: Route,
    title: "Utility Access",
    description: "Adjacent to water tanks and waste management zones."
  },
  {
    icon: TreePine,
    title: "Screened Zone",
    description: "Strategically screened from guest areas for operational discretion."
  }
];

export const Location = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Location</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locationDetails.map((detail, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-4 rounded-full bg-accent/10">
                  <detail.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
                <p className="text-muted-foreground">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
