    function toggleMenu() {
      document.getElementById("sideMenu").classList.toggle("open");
      document.getElementById("navMenu").classList.toggle("hidden-slide");
    }

    // Emoji Background
    const emojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😙","😋","😜","🤑","🤗","🤔","😎","🥳"];
    const layer = document.getElementById('emojiLayer');
    for(let i=0;i<60;i++){
      const e = document.createElement('div');
      e.className = 'emoji';
      e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
      e.style.left = Math.random()*100 + 'vw';
      e.style.top = Math.random()*100 + 'vh';
      e.style.animationDuration = (10 + Math.random()*20) + 's';
      e.style.fontSize = (20 + Math.random()*10) + 'px';
      layer.appendChild(e);
    }


    // Fix 2: Bubble Pop
    document.addEventListener('click', function(e) {
      const bubble = document.createElement('div');
      bubble.className = 'click-bubble';
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 400);
    });
