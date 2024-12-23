import React from "react";
import './style.css';

export default function Footer() {
    return(
        <footer class="footer">
  <div class="footer-content">
    <p>&copy; 2024 Bike Spare Parts Shop. All rights reserved.</p>
    <p>
      <a href="/terms">Terms of Service</a> | 
      <a href="/privacy">Privacy Policy</a>
    </p>
  </div>
</footer>
    );
}