document.querySelector(".info").addEventListener("mouseenter", () => {
    let overValue = 1;
    let overTimes = setInterval(() => {
        overValue -= 0.1;
        document.querySelector(".video_text").style.opacity = overValue;
        if (overValue <= 0) {
            clearTimeout(overTimes);
        }
    }, 50);
});

document.querySelector(".info").addEventListener("mouseleave", () => {
    let outValue = 0;
    let outTimes = setInterval(() => {
        outValue += 0.1;
        document.querySelector(".video_text").style.opacity = outValue;
        if (outValue >= 1) {
            clearTimeout(outTimes);
        }
    }, 50);
});