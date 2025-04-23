// Cria botão flutuante do WhatsApp
const botao = document.createElement('a');
botao.href = 'https://wa.me/5587999999999'; // Altere com seu número
botao.target = '_blank';
botao.innerText = '💬 WhatsApp';
botao.style.position = 'fixed';
botao.style.bottom = '20px';
botao.style.right = '20px';
botao.style.backgroundColor = '#25D366';
botao.style.color = 'white';
botao.style.padding = '10px 15px';
botao.style.borderRadius = '8px';
botao.style.fontWeight = 'bold';
botao.style.textDecoration = 'none';
botao.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
botao.style.zIndex = '1000';
document.body.appendChild(botao);
