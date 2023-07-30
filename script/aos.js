const fader = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .frame--svg, .frame--text')

const aosoptions = {
    threshold: 0.4,
    
}

const aos = new IntersectionObserver(function(entries, aos){

    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            aos.unobserve(entry.target);
        }
    });

}, aosoptions);


fader.forEach(fader =>{
    aos.observe(fader);
})