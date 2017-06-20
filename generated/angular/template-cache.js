angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/championnat.html",
    "<h2>France</h2>\n" +
    "<h3>Ligue 1</h3><br>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\" ng-repeat=\"titre in titres\"><br>\n" +
    "    <div class=\"col-md-6 name\">\n" +
    "    <p>{{ titre.equipe }}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "    <p>{{ titre.dates }}</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <form>\n" +
    "  <div class=\"\">\n" +
    "    <label>Nom de l'équipe</label>\n" +
    "    <input type=\"text\" ng-model=\"equipe\">\n" +
    "  </div>\n" +
    "  <div class=\"\">\n" +
    "    <label>Dates des victoires</label>\n" +
    "    <input type=\"text\" ng-model=\"dates\">\n" +
    "  </div>\n" +
    "    <button type=\"button\" name=\"button\" ng-click=\"addtitreL1()\">Ajouter des titres</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<!-- <h3>Ligue 2 En Cours</h3><br>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\" ng-repeat=\"ligue2 in ligues2\"><br>\n" +
    "    <div class=\"col-md-6 name\">\n" +
    "    <p>{{ ligue2.equipe }}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "    <p>{{ ligue2.dates }}</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <form>\n" +
    "  <div >\n" +
    "    <label>Nom de l'équipe</label>\n" +
    "    <input type=\"text\" ng-model=\"ligue2Equipe\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <label>Dates des victoires</label>\n" +
    "    <input type=\"text\" ng-model=\"ligue2Dates\">\n" +
    "  </div>\n" +
    "    <button type=\"button\" name=\"button\" ng-click=\"addtitreL2()\">Ajouter des titres</button>\n" +
    "  </form>\n" +
    "</div>  <br>\n" +
    "<h2>Angleterre</h2><br>\n" +
    "<h3>Premier League</h3><br>\n" +
    "<h2>Espagne</h2>\n" +
    "<h3>Liga</h3><br>\n" +
    "<h2>Allemagne</h2>\n" +
    "<h3>Bundesliga</h3> -->\n"
  );

  $templateCache.put("anon/home.html",
    "<h1>Site De Foot</h1>\n" +
    "\n" +
    "<button type=\"button\" name=\"button\">\n" +
    "    <a ui-sref=\"anon.champ\">Liste des championnats</a>\n" +
    "</button>\n" +
    "\n" +
    "<div ui-sref-active=\"active\">\n" +
    "<a ui-sref=\"champ\">go to champs</a>\n" +
    "</div>\n" +
    "\n" +
    "<!-- <div class=\"container-fluid imgCarousel\">\n" +
    "  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "    <ol class=\"carousel-indicators\">\n" +
    "      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "    </ol>\n" +
    "\n" +
    "    <div class=\"carousel-inner\">\n" +
    "      <div class=\"item active\">\n" +
    "        <img src=\"http://img.clubic.com/07019580-photo-12-juin-coup-d-envoi-de-la-coupe-du-monde-de-football-a-rio.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"item\">\n" +
    "        <img src=\"http://referentiel.nouvelobs.com/file/15368530-la-federation-francaise-de-foot-fait-enfin-sa-revolution-numerique.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"item\">\n" +
    "        <img src=\"http://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2016/06/16/pourquoi-le-foot-se-joue-onze.jpg?itok=CYpQCnT-\" alt=\"Third slide\" alt=\"New york\" style=\"width:100%;\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n" +
    "      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "      <span class=\"sr-only\">Previous</span>\n" +
    "    </a>\n" +
    "    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n" +
    "      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "      <span class=\"sr-only\">Next</span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div> -->\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
