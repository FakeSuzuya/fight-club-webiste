document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const rootElement = document.documentElement;

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal) > 0.1) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', handleScroll);
    
    // Apply fade-in effect to images on load
    const images = document.querySelectorAll('.hero-image img, .training-image img, .trainer-image img, .contract-image img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 1s ease-in-out';
        img.onload = () => {
            img.style.opacity = '1';
        };
    });

    // Initialize Twemoji
    twemoji.parse(document.body);
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    
    // Récupérer les valeurs du formulaire
    var email = document.getElementById("email").value;
    var discord = document.getElementById("discord").value;
    var nomRp = document.getElementById("nom-rp").value;
    var explication = document.getElementById("explication").value;

    // Construire l'objet JSON des données du formulaire
    var formData = {
        email: email,
        discord: discord,
        nomRp: nomRp,
        explication: explication
    };

    // Envoyer les données à votre webhook
    fetch('https://discord.com/api/webhooks/1241434515151261796/j_p8zqWUwZAdrtfKvGfC-K18flJDClH9qIUq1d3NnfH-6Mkf32QNqFPQrawS4BD6yQzE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Vous pouvez ajouter des headers d'authentification si nécessaire
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi des données');
        }
        // Gérer la réponse du serveur si nécessaire
        console.log('Données envoyées avec succès');
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});