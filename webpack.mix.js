const mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.setPublicPath('build/');
mix.ts("src/js/app.ts", "./build/js");
mix.copy("src/index.html", "./build/index.html");
mix.copy("src/favicon.png", "./build/favicon.png");
mix.sass("src/sass/style.scss", "./build/css").purgeCss({
    content: [path.join(__dirname, 'build/*.html')],
});