module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "src/assets/scss/global.scss";',
            },
        },
    },
    publicPath: '/sudoku/',
    outputDir: './docs'
}
