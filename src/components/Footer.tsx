import { Mountain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Mountain className="h-8 w-8" />
            <div>
              <p className="text-2xl font-bold">Musafir Retreats & Camps</p>
              <p className="text-sm text-primary-foreground/80">Area 6 – Wellness & Retreat Zone</p>
            </div>
          </div>

          <div className="text-center md:text-right">

            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Musafir Retreats. Area 7 – Service & Maintenance Zone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
