import React from 'react';

interface TransformationItem {
  id: number;
  beforeAfterImage: string;
}

const ResultsGallery: React.FC = () => {
  // Array of transformation images
  const transformations: TransformationItem[] = [
    {
      id: 1,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715773/eshhk23yltoqcdtdfopp.webp"
    },
    {
      id: 2,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715770/hxswvfyhi2gtnskia4ti.webp"
    },
    {
      id: 3,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715769/fql53y8ncg90xrglfftc.webp"
    },
    {
      id: 4,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715768/quxvtcuv68pdk26g7rxx.webp"
    },
    {
      id: 5,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715766/i9io0b9rpkw1yfzvtyga.webp"
    },
    {
      id: 6,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715768/s9qak0pcvdnernwbkygj.webp"
    },
    {
      id: 7,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715767/f4uktmxoytxmbwugyw4u.webp"
    },
    {
      id: 8,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715767/qgybgzmyz1m45dqgsl3j.webp"
    },
    {
      id: 9,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715767/q02esilzplapfwy6xry6.webp"
    },
    {
      id: 10,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715767/ejo1tzvt2rblw6wds1sd.webp"
    },
    {
      id: 11,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715767/qwntv6npio9trfiighek.webp"
    },
    {
      id: 12,
      beforeAfterImage: "https://res.cloudinary.com/drxykwg61/image/upload/v1744715766/rmoqx3eet4htuf3n9yks.webp"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {transformations.map((item) => (
            <div key={item.id} className="bg-zinc-900 rounded-lg overflow-hidden">
              <img 
                src={item.beforeAfterImage} 
                alt={`Transformation ${item.id}`} 
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
