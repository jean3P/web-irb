import React,{Fragment} from "react";
import '../../App.css';
import './ContactUs.css'

export default function ContactUs(){
  return (
    <Fragment>
      <section className={"contact"}>
        <div className={"contact-heading"}>
          <h2>Contact Us</h2>
        </div>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'column'}>
              <div className={'contact-widget'}>

                <div className={'contact-widget-item'}>
                  <div className={'icon'}>
                    <i className={'fa-solid fa-location-dot'}></i>
                  </div>
                  <div className={"text"}>
                    <h5>Address</h5>
                    <p>C. Míster Archer Milton Huntington, 8, 15011 - A Coruña</p>
                  </div>
                </div>

                <div className={'contact-widget-item'}>
                  <div className={'icon'}>
                    <i className={'fa-solid fa-phone'}></i>
                  </div>
                  <div className={"text"}>
                    <h5>Phone</h5>
                    <p>+34 622 53 13 30</p>
                  </div>
                </div>

                <div className={'contact-widget-item'}>
                  <div className={'icon'}>
                    <i className={'fa-regular fa-envelope'}></i>
                  </div>
                  <div className={"text"}>
                    <h5>Mail</h5>
                    <p>bereanachurch@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'column'}>
              <div className={'contact-form'}>
                <form action={'#'}>
                  <input type={'text'} placeholder={'Name'}/>
                  <input type={'email'} placeholder={'Email'}/>
                  <textarea placeholder={'Comment'}></textarea>
                  <button className={'site-btn'} type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
          <div className={'row'}>
            <div className={'map-column'}>
              <div className={'contact-map'}>
                <iframe
                  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.2321551407326!2d-8.4199736!3d43.3721696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c5dbc2de901%3A0x895c62bdbcde46de!2sC.%20M%C3%ADster%20Archer%20Milton%20Huntington%2C%208%2C%2015011%20A%20Coru%C3%B1a%2C%20La%20Coru%C3%B1a%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sch!4v1676815146446!5m2!1ses!2sch"}
                  width={"600"}
                  height={"450"}
                  style={{border: 0}}
                  allowFullScreen
                  loading={"lazy"}
                  referrerPolicy={"no-referrer-when-downgrade"}>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}