import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function exp() {
  return (
    <div calss="card text-center">
      <div>
        <Navbar />
        <div class="col d-flex justify-content-center">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="/picture/123.JPG"
                  width="180"
                  height="180"
                  className="square"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body bg">
                  <h5 class="card-title">Game Project</h5>
                  <p class="card-text">
                    I make this game for CompProg. This is a tactical game and
                    need 2 player to play. You can win by attack enemies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="/picture/Captur123e.JPG"
                  width="180"
                  height="180"
                  className="square"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body bg">
                  <h5 class="card-title">Game Project</h5>
                  <p class="card-text">
                    I and my team friends make this game.This game is about go
                    through the level by answering the right answer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
