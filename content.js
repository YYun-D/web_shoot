var webElement = document.createElement('img');

webElement.src = 'https://drive.google.com/uc?id=1gaez46ydJtsoPWvO_7dXMkQaaP214LWA';
webElement.style.width = '200px';
webElement.style.height = '200px';
webElement.style.position = 'fixed';
webElement.style.zIndex = '10001';
webElement.style.borderRadius = '10px';
webElement.style.userSelect = 'none'; // 드래그 막기
webElement.style.textAlign = 'center';
webElement.style.display = 'none';
webElement.id = 'web';

document.body.appendChild(webElement);

isDragging = false;
isCrashing = false;

webElement.addEventListener('click', (event) => {
  if (isCrashing) {
    const audio = new Audio('https://docs.google.com/uc?export=open&id=1MCTrUrEisVQY_MS5z7phYJniQyRBZcxs');
    audio.play();
    const CrackImage = document.createElement('img');
    CrackImage.src = 'https://drive.google.com/uc?id=1aQUQc6igAf2thu_SoxQDusQs5bK5jFbj';
    CrackImage.style.position = 'fixed';
    CrackImage.style.zIndex = '10000';
    CrackImage.style.width = '150px';
    CrackImage.style.height = '150px';
    var newLeft = event.clientX - 200;
    var newTop = event.clientY - 180;
    CrackImage.style.left = `${newLeft}px`;
    CrackImage.style.top = `${newTop}px`;
    document.body.appendChild(CrackImage);
    webElement.style.transform = 'rotate(-30deg)';
    setTimeout(() => {
      webElement.style.transform = 'rotate(0deg)';
    }, 500);
  }
  isCrashing = true;
});


document.addEventListener('mousemove', function(event) {
    webElement.style.left = event.clientX - 160 + 'px';
    webElement.style.top = event.clientY - 160 + 'px';
});
