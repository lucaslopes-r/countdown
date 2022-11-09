import Countdown from "./countdown.js";

const tempoParaNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");
const tempoParaAnoNovo = new Countdown("31 December 2022 23:59:59 GMT-0300");

setInterval(() => {
  console.log(tempoParaNatal.total);
}, 1000);

setInterval(() => {
  console.log(tempoParaAnoNovo.total);
}, 1000);
