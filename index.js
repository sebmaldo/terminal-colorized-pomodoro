const chalk = require('chalk');
const R = require('ramda');
var delay = require('timeout-as-promise');
const info = console.info;
const clear = console.clear;
const max = 50;
const spaces = R.repeat(' ', max).join('');
const enColor = (color, toPrint) => {
    const out = ((toPrint || '') + spaces).substring(0, max);
    info(chalk.blue[`bg${color}`].bold(out));
}
const spacer = (color) => {
    for (let i = 0; i < 12; i++) {
        enColor(color);
    }
}
const printConsole = (color, message) => {
    clear();
    spacer(color);
    enColor(color, message);
    spacer(color);
};

const noMolestar = () => printConsole('Red', 'Concentrado, por favor no molestar.');
const enPausa = () => printConsole('Green', 'En descanso, se puede interrumpir.');

(async () => {
    let pomodoros = 0;
    while (pomodoros < 12) {
        noMolestar();
        await delay(25000);
        enPausa();
        await delay(pomodoros % 4 === 0 && pomodoros !== 0 ? 15000 : 5000);
        pomodoros++;
    }
    printConsole('Black', 'Hora de irse a la casa')
})();