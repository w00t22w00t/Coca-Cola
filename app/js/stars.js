(function() {
    function createStar(center, radius, animation) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${center.top - radius / 2 + 15}px`;
        star.style.left = `${center.left - radius / 2 + 15}px`;
        star.style.animationDelay = `${animation.delay}s`;
        star.style.animationDuration = `${animation.duration}s`;
        star.classList.add('shine');
        return star;
    }
    var container = document.getElementById("star-container");
    for (var i = 0; i < 20; i++) {
        container.appendChild(createStar({
            top: getRandom(0, container.offsetHeight),
            left: getRandom(0, container.offsetWidth)
        }, getRandom(2, 7), {
            duration: getRandom(2, 5, false),
            delay: getRandom(0, 4, false)
        }));
    }
    
    function getRandom(min, max, notFloor) {
        return (!notFloor && Math.floor || (a => a))(Math.random() * (max - min + 1) + min);
    }
})();