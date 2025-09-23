import './style.css'
import tapjctImage from './tapjct.jpg'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="logo-container">
      <img src="/ta_final_black.png" alt="TERRA ALTA" class="logo">
    </div>
    <div class="text-content">
      <p>Explorar pequenos sítios, escutar histórias reais, e viver a rotina de quem cultiva o café com dedicação, geração após geração.</p>
      <p>Nossa missão é entregar a essência do que exploramos de forma autêntica, através da visão de um especialista em café especiais, um artista plástico e um fotógrafo.</p>
      
      <div class="instagram-link">
        <a href="https://www.instagram.com/terra.alta.pjct/" target="_blank" rel="noopener noreferrer">
          <span class="instagram-text">siga nosso instagram ></span>
          <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </div>
    
    <div class="expedition-section">
      <h2>EXPEDIÇÃO I - ALTO DO CAPARAÓ</h2>
      <p>Nossa primeira expedição nos levou ao Alto do Caparaó, uma das regiões mais emblemáticas do café especial brasileiro. Fomos até lá para provar, explorar e conhecer de perto a história dos maiores produtores, com o objetivo de trazer um grão verdadeiramente único para você.</p>
      <p class="expedition-cta">Faça sua pré-reserva</p>
    </div>
    
    <div class="form-section">
      <div class="form-image">
        <img src="${tapjctImage}" alt="TERRA ALTA Project" class="project-image">
      </div>
      <div class="form-container">
        <h2>Pré-reserva</h2>
        <form action="https://formspree.io/f/mzzjbgzo" method="POST" class="reservation-form">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
          <label for="whatsapp">WhatsApp</label>
          <input type="tel" id="whatsapp" name="whatsapp" required>
        </div>
        
        <div class="form-group">
          <label for="preferencia">Preferência</label>
          <select id="preferencia" name="preferencia" required>
            <option value="">Selecione...</option>
            <option value="grao">Grão</option>
            <option value="moido">Moído</option>
          </select>
        </div>
        
        <button type="submit" class="submit-btn">Enviar Pré-reserva</button>
        </form>
      </div>
    </div>
    
    <footer class="footer">
      <div class="footer-content">
        <img src="/ta_final_icone_black.png" alt="TERRA ALTA" class="footer-icon">
        <p class="footer-text">ALL RIGHTS RESERVED 2025</p>
      </div>
    </footer>
  </div>
`
