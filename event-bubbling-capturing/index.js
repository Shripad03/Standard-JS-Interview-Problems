console.log('event-bubbling-capturing');
document.getElementById('child').addEventListener('click', (e) => {
    console.log('child clicked');
}, true);

document.getElementById('btn').addEventListener('click', (e) => {
    console.log('btn clicked');
    e.stopPropagation();
}, true);


document.getElementById('btn').addEventListener('hover', () => {
    console.log('duplicate btn clicked');
}, true);

document.getElementById('parent').addEventListener('click', () => {
    console.log('parent clicked');
}, true);