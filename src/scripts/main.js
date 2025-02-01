AOS.init();

const dataDoEvento = new Date('Dec 22 2025 00:00:00').getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = dataDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60)) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);
    console.log('Faltam ' + diasAteEvento + ' dias, ' + horasAteEvento + ' horas, ' + minutosAteEvento + ' minutos e ' + segundosAteEvento + ' segundos para o evento.');

    document.getElementById('contador').innerHTML = `${diasAteEvento} d, ${horasAteEvento} h, ${minutosAteEvento} m, ${segundosAteEvento} s`;
}, 1000);
