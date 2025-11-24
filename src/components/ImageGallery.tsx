// Images are now referenced directly from public/assets

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: "/assets/Wellness & Retreat Zone.jpeg", alt: "Wellness & Retreat Zone - Main View", category: "Overview" },
  { src: "/assets/area6_01.png", alt: "Area 6 - Perspective 1", category: "Overview" },
  { src: "/assets/area6_02.png", alt: "Area 6 - Perspective 2", category: "Overview" },
  { src: "/assets/area6_03.png", alt: "Area 6 - Perspective 3", category: "Overview" },
  { src: "/assets/Wellness & Retreat Zone.png", alt: "Floor Plan - Wellness Zone", category: "Floor Plans" },

  // Features
  { src: "/assets/Meditation pavilions and yoga decks.jfif", alt: "Meditation Pavilions", category: "Features" },
  { src: "/assets/Walking trails for quiet reflection.jfif", alt: "Walking Trails", category: "Features" },
  { src: "/assets/Water features ponds and small streams.png", alt: "Water Features", category: "Features" },

  // Specific Items
  {
    src: "/assets/area7_01.png",
    alt: "Service Zone View 1",
    category: "Exterior"
  },
  {
    src: "/assets/area7_02.png",
    alt: "Service Zone View 2",
    category: "Exterior"
  },
  {
    src: "/assets/Service & Maintenance Zone.jpeg",
    alt: "Service Zone Overview",
    category: "Overview"
  },
  {
    src: "/assets/Staff housing and workshops.jfif",
    alt: "Staff Housing",
    category: "Facilities"
  },
  {
    src: "/assets/MAINTENANCE WORKSHOP & TOOL STORAGE.jfif",
    alt: "Workshop",
    category: "Facilities"
  },
  {
    src: "/assets/SERVICE YARD & VEHICLE PARKING.jfif",
    alt: "Service Yard",
    category: "Facilities"
  }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-background" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Image Gallery</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualizing the functional and sustainable design of the Service & Maintenance Zone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
