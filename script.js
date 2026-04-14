document.addEventListener('keydown', function (e) {
    var ids = ['t-pepsi', 't-fanta', 't-fizzup', 't-colanext'];
    var cur = ids.findIndex(function (id) { 
        return document.getElementById(id).checked; 
    });
    
    if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && cur > -1) {
        e.preventDefault();
        document.getElementById(ids[(cur + 1) % 4]).checked = true;
    }
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && cur > -1) {
        e.preventDefault();
        document.getElementById(ids[(cur + 3) % 4]).checked = true;
    }
});