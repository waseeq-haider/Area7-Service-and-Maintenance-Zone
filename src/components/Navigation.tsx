import { useState } from "react";
import { Menu, X, Utensils, Home, Mountain, TreePine, Waves, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AreaLink {
    id: number;
    name: string;
    shortName: string;
    path: string;
    icon: React.ElementType;
    color: string;
}

const areas: AreaLink[] = [
    {
        id: 1,
        name: "Area 1: Dining Hall & Sports Complex",
        shortName: "Dining Hall & Sports",
        path: "../Area1-Dinning-Hall-and-sports-Complex/index.html",
        icon: Utensils,
        color: "hsl(30 80% 55%)",
    },
    {
        id: 2,
        name: "Area 2: Student Accommodation",
        shortName: "Student Accommodation",
        path: "../Area2-Student-Accomodation/index.html",
        icon: Home,
        color: "hsl(200 70% 50%)",
    },
    {
        id: 3,
        name: "Area 3: Adventure & Recreation Zone",
        shortName: "Adventure & Recreation",
        path: "../Area3-Adventure-and-Recreation-Zone/index.html",
        icon: Mountain,
        color: "hsl(140 60% 45%)",
    },
    {
        id: 4,
        name: "Area 4: Eco Lodges & Family Accommodation",
        shortName: "Eco Lodges & Family",
        path: "../Area4-Eco-Lodges-and-Family-Accommodation/index.html",
        icon: TreePine,
        color: "hsl(120 50% 40%)",
    },
    {
        id: 5,
        name: "Area 5: Education & Workshop Hub",
        shortName: "Education & Workshop",
        path: "../Area5-Education-and-Workshop-Hub/index.html",
        icon: Waves,
        color: "hsl(180 60% 50%)",
    },
    {
        id: 6,
        name: "Area 6: Wellness & Retreat Zone",
        shortName: "Wellness & Retreat",
        path: "../Area6-Wellness-and-Retreat-Zone/index.html",
        icon: TreePine,
        color: "hsl(100 50% 35%)",
    },
    {
        id: 7,
        name: "Area 7: Service & Maintenance Zone",
        shortName: "Service & Maintenance",
        path: "../Area7-Service-and-Maintenance-Zone/index.html",
        icon: Hotel,
        color: "hsl(260 60% 55%)",
    },
];

interface NavigationProps {
    currentAreaId: number;
}

export const Navigation = ({ currentAreaId }: NavigationProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const currentArea = areas.find((area) => area.id === currentAreaId);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleSidebar}
                            className="hover:bg-accent"
                        >
                            {isSidebarOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                        <div className="flex items-center gap-3">
                            <Mountain className="h-6 w-6 text-primary" />
                            <div>
                                <h1 className="text-lg font-bold">Musafir Retreats & Camps</h1>
                                {currentArea && (
                                    <p className="text-xs text-muted-foreground">
                                        {currentArea.name}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 h-full w-80 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border">
                        <div className="flex items-center gap-2">
                            <Mountain className="h-5 w-5 text-primary" />
                            <h2 className="font-bold">All Areas</h2>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleSidebar}
                            className="hover:bg-accent"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Area Links */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="space-y-2">
                            {areas.map((area) => {
                                const Icon = area.icon;
                                const isActive = area.id === currentAreaId;

                                return (
                                    <a
                                        key={area.id}
                                        href={area.path}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-lg transition-all group",
                                            isActive
                                                ? "bg-accent text-accent-foreground shadow-sm"
                                                : "hover:bg-accent/50"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "p-2 rounded-md transition-colors",
                                                isActive ? "bg-background/50" : "bg-background/30 group-hover:bg-background/50"
                                            )}
                                            style={{
                                                backgroundColor: isActive
                                                    ? `${area.color}20`
                                                    : undefined,
                                            }}
                                        >
                                            <Icon
                                                className="h-5 w-5"
                                                style={{ color: isActive ? area.color : undefined }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className={cn("text-sm font-medium", isActive && "font-semibold")}>
                                                {area.shortName}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Area {area.id}
                                            </p>
                                        </div>
                                        {isActive && (
                                            <div
                                                className="w-1 h-8 rounded-full"
                                                style={{ backgroundColor: area.color }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-border">
                        <p className="text-xs text-muted-foreground text-center">
                            Navigate between all 7 areas of Musafir Retreats
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};
