// Animations et interactions du site
document.addEventListener('DOMContentLoaded', function() {
  
  // Récupérer le bouton
  const btn = document.querySelector('.btn');
  
  // Ajouter un effet sonore au survol (optionnel)
  btn.addEventListener('mouseenter', function() {
    console.log('Bouton survolé!');
    // Vous pouvez ajouter des effets supplémentaires ici
  });
  
  // Ajouter un effet au clic
  btn.addEventListener('click', function() {
    console.log('Bouton cliqué - Redirection vers le formulaire');
  });
  
  // Animation d'apparition des éléments
  const content = document.querySelector('.content');
  content.style.opacity = '0';
  content.style.animation = 'fadeIn 1s ease-in forwards';
  
});

// Animation d'apparition
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
