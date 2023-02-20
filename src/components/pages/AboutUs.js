import React,{Fragment, useState} from "react";
import "./AboutUs.css";


const AboutUs=()=>{
  const [toggleTab, setToggleTab] = useState(1)
  const toggleState=(index) =>{
    setToggleTab(index)
  }
  return(
    <Fragment>
      <section className={"about"}>
        <div className={"row"}>
          <div className={"column"}>
            <div className={"about-img"}></div>
          </div>
          <div className={"column"}>
            <div className={"tabs"}>
              <div className={toggleTab === 1? "single-tab active-tab": "single-tab"}
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>
              <div className={toggleTab === 2? "single-tab active-tab": "single-tab"}
                 onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>
              <div className={toggleTab === 3? "single-tab active-tab": "single-tab"}
                 onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>
            <div className={"tab-content"}>
              {/*About Content*/}
              <div className={toggleTab ===1 ? "content active-content":"content"}>
                <h2>My Story</h2>
                <p>adsfaksdhfgkajhdsgfkajhdsgfkajsdhgfakj
                fadsfhdsgfkhadsgfkahsdgfahsdfgajhkdfgdh
                afsdhfgakhsdjfakjhsdfgkhajdsfgkadshfgadsfh
                ahdjsfkdhsgfakdshjgfagfalsdfhahfewohfahf</p>
                <h3>I am a Christian guy that believe in Jesus forever!!</h3>
                <p>dfakhgdsafkjhdsgkjhasdgafkajsdgfkjhadsgfjkhadsgf
                asdhfakshjgfkjahdsgfhjkasdgfkjasdgfkjagdsfjhgguie
                fdsajkfkasdhfkjahdsladhakdshflakdshflakdhf
                asdfbaksdbfaksbfajbfajsfbasjdhbfefuewioeha</p>
              </div>
              {/*Skills Content*/}
              <div className={toggleTab ===2 ? "content active-content":"content"}>
                <h2>Skilss</h2>
                <p>adsfaksdhfgkajhdsgfkajhdsgfkajsdhgfakj
                  fadsfhdsgfkhadsgfkahsdgfahsdfgajhkdfgdh
                  afsdhfgakhsdjfakjhsdfgkhajdsfgkadshfgadsfh
                  ahdjsfkdhsgfakdshjgfagfalsdfhahfewohfahf</p>
                <div className={"skill-row"}>
                  <div className={"skill-column"}>
                    <div className={"progress-wrap"}>
                      <h3>Developer</h3>
                      <div className={"progress developer"}>
                        <div className={"progress-bar"}>
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={"skill-column"}>
                    <div className={"progress-wrap"}>
                      <h3>Designer</h3>
                      <div className={"progress designer"}>
                        <div className={"progress-bar"}>
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={"skill-column"}>
                    <div className={"progress-wrap"}>
                      <h3>React</h3>
                      <div className={"progress react"}>
                        <div className={"progress-bar"}>
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/*Experience Content*/}
              <div className={toggleTab ===3 ? "content active-content":"content"}>
                <div className={"exp-column"}>
                  <h3>Web Developer</h3>
                  <span>2022-2023</span>
                  <p>hafkjdshfakdsjhflakjdshfklajsdfklasdflk
                  adfbasdfbalksdfblaksjdfbakjsdbfkajsdbf
                  asdbfksbdfaksdjfblskfbaksbvaskdbakjsdfb
                  adfbakdsfbklsjdbfalksbflaksbfasdfbaklsbfabs</p>
                </div>

                <div className={"exp-column"}>
                  <h3>Graphic Designer</h3>
                  <span>2015-2023</span>
                  <p>hafkjdshfakdsjhflakjdshfklajsdfklasdflk
                    adfbasdfbalksdfblaksjdfbakjsdbfkajsdbf
                    asdbfksbdfaksdjfblskfbaksbvaskdbakjsdfb
                    adfbakdsfbklsjdbfalksbflaksbfasdfbaklsbfabs</p>
                </div>

                <div className={"exp-column"}>
                  <h3>Software Engineer</h3>
                  <span>2018-2023</span>
                  <p>hafkjdshfakdsjhflakjdshfklajsdfklasdflk
                    adfbasdfbalksdfblaksjdfbakjsdbfkajsdbf
                    asdbfksbdfaksdjfblskfbaksbvaskdbakjsdfb
                    adfbakdsfbklsjdbfalksbflaksbfasdfbaklsbfabs</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default AboutUs