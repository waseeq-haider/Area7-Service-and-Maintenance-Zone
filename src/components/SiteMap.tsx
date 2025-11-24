import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Utensils, Home, TreePine, Hotel, Waves, Mountain } from "lucide-react";

interface Area {
  id: number;
  name: string;
  shortName: string;
  description: string;
  icon: React.ElementType;
  x: number;
  y: number;
  color: string;
  connections: number[];
}

const areas: Area[] = [
  {
    id: 1,
    name: "Area 1: Dining Hall and Sports Complex",
    shortName: "Dining Hall and Sports Complex",
    description: "Central dining hall and sports facilities",
    icon: Utensils,
    x: 50,
    y: 30,
    color: "hsl(30 80% 55%)",
    connections: [2, 3]
  },
  {
    id: 2,
    name: "Area 2: Student Accommodation",
    shortName: "Student Accommodation",
    description: "Residential facilities for students",
    icon: Home,
    x: 35,
    y: 55,
    color: "hsl(200 70% 50%)",
    connections: [1, 3]
  },
  {
    id: 3,
    name: "Area 3: Adventure & Recreation Zone",
    shortName: "Adventure & Recreation Zone",
    description: "Outdoor activities and adventure zone",
    icon: Mountain,
    x: 50,
    y: 50,
    color: "hsl(140 60% 45%)",
    connections: [1, 2, 4]
  },
  {
    id: 4,
    name: "Area 4: Eco Lodges & Family Accommodation",
    shortName: "Eco Lodges & Family Accommodation",
    description: "Sustainable accommodation in nature for families",
    icon: TreePine,
    x: 65,
    y: 55,
    color: "hsl(120 50% 40%)",
    connections: [3, 5]
  },
  {
    id: 5,
    name: "Area 5: Education & Workshop Hub",
    shortName: "Education & Workshop Hub",
    description: "Educational facilities and workshop spaces",
    icon: Waves,
    x: 65,
    y: 35,
    color: "hsl(180 60% 50%)",
    connections: [4, 6]
  },
  {
    id: 6,
    name: "Area 6: Wellness & Retreat Zone",
    shortName: "Wellness & Retreat Zone",
    description: "Spa, yoga, and wellness facilities",
    icon: TreePine,
    x: 80,
    y: 45,
    color: "hsl(100 50% 35%)",
    connections: [5, 7]
  },
  {
    id: 7,
    name: "Area 7: Service & Maintenance Zone",
    shortName: "Service & Maintenance Zone",
    description: "Service and maintenance facilities",
    icon: Hotel,
    x: 35,
    y: 35,
    color: "hsl(260 60% 55%)",
    connections: [1]
  }
];

