const contactData = {
  phone: "(11) 99999-8888",
  email: "contato@lojinhamaneiraofc.com.br",
  address: "Rua dos Gamers, 1337 - São Paulo/SP",
  socials: [
    { name: "Instagram", url: "https://instagram.com/lojinhamaneiraofc" },
    { name: "Twitter/X", url: "https://x.com/lojinhamaneiraofc" },
    { name: "YouTube",   url: "https://youtube.com/@lojinhamaneiraofc" },
    { name: "Discord",   url: "https://discord.gg/lojinhamaneiraofc" }
  ],
  year: new Date().getFullYear(),
  brand: "LojinhaManeira"
};


function renderFooter() {
  const el = document.getElementById("footer");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-grid">
      <div>
        <h4>${contactData.brand}</h4>
        <p>Sua loja gamer de confiança desde 2015. Equipamentos, jogos e acessórios para elevar sua jogatina.</p>
      </div>
      <div>
        <h4>Contato</h4>
        <p>📞 ${contactData.phone}</p>
        <p>✉️ <a href="mailto:${contactData.email}">${contactData.email}</a></p>
        <p>📍 ${contactData.address}</p>
      </div>
      <div>
        <h4>Redes Sociais</h4>
        ${contactData.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("")}
      </div>
    </div>
    <div class="copyright">
      © ${contactData.year} ${contactData.brand}. Todos os direitos reservados.
    </div>
  `;
}


function markActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
}


function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const msg = document.getElementById("form-msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const descricao = form.descricao.value.trim();
    if (!nome || !email || !descricao) {
      msg.className = "form-msg error";
      msg.textContent = "Por favor, preencha todos os campos.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.className = "form-msg error";
      msg.textContent = "Digite um e-mail válido.";
      return;
    }
    msg.className = "form-msg success";
    msg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada. Responderemos em ${contactData.email}.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  markActiveNav();
  setupContactForm();
});
