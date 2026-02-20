import './App.css'

function App() {
  return (
    <div className="page">
      <div className="bg-orbs">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <main className="main">
        <header className="brand-header">
          <img className="brand-logo" src="/img.png" alt="Gianza logo" />
          <div className="brand-text">
            <h1 className="brand-name">Gianza</h1>
            <div className="brand-contact">
              <span className="brand-contact-label">Contact:</span>
              <ul className="brand-contact-list">
                <li>840-261-3648</li>
                <li>mr.cold@gianzaactech.com</li>
              </ul>
            </div>
          </div>
        </header>
        <div className="coming-soon">Coming soon</div>

        <section className="service">
          <p className="service-lead">
            Ensure driver comfort and operational efficiency with our expert
            A/C maintenance and repair services, covering the full spectrum from
            light-duty pickups and medium-duty box trucks to heavy-duty class 8
            rigs and specialized service trucks. Our certified technicians
            provide comprehensive diagnostic services, including refrigerant
            leak detection, system recharges, compressor replacements, and cabin
            air filter replacements to keep your fleet running cool, even in
            extreme conditions. We understand the rigorous demands on your
            vehicles, which is why we offer preventative maintenance, such as
            cleaning condenser coils and inspecting belt/hose integrity, to
            prevent unexpected failures. Whether it's a total overhaul or a
            simple recharge, our prompt, professional service ensures your fleet
            avoids downtime and stays compliant with performance standards.
          </p>

          <h2>Key Services Offered:</h2>
          <ul className="service-list">
            <li>Full System Diagnostics &amp; A/C Recharges</li>
            <li>Leak Detection (UV Dye/Electronic)</li>
            <li>Compressor, Condenser, &amp; Evaporator Repair</li>
            <li>Cabin Air Filter Replacement</li>
            <li>Belt &amp; Hose Inspections</li>
            <li>Service for Specialized Work Truck Equipment</li>
          </ul>
        </section>

        <section className="info">
          <h2>Information</h2>
          <div className="info-items">
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span>840-261-3648</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span>mr.cold@gianzaactech.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
