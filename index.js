function criaRelogio(segundos) {
    const timer = new Date(segundos * 1000);
    return timer.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT"
    })
  }
  
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0
  let timer;
  
  
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaRelogio(segundos)
    }, 1000);
  
  }
  
  iniciar.addEventListener("click", function(event) {
    relogio.classList.remove("pausado")
    clearInterval(timer)
  
    iniciaRelogio()
  });
  pausar.addEventListener("click", function (event) {
    clearInterval(timer)
    relogio.classList.add("pausado")
  })
  zerar.addEventListener("click", function (event) {
      clearInterval(timer)
      relogio.classList.add("pausado")
      relogio.innerHTML = "00:00:00"
      segundos = 0
  })