const mix = require('laravel-mix');
mix.setPublicPath('build/');
mix.sass("src/sass/style.scss", "./build/css");
mix.js("src/js/app.js", "./build/js");
mix.copy("src/index.html", "./build/index.html");