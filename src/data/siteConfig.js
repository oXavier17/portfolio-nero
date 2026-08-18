export const SITE_CONFIG = {
  whatsappNumber: '556492216099',
  
  // Função geradora de links do WhatsApp
  getWhatsappUrl: (customMessage = '') => {
    const baseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
    
    // Se não houver mensagem, retorna o link limpo que só abre a conversa
    if (!customMessage || customMessage.trim() === '') {
      return baseUrl;
    }
    
    // Se houver mensagem, insere o texto encodado
    return `${baseUrl}?text=${encodeURIComponent(customMessage)}`;
  }
};