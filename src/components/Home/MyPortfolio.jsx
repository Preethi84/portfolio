import data from '../../data/index.json';

export default function MyPortfolio(){
    return (
        <section className='portfolio-section' id='MyPortfolio'>
            <div className='portfolio-container-box'>
                <div className='portfolio-container'>
                    <p className='sub-title'>Recent Projects</p>
                    <h2 className='section-heading'>My Portfolio</h2>
                </div>
                <div className=''>
                    <button className='btn btn-github'>
                        <a href='https://github.com/Preethi84' target='_blank'>Visit My Github</a></button>
                </div>
            </div>
            <div className='portfolio-section-container'>
                {data?.portfolio?.map((item, index) => (
                     <div key={index} className='portfolio-section-card'>
                        <div className='portfolio-section-img'>
                            <img src={item.src} alt='placeholder'/>
                            </div>
                            <div className='portfolio-section-card-content'>
                                <div> 
                                    <h3  className='portfolio-section-title'>{item.title}</h3>
                                    <p className='text-md'>{item.description}</p>
                                    </div>
                                    <p className='text-sm-portfolio-link'>
                                        {item.link}
                                    </p>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    )
}