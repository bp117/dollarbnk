const {join, resolve} = require('path')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const paths = {
    helpers: join(__dirname, 'helper'),
    components: join(__dirname, 'components'),
    static: join(__dirname, 'static'),
}

const alias = {
    reducers: join(paths.helpers, 'reducers'),
    '*': paths.helpers,
    actions: join(paths.helpers, "actions"),
    api: join(paths.helpers, "api"),
    components: join(paths.components, "components"),
    containers: join(paths.components, "containers"),
    hoc: join(paths.helpers, "hoc"),
    store: join(paths.helpers, "store"),
    tools: join(paths.helpers, "tools"),
    vendor: join(paths.helpers, "vendor"),
    scss: join(paths.helpers, "scss"),
    routes: join(__dirname, "routes")
}

module.exports =
    withSass(
    withCSS(
    withImages({
        webpack: config => {
            config.resolve.alias = Object.assign(
                {},
                config.resolve.alias,
                alias,
            )

            config.module.rules.push({
                test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });

            return config
        },
    })))
