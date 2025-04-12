function toggleEventColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    spanElements.forEach(item => {
        item.style.backgroundColor = 'transparent'
    });
}