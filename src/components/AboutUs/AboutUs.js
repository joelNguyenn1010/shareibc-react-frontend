import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
import AboutUsImage from "./Image/e.psd";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";

const textStyle = {
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "400"
};

const givingText = {
  textTransform: "uppercase",
  fontSize: "22px",
  color: "blue"
};

const listProfit = [
  {
    image: "https://placeimg.com/300/300/any",
    text: "Brands offer best deals"
  },
  {
    image: "https://placeimg.com/300/300/any",
    text: "Choose a deal from our shop"
  },
  {
    image: "https://placeimg.com/300/300/any",
    text: "All profit will be donated to charity"
  }
];

const url = "public/img/background/sydney_5.jpg";

function AboutUs() {
  return (
    <Fragment>
      <MDBContainer
        fluid
        style={{
          background: 'url("' + AboutUsImage + '") no-repeat center',
          backgroundPosition: "center center no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "400px"
        }}
      />
      <MDBContainer>
        <MDBRow
    
        >
          <MDBCol style={textStyle}>
            Change the world by everyday purcharse
          </MDBCol>
          <MDBCol style={textStyle} size="12">
            All profit will be given to charity to support social projects
          </MDBCol>
          <MDBCol style={{ ...textStyle, ...givingText }} size="12">
            {" "}
            giving back to the society
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {listProfit.map((profit, i) => (
            <MDBCol key={i} size="4">
              <MDBRow>
                <MDBCol size="12">
                  <img
                    src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </MDBCol>
                <MDBCol
                  size="12"
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "black"
                  }}
                >
                  <h4 style={{ fontWeight: "900" }}> {profit.text}</h4>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          ))}
        </MDBRow>
        <MDBRow
          style={{
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <Link className="btn btn-primary" to='/products'>Shop NOW</Link>
        </MDBRow>
      </MDBContainer>
      {/* <MDBContainer
        style={{
          height: "200px",
          backgroundColor: "#80808075",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 0px",
          alignItems: "center"
        }}
        fluid
      >
        <MDBRow>
          <MDBCol size="12" style={{ fontSize: "20px", fontWeight: "700" }}>
            {" "}
            frequently asked questions
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <select
              style={{
                width: "700px",
                padding: "5px 10px"
              }}
              className="browser-default"
            >
              <option>About Shareibc</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <select
              style={{
                width: "700px",
                padding: "5px 10px"
              }}
              className="browser-default"
            >
              <option>Purcharse and redemption</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <select
              style={{
                width: "700px",
                padding: "5px 10px"
              }}
              className="browser-default"
            >
              <option>About our projects</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <Carousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <CarouselInner>
                <CarouselItem itemId="1">
                  <View>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                      alt="First slide"
                    />
                    <Mask overlay="black-light" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Light mask</h3>
                    <p>First text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <View>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                      alt="Second slide"
                    />
                    <Mask overlay="black-strong" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Second text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <View>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                      alt="Third slide"
                    />
                    <Mask overlay="black-slight" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Slight mask</h3>
                    <p>Third text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <View>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
                      alt="Mattonit's item"
                    />
                    <Mask overlay="black-light" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Sopot Beach</h3>
                    <p>Taken june 21th by @mattonit</p>
                  </CarouselCaption>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
    </Fragment>
  );
}

export default AboutUs;
