import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    number: 31,
    title: "10 ECO-LODGE CABINS",
    description: "Eco-friendly cabins designed for families and groups, each with 4 beds. Features modern amenities including solar panels, AC, and Wi-Fi while maintaining sustainable practices and natural aesthetics.",
    image: "/assets/10 ECO-LODGE CABINS.jfif" // Added image for consistency with new JSX
  },
  {
    title: "MAINTENANCE WORKSHOP & TOOL STORAGE",
    description: "Centralized workshop for repairs and secure storage for maintenance equipment.",
    image: "/assets/MAINTENANCE WORKSHOP & TOOL STORAGE.jfif"
  },
  {
    title: "STAFF HOUSING UNITS (Item 61)",
    description: "Comfortable, self-contained housing units for on-site staff.",
    image: "/assets/Staff housing and workshops.jfif"
  },
  {
    title: "SERVICE YARD & VEHICLE PARKING",
    description: "Designated area for service vehicles and operational logistics.",
    image: "/assets/SERVICE YARD & VEHICLE PARKING.jfif"
  },
  {
    title: "SEWAGE TREATMENT & GREASE INTERCEPTORS",
    description: "Advanced waste management systems ensuring environmental compliance.",
    image: "/assets/SEWAGE TREATMENT .jfif"
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30" id="specific-items">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Specific Items</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none bg-background/50 backdrop-blur overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
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
