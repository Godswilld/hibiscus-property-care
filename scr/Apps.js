import React from "react";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#76b852", color: "white" }}>
        <h1>Hibiscus Property Care</h1>
        <nav>
          <a href="#home" style={{ marginRight: 10 }}>Home</a>
          <a href="#about" style={{ marginRight: 10 }}>About</a>
          <a href="#booking">Book Now</a>
        </nav>
      </header>
      <section id="home" style={{ padding: "2rem" }}>
        <h2>Welcome to Hibiscus Property Care</h2>
        <p>
          We offer professional gardening and property care services to keep your outdoors beautiful year-round.
        </p>
      </section>
      <section id="about" style={{ padding: "2rem", background: "#f0f0f0" }}>
        <h2>About Us</h2>
        <p>
          Local experts in lawn care, planting, garden maintenance, and landscaping.
        </p>
      </section>
      <section id="booking" style={{ padding: "2rem" }}>
        <h2>Book a Service</h2>
        <BookingForm />
      </section>
      <footer style={{ textAlign: "center", padding: "1rem", background: "#76b852", color: "white" }}>
        &copy; {new Date().getFullYear()} Hibiscus Property Care
      </footer>
    </div>
  );
}

export default App;scs/
