function Contact() {
  return (
    <>
      <div id="contact-section" className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d842.1189442065162!2d35.87740467728773!3d34.4182420695214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDI1JzA4LjkiTiAzNcKwNTInMzkuNCJF!5e1!3m2!1sen!2slb!4v1729596756932!5m2!1sen!2slb"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
          <div className="contact-info">
            <div className="location-info">
              <img src="/assets/svg/location.svg" alt="Location icon" />
              <div>
                <p>Mejdlaya - Zgharta | Next to Finianios fuel station</p>
                <p translate="no">
                  مجدليا - زغرتا | بجانب محطة فينيانوس للوقود
                </p>
              </div>
            </div>
            <div className="phone-info">
              <img src="/assets/svg/phone.svg" alt="Phone icon" />
              <div>
                <p>+961 03 205 958</p>
                <p>+961 76 716 964</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
