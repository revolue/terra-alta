import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="logo-container">
      <img src="/ta_final_black.png" alt="TERRA ALTA" class="logo">
    </div>
    <div class="text-content">
      <p>Explorar pequenos sítios, escutar histórias reais, e viver a rotina de quem cultiva o café com dedicação, geração após geração.</p>
      <p>Nossa missão é entregar a essência do que exploramos de forma autêntica, através da visão de um especialista em café especiais, um artista plástico e um fotógrafo.</p>
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
    
    <footer class="footer">
      <div class="footer-content">
        <img src="/ta_final_icone_black.png" alt="TERRA ALTA" class="footer-icon">
        <p class="footer-text">ALL RIGHTS RESERVED 2025</p>
      </div>
    </footer>
  </div>
`
