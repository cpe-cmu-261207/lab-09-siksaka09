import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Contact</h5>
          <img
            src="/picture/307107666_1130193544245420_4049557322219655360_n.jpg"
            width="180"
            height="180"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div class="card-text">
            <p></p>
            <span class="fw-bold">Name:</span>
            <span>Siksaka Watcharasart</span>
            <p></p>
            <span class="fw-bold">Nickname:</span>
            <span>Earth</span>
            <p></p>
            <span class="fw-bold">Facebook:</span>
            <a
              href="https://www.facebook.com/siksaka.watcharasart.9/"
              target="_blank"
            >
              https://www.facebook.com/siksaka.watcharasart.9/
            </a>
            <p></p>
            <span class="fw-bold">Email:</span>
            <a href="mailto: siksaka_w@cmu.ac.th">siksaka_w@cmu.ac.th</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
