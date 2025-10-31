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

// Router function
function router() {
  const path = window.location.pathname;
  
  if (path === '/euquero') {
    renderEuqueroPage();
  } else {
    renderHomePage();
  }
}

function renderHomePage() {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <div class="logo-container">
        <img src="/TA.gif" alt="TERRA ALTA" class="logo">
      </div>
      <div class="torra-ii-button-container">
        <a href="/euquero" class="torra-ii-button">TORRA II DISPONÍVEL - COMPRE AQUI</a>
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
  `;
  
  // Initialize scroll effect after DOM is loaded
  document.addEventListener('DOMContentLoaded', initScrollEffect);
}

function renderEuqueroPage() {
  document.querySelector('#app').innerHTML = `
    <div class="euquero-container">
      <div class="euquero-logo-container">
        <img src="/TA.gif" alt="TERRA ALTA" class="euquero-logo">
      </div>
      
      <div class="euquero-content">
        <div class="euquero-info">
          <h1 class="euquero-title">TORRA II DISPONÍVEL</h1>
          <p class="euquero-description">
            O mesmo grão selecionado do primeiro lote, agora com uma torra diferenciada. 
            Uma nova configuração que revela outras nuances, notas e sensoriais únicas, 
            explorando todo o potencial deste café especial.
          </p>
          
          <div class="euquero-details">
            <p><strong>Produtor:</strong> Alan Rodrigues Lecerda</p>
            <p><strong>Região:</strong> Alto Caparaó, Sítio Lacerda</p>
            <p><strong>Espécie:</strong> 100% Arábica</p>
            <p><strong>Variedade:</strong> Arara</p>
            <p><strong>Peso:</strong> 250g</p>
            <p><strong>Processo:</strong> Natural em terreiro suspenso</p>
            <p><strong>Aroma:</strong> Mel e Rapadura</p>
            <p><strong>Boca:</strong> Caramelo e Chocolate amargo</p>
            <p>Doçura alta e corpo persistente.</p>
          </div>
        </div>
        
        <div class="euquero-gallery">
          <img src="/fotos/f1.jpg" alt="Foto 1" class="gallery-image">
          <img src="/fotos/f2.jpg" alt="Foto 2" class="gallery-image">
          <img src="/fotos/f3.jpg" alt="Foto 3" class="gallery-image">
          <img src="/fotos/f4.jpg" alt="Foto 4" class="gallery-image">
        </div>
        
        <div class="payment-section">
          <h2 class="payment-title">FORMA DE PAGAMENTO</h2>
          <p class="payment-description">
            Enquanto organizamos nossa lojinha online,<br />
            estamos recebendo pagamentos apenas via PIX.
          </p>
          <div class="pix-qr">
            <p class="pix-key"><strong>Chave PIX:</strong></p>
            <p class="pix-key-value" id="pixKeyValue"><strong>074eb2d5-2350-4323-9c3e-3c57cc9eb1bd</strong></p>
            <div class="pix-copy-container">
              <button type="button" class="copy-btn" id="copyPixBtn" onclick="copyPixKey()" title="Copiar chave PIX">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
              <span class="copy-text">copiar chave pix</span>
            </div>
          </div>
          <p class="payment-instruction">
            Realize o pagamento via PIX e anexe o comprovante no formulário abaixo.
          </p>
          <div class="payment-values">
            <p class="payment-value"><strong>R$ 129,00</strong> para retirar</p>
            <p class="payment-value"><strong>R$ 159,00</strong> para entrega em SP</p>
          </div>
        </div>
        
        <form class="euquero-form" id="reservationForm" action="https://formspree.io/f/mzzjbgzo" method="POST" enctype="multipart/form-data">
          <h2 class="form-title">FAZER MEU PEDIDO</h2>
          
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
          </div>
          
          <div class="form-group">
            <label for="whatsapp">Whatsapp:</label>
            <input type="tel" id="whatsapp" name="whatsapp" required>
          </div>
          
          <div class="form-group">
            <label for="endereco">Endereço:</label>
            <textarea id="endereco" name="endereco" rows="3" required></textarea>
          </div>
          
          <div class="form-group">
            <label for="preferencia">Preferência:</label>
            <select id="preferencia" name="preferencia" required>
              <option value="">Selecione...</option>
              <option value="moido">Moído</option>
              <option value="graos">Grãos</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="comprovante">Anexar Comprovante PIX:</label>
            <input type="file" id="comprovante" name="comprovante" accept="image/*,.pdf" required />
            <span class="file-hint">Aceita imagens (JPG, PNG) ou PDF</span>
          </div>
          
          <button type="submit" class="form-submit">ENVIAR</button>
        </form>
      </div>
      
      <footer class="footer">
        <div class="footer-content">
          <img src="/ta_final_icone_black.png" alt="TERRA ALTA" class="footer-icon">
          <p class="footer-text">ALL RIGHTS RESERVED 2025</p>
        </div>
      </footer>
    </div>
  `;
}

// Copy PIX key function
window.copyPixKey = function() {
  const pixKey = '074eb2d5-2350-4323-9c3e-3c57cc9eb1bd';
  navigator.clipboard.writeText(pixKey).then(() => {
    const btn = document.getElementById('copyPixBtn');
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      btn.style.color = '#0f0';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.color = '';
      }, 2000);
    }
  }).catch(err => {
    console.error('Erro ao copiar:', err);
  });
}

// Intercept link clicks for SPA routing
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.hostname === window.location.hostname && !link.hasAttribute('target')) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState({}, '', href);
      router();
    }
  }
});

// Initialize router
router();

// Listen for browser back/forward navigation
window.addEventListener('popstate', router);
