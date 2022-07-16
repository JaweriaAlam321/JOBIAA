import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home-container">
      <div className="container">
        <h3>The largest community <br/> of photo enthusiasts</h3>
        <button>Join Today</button>
        </div>
      </section>

      <section className="good-company-section">
        <div className="container">
        <h3>You’re in good company</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="d-flex justify-content-around mt-5">
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
        </div>
        </div>
      </section>

      <section className="good-company-lower-part"> 
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="good-company-lower-part-rectangle"></div>
          <div>
            <h3>Sed ut perspiciatis unde omnis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="good-company-lower-part-rectangle"></div>
          <div>
            <h3>Sed ut perspiciatis unde omnis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
