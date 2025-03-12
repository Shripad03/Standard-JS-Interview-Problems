console.log('event-bubbling-capturing');
document.getElementById('child').addEventListener('click', () => {
    console.log('child clicked');
}, true);

document.getElementById('btn').addEventListener('click', () => {
    console.log('btn clicked');
}, true);

document.getElementById('parent').addEventListener('click', () => {
    console.log('parent clicked');
}, true);