export const SiteMap = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(areas[6]);
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);

  const getConnectionPath = (from: Area, to: Area) => {
    const curve = 20;
    return `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${((from.y + to.y) / 2) - curve} ${to.x} ${to.y}`;
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Site Map</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how Area 4 connects to all other zones at Musafir Retreats & Camps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-earth-brown-light p-8">
                  <svg
                    viewBox="0 0 100 80"
                    className="w-full h-[420px]"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                  >
                    {/* Connection Lines */}
                    <g opacity="0.3">
                      {areas.map(area =>
                        area.connections.map(connId => {
                          const connArea = areas.find(a => a.id === connId);
                          if (!connArea || connId < area.id) return null;

                          const isHighlighted =
                            (selectedArea?.id === area.id || selectedArea?.id === connId) ||
                            (hoveredArea === area.id || hoveredArea === connId);

                          return (
                            <path
                              key={`${area.id}-${connId}`}
                              d={getConnectionPath(area, connArea)}
                              stroke={
                                hoveredArea === area.id || hoveredArea === connId || area.id === 7 || connId === 7
                                  ? "#ea384c"
                                  : isHighlighted ? area.color : "hsl(var(--muted-foreground))"
                              }
                              strokeWidth={isHighlighted ? "0.5" : "0.3"}
                              fill="none"
                              strokeDasharray={area.id === 6 || connId === 6 ? "2,2" : "none"}
                              className="transition-all duration-300"
                              opacity={isHighlighted ? 1 : 0.3}
                            />
                          );
                        })
                      )}
                    </g>

                    {/* Area Markers */}
                    {areas.map(area => {
                      const Icon = area.icon;
                      const isSelected = selectedArea?.id === area.id;
                      const isHovered = hoveredArea === area.id;

                      const isConnected = selectedArea?.connections.includes(area.id) ||
                        selectedArea?.id === area.id;

                      return (
                        <g
                          key={area.id}
                          transform={`translate(${area.x}, ${area.y})`}
                          className="cursor-pointer transition-transform duration-300"
                          style={{
                            transformOrigin: `${area.x}% ${area.y}%`,
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}
                          onClick={() => setSelectedArea(area)}
                          onMouseEnter={() => setHoveredArea(area.id)}
                          onMouseLeave={() => setHoveredArea(null)}
                        >
                          {/* Highlight for Area 7 */}
                          {area.id === 7 && (
                            <circle
                              r="5"
                              fill={
                                area.id === 7
                                  ? "#ea384c" // Highlight Area 7
                                  : hoveredArea === area.id
                                    ? "#ea384c"
                                    : "#4a5568"
                              }
                              stroke={area.id === 7 ? "#ffffff" : "none"}
                              strokeWidth="2"
                              style={{
                                filter: area.id === 7 ? "drop-shadow(0 0 10px rgba(234, 56, 76, 0.7))" : "none",
                                transition: "all 0.3s ease"
                              }}
                            />
                          )}

                          {/* Outer ring for Area 6 */}
                          {area.id === 6 && (
                            <circle
                              r="5"
                              fill="none"
                              stroke={area.color}
                              strokeWidth="0.3"
                              opacity="0.5"
                              className="animate-pulse"
                            />
                          )}

                          {/* Main circle */}
                          <circle
                            r={isSelected ? "4" : "3.5"}
                            fill={isConnected ? area.color : "hsl(var(--muted))"}
                            className="transition-all duration-300"
                            opacity={isConnected ? 1 : 0.4}
                          />

                          {/* Icon placeholder (using circle) */}
                          <circle
                            r="1.5"
                            fill="white"
                            opacity="0.9"
                          />

                          {/* Label */}
                          <text
                            y="7"
                            textAnchor="middle"
                            className="text-[3px] font-semibold fill-foreground"
                            opacity={isConnected ? 1 : 0.5}
                          >
                            Area {area.id}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur rounded-lg p-4 shadow-lg">
                    <h4 className="text-sm font-semibold mb-2">Legend</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#ea384c] shadow-[0_0_10px_rgba(234,56,76,0.5)]" />
                        <span className="text-sm text-muted-foreground">Area 7 (Current)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 border-t-2 border-dashed border-muted-foreground" />
                        <span>Trail Connection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-4">
            {selectedArea ? (
              <Card className="border-2 border-accent animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${selectedArea.color}20` }}
                    >
                      <selectedArea.icon
                        className="h-6 w-6"
                        style={{ color: selectedArea.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2" style={{ backgroundColor: selectedArea.color }}>
                        {selectedArea.name}
                      </Badge>
                      <h3 className="text-xl font-bold">{selectedArea.shortName}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {selectedArea.description}
                  </p>

                  {selectedArea.connections.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Connected Areas</h4>
                      <div className="space-y-2">
                        {selectedArea.connections.map(connId => {
                          const connArea = areas.find(a => a.id === connId);
                          if (!connArea) return null;

                          return (
                            <button
                              key={connId}
                              onClick={() => setSelectedArea(connArea)}
                              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                            >
                              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <div className="flex-1">
                                <p className="text-sm font-medium">{connArea.name}</p>
                                <p className="text-xs text-muted-foreground">{connArea.shortName}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  Click on any area to view details
                </CardContent>
              </Card>
            )}

            {/* Quick Navigation */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-sm font-semibold mb-3">Quick Navigation</h4>
                <div className="grid grid-cols-2 gap-2">
                  {areas.map(area => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className={`p-2 rounded-lg text-xs font-medium transition-all ${selectedArea?.id === area.id
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted hover:bg-muted/80'
                        }`}
                    >
                      Area {area.id}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
