import React from 'react';

interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  videoUrl?: string;
}

const ResultsStories: React.FC = () => {
  const stories: SuccessStory[] = [
    {
      id: 1,
      category: "Rana's Transformation",
      title: "From Unfit to Unstoppable",
      description: "Rana came to us struggling with basic fitness. Through our Advanced Trainer program, he transformed not just his body, but his entire relationship with health and strength.",
      videoUrl: "https://res.cloudinary.com/drxykwg61/video/upload/v1744713981/hrek9a36iv2djhlduxoc.mp4"
    },
    {
      id: 2,
      category: "Tamannaah's Journey",
      title: "Celebrity-Level Performance",
      description: "Maintaining peak physical condition for demanding film schedules requires more than just workouts. Our Master Coach approach delivered the accountability and results Tamannaah needed.",
      videoUrl: "https://res.cloudinary.com/drxykwg61/video/upload/v1744714036/nwsrlu8iy5fsvaokxngk.mp4"
    },
    {
      id: 3,
      category: "Recovery Success",
      title: "From Surgery to Strength",
      description: "Post-knee surgery to deadlifting 60kg safely. Our rehabilitation protocols don't just get you back to where you were — they make you stronger than ever.",
      videoUrl: "https://res.cloudinary.com/drxykwg61/video/upload/v1744713978/ptz18lz8fmdf6cmax8xy.mp4"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-zinc-900 rounded-lg overflow-hidden flex flex-col">
              {story.videoUrl && (
                <div className="w-full aspect-video">
                  <video 
                    className="w-full h-full object-cover" 
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={story.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-8">
                  <p className="text-zinc-500 text-sm mb-2">{story.category}</p>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStories;
