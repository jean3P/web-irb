import React from "react";
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer(){
  return(
    <div className={'footer-container'}>
      {/*<section className={'footer-subscription'}>*/}
      {/*  <p className={'footer-subscription-heading'}>*/}
      {/*    Join the Adventure newsletter to receive our best vacation deals*/}
      {/*  </p>*/}
      {/*  <p className={'footer-subscription-text'}>*/}
      {/*    You can unsubscribe at any time.*/}
      {/*  </p>*/}
      {/*  <div className={'input-areas'}>*/}
      {/*    <form>*/}
      {/*      <input type={'email'} name={'email'} placeholder={'Your email'} className={'footer-input'}/>*/}
      {/*      <Button buttonStyle={'btn--outline'}>Subscribe</Button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<div className={'footer-links'}>*/}
      {/*  <div className={'footer-link-wrapper'}>*/}
      {/*    <div className={'footer-link-items'}>*/}
      {/*      <h2>About us</h2>*/}
      {/*      <Link to={'/aboutUs'}>How it works</Link>*/}
      {/*      <Link to={'/'}>Testimonials</Link>*/}
      {/*      <Link to={'/'}>Carrers</Link>*/}
      {/*      <Link to={'/'}>Investors</Link>*/}
      {/*      <Link to={'/'}>Term of Services</Link>*/}
      {/*    </div>*/}
      {/*    <div className={'footer-link-items'}>*/}
      {/*      <h2>Contact us</h2>*/}
      {/*      /!*<Link to={'/aboutUs'}>How it works</Link>*!/*/}
      {/*      <Link to={'/'}>Contact</Link>*/}
      {/*      <Link to={'/'}>Support</Link>*/}
      {/*      <Link to={'/'}>Destinations</Link>*/}
      {/*      <Link to={'/'}>Sponsorships</Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={'footer-link-wrapper'}>*/}
      {/*    <div className={'footer-link-items'}>*/}
      {/*      <h2>Videos</h2>*/}
      {/*      /!*<Link to={'/aboutUs'}>How it works</Link>*!/*/}
      {/*      <Link to={'/'}>Submit Video</Link>*/}
      {/*      <Link to={'/'}>Ambassadors</Link>*/}
      {/*      <Link to={'/'}>Agency</Link>*/}
      {/*      <Link to={'/'}>Influencer</Link>*/}
      {/*    </div>*/}
      {/*    <div className={'footer-link-items'}>*/}
      {/*      <h2>Social Media</h2>*/}
      {/*      /!*<Link to={'/aboutUs'}>Social Media</Link>*!/*/}
      {/*      <Link to={'/'}>Instagram</Link>*/}
      {/*      <Link to={'/'}>Facebook</Link>*/}
      {/*      <Link to={'/'}>Youtube</Link>*/}
      {/*      <Link to={'/'}>Twitter</Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <section className={'social-media'}>
        <div className={'social-media-wrap'}>
          <div className={'footer-logo'}>
            <Link to={'/'} className={'social-logo'}>
              IRB <i className="fab fa-typo3"/>
            </Link>
          </div>
          <small className={'website-rights'}>IRB © 2023</small>
          <div className={'social-icons'}>
            <Link className={'social-icon-link Facebook'} to={'/'} target={'_blank'} aria-label={'Facebook'}>
              <i className={'fab fa-facebook-f'}></i>
            </Link>
            <Link className={'social-icon-link Instagram'} to={'/'} target={'_blank'} aria-label={'Instagram'}>
              <i className={'fab fa-instagram'}></i>
            </Link>
            <Link className={'social-icon-link Youtube'} to={'/'} target={'_blank'} aria-label={'Youtube'}>
              <i className={'fab fa-youtube'}></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Footer