import data from "../../data/index.json";

export default function Testimonial(){
    return (
        <section className="testimonial-section" id="Testimonials">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <h2 className="sections-heading">Customer Feedback</h2>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.testimonials?.map((item, index) => (
                    <div key={index} className="testimonial-section-card">
                        <div className="testinomial-section-card-review">
                            {Array.from({length: 5}, (reviews, index) => (
                                 <img src="./img/star.svg" alt="reviews" className="review-star"/>
                            ))}
                            </div>
                            <p className="text-md">{item.description}</p>
                            <div className="testimonial-section-card-author-detail">
                                <img src={item.src} alt="avatar"/>
                                <div>
                                    <p className="text-md testimonial-author-name">
                                        {item.author_name}
                                    </p>
                                    <p className="text-md testimonial-author-designation">
                                        {item.author_designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    )
}