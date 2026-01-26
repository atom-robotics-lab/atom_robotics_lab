// apple-cards-carousel.tsx
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "../hooks/use-outside-click";

// Types for Carousel and Card
export interface CardProps {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  author: string;
  date: string;
}

export interface CarouselProps {
  items: CardProps[];
  startIndex?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  carouselRef: React.RefObject<HTMLDivElement>;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  carouselRef: { current: null }
});

interface CardPropsExtended {
  card: CardProps;
  index: number;
  layout?: boolean;
  onClose?: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({ items, startIndex = 0 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightButtonClicked, setRightButtonClicked] = useState(false); // State for right button click

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = startIndex * 300; // Adjust based on card width
      checkScrollability();
    }
  }, [startIndex]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // Small buffer to prevent overshooting
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <CarouselContext.Provider value={{ carouselRef, onCardClose: () => {}, currentIndex: startIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-auto py-10 md:py-20 scroll-smooth"
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{ overflowX: 'hidden' }}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
          <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                <Card card={item} index={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight || rightButtonClicked} // Disable if already clicked
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card: React.FC<CardPropsExtended> = ({
  card,
  index,
  layout = false,
  onClose
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex, carouselRef } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // Adjust as necessary
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * currentIndex;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    if (onClose) onClose();
    onCardClose(index);
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
              style={{ marginTop: '100px' }}
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="text-base font-medium text-gray-600 dark:text-gray-400 mt-2">
                <p>{card.author}</p>
                <p>{card.date}</p>
              </div>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-64 w- md:h-[30rem] md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-3xl font-semibold font-sans"
          >
            {card.title}
          </motion.p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={card.src}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out"
          />
        </div>
      </motion.button>
    </>
  );
};
