import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github" className="btn" target="_blank">github</a>
                    <a href="http://" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio