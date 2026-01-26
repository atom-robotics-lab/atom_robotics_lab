"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Poppins } from "next/font/google";
import { CardProps, Carousel } from '@/components/ui/apple-cards-carousel';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppinsParagraph = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface BlogSection {
  title: string;
  image?: string;
  content: string;
}

interface Blog {
  heading: string;
  date: string;
  author: string;
  sections: BlogSection[];
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 2nd card

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/blogs/test.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          throw new Error('Expected an array but received: ' + JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const repeatedBlogs = useMemo(() => {
    const repeated = [...blogs, ...blogs, ...blogs, ...blogs];
    return repeated;
  }, [blogs]);

  // Create the items for the carousel with the correct type
  const carouselItems: CardProps[] = repeatedBlogs.map((blog, index) => ({
    src: blog.sections[0]?.image || '/placeholder-image.jpg',
    title: blog.sections[0]?.title || blog.heading,
    category: `${blog.date} | ${blog.author}`,
    content: (
      <>
        {blog.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            {sectionIndex > 0 && (
              <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-blue-500">{section.title}</h2>
            )}
            {section.image && (
              <div className="w-full mb-4 card-img-container">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
            <p className={`${poppinsParagraph.className} text-black dark:text-white`}>{section.content}</p>
          </div>
        ))}
      </>
    ),
    author: blog.author,
    date: blog.date,
  }));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-4 sm:px-8">
      <h1 className={`${poppins.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center text-blue-500 flex flex-col sm:flex-row items-center justify-center`}>
        <span className="mb-2 sm:mb-0">A. T. O. M</span>
        <span className="sm:ml-8">Blogs</span>
      </h1>
      <p className={`${poppinsParagraph.className} text-xl sm:text-2xl font-bold mb-12 text-center max-w-4xl`}>
        Get a glimpse of how our society functions with these fun blogs where we cover our experiences in competitions, project building, hackathons, and tons of other events.
      </p>

      {isLoading ? (
        <div className="text-2xl">Loading blogs...</div>
      ) : error ? (
        <div className="text-2xl text-red-500">{error}</div>
      ) : blogs.length > 0 ? (
        <div className="w-full">
          <Carousel items={carouselItems} startIndex={currentIndex} />
        </div>
      ) : (
        <div className="text-2xl">No blogs available at the moment.</div>
      )}
    </div>
  );
};

export default Blogs;
