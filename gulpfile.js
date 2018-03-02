const elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src'
elixir.config.publicPath = 'dist';
elixir.config.viewPath = './';
elixir(function (mix) {
    mix.webpack('app.js');
    mix.sass('style.scss');
    mix.copy('src/index.html', 'dist/index.html');
    mix.copy('src/background.jpg', 'dist/background.jpg');
});