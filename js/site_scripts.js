// Partners Section Script
// Dynamically generate partners list
document.addEventListener("DOMContentLoaded", function() {
    var partnersData = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];
    // Find the section containing the partners comment
    var sections = document.querySelectorAll('section');
    var partnersSection = null;
    sections.forEach(function(sec) {
        if (sec.innerHTML.includes('id="partners"')) {
            partnersSection = sec;
        }
    });
    // If not found, fallback to the first section without id
    if (!partnersSection) {
        partnersSection = Array.from(sections).find(s => !s.id || s.id === '');
    }
    if (partnersSection) {
        var ul = document.createElement('ul');
        ul.id = 'partners';
        partnersData.forEach(function(partner) {
            var li = document.createElement('li');
            li.className = 'partner';
            var img = document.createElement('img');
            img.src = partner.src;
            img.alt = partner.alt;
            li.appendChild(img);
            ul.appendChild(li);
        });
        partnersSection.appendChild(ul);
    }
});
