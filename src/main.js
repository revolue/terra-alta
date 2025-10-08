import './style.css'

// Simple scroll animation for coffee section
function initScrollEffect() {
  const coffeeSection = document.querySelector('.coffee-section');
  const coffeeOverlay = document.querySelector('.coffee-text-overlay');
  
  if (!coffeeSection || !coffeeOverlay) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        coffeeOverlay.style.opacity = '1';
        coffeeOverlay.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.3
  });
  
  observer.observe(coffeeSection);
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="logo-container">
      <img src="/TA.gif" alt="TERRA ALTA" class="logo">
    </div>
    <div class="text-content">
      <p>Exploramos pequenos sítios, ouvimos histórias reais e vivemos a rotina de quem cultiva café com dedicação, geração após geração.</p>
      <p>Nossa missão é trazer até você a essência do que encontramos: cafés selecionados por um especialista em café especiais, a visão de um artista plástico e a captura de um fotógrafo.</p>
      
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
      <p>Em nossa primeira expedição, fomos ao Alto do Caparaó, uma das regiões mais emblemáticas do café especial brasileiro. Conhecemos os maiores produtores e provamos os grãos mais exclusivos, com o objetivo de entregar a você um café único e de altíssimo nível.</p>
    </div>
    
    <div class="coffee-section">
      <div class="coffee-image-container">
        <img src="/torra1.jpg" alt="TORRA I" class="coffee-image">
        <div class="coffee-text-overlay">
          <h2 class="coffee-title">TORRA I</h2>
          <div class="coffee-details">
            <p>Nosso primeiro grão, direto do Alto Caparaó, em 4 torras.</p>
            <p><strong>Produtor:</strong> Alan Rodrigues Lecerda</p>
            <p><strong>Região:</strong> Alto Caparaó, Sítio Lacerda</p>
            <p><strong>Espécie:</strong> 100% Arábica</p>
            <p><strong>Variedade:</strong> Arara</p>
            <p><strong>Processo:</strong> Natural em terreiro suspenso</p>
            <p><strong>Peso:</strong> 250g</p>
          </div>
        </div>
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

// Initialize scroll effect after DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollEffect);
