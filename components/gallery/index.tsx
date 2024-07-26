"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import React from "react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  image: ImageType[];
}

function Gallery({ image }: GalleryProps) {
  return (
    <Tab.Group as="div" className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {image.map((img) => (
            <GalleryTab key={img.id} image={img} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={"aspect-square w-full"}>
        {image.map((img) => (
          <Tab.Panel key={img.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={img.url}
                alt="Image"
                fill
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Gallery;
