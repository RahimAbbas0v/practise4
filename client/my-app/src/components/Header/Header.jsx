import { Button } from 'reactstrap';
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { style } from '@mui/system';

const items = [
  {
    src: 'https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg',
    altText: 'Fixed-Height Slider',
    caption: 'Excellent bouquets for you'
  },
  {
    src: 'https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg',
    altText: 'Floral',
    caption: 'Excellent bouquets for you'
  },
  {
    src: 'https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg',
    altText: 'Floral',
    caption: 'Excellent bouquets for you'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
        className="carouselImg"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
<img src={item.src} alt={item.altText} style={{ width: "100%",height:"85vh", color:"red"}}/>          
<CarouselCaption captionText={item.caption} style={{ color:"red"}} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
      id='salam'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;