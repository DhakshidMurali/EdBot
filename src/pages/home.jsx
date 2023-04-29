import "./home.css";
import homescreen from "../icons/homescreen.png";

import { UserContext } from "../context/createcontext";
import { useContext } from "react";

const Home = () => {
  const user = useContext(UserContext);
  console.log(user.lang);
  return (
    <div className="outerContainer1">
      <div className="container1">
        <section className="header">
          <header>
            <img className="image1" src={homescreen} alt="online icon" />
            <p></p>
            <div class="wrapper">
              <input
                type="radio"
                name="select"
                id="option-1"
                value="Tamil"
                onChange={user.langChanger}
              />
              <input
                type="radio"
                name="select"
                id="option-2"
                value="English"
                onChange={user.langChanger}
              />
              <label for="option-1" class="option option-1">
                <div class="dot"></div>
                <span>Tamil</span>
              </label>
              <label for="option-2" class="option option-2">
                <div class="dot"></div>
                <span>English</span>
              </label>
            </div>
            <div className="header-title-1">Hi there !...</div>
            <div className="header-title-2">I am chatbot.</div>
          </header>
        </section>
      </div>
      {user.lang == "Tamil" && (
        <div className="content">
          <h1>
            <div className="HeaderBox">
              "Bot ஐக் கேளுங்கள்" பக்கத்தைப் பயன்படுத்த விரும்பும் பயனருக்கான
              வழிமுறைகள்.
            </div>
          </h1>
          <hr />
          <p>
            {" "}
            <div className="point">
              பயனர் ஏதேனும் கேள்வி அல்லது கருத்துக்கான பதிலைப் பெற விரும்பினால்,
              பயனர் " Bot ஐக் கேளுங்கள்" பக்கத்தை நகர்த்தலாம்.{" "}
            </div>
            <br />{" "}
            <div className="point">
              பின்னர், "வகை வினவல்" விருப்பத்தில் பயனர் தங்கள் கேள்வி அல்லது
              கருத்தை உள்ளிட்டு "அனுப்பு" விருப்பத்தை கிளிக் செய்யலாம்.{" "}
            </div>
            <br />{" "}
            <div className="point">
              அதன் பிறகு, "Bot ஐக் கேளுங்கள்" பக்கத்தில் பயனர் அந்தக்
              கேள்விக்கான{" "}
            </div>
            பதிலைப் பெறலாம்.
            <br />{" "}
            <div className="point">
              மற்றொரு கேள்வி அல்லது கருத்துக்களுக்கான பதிலை பயனர் விரும்பினால்
              மீண்டும், பயனர் மேலே உள்ள இரண்டு புள்ளிகளைப் பின்பற்றலாம்.{" "}
            </div>
            <br />{" "}
            <div className="point">
              இதன் மூலம் பயனர் "Bot ஐக் கேளுங்கள்" பக்கத்தைப் பயன்படுத்தலாம்.{" "}
            </div>
            <br />
          </p>
          <h1>
            {" "}
            <div className="HeaderBox">
              பதிலளிக்க விரும்பும் நபர்களுக்கான வழிமுறைகள்:
            </div>
          </h1>
          <hr />
          <p>
            {" "}
            <div className="point">
              "Botக்கான பதில்" பிரிவில், நீங்கள் பதிலளிக்க விரும்பும் வினவலைக்
              கிளிக் செய்யவும்.
            </div>
            <br />{" "}
            <div className="point">
              இரண்டு புலங்களை நிரப்புமாறு கேட்கப்படும் படிவத்திற்கு நீங்கள்
              வழிநடத்தப்படுவீர்கள்.{" "}
            </div>
            <br /> <div className="point">இரண்டு துறைகள்: </div>
            <br />{" "}
            <div className="point">
              வடிவங்கள்: அதற்கேற்ப கேள்விகளை வடிவமைக்கவும், அதாவது நீங்கள்
              பதிலளிக்கும் வினவல்களை நீங்கள் உள்ளிட வேண்டும்.{" "}
            </div>
            <br />
            <div className="point">
              பதில்: இந்த உள்ளீட்டு புலங்களில் உங்கள் புரிதல் வழியைப் பகிரவும்{" "}
            </div>
            <br />
            <div className="point">உதாரணத்திற்கு: </div>
            <br />
            <div className="point">
              "வைஃபை என்றால் என்ன" என்ற கேள்விக்கு நீங்கள் பதிலளிக்க
              விரும்புகிறீர்கள் என்று கருதுங்கள்.
            </div>
            <br />
            <div className="point">உங்கள் பதில் இப்படி இருந்தால்:</div>
            <br />
            <div className="point">
              Wi-Fi என்பது சுருக்கம் அல்ல; இது ஒரு மார்க்கெட்டிங் நிறுவனத்தால்
              உருவாக்கப்பட்ட ஒரு பிராண்ட் பெயர், இது சந்தைப்படுத்தல்
              முயற்சிகளுக்கான இயங்குநிலை முத்திரையாக செயல்படுகிறது.
            </div>
            <br />
            <div className="point">
              தொழில்நுட்ப பக்கத்தில், IEEE 802.11 தரநிலையானது வயர்லெஸ்
              ரவுட்டர்கள் மற்றும் வயர்லெஸ் அணுகல் புள்ளிகள் உட்பட தற்போதைய
              Wi-Fi-இயக்கப்பட்ட வயர்லெஸ் சாதனங்களுடன் தொடர்புகளை செயல்படுத்தும்
              நெறிமுறைகளை வரையறுக்கிறது. வயர்லெஸ் அணுகல் புள்ளிகள் வெவ்வேறு IEEE
              தரநிலைகளை ஆதரிக்கின்றன.
            </div>
            <br />{" "}
            <div className="point">
              ஒவ்வொரு தரமும் காலப்போக்கில் அங்கீகரிக்கப்பட்ட ஒரு திருத்தமாகும்.
              தரநிலைகள் பல்வேறு அலைவரிசைகளில் செயல்படுகின்றன, வெவ்வேறு
              அலைவரிசைகளை வழங்குகின்றன, மேலும் வெவ்வேறு எண்ணிக்கையிலான சேனல்களை
              ஆதரிக்கின்றன.{" "}
            </div>
            <br />{" "}
            <div className="point">
              பின்னர் நீங்கள் போன்ற வடிவங்களை உள்ளிட வேண்டும்:{" "}
            </div>
            <br /> <div className="pointtab">வைஃபையை வரையறுக்கவும். </div>
            <br /> <div className="pointtab">சுருக்கமான வைஃபை. </div>
            <br /> <div className="pointtab">வைஃபை எப்படி வேலை செய்கிறது. </div>
            <br />{" "}
            <div className="pointtab">
              வைஃபை வேலை செய்யும் பொறிமுறையை விளக்குங்கள்{" "}
            </div>
            <br />
          </p>
        </div>
      )}
      {user.lang == "English" && (
        <div className="content">
          <div className="HeaderBox">
            <h1>Instruction for "ASK TO BOT" </h1>
          </div>
          <hr className="horizontal" />
          <div className="Points">
            <p>
              <div className="point">
                {" "}
                If the user wants to get Answer for any Question or Concept,
                user can move "Ask to Bot" page.
              </div>
              <br />
              <div className="point">
                And then, in the "Type Query" option user can enter their
                Question or Concept and then click "Send" option.
              </div>
              <br></br>
              <div className="point">
                After that user can get answer for that question in the "Ask to
                Bot" page.I am currently expanding my skillset in web
                development and design.
              </div>
              <br />{" "}
              <div className="point">
                {" "}
                Again if the user wants Answer for another Question or Concepts,
                User can follow above two points.
              </div>
              <br />
              <div className="point">
                {" "}
                By this way user can use the "Ask to Bot" page.
              </div>
            </p>
          </div>
          <h1>
            <div className="HeaderBox">Instruction for "ANSWER TO BOT" </div>
          </h1>
          <hr />
          <p>
            <div className="point">
              In the "Answer to bot" section, Click on the query which you like
              to answer.
            </div>
            <br />
            <div className="point">
              {" "}
              you will be navigated to a form where two fields you are asked to
              fill.{" "}
            </div>
            <br />
            <div className="point">Two fields: </div>
            <br />
            <div className="pointtab">
              Patterns: Frame questions accordingly which means you are supposed
              to enter queries for which you are responding works well.{" "}
            </div>
            <br />
            <div className="pointtab">
              Response: Share your way of understanding in these input fields{" "}
            </div>
            <br /> <div className="point"> For example: </div>
            <br />
            <div className="pointtab">
              Consider you are like to answer the query "what is wifi" and if
              your response is something like this:{" "}
            </div>
            <br />
            <div className="pointtab">
              Wi-Fi is not an acronym; it is a brand name created by a marketing
              firm that’s meant to serve as an interoperability seal for
              marketing efforts.{" "}
            </div>
            <br />
            <div className="pointtab">
              On the technical side, the IEEE 802.11 standard defines the
              protocols that enable communications with current Wi-Fi-enabled
              wireless devices, including wireless routers and wireless access
              points. Wireless access points support different IEEE standards.{" "}
            </div>
            <br />
            <div className="pointtab">
              Each standard is an amendment that was ratified over time. The
              standards operate on varying frequencies, deliver different
              bandwidths, and support different numbers of channels.{" "}
            </div>
            <br />
            <div className="pointtab">
              Then you are supposed to enter patterns like :{" "}
            </div>
            <br />
            <div className="pointtabtab">Define wifi. </div>
            <br />
            <div className="pointtabtab">Brief wifi. </div>
            <br />
            <div className="pointtabtab">How does wifi work. </div>
            <br />
            <div className="pointtabtab">Explain wifi working mechanism </div>
            <br />
          </p>

          <br />
        </div>
      )}
    </div>
  );
};

export default Home;
