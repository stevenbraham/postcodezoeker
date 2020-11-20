const mix = require('laravel-mix');
mix.setPublicPath('build/');
mix.sass("src/sass/style.scss", "./build/css");
mix.ts("src/js/app.ts", "./build/js");
mix.copy("src/index.html", "./build/index.html");