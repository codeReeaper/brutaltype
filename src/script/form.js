
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Pega os valores dos campos
const nome = document.getElementById('name').value;
const email = document.getElementById('email').value;
const telefone = document.getElementById('phone').value;
const servico = document.getElementById('service').value || "Não informado";
const mensagem = document.getElementById('message').value;

  // Monta o texto da mensagem
const texto = `Olá! Me chamo *${nome}*.

📧 Email: ${email}
📱 Telefone: ${telefone || "Não informado"}
🎯 Serviço de interesse: ${servico}
📝 Mensagem: ${mensagem}`;

  // Número do seu WhatsApp com DDI + DDD (ex: 55 + 21 + número)
const numero = "5521987300943"; // Ex: 5521999999999

  // Cria o link com a mensagem codificada
const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp em nova aba
window.open(link, '_blank');
});

