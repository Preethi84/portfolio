import { Link } from "react-scroll";

export default function HeroSection(){
    return (
        <section id="HeroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Preethi</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Full Stack
                        </span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero-section-description">
                    with 3.5 years of experience in SaaS product
                    development. Skilled in building scalable, high-quality solutions that enhance
                    user experience and operational efficiency. 
                    <br/>
                    Expertise in Vue.js, FastAPI, and a range of modern JavaScript frameworks,
                    with foundational knowledge of AWS cloud services to support efficient application deployment and scalability. Proven
                    track record of reducing development time and improving product stability. Eager to bring strong problem-solving and
                    collaborative abilities to a forward-thinking tech company.
                    </p>
                </div>
                <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" 
                className="navbar-content">
                    <button className="btn btn-primary">Get in Touch</button>
                 </Link>
            </div>
            <div className="hero-section-img">
                <img src="./img/Profile.jpg" alt="Hero section" />
            </div>
        </section>
    )
}