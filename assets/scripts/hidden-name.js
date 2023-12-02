const names = [
    ["Google", "google.com"]
    ["Play Prodigy", "math.prodigygame.com"]
    ["Cool Math Games - Free Online Games for Learning and Fun", "coolmathgames.com"]
]
const item = names[Math.floor(Math.random() * names.length)]

document.title = item[0];
var link = document.createElement('link');
link.rel = 'icon';
link.href = `https://www.google.com/s2/favicons?domain=${item[1]}&sz=32`
document.head.appendChild(link);
