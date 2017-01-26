const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
/* cria o css e o js na pasta public o css e o js*/
/*elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});*/

elixir(mix => {
      //copia para a pasta public
       mix.copy('resources/assets/img','public/img')
          .copy('node_modules/font-awesome/fonts','public/fonts')
          /* sudo npm install --global gulp-cli
             sudo npm install (criou pasta node_modules)
             npm install bootstrap jquery@3.1.0 font-awesome --save (guarda dependencias em package.json)*/

        //junta todos os css num
        mix.styles([
          '../../../node_modules/bootstrap/dist/css/bootstrap.css',
          '../../../node_modules/font-awesome/css/font-awesome.css',
          'agency.css'
          ], 'public/css/all.css');

       //junta todos os js num
       mix.scripts([
        '../../../node_modules/jquery/dist/jquery.js',
        '../../../node_modules/bootstrap/dist/js/bootstrap.js',
        'jqBootstrapValidation.js',
        'contact_me.js',
        'agency.js',
        'jquery.easing.js'
        ],'public/js/all.js');

//fazer gulp --production para minificar o tamanho do css e do js
//css (antes:195kb depois:157kb)
//js (antes:373kb depois:141kb)
});
