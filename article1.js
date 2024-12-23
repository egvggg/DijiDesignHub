window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
};