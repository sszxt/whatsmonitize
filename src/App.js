import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>WhatsMonetize</h1>
          <ul>
            <li onClick={() => handleTabClick('features')} className={activeTab === 'features' ? 'active' : ''}>Features</li>
            <li onClick={() => handleTabClick('pricing')} className={activeTab === 'pricing' ? 'active' : ''}>Pricing</li>
            <li onClick={() => handleTabClick('testimonials')} className={activeTab === 'testimonials' ? 'active' : ''}>Testimonials</li>
            <li onClick={() => handleTabClick('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
          <h2>Features</h2>
          <p>Discover how WhatsMonetize can help you turn your WhatsApp channels into revenue streams.</p>
          <div className="features-grid">
            <div className="feature">
              <img src="https://via.placeholder.com/150" alt="Integration" />
              <h3>Seamless Integration</h3>
              <p>Effortlessly integrate with WhatsApp to start monetizing your channels.</p>
            </div>
            <div className="feature">
              <img src="https://via.placeholder.com/150" alt="Options" />
              <h3>Multiple Monetization Options</h3>
              <p>Choose from a variety of monetization strategies to suit your audience.</p>
            </div>
            <div className="feature">
              <img src="https://via.placeholder.com/150" alt="Analytics" />
              <h3>Real-time Analytics</h3>
              <p>Track your earnings and engagement in real-time with our analytics dashboard.</p>
            </div>
          </div>
        </section>

        <section className={`tab-content ${activeTab === 'pricing' ? 'active' : ''}`}>
          <h2>Pricing</h2>
          <p>Flexible pricing options to suit every type of user.</p>
          <div className="pricing-grid">
            <div className="pricing-plan">
              <h3>Basic</h3>
              <p>$9.99/month</p>
              <ul>
                <li>Integration with 1 WhatsApp Channel</li>
                <li>Basic Analytics</li>
                <li>Email Support</li>
              </ul>
              <button>Choose Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Pro</h3>
              <p>$29.99/month</p>
              <ul>
                <li>Integration with 5 WhatsApp Channels</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
              </ul>
              <button>Choose Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Enterprise</h3>
              <p>Contact us</p>
              <ul>
                <li>Custom Integrations</li>
                <li>Dedicated Account Manager</li>
                <li>24/7 Support</li>
              </ul>
              <button>Contact Sales</button>
            </div>
          </div>
        </section>

        <section className={`tab-content ${activeTab === 'testimonials' ? 'active' : ''}`}>
          <h2>Testimonials</h2>
          <p>What our users are saying about WhatsMonetize.</p>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"WhatsMonetize transformed my WhatsApp group into a profitable business!"</p>
              <h4>- Sarah K.</h4>
            </div>
            <div className="testimonial">
              <p>"The analytics feature is a game-changer. I can track everything in real-time!"</p>
              <h4>- John D.</h4>
            </div>
            <div className="testimonial">
              <p>"Excellent support and easy to use. Highly recommend WhatsMonetize."</p>
              <h4>- Emily R.</h4>
            </div>
          </div>
        </section>

        <section className={`tab-content ${activeTab === 'contact' ? 'active' : ''}`}>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out for any inquiries or support.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 WhatsMonetize. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
