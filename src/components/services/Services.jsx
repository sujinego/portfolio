import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className="services_list">
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트1</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트2</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트3</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트4</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트5</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services_list">
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트1</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트2</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트3</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트4</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트5</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트1</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트2</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트3</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트4</p>
            </li>
            <li>
              <BsCheck className="service_list_icon" />
              <p>리스트5</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services