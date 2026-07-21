import LamborginiBg from "../assets/Lamborgini.png";
function Hero() {
  return (
    <>
      <section
        id="hero"
        style={{ backgroundImage: `url(${LamborginiBg})` }}
      >
        <div id="hero-content">
          <p className="tagline">THE ART OF PERFORMANCE</p>
          <h1>LAMBORGHINI</h1>
          <h1>HURACAN</h1>

          <p className="desc">
            A perfect fusion of technology and
            <br />
            performance. Engineered to thrill.
            <br />
            Designed to stand out.
          </p>

          <div id="hero-buttons">
            <button className="btn-filled">EXPLORE MODEL &rarr;</button>
            <button className="btn-outline">WATCH FILM</button>
          </div>

          <div id="scroll-indicator">
            <span className="scroll-icon"></span>
            <p>SCROLL TO DISCOVER</p>
          </div>
        </div>
      </section>

      <div id="stats-bar">
        <div className="stat">
          <span className="stat-value">325 <small>KM/H</small></span>
          <span className="stat-label">TOP SPEED</span>
        </div>
        <div className="stat">
          <span className="stat-value">640 <small>HP</small></span>
          <span className="stat-label">MAX POWER</span>
        </div>
        <div className="stat">
          <span className="stat-value">2.9 <small>SEC</small></span>
          <span className="stat-label">0-100 KM/H</span>
        </div>
        <div className="stat">
          <span className="stat-value">AWD</span>
          <span className="stat-label">DRIVE SYSTEM</span>
        </div>
      </div>
    </>
  );
}

export default Hero;