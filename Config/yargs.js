const argv = require('yargs')
    .options({
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Desc de la ciudad'
        }
    })
    .argv

module.exports = {
    argv
}