import { Home, Settings, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      title: "Staff Housing & Workshops",
      description: "Dedicated accommodation for staff and fully equipped maintenance workshops.",
      icon: Home,
      image: "/assets/Staff housing and workshops.jfif"
    },
    {
      title: "Utility Management",
      description: "Comprehensive systems for wastewater treatment, storage, and vehicle parking.",
      icon: Settings,
      image: "/assets/Utility management wastewater, storage, and parking.jfif"
    },
    {
      title: "Screened Operations",
      description: "Landscaped buffers to visually screen operational areas from guest zones.",
      icon: Trees,
      image: "/assets/Landscaped to screen operational areas.jfif"
    }
  ];

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Features</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                    <feature.icon className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
