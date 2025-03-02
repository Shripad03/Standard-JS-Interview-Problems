const MAX_CONCURRENT_BARS = 3;  // Limit of parallel progress bars
let activeBars = 0;             // Track active progress bars
let progressQueue = [];         // Queue to manage progress bars

// Function to create a progress bar element
function createProgressBar() {
    const barContainer = document.createElement('div');
    barContainer.className = 'progress-bar';

    const fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    barContainer.appendChild(fill);

    document.getElementById('progress-container').appendChild(barContainer);
    return fill;
}

// Function to update progress
function updateProgressBar(bar) {
    return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;  // Random speed for demo
            if (progress >= 100) {
                bar.style.width = '100%';
                clearInterval(interval);
                resolve();  // Resolve promise when complete
            } else {
                bar.style.width = `${progress}%`;
            }
        }, 500);
    });
}

// Function to manage progress bar execution with throttling
async function runProgressBar() {
    if (activeBars < MAX_CONCURRENT_BARS && progressQueue.length > 0) {
        activeBars++;
        const bar = progressQueue.shift();
        await updateProgressBar(bar);
        activeBars--;
        runProgressBar();  // Check for next in queue
    }
}

// Function to start multiple progress bars
function startProgressBars() {
    for (let i = 0; i < 10; i++) {  // Create 10 progress bars
        const bar = createProgressBar();
        progressQueue.push(bar);
        runProgressBar();
    }
}

function setLimit(newLimit) {
    MAX_CONCURRENT_BARS = newLimit;
    runProgressBar();
}

setLimit(5);