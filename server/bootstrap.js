require('ignore-styles');

require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
    plugins: ['@babel/plugin-proposal-class-properties'],
    // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`
    // and .js so you'll have to add them back if you want them to be used again.
    extensions: [".es6", ".es", ".tsx", ".js", "jsx",".mjs"],

    // Setting this to false will disable the cache.
    cache: true,

});

require('./index');