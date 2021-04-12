import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/images/caro_01c.jpg',
    altText: '24 Hour Emergency Service',
    caption: '24 Hour Emergency Service'
  },
  {
    src: '/images/caro_02c.jpg',
    altText: 'Home Water Filtration',
    caption: 'Home Water Filtration'
  },
  {
    src: '/images/caro_03c.jpg',
    altText: 'Garbage Disposal Repair and Installation',
    caption: 'Garbage Disposal Repair and Installation'
  },
  {
    src: '/images/caro_04c.jpg',
    altText: 'Leak Detection',
    caption: 'Leak Detection'
  },
  {
    src: '/images/caro_05c.jpg',
    altText: 'Commercial Plumbing',
    caption: 'Commercial Plumbing'
  },
  {
    src: '/images/caro_06c.jpg',
    altText: 'We Serve the Orlando Area!',
    caption: 'We Serve the Orlando Area!'
  }
];

const Caro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Caro;