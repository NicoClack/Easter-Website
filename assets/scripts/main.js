const randomSign = _ => {
    if (Math.random() > 0.5) {
        return 1;
    }
    return -1;
};

let elements = [];
const initElements = _ => {
    let elementCount = (Math.random() * 7) + 5;
    let i = 0;
    while (i < elementCount) {
        let element = Math.round((i / elementCount) * 5);
        let isVideo = false;
        let isPixelArt = false;
        let width, height;
        switch (element) {
            case 0:
                width = 150;
                height = 88;
                element = document.createElement("video");
                element.src = "assets/videos/cheese.mp4";
                isVideo = true;
                break;
            case 1:
                width = 58;
                height = 75;
                element = document.createElement("img");
                element.src = "assets/imgs/egg.png";
                break;
            case 2:
                width = 50;
                height = 50;
                element = document.createElement("img");
                if (Math.random() > 0.2) {
                    element.src = "assets/imgs/bagel.png";
                }
                else {
                    element.src = "assets/imgs/sadBagel.png";
                }
                isPixelArt = true;
                break;
            case 3:
                width = 61;
                height = 75;
                element = document.createElement("img");
                element.src = "assets/imgs/orange.png";
                isPixelArt = true;
                break;
            case 4:
                width = 91;
                height = 90;
                element = document.createElement("img");
                element.src = "assets/imgs/banana.gif";
                break;
            case 5:
                width = 76;
                height = 93;
                element = document.createElement("img");
                element.src = "assets/imgs/egg.gif";
                break;
        }
        let x = Math.round(Math.random() * (document.body.clientWidth - width - 1));
        let y = Math.round(Math.random() * (document.body.clientHeight - height - 1));
        let scale = Math.random() + 0.75;
        width *= scale;
        height *= scale;

        if (isVideo) {
            element.loop = true;
            element.autoplay = true;
            element.muted = true;
            element.currentTime = Math.random();
        }

        document.body.appendChild(element);
        element.style.position = "absolute";
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.width = width + "px";
        element.style.height = height + "px";
        if (isPixelArt) {
            element.className = "pixelArt";
        }


        elements.push({
            x: x,
            y: y,
            speedX: ((Math.random() * 10) + 3) * randomSign(),
            speedY: ((Math.random() * 10) + 3) * randomSign(),
            width: width,
            height: height,
            element: element,
            isVideo: isVideo
        });
        i++;
    }
};
initElements();

const playVideos = _ => {
    for (let i in elements) {
        if (elements[i].isVideo) {
            elements[i].element.muted = false;
        }
    }
    removeEventListener("click", playVideos);
};
addEventListener("click", playVideos);

const moveVideo = _ => {
    for (let i in elements) {
        if (Math.random() > 0.9) {
            let element = elements[i];
            let x = element.x;
            let y = element.y;
            let width = element.width;
            let height = element.height;

            x += element.speedX;
            y += element.speedY;
            if (x + width >= document.body.clientWidth) {
                element.speedX *= -1;
                x = document.body.clientWidth - width - 1;
            }
            if (x < 0) {
                element.speedX *= -1;
                x = 0;
            }
            if (y + height >= document.body.clientHeight) {
                element.speedY *= -1;
                y = document.body.clientHeight - height - 1;
            }

            if (y < 0) {
                element.speedY *= -1;
                y = 0;
            }

            element.element.style.left = x + "px";
            element.element.style.top = y + "px";

            element.x = x;
            element.y = y;
        }
    }

    requestAnimationFrame(moveVideo);
};
moveVideo();

const submitNewsletterSignup = _ => {
    let email = document.getElementById("emailInput").value;

    document.write("Processing request...");
    setTimeout(_ => {
        alert(
            "Great! To finish the signup, please FAX me on this number: 57483920124857 and use the following code: "
            + email + "_" + (Math.round(Math.random() * 8999) + 1000)
        );
    }, Math.round(Math.random() * 1000) + 500);
};
