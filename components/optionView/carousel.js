import React from "react";
import { Carousel } from "react-bootstrap";
import { FlatternArray } from "../../lib/flattenArray";
const im = [
  "https://cdn-images-1.medium.com/max/1600/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
  "https://code.visualstudio.com/assets/docs/nodejs/vuejs/welcome-to-vue.png",
  "https://vuejsdevelopers.com/images/posts/versions/rename_src_1200.webp"
];
export default class MediaCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    const { mediaUrl } = this.props;

    return (
      <>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          slide={false}
          pauseOnHover={true}
        >
          {mediaUrl.map(item => {
            return (
              <Carousel.Item className={"image-slide"} key={item}>
                <img
                  className="d-block w-100 image-slide "
                  src={item}
                  alt="First slide"
                />
                <Carousel.Caption />
              </Carousel.Item>
            );
          })}

          {/* <Carousel.Item className={"image-slide"}>
            <img
              className="d-block w-100 image-slide"
              src="/static/wor.jpg"
              alt="Third slide"
            />

            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item className={"image-slide"}>
            <img
              className="d-block w-100 image-slide"
              src="/static/thishouse.png"
              alt="Third slide"
            />

            <Carousel.Caption />
          </Carousel.Item> */}
        </Carousel>
        <style jsx>
          {`
            .image-slide {
              border-radius: 10px;
            }

            @media (min-width: 768px) {
              .image-slide {
                height: 300px;
              }
            }
          `}
        </style>
      </>
    );
  }
}
