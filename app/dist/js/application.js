//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Widul Bundle for Business Use
// 
// Use as you need =).
//------------------------------------------------------
angular.manifiest('widul', [
    'widul.directives',
    'widul.filters',
    'widul.services',
    'widul.components'
]);;angular.module("ngLocale", [], ["$provide", function($provide)
{
    var PLURAL_CATEGORY = {
        ZERO: "zero",
        ONE: "one",
        TWO: "two",
        FEW: "few",
        MANY: "many",
        OTHER: "other"
    };
    $provide.value("$locale",
    {
        "DATETIME_FORMATS":
        {
            "AMPMS": [
                "a. m.",
                "p. m."
            ],
            "DAY": [
                "domingo",
                "lunes",
                "martes",
                "mi\u00e9rcoles",
                "jueves",
                "viernes",
                "s\u00e1bado"
            ],
            "ERANAMES": [
                "antes de Cristo",
                "despu\u00e9s de Cristo"
            ],
            "ERAS": [
                "a. C.",
                "d. C."
            ],
            "FIRSTDAYOFWEEK": 0,
            "MONTH": [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre"
            ],
            "SHORTDAY": [
                "dom.",
                "lun.",
                "mar.",
                "mi\u00e9.",
                "jue.",
                "vie.",
                "s\u00e1b."
            ],
            "SHORTMONTH": [
                "ene.",
                "feb.",
                "mar.",
                "abr.",
                "may.",
                "jun.",
                "jul.",
                "ago.",
                "sept.",
                "oct.",
                "nov.",
                "dic."
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE, d 'de' MMMM 'de' y",
            "longDate": "d 'de' MMMM 'de' y",
            "medium": "dd-MM-y h:mm:ss a",
            "mediumDate": "dd-MM-y",
            "mediumTime": "h:mm:ss a",
            "short": "dd-MM-yy h:mm a",
            "shortDate": "dd-MM-yy",
            "shortTime": "h:mm a"
        },
        "NUMBER_FORMATS":
        {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": ".",
            "PATTERNS": [
            {
                "gSize": 3,
                "lgSize": 3,
                "maxFrac": 3,
                "minFrac": 0,
                "minInt": 1,
                "negPre": "-",
                "negSuf": "",
                "posPre": "",
                "posSuf": ""
            },
            {
                "gSize": 3,
                "lgSize": 3,
                "maxFrac": 2,
                "minFrac": 2,
                "minInt": 1,
                "negPre": "\u00a4-",
                "negSuf": "",
                "posPre": "\u00a4",
                "posSuf": ""
            }]
        },
        "id": "es-cl",
        "pluralCat": function(n, opt_precision)
        {
            if (n === 1)
            {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        }
    });
}]);
;// moment.js locale configuration
// locale : spanish (es)
// author : Julio Napura : https://github.com/julionc

(function(factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define(['moment'], factory); // AMD
    }
    else if (typeof exports === 'object')
    {
        module.exports = factory(require('../moment')); // Node
    }
    else
    {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function(moment)
{
    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    return moment.defineLocale('es',
    {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function(m, format)
        {
            if (/-MMM-/.test(format))
            {
                return monthsShort[m.month()];
            }
            else
            {
                return monthsShortDot[m.month()];
            }
        },
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_SÃ¡'.split('_'),
        longDateFormat:
        {
            LT: 'H:mm',
            LTS: 'LT:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY LT',
            LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
        },
        calendar:
        {
            sameDay: function()
            {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay: function()
            {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: function()
            {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay: function()
            {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: function()
            {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse: function()
            {
                return 'L [a las] HH:mm';
                //return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            }
        },
        relativeTime:
        {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week:
        {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
;//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Application Bundle for Business Use
// 
// Use as you need =).
//------------------------------------------------------
angular.manifiest('app', [
	'app.layouts',
	'app.controllers',
    'app.directives',
    'app.filters',
    'app.services',
    'app.services.synchronizers',
    'app.components'
]);;angular.module('app.components')

.directive('flexLoading', function()
{
    return {
        restrict: 'E',
        scope:
        {
            title: '@', // Title While loading
            legend: '@', // Legend While loading
            spinner: '@' // Ionic Spiner when loading
        },
        templateUrl: 'bundles/app/components/flex-loading/flex-loading.tpl.html',
        controller: function($scope, $element)
        {
            $scope.isIonic = typeof ionic !== "undefined"; //CHECK IF MOBILE

            $scope.data = {
                spinner: ($scope.spinner || "lines")
            };
        },
        link: function(scope, element, attributes)
        {
            //TODO: Inject Dinamically via Provider
            var titles = [
                "Widuleando Información"
            ];

            var images = [
                "pesas-cuadrado.gif"
            ];

            var legends = [
                "Las mejores y más bellas cosas del mundo no pueden ser tocadas o vistas-deben ser sentidas con el corazón",
                "El éxito es ir de fracaso en fracaso sin perder el entusiasmo",
                "Todos nuestros sueños se pueden hacer realidad si tenemos el coraje de perseguirlos",
                "Si tienes todo bajo control, no te mueves lo suficientemente rápido",
                "La acción es la llave fundamental de todo éxito",
                "Lo que vale la pena hacerse, mejor hacerlo bien",
                "La oportunidad para el éxito reside en la persona, no en el trabajo",
                "El mejor argumento para decir algo, es la acción",
                "Espera..., solo un poco mas",
                "Ponte comodo mientras esperas...",
                "Nos convertimos en lo que pensamos",
                "No soy producto de mis circunstancias. Soy producto de mis decisiones",
                "Comienza donde estas, usa lo que tienes, haz lo que puedes",
                "Hecho es mejor que perfecto",
                "Si haces lo que siempre has hecho, llegarás donde siempre has llegado",
                "No esperes un cambio si haces siempre lo mismo",
                "Cuando tienes un sueño, tienes que agarrarlo y nunca dejarlo ir"
            ];

            var titleOrdinal = (Math.floor(Math.random() * titles.length) + 0);
            var legendOrdinal = (Math.floor(Math.random() * legends.length) + 0);
            var imageOrdinal = (Math.floor(Math.random() * images.length) + 0);



            scope.data = {
                title: (scope.title || titles[titleOrdinal]),
                legend: (scope.legend || legends[legendOrdinal]),
                image: (scope.image || images[imageOrdinal])
            };
        }
    };
});
;angular.module('app.components')
    .directive('galeInfiniteScroll', function($window)
    {
        return {
            scope:
            {
                onInfinite: '&',
                canLoadMore: '&',
                distance: '@'
            },
            templateUrl: 'bundles/app/components/gale-infinite-scroll/gale-infinite-scroll.tpl.html',
            transclude: true,
            controller: function($scope, $element, $attrs)
            {
                $scope.isLoading = ($scope.isLoading || false);
                var self = this;

                // determine pixel refresh distance based on % or value
                self.calculateDistance = function(distance)
                {
                    var scrollElm = $element[0]
                    var maxHeight = scrollElm.scrollTop + scrollElm.offsetHeight;
                    var distance = (distance || '2.5%').trim();
                    var isPercent = distance.indexOf('%') !== -1;

                    return isPercent ?
                        ((parseFloat(distance) * maxHeight) / 100) :
                        parseFloat(distance);
                };

                $scope.$on('$destroy', function()
                {
                    if (self.scrollCtrl && self.scrollCtrl.$element) self.scrollCtrl.$element.off('scroll', self.checkBounds);
                    if (self.scrollEl && self.scrollEl.removeEventListener)
                    {
                        self.scrollEl.removeEventListener('scroll', self.checkBounds);
                    }
                });

                //Determine Offset to Check!
                //$scope.offset = calculateMaxValue($scope.distance);


            },
            link: function(scope, element, attrs, ctrl)
            {
                var domElm = element[0];
                var distanceToHook = null;

                //Recalculate distance , for the new "Height"
                function reCalculateDistance()
                {
                    distanceToHook = ctrl.calculateDistance();
                };

                element.bind('scroll', function()
                {
                    if (!distanceToHook)
                    {
                        reCalculateDistance();
                    }

                    if (scope.isLoading === false)
                    {
                        if ((domElm.scrollTop + domElm.offsetHeight >= domElm.scrollHeight - distanceToHook))
                        {
                            if (scope.$eval(scope.canLoadMore))
                            {
                                scope.isLoading = true;

                                var defer = scope.onInfinite();
                                if (defer && defer.then)
                                {
                                    //Promise Resolves =)!
                                    defer.then(function()
                                    {
                                        scope.isLoading = false;
                                        reCalculateDistance();
                                    });
                                }
                                else
                                {
                                    //Direct Execution
                                    scope.isLoading = false;
                                    reCalculateDistance();
                                }
                            }
                        }
                    }
                });
            }
        };
    });
;// SERVICE
angular.module('app.components')
    .provider('$loadingDialog', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(config)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'LoadingDialogController',
                        templateUrl: 'bundles/app/components/loading-dialog/loading-dialog.tpl.html',
                        targetEvent: config.targetEvent,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: false,
                        locals:
                        {
                            config: config
                        }
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            self.hide = function()
            {
                $mdDialog.hide();
            };

            return self;
        };
    });
; //MODAL CONTROLLER
 angular.module('app.components')
     .controller('LoadingDialogController', function(
         $scope,
         $log,
         config,
         $mdDialog
     )
     {


         //Default
         var setting = (config ||
         {});
         $scope.title = (setting.title || "Procesando Información");
         $scope.legend = (setting.legend || "Espera mientras se ejecuta la solicitud");

     });
;angular.module('app.components')

.directive('preloadImage', function()
{
    return {
        restrict: 'E',
        scope:
        {
            ngSrc: '=', // Image Src
            onStart: '=', // Call when the image has start to load
            onComplete: '=', // Call when the image has loaded 
            onError: '=', //Call when ocurrs and Error 
            loadingTitle: '@', // Title While loading
            loadingLegend: '@', // Legend While loading
            cssgramFilter: '@', // Filter to apply in the image (need CssGram Library)
            loadingSpinner: '@', // Ionic Spiner when loading
            hideLoader: '=' //Hide Loader (not show when loading)
        },
        templateUrl: 'bundles/app/components/preload-image/preload-image.tpl.html',
        controller: function(
            $scope,
            $element,
            $log
        )
        {
            $scope.loadingSpinner = $scope.loadingSpinner || "lines";
            $scope.hideLoader = $scope.hideLoader || false;

            $scope._load = function(url)
            {
                var image = new Image();
                image.onload = function()
                {
                    //------------------------------------------
                    if (typeof $scope.onComplete === "function")
                    {

                        $scope.onComplete(
                        {
                            width: this.width,
                            height: this.height
                        });
                    }
                    //------------------------------------------
                    $scope.loadComplete = true;

                    //------------------------------------------
                    //ONLY IN MOBILE
                    // http://www.eccesignum.org/blog/solving-display-refreshredrawrepaint-issues-in-webkit-browsers
                    // Silently append and remove a text node  
                    // This is the fix that worked for me in the Phonegap/Android application
                    // the setTimeout allows a 'tick' to happen in the browser refresh,
                    // giving the UI time to update
                    if (typeof ionic !== "undefined")
                    {
                        var n = document.createTextNode(' ');
                        $element.append(n);
                        $element[0].style.webkitTransform = 'scale(1)';
                    }
                    //------------------------------------------

                    //Call $apply beacuse the loading is Async and
                    //AngularJs doesn't know which the image is already loading
                    try
                    {
                        $scope.$digest();
                    }
                    catch (e)
                    {}
                };
                image.onerror = function()
                {
                    //------------------------------------------
                    $scope.loadError = true;
                    if (typeof $scope.onError === "function")
                    {
                        $scope.onError();
                    }
                    //------------------------------------------
                };
                image.src = $scope.ngSrc;

                //------------------------------------------
                if (typeof $scope.onStart === "function")
                {
                    $scope.onStart(image);
                }
                //------------------------------------------
            };

            //Not Throw Error , but .... do nothing??
            if ($scope.ngSrc)
            {
                $scope._load($scope.ngSrc);
            }
        },

        link: function($scope, $element, attr, ctrl)
        {
            $scope.$watch("ngSrc", function(value)
            {
                if (value)
                {
                    //Load When change (Post Compilation)
                    $scope._load(value);
                }
            });
        }
    };
});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')

.directive('externalAuthenticators', function()
{
    return {
        restrict: 'E',
        scope:
        {
            onAuthenticate: '=', //Callback when authorization is completed
            onError: '=', //Callback when authorization fails
            onChangeState: '=' //Callback to send feedback 
        },
        templateUrl: 'bundles/app/components/security/external-authenticators/external-authenticators.tpl.html',
        controller: function($scope, $element, $q, $Configuration, $Identity, Facebook, $Api, $window, $location)
        {

            $scope.signature = $Configuration.get("application");

            //Set State accord to user
            var changeState = function(new_state)
            {
                var state = {};
                switch (new_state)
                {
                    case "authorizing":
                        state = {
                            disabled: true
                        };
                        break;
                    case "normal":
                        state = {
                            disabled: false,
                        };
                        break;
                }
                state.name = new_state;
                $scope.state = state;

                if ($scope.onChangeState)
                {
                    $scope.onChangeState(state);
                }
            };

            var throwError = function(message)
            {
                //Resolve Callback
                changeState("normal");
                $scope.onError(message);
            };

            $scope.login = function(type)
            {
                changeState('authorizing');
                switch (type)
                {
                    case "facebook":
                        //Check if need a Mobile Autentication
                        if ($window.innerWidth <= 800)
                        {

                            var facebook_id = "1559148417736822";

                            var returning_url = $location.url();
                            var redirect_uri = "{0}://{1}{2}/?oauth-flow=facebook".format([
                                $location.protocol(),
                                $location.host(),
                                ($location.port() ? ":" + $location.port() : "")
                            ]);

                            //Mobile Authentication Flow
                            //Redirect URL
                            $window.document.location.href = [
                                "https://www.facebook.com/dialog/oauth",
                                "?response_type=token",
                                "&scope=email,user_friends",
                                "&client_id=",
                                facebook_id,
                                "&redirect_uri=",
                                redirect_uri,
                                "&state=",
                                returning_url
                            ].join("");

                        }
                        else
                        {
                            //Web Authentication Flow
                            //Web Popup
                            Facebook.login(function(response)
                            {
                                //All right??
                                if (response.status === "connected")
                                {
                                    var accessToken = response.authResponse.accessToken;

                                    Facebook.api("me/?fields=id,email,name,picture.type(large),location", function(data)
                                    {

                                        //GO TO API, CHECK THE TOKEN ,
                                        // AND IF IS CORRECT , CREATE OR GET THE USER
                                        data.accessToken = accessToken;
                                        data.image = data.picture.data.url;

                                        delete data.picture; //Remove this =)

                                        $Api.create("/Security/Oauth/Facebook", data)
                                            .success(function(oauthToken)
                                            {
                                                //Authenticated
                                                $Identity.logIn(oauthToken);

                                                //Resolve Callback
                                                $scope.onAuthenticate(data);

                                            }).error(throwError);



                                    });

                                }
                                else
                                {
                                    throwError("FB Error: " + response.status);
                                }

                            },
                            {
                                scope: 'email,user_friends'
                            });

                        }



                        break;
                    case "google":
                        break;
                }

            };
            changeState('normal');

            //Auto Launch
            $scope.login('facebook');

        }
    };
});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Web Is Mobile, the authentication work better in manual
                    flow authentication for Facebook
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')
    .controller("FacebookRedirectController", function($scope, $Identity, $Api, Facebook, $window, $location)
    {

        var redirect = function(local_url)
        {
            var redirect_uri = "{0}://{1}{2}/#{3}".format([
                $location.protocol(),
                $location.host(),
                ($location.port() ? ":" + $location.port() : ""),
                local_url
            ]);

            $window.location.href = redirect_uri;

        };

        var parameters = $location.search();

        if (parameters.access_token)
        {
            var accessToken = parameters.access_token;

            Facebook.api("me/?fields=id,email,name,picture.type(large),location",
                {
                    access_token: accessToken
                },
                function(data)
                {
                    //GO TO API, CHECK THE TOKEN ,
                    // AND IF IS CORRECT , CREATE OR GET THE USER
                    data.accessToken = accessToken;
                    data.image = data.picture.data.url;
                    delete data.picture; //Remove this =)
                    
                    $Api.create("/Security/Oauth/Facebook", data)
                        .success(function(oauthToken)
                        {
                            //Authenticated
                            $Identity.logIn(oauthToken);

                            redirect(parameters.url);

                        });
                });
        }
        else
        {

            //http://widulapp.azurewebsites.net/?oauth-flow=facebook&error=access_denied&error_code=200&error_description=Permissions+error&error_reason=user_denied&state=%2Fpublic%2Fevents%2Fview%2Fresume%2Findex%2F81645f35-8dbd-49fd-9383-6d7a5ab66a3b#_=_
            //TODO: DENIED ACCESS
            //SHOW ERROR
            redirect(parameters.state);
        }
    })

.run(function($location)
{
    //CHECK IF THE FACEBOOK FLOW , HAS RETURNING URL =)!
    var path = $location.absUrl();
    if (path.indexOf("oauth-flow=facebook") >= 0)
    {
        //Prepare the path for parse
        var match_uri = "=facebook#/state=";
        var returningUrl = path.substring(path.indexOf(match_uri) + match_uri.length);
        $location.url("/public/fbauth?url=" + returningUrl);
    }

})

.config(function($stateProvider, $locationProvider)
{

    $stateProvider
        .state("public.fbauth",
        {
            url: '/fbauth',
            views:
            {
                "content":
                {
                    templateUrl: 'bundles/app/components/security/external-authenticators/oauth-flows/facebook-redirect.html',
                    controller: 'FacebookRedirectController'
                }
            }
        });



})
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')

.directive('identityBox', function()
{
    return {
        restrict: 'E',
        scope:
        {},
        templateUrl: 'bundles/app/components/security/identity-box/identity-box.tpl.html',
        controller: function($scope, $element, $q, $Identity, $rootScope, $restrictedAccess)
        {
            var isAuthenticated = $scope.isAuthenticated = $Identity.isAuthenticated();
            if (isAuthenticated)
            {
                $scope.user = $Identity.getCurrent();
            }

            //--------------------------------------------
            // Action's
            $scope.logIn = function()
            {
                $restrictedAccess.validate();
            };

            $scope.logOut = function()
            {
                $Identity.logOut();
            };

            //--------------------------------------------
            // Event Hook's

            //When Authenticated State Change, Update Identity Box
            $rootScope.$on("auth-login-success", function(token)
            {
                isAuthenticated = $scope.isAuthenticated = true;
                $scope.user = $Identity.getCurrent();
            });

            $rootScope.$on("auth-logout-success", function()
            {
                isAuthenticated = $scope.isAuthenticated = false;
                delete $scope.user;
            });
        }
    };
});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')

.directive('restrictedAccessDialog', function()
{
    return {
        restrict: 'E',
        scope:
        {
            onUpdateState: '=?',
            onAuthenticationFails: '=?',
            onAuthenticationSuccess: '=?'
        },
        templateUrl: 'bundles/app/components/security/restricted-access/restricted-access-dialog.tpl.html',
        controller: function($scope, $element, $q, $Configuration, $mdToast, $timeout)
        {
            $scope.signature = $Configuration.get("application");

            //GARBAGE COLLECTOR
            function destroy()
            {
                $element.addClass("ng-hide");
                var delay = $timeout(function()
                {
                    $element.remove();

                    $timeout.cancel(delay);
                }, 400);

            }

            //Set State accord to user
            $scope._onUpdateState = function(new_state)
            {
                $scope.state = new_state;
                if ($scope.onUpdateState)
                {
                    $scope.onUpdateState(new_state);
                }
            };

            $scope._onAuthenticationFails = function(message)
            {
                $mdToast.show(
                    $mdToast.simple()
                    .content("Error de Identificación: Intentalo denuevo!")
                    .position('bottom left')
                    .hideDelay(3000)
                );

                destroy();

                if ($scope.onAuthenticationFails)
                {
                    $scope.onAuthenticationFails(message);
                }

                throw {
                    message: message
                };
            };

            $scope._onAuthenticationSuccess = function(identity)
            {
                destroy();

                if ($scope.onAuthenticationSuccess)
                {
                    $scope.onAuthenticationSuccess(identity);
                }
            };

            $scope.close = function()
            {
                $scope._onAuthenticationFails("user_cancel");
            };

            $scope.$on("$destroy", destroy);

        }
    };
});
;// SERVICE
angular.module('app.components')
    .provider('$restrictedAccess', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $timeout, $Identity, $compile, $rootScope)
        {
            var self = {};

            //ADD NEW FACTORY
            self.validate = function(config)
            {
                var deferred = $q.defer();

                var delay = $timeout(function()
                {
                    //Clean
                    $timeout.cancel(delay);

                    if ($Identity.isAuthenticated())
                    {
                        deferred.resolve();
                        return;
                    }
                    else
                    {

                        //Need to create a directive element to avoid using 
                        //$mdDialog, because can't work with multiple dialog's
                        scope = $rootScope.$new();

                        scope.onAuthenticationFails = function(message)
                        {
                            deferred.reject(message);
                        };

                        scope.onAuthenticationSuccess = function(identity)
                        {
                            deferred.resolve(identity);
                        };

                        var dialog = $compile("<restricted-access-dialog class='ng-hide-animate ng-show-add' on-authentication-fails='onAuthenticationFails' on-authentication-success='onAuthenticationSuccess' />")(scope);
                        angular.element(document.body).append(dialog);

                    }

                }, 150);

                return deferred.promise;
            };

            return self;
        };
    });
;angular.module('app.components')

.provider('$uploadFile', function()
{
    //---------------------------------------------------
    //Configurable Variable on .config Step
    var _endpoint = null;

    this.setFileEndpoint = function(endpoint)
    {
        _endpoint = endpoint;
    };
    //---------------------------------------------------

    var getFileEndpoint = function()
    {
        return _endpoint;
    };

    //---------------------------------------------------
    this.$get = function($log, $Api)
    {

        if (!_endpoint)
        {
            _endpoint = $Api.getEndpoint() + '/File/';
        }


        return {
            getFileEndpoint: getFileEndpoint
        };
    };

});
;angular.module('app.components')

.directive('uploadFile', function()
{
    return {
        restrict: 'E',
        scope:
        {
            ngDisabled: '=', //Check if the element is disabled
            ngModel: '=', //ng-model Token Binding
            onStart: '&', // Start Event
            onSend: '&', // Before Send File to Server (Useful for custom Headers)
            onProgressChange: '&', // When Upload Progress Change
            onComplete: '&', // When The upload file is complete
            onError: '&' // When an Error is ocurred
        },
        templateUrl: 'bundles/app/components/upload/upload-file.tpl.html',
        controller: function($scope, $element, $upload, $Identity, $uploadFile)
        {
            $scope.ngDisabled = $scope.ngDisabled || (false);


            var getFileUrl = function(token)
            {
                //Get View File endpoint
                var url = $uploadFile.getFileEndpoint() + token;
                if ($Identity.isAuthenticated())
                {
                    url = url + "?access_token=" + $Identity.getAccessToken();
                }

                return url;
            };

            if ($scope.ngModel)
            {
                $scope.fileUrl = getFileUrl($scope.ngModel);
            }

            //https://github.com/danialfarid/ng-file-upload
            $scope.upload = function(files)
            {

                //-----------------------------------------
                if (files && files.length)
                {
                    $scope.uploadData = {

                        options:
                        {
                            thickness: 5,
                            mode: "gauge",
                            total: 100
                        },

                        progress: [
                        {
                            label: 'Subiendo...',
                            value: 0,
                            color: "#FF5722",
                            suffix: "%"
                        }]

                    };


                    //Raise Start Event
                    if ($scope.onStart())
                    {
                        $scope.onStart()(files);
                    }

                    //http://underscorejs.org/#throttle
                    var throttled = _.throttle(function(value)
                    {
                        //Raise Start Event
                        if ($scope.onProgressChange())
                        {
                            $scope.onProgressChange()(value);
                        }

                        if ($scope.uploadData)
                        {
                            $scope.uploadData.progress[0].value = value;
                        }

                    }, 300);

                    //FUNCTIONS
                    var _progress = function(evt)
                    {

                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        throttled(progressPercentage);

                    };

                    var _success = function(data, status, headers, config)
                    {
                        //Set View File endpoint
                        var token = _.first(data).token;
                        var url = getFileUrl(token);

                        //Raise Complete Event
                        if ($scope.onComplete())
                        {
                            var custom_url = $scope.onComplete()(data, status, headers, config);
                            if (custom_url)
                            {
                                url = custom_url;
                            }
                        }

                        //Bind ng-Model
                        $scope.ngModel = token;
                        $scope.fileUrl = url;

                        $scope.uploadData = null;

                    };

                    var _error = function(data, status, headers, config)
                    {

                        //Raise Error Event
                        if ($scope.onError())
                        {
                            $scope.onError()(data, status, headers, config);
                        }

                        $scope.uploadData = null;

                    };

                    for (var i = 0; i < files.length; i++)
                    {
                        var file = files[i];

                        var headers = {};

                        if ($Identity.isAuthenticated())
                        {
                            headers.Authorization = ("{0} {1}").format([
                                $Identity.getTokenType(),
                                $Identity.getAccessToken()
                            ]);
                        }

                        //Raise Send Event
                        if ($scope.onSend())
                        {
                            $scope.onSend()(headers);
                        }

                        var config = {
                            url: $uploadFile.getFileEndpoint(),
                            file: file,
                            headers: headers
                        };

                        $upload.upload(config)
                            .progress(_progress)
                            .success(_success)
                            .error(_error);
                    }

                }
                //-----------------------------------------
            };

            //Garbage Collector Destroy
            $scope.$on('$destroy', function() {

            });

        },

        link: function(scope, element, attrs, ctrl) {

        }
    };
});
;angular.module('app.filters')

.filter('file', function($Api, $Identity, $Configuration, $uploadFile)
{
    return function(resource)
    {

        var url = resource;
        if (!url)
        {
            return null;
            //Set Default image if not setted
            //url = $Configuration.get("static").DEFAULT_EMPTY_IMAGE_URL;
        }
        else
        {
            if ($Identity.isAuthenticated())
            {
                url += "?access_token=" + $Identity.getAccessToken();
            }


            url = $uploadFile.getFileEndpoint() + url;
        }

        return url;
    };
});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Application Cleanse Manager
------------------------------------------------------*/
angular.module('app.services')
    .provider('ApplicationCleanse', function()
    {
        var $ref = this;

        //---------------------------------------------------
        //Configurable Variable on .config Step
        var _debug = false;

        this.debug = function()
        {
            _debug = true;
            return $ref;
        };

        this.$get = function($log, $q, $timeout, $LocalStorage, $Identity)
        {
            var self = {};

            self.clean = function(isNewVersion)
            {
                var defer = $q.defer();
                defer.resolve();

                return defer.promise;

            };

            return self;
        };

    });
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Synchronizer System to Sync to Some File
------------------------------------------------------*/
(function()
{
    var _module = 'app.services.synchronizers';
    var _debug = false;
    var _autoLoad = false;
    var _autoStart = false;

    var _getReflectedSynchronizers = function($injector)
    {
        var classes = [];
        var services = angular.module(_module)._invokeQueue;
        angular.forEach(services, function(ngClass)
        {
            var type = ngClass[1];
            var args = ngClass[2];

            // Load only if the type is "service" 
            // and first args is the service name
            if (
                type === "service" &&
                (
                    args &&
                    args.length > 0 &&
                    typeof args[0] === "string"
                )
            )
            {
                var reflectedTypeName = args[0];
                var reflectedType = $injector.get(reflectedTypeName);

                //Check if has the key method "synchronize";
                if (typeof reflectedType.synchronize === "undefined")
                {
                    throw {
                        message: "Synchronizer: type {0} is not a synchronizer.".format([reflectedTypeName])
                    };
                }

                classes.push(
                {
                    type: reflectedTypeName,
                    instance: reflectedType
                });
            }
        });

        return classes;
    };

    angular.module(_module)
        .provider('Synchronizer', function()
        {
            var $ref = this;
            var StateType = {
                INITIALIZED: 1,
                CONFIGURATED: 2,
                SYNCHRONIZING: 3,
                WAITING: 4,
                STOPPED: 5
            };

            //---------------------------------------------------
            //Configurable Variable on .config Step
            var _frequency = 15000;

            this.frequency = function(frequency)
            {
                if (_frequency > 0)
                {
                    _frequency = frequency;
                }
                return $ref;
            };

            this.debug = function()
            {
                _debug = true;
                return $ref;
            };

            //Find All Synchronizers in the same module name =)!
            this.autoLoadSynchronizers = function()
            {
                _autoLoad = true;
                return $ref;
            };

            this.autoStart = function()
            {
                _autoStart = true;
                return $ref;
            };

            this.$get = function($log, $q, BaseEventHandler, $interval, $http, $filter)
            {
                var self = Object.create(BaseEventHandler); //Extend From EventHandler
                var _synchronizers = [];
                var _started = false;

                var checkIsPromise = function(synchronizer, value)
                {
                    if (!value.then)
                    {
                        throw {
                            message: "Synchronizer: You must return a promise (via $q) on method for {0}".format([
                                synchronizer.alias
                            ])
                        };
                    }
                };

                //ADD NEW FACTORY
                self.add = function(service, alias)
                {
                    if (_debug)
                    {
                        $log.debug("Synchronizer: add {0}".format([alias]), service);
                    }

                    var synchronizer = {
                        alias: alias,
                        state: StateType.INITIALIZED,
                        instance: service
                    };

                    _synchronizers.push(synchronizer);

                    if (_started)
                    {
                        return configure(synchronizer);
                    }
                };

                self.start = function()
                {
                    var defer = $q.defer();
                    var configures = [];

                    //STEP 1: CONFIGURE ALL SYNCHRONIZERS!
                    angular.forEach(_synchronizers, function(item)
                    {
                        if (item.state === StateType.INITIALIZED)
                        {
                            var promise = configure(item);
                            configures.push(promise);
                        }
                    });

                    $q.all(configures).then(function()
                    {
                        _started = true;

                        //STEP 2: CALL SYNC AT START!
                        angular.forEach(_synchronizers, function(item)
                        {
                            if (item.state === StateType.INITIALIZED)
                            {
                                synchronize(item);
                            }
                        });

                        defer.resolve();
                    });

                    return defer.promise;
                };

                //---------------------------------------------
                //ITEM SYNCRONIZER METHOD'S
                var configure = function(item)
                {
                    var deferred = null;

                    //Has Config??
                    if (typeof item.instance.configure === "function")
                    {
                        if (_debug)
                        {
                            $log.debug("Synchronizer: configuring {0}".format([item.alias]));
                        }

                        deferred = item.instance.configure();
                        checkIsPromise(item, deferred); //CHECK
                        deferred.then(function()
                        {
                            if (_debug)
                            {
                                $log.debug("Synchronizer: configurated {0}".format([item.alias]));
                            }
                        });
                    }
                    else
                    {
                        //Dummy Promise
                        deferred = $q.defer().resolve().promise;
                    }

                    return deferred;
                };

                var synchronize = function(item)
                {
                    var syncStep = $q.defer();

                    //Add Sync State
                    syncStep.promise.then(function(state)
                    {
                        var end = new Date();
                        var sync_state = {
                            state: state,
                            elapsed: moment(end - start).format("mm:ss.SSS")
                        };
                        item.last_synchronization = sync_state;

                        if (_debug)
                        {
                            $log.debug("Synchronizer: {0} synchronized".format([item.alias]), sync_state);
                        }

                        //ADD INTERVAL TICK!
                        item.state = StateType.WAITING;
                        setTimeout(function()
                        {
                            synchronize(item);
                        }, _frequency); //re-launch 

                    });

                    if (_debug)
                    {
                        $log.debug("Synchronizer: {0} is synchronizing".format([item.alias]));
                    }

                    //Call to Sync Inmediately
                    var start = new Date();
                    item.state = StateType.SYNCHRONIZING;
                    var deferred = item.instance.synchronize();
                    checkIsPromise(item, deferred); //CHECK!!

                    deferred.then(function(data)
                    {
                        syncStep.resolve("SUCCESS");
                    }, function(reason)
                    {
                        syncStep.resolve("ERROR");
                    });

                };

                return self;
            };

        })
        .run(function(Synchronizer, $log, $injector)
        {

            if (_autoLoad)
            {
                var synchronizers = _getReflectedSynchronizers($injector);
                angular.forEach(synchronizers, function(synchronizer)
                {
                    Synchronizer.add(synchronizer.instance, synchronizer.type);
                });
            }

            if (_autoStart)
            {
                Synchronizer.start();
            }

            //Auto Start
            if (_debug)
            {
                $log.info("Synchronizer: Active");
            }

        });

})();
;angular.module('app.services')

.service('Wizard', function()
{
    var self = {};
    var wizard = {};


    self.addStep = function(data, identifier, prefix)
    {
        if (!identifier)
        {
            throw {
                message: 'identifier can\'t be empty'
            };
        }

        if (typeof prefix === "undefined")
        {
            prefix = identifier;
        }

        //Clone for disconnect , some $watch for ng-model
        var cloneData = angular.copy(data,
        {});

        //Add Step Data
        wizard[identifier] = {
            prefix: prefix,
            fields: cloneData
        };
    };

    self.getStep = function(identifier){
        return wizard[identifier];
    };

    self.clear = function()
    {
        wizard = {};
    };

    self.toCollection = function(resolver)
    {

        var collections = [];

        //Each Section 
        for (var section in wizard)
        {
            var configuration = wizard[section];

            //Each Field
            for (var fieldName in configuration.fields)
            {
                var fullname = fieldName;
                if (configuration.prefix.length > 0)
                {
                    fullname = "{0}_{1}".format([configuration.prefix, fieldName]);
                }
                
                var value = configuration.fields[fieldName];
                var resolverValue;

                if (resolver)
                {
                    resolverValue = resolver(value, fieldName, fullname);
                }

                if (typeof resolverValue !== "undefined")
                {
                    value = resolverValue;
                }
                else
                {

                    if (typeof value === "object" && value.token)
                    {
                        value = value.token;
                    }

                }

                if (typeof value === "undefined" || value === null)
                {
                    throw {
                        message: 'can\'t resolve value for ' + fullname
                    };
                }

                collections.push(
                {
                    name: fullname,
                    value: value
                });
            }

        }

        return collections;
    };

    return self;
});
;//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Material Icon's for using with the <md-icon/> directive
// 
// URL: https://www.google.com/design/icons/
// 
// MD-ICON USE:
//		<md-icon md-svg-icon="category:icon"></md-icon> 

//    	WHERE:
//        	category: Icon Category, example: action
//			icon:   Icon Name, example: home
//------------------------------------------------------
angular.module('material-icons', ['ngMaterial'])

.config(function($mdIconProvider) {
    //Icons Set's (https://github.com/nkoterba/material-design-iconsets)
    var bundle_src = "bundles/material-icons/svg/icons/{0}-icons.svg";
    angular.forEach([
        "action", "alert", "av", "communication", "content",
        "device", "editor", "file", "hardware", "icons", "image",
        "maps", "navigation", "notification", "social", "toggle"
    ], function(toolset) {
        $mdIconProvider.iconSet(toolset, bundle_src.format([toolset]), 24);
    });
});;//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Mocks Bundle for Business Use
//------------------------------------------------------
(function()
{
    var api_endpoint = null;
    var delay_response = 0;

    //Create the manifiest
    angular.manifiest('mocks', [
        'mocks.api'
    ], [
        'ngMockE2E'
    ])

    // Create a Wrapper Interceptor, for easy use.
    .provider('Mocks', function()
    {
        var $ref = this;

        //---------------------------------------------------
        //Configurable Variable on .config Step
        var _enable = false;
        var _debug = false;

        this.enable = function()
        {
            _enable = true;
            return $ref;
        };

        this.isEnabled = function()
        {
            return _enable;
        };

        this.debug = function()
        {
            _debug = true;
            return $ref;
        };

        this.setDelay = function(miliseconds)
        {
            if (miliseconds > 0)
            {
                delay_response = miliseconds;
            }
            return $ref;
        };
        //---------------------------------------------------


        this.$get = function($httpBackend, $Api)
        {
            var endpoint = $Api.getEndpoint();
            var build = function(api)
            {
                var exp = new RegExp(endpoint + api);
                return exp;
            };

            var when = function(verb, url, callback)
            {
                if (_enable)
                {
                    verb = (verb || 'GET').toUpperCase();
                    var methodName = 'when' + verb;

                    if (_debug)
                    {
                        console.debug("mock:", build(url));
                    }

                    return $httpBackend.when(verb, build(url)).respond(callback);
                }
            };

            return {
                when: when,
                isEnabled: $ref.isEnabled,
                whenGET: function(url, callback)
                {
                    return when('GET', url, callback);
                },
                whenPOST: function(url, callback)
                {
                    return when('POST', url, callback);
                },
                whenPUT: function(url, callback)
                {
                    return when('PUT', url, callback);
                },
                whenDELETE: function(url, callback)
                {
                    return when('DELETE', url, callback);
                }
            };
        };
    })

    //DELAY WHEN API CALL 
    .config(function($provide)
    {
        $provide.decorator('$httpBackend', function($delegate, $log)
        {
            var proxy = function(method, url, data, callback, headers)
            {
                var interceptor = function()
                {
                    var _this = this;
                    var _arguments = arguments;

                    //Only Work when the $Api is Setted Up
                    if (!api_endpoint)
                    {
                        //------------------------------------
                        // DO NOTHING :P
                        callback.apply(_this, _arguments);
                        //------------------------------------
                    }
                    else
                    {
                        //------------------------------------
                        // DELAY
                        var _delay = 0;

                        if (url.indexOf(api_endpoint) >= 0)
                        {
                            _delay = delay_response;
                        }

                        setTimeout(function()
                        {
                            callback.apply(_this, _arguments);
                        }, _delay);
                        //------------------------------------
                    }

                };
                return $delegate.call(this, method, url, data, interceptor, headers);
            };

            for (var key in $delegate)
            {
                proxy[key] = $delegate[key];
            }
            return proxy;
        });
    })

    //Get the API EndPoint
    .run(function($Api, $httpBackend)
    {
        api_endpoint = $Api.getEndpoint(); //Set EndPoint

        //REQUIRED EXCEPTION FOR OTHER EXCEPTIONS
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenDELETE(/.*/).passThrough();
    });
})();
;/**
 * @license AngularJS v1.5.0-build.4349+sha.bfad2a4
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined)
{


    /**
     * @ngdoc object
     * @name angular.mock
     * @description
     *
     * Namespace from 'angular-mocks.js' which contains testing related code.
     */
    angular.mock = {};

    /**
     * ! This is a private undocumented service !
     *
     * @name $browser
     *
     * @description
     * This service is a mock implementation of {@link ng.$browser}. It provides fake
     * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
     * cookies, etc...
     *
     * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
     * that there are several helper methods available which can be used in tests.
     */
    angular.mock.$BrowserProvider = function()
    {
        this.$get = function()
        {
            return new angular.mock.$Browser();
        };
    };

    angular.mock.$Browser = function()
    {
        var self = this;

        this.isMock = true;
        self.$$url = "http://server/";
        self.$$lastUrl = self.$$url; // used by url polling fn
        self.pollFns = [];

        // TODO(vojta): remove this temporary api
        self.$$completeOutstandingRequest = angular.noop;
        self.$$incOutstandingRequestCount = angular.noop;


        // register url polling fn

        self.onUrlChange = function(listener)
        {
            self.pollFns.push(
                function()
                {
                    if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState)
                    {
                        self.$$lastUrl = self.$$url;
                        self.$$lastState = self.$$state;
                        listener(self.$$url, self.$$state);
                    }
                }
            );

            return listener;
        };

        self.$$applicationDestroyed = angular.noop;
        self.$$checkUrlChange = angular.noop;

        self.deferredFns = [];
        self.deferredNextId = 0;

        self.defer = function(fn, delay)
        {
            delay = delay || 0;
            self.deferredFns.push(
            {
                time: (self.defer.now + delay),
                fn: fn,
                id: self.deferredNextId
            });
            self.deferredFns.sort(function(a, b)
            {
                return a.time - b.time;
            });
            return self.deferredNextId++;
        };


        /**
         * @name $browser#defer.now
         *
         * @description
         * Current milliseconds mock time.
         */
        self.defer.now = 0;


        self.defer.cancel = function(deferId)
        {
            var fnIndex;

            angular.forEach(self.deferredFns, function(fn, index)
            {
                if (fn.id === deferId)
                {
                    fnIndex = index;
                }
            });

            if (angular.isDefined(fnIndex))
            {
                self.deferredFns.splice(fnIndex, 1);
                return true;
            }

            return false;
        };


        /**
         * @name $browser#defer.flush
         *
         * @description
         * Flushes all pending requests and executes the defer callbacks.
         *
         * @param {number=} number of milliseconds to flush. See {@link #defer.now}
         */
        self.defer.flush = function(delay)
        {
            if (angular.isDefined(delay))
            {
                self.defer.now += delay;
            }
            else
            {
                if (self.deferredFns.length)
                {
                    self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
                }
                else
                {
                    throw new Error('No deferred tasks to be flushed');
                }
            }

            while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now)
            {
                self.deferredFns.shift().fn();
            }
        };

        self.$$baseHref = '/';
        self.baseHref = function()
        {
            return this.$$baseHref;
        };
    };
    angular.mock.$Browser.prototype = {

        /**
         * @name $browser#poll
         *
         * @description
         * run all fns in pollFns
         */
        poll: function poll()
        {
            angular.forEach(this.pollFns, function(pollFn)
            {
                pollFn();
            });
        },

        url: function(url, replace, state)
        {
            if (angular.isUndefined(state))
            {
                state = null;
            }
            if (url)
            {
                this.$$url = url;
                // Native pushState serializes & copies the object; simulate it.
                this.$$state = angular.copy(state);
                return this;
            }

            return this.$$url;
        },

        state: function()
        {
            return this.$$state;
        },

        notifyWhenNoOutstandingRequests: function(fn)
        {
            fn();
        }
    };


    /**
     * @ngdoc provider
     * @name $exceptionHandlerProvider
     *
     * @description
     * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
     * passed to the `$exceptionHandler`.
     */

    /**
     * @ngdoc service
     * @name $exceptionHandler
     *
     * @description
     * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
     * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
     * information.
     *
     *
     * ```js
     *   describe('$exceptionHandlerProvider', function() {
     *
     *     it('should capture log messages and exceptions', function() {
     *
     *       module(function($exceptionHandlerProvider) {
     *         $exceptionHandlerProvider.mode('log');
     *       });
     *
     *       inject(function($log, $exceptionHandler, $timeout) {
     *         $timeout(function() { $log.log(1); });
     *         $timeout(function() { $log.log(2); throw 'banana peel'; });
     *         $timeout(function() { $log.log(3); });
     *         expect($exceptionHandler.errors).toEqual([]);
     *         expect($log.assertEmpty());
     *         $timeout.flush();
     *         expect($exceptionHandler.errors).toEqual(['banana peel']);
     *         expect($log.log.logs).toEqual([[1], [2], [3]]);
     *       });
     *     });
     *   });
     * ```
     */

    angular.mock.$ExceptionHandlerProvider = function()
    {
        var handler;

        /**
         * @ngdoc method
         * @name $exceptionHandlerProvider#mode
         *
         * @description
         * Sets the logging mode.
         *
         * @param {string} mode Mode of operation, defaults to `rethrow`.
         *
         *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
         *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
         *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
         *            {@link ngMock.$log#reset reset()}
         *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
         *                is a bug in the application or test, so this mock will make these tests fail.
         *                For any implementations that expect exceptions to be thrown, the `rethrow` mode
         *                will also maintain a log of thrown errors.
         */
        this.mode = function(mode)
        {

            switch (mode)
            {
                case 'log':
                case 'rethrow':
                    var errors = [];
                    handler = function(e)
                    {
                        if (arguments.length === 1)
                        {
                            errors.push(e);
                        }
                        else
                        {
                            errors.push([].slice.call(arguments, 0));
                        }
                        if (mode === "rethrow")
                        {
                            throw e;
                        }
                    };
                    handler.errors = errors;
                    break;
                default:
                    throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
            }
        };

        this.$get = function()
        {
            return handler;
        };

        this.mode('rethrow');
    };


    /**
     * @ngdoc service
     * @name $log
     *
     * @description
     * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
     * (one array per logging level). These arrays are exposed as `logs` property of each of the
     * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
     *
     */
    angular.mock.$LogProvider = function()
    {
        var debug = true;

        function concat(array1, array2, index)
        {
            return array1.concat(Array.prototype.slice.call(array2, index));
        }

        this.debugEnabled = function(flag)
        {
            if (angular.isDefined(flag))
            {
                debug = flag;
                return this;
            }
            else
            {
                return debug;
            }
        };

        this.$get = function()
        {
            var $log = {
                log: function()
                {
                    $log.log.logs.push(concat([], arguments, 0));
                },
                warn: function()
                {
                    $log.warn.logs.push(concat([], arguments, 0));
                },
                info: function()
                {
                    $log.info.logs.push(concat([], arguments, 0));
                },
                error: function()
                {
                    $log.error.logs.push(concat([], arguments, 0));
                },
                debug: function()
                {
                    if (debug)
                    {
                        $log.debug.logs.push(concat([], arguments, 0));
                    }
                }
            };

            /**
             * @ngdoc method
             * @name $log#reset
             *
             * @description
             * Reset all of the logging arrays to empty.
             */
            $log.reset = function()
            {
                /**
                 * @ngdoc property
                 * @name $log#log.logs
                 *
                 * @description
                 * Array of messages logged using {@link ng.$log#log `log()`}.
                 *
                 * @example
                 * ```js
                 * $log.log('Some Log');
                 * var first = $log.log.logs.unshift();
                 * ```
                 */
                $log.log.logs = [];
                /**
                 * @ngdoc property
                 * @name $log#info.logs
                 *
                 * @description
                 * Array of messages logged using {@link ng.$log#info `info()`}.
                 *
                 * @example
                 * ```js
                 * $log.info('Some Info');
                 * var first = $log.info.logs.unshift();
                 * ```
                 */
                $log.info.logs = [];
                /**
                 * @ngdoc property
                 * @name $log#warn.logs
                 *
                 * @description
                 * Array of messages logged using {@link ng.$log#warn `warn()`}.
                 *
                 * @example
                 * ```js
                 * $log.warn('Some Warning');
                 * var first = $log.warn.logs.unshift();
                 * ```
                 */
                $log.warn.logs = [];
                /**
                 * @ngdoc property
                 * @name $log#error.logs
                 *
                 * @description
                 * Array of messages logged using {@link ng.$log#error `error()`}.
                 *
                 * @example
                 * ```js
                 * $log.error('Some Error');
                 * var first = $log.error.logs.unshift();
                 * ```
                 */
                $log.error.logs = [];
                /**
                 * @ngdoc property
                 * @name $log#debug.logs
                 *
                 * @description
                 * Array of messages logged using {@link ng.$log#debug `debug()`}.
                 *
                 * @example
                 * ```js
                 * $log.debug('Some Error');
                 * var first = $log.debug.logs.unshift();
                 * ```
                 */
                $log.debug.logs = [];
            };

            /**
             * @ngdoc method
             * @name $log#assertEmpty
             *
             * @description
             * Assert that all of the logging methods have no logged messages. If any messages are present,
             * an exception is thrown.
             */
            $log.assertEmpty = function()
            {
                var errors = [];
                angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel)
                {
                    angular.forEach($log[logLevel].logs, function(log)
                    {
                        angular.forEach(log, function(logItem)
                        {
                            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                                (logItem.stack || ''));
                        });
                    });
                });
                if (errors.length)
                {
                    errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
                        "an expected log message was not checked and removed:");
                    errors.push('');
                    throw new Error(errors.join('\n---------\n'));
                }
            };

            $log.reset();
            return $log;
        };
    };


    /**
     * @ngdoc service
     * @name $interval
     *
     * @description
     * Mock implementation of the $interval service.
     *
     * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
     * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
     * time.
     *
     * @param {function()} fn A function that should be called repeatedly.
     * @param {number} delay Number of milliseconds between each function call.
     * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
     *   indefinitely.
     * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
     *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
     * @param {...*=} Pass additional parameters to the executed function.
     * @returns {promise} A promise which will be notified on each iteration.
     */
    angular.mock.$IntervalProvider = function()
    {
        this.$get = ['$browser', '$rootScope', '$q', '$$q',
            function($browser, $rootScope, $q, $$q)
            {
                var repeatFns = [],
                    nextRepeatId = 0,
                    now = 0;

                var $interval = function(fn, delay, count, invokeApply)
                {
                    var hasParams = arguments.length > 4,
                        args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
                        iteration = 0,
                        skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                        deferred = (skipApply ? $$q : $q).defer(),
                        promise = deferred.promise;

                    count = (angular.isDefined(count)) ? count : 0;
                    promise.then(null, null, (!hasParams) ? fn : function()
                    {
                        fn.apply(null, args);
                    });

                    promise.$$intervalId = nextRepeatId;

                    function tick()
                    {
                        deferred.notify(iteration++);

                        if (count > 0 && iteration >= count)
                        {
                            var fnIndex;
                            deferred.resolve(iteration);

                            angular.forEach(repeatFns, function(fn, index)
                            {
                                if (fn.id === promise.$$intervalId)
                                {
                                    fnIndex = index;
                                }
                            });

                            if (angular.isDefined(fnIndex))
                            {
                                repeatFns.splice(fnIndex, 1);
                            }
                        }

                        if (skipApply)
                        {
                            $browser.defer.flush();
                        }
                        else
                        {
                            $rootScope.$apply();
                        }
                    }

                    repeatFns.push(
                    {
                        nextTime: (now + delay),
                        delay: delay,
                        fn: tick,
                        id: nextRepeatId,
                        deferred: deferred
                    });
                    repeatFns.sort(function(a, b)
                    {
                        return a.nextTime - b.nextTime;
                    });

                    nextRepeatId++;
                    return promise;
                };
                /**
                 * @ngdoc method
                 * @name $interval#cancel
                 *
                 * @description
                 * Cancels a task associated with the `promise`.
                 *
                 * @param {promise} promise A promise from calling the `$interval` function.
                 * @returns {boolean} Returns `true` if the task was successfully cancelled.
                 */
                $interval.cancel = function(promise)
                {
                    if (!promise)
                    {
                        return false;
                    }
                    var fnIndex;

                    angular.forEach(repeatFns, function(fn, index)
                    {
                        if (fn.id === promise.$$intervalId)
                        {
                            fnIndex = index;
                        }
                    });

                    if (angular.isDefined(fnIndex))
                    {
                        repeatFns[fnIndex].deferred.reject('canceled');
                        repeatFns.splice(fnIndex, 1);
                        return true;
                    }

                    return false;
                };

                /**
                 * @ngdoc method
                 * @name $interval#flush
                 * @description
                 *
                 * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
                 *
                 * @param {number=} millis maximum timeout amount to flush up until.
                 *
                 * @return {number} The amount of time moved forward.
                 */
                $interval.flush = function(millis)
                {
                    now += millis;
                    while (repeatFns.length && repeatFns[0].nextTime <= now)
                    {
                        var task = repeatFns[0];
                        task.fn();
                        task.nextTime += task.delay;
                        repeatFns.sort(function(a, b)
                        {
                            return a.nextTime - b.nextTime;
                        });
                    }
                    return millis;
                };

                return $interval;
            }
        ];
    };


    /* jshint -W101 */
    /* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
     * This directive should go inside the anonymous function but a bug in JSHint means that it would
     * not be enacted early enough to prevent the warning.
     */
    var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

    function jsonStringToDate(string)
    {
        var match;
        if (match = string.match(R_ISO8061_STR))
        {
            var date = new Date(0),
                tzHour = 0,
                tzMin = 0;
            if (match[9])
            {
                tzHour = toInt(match[9] + match[10]);
                tzMin = toInt(match[9] + match[11]);
            }
            date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
            date.setUTCHours(toInt(match[4] || 0) - tzHour,
                toInt(match[5] || 0) - tzMin,
                toInt(match[6] || 0),
                toInt(match[7] || 0));
            return date;
        }
        return string;
    }

    function toInt(str)
    {
        return parseInt(str, 10);
    }

    function padNumber(num, digits, trim)
    {
        var neg = '';
        if (num < 0)
        {
            neg = '-';
            num = -num;
        }
        num = '' + num;
        while (num.length < digits) num = '0' + num;
        if (trim)
        {
            num = num.substr(num.length - digits);
        }
        return neg + num;
    }


    /**
     * @ngdoc type
     * @name angular.mock.TzDate
     * @description
     *
     * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
     *
     * Mock of the Date type which has its timezone specified via constructor arg.
     *
     * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
     * offset, so that we can test code that depends on local timezone settings without dependency on
     * the time zone settings of the machine where the code is running.
     *
     * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
     * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
     *
     * @example
     * !!!! WARNING !!!!!
     * This is not a complete Date object so only methods that were implemented can be called safely.
     * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
     *
     * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
     * incomplete we might be missing some non-standard methods. This can result in errors like:
     * "Date.prototype.foo called on incompatible Object".
     *
     * ```js
     * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
     * newYearInBratislava.getTimezoneOffset() => -60;
     * newYearInBratislava.getFullYear() => 2010;
     * newYearInBratislava.getMonth() => 0;
     * newYearInBratislava.getDate() => 1;
     * newYearInBratislava.getHours() => 0;
     * newYearInBratislava.getMinutes() => 0;
     * newYearInBratislava.getSeconds() => 0;
     * ```
     *
     */
    angular.mock.TzDate = function(offset, timestamp)
    {
        var self = new Date(0);
        if (angular.isString(timestamp))
        {
            var tsStr = timestamp;

            self.origDate = jsonStringToDate(timestamp);

            timestamp = self.origDate.getTime();
            if (isNaN(timestamp))
            {
                throw {
                    name: "Illegal Argument",
                    message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
                };
            }
        }
        else
        {
            self.origDate = new Date(timestamp);
        }

        var localOffset = new Date(timestamp).getTimezoneOffset();
        self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
        self.date = new Date(timestamp + self.offsetDiff);

        self.getTime = function()
        {
            return self.date.getTime() - self.offsetDiff;
        };

        self.toLocaleDateString = function()
        {
            return self.date.toLocaleDateString();
        };

        self.getFullYear = function()
        {
            return self.date.getFullYear();
        };

        self.getMonth = function()
        {
            return self.date.getMonth();
        };

        self.getDate = function()
        {
            return self.date.getDate();
        };

        self.getHours = function()
        {
            return self.date.getHours();
        };

        self.getMinutes = function()
        {
            return self.date.getMinutes();
        };

        self.getSeconds = function()
        {
            return self.date.getSeconds();
        };

        self.getMilliseconds = function()
        {
            return self.date.getMilliseconds();
        };

        self.getTimezoneOffset = function()
        {
            return offset * 60;
        };

        self.getUTCFullYear = function()
        {
            return self.origDate.getUTCFullYear();
        };

        self.getUTCMonth = function()
        {
            return self.origDate.getUTCMonth();
        };

        self.getUTCDate = function()
        {
            return self.origDate.getUTCDate();
        };

        self.getUTCHours = function()
        {
            return self.origDate.getUTCHours();
        };

        self.getUTCMinutes = function()
        {
            return self.origDate.getUTCMinutes();
        };

        self.getUTCSeconds = function()
        {
            return self.origDate.getUTCSeconds();
        };

        self.getUTCMilliseconds = function()
        {
            return self.origDate.getUTCMilliseconds();
        };

        self.getDay = function()
        {
            return self.date.getDay();
        };

        // provide this method only on browsers that already have it
        if (self.toISOString)
        {
            self.toISOString = function()
            {
                return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
                    padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
                    padNumber(self.origDate.getUTCDate(), 2) + 'T' +
                    padNumber(self.origDate.getUTCHours(), 2) + ':' +
                    padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
                    padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
                    padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
            };
        }

        //hide all methods not implemented in this mock that the Date prototype exposes
        var unimplementedMethods = ['getUTCDay',
            'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
            'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
            'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
            'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
            'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'
        ];

        angular.forEach(unimplementedMethods, function(methodName)
        {
            self[methodName] = function()
            {
                throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
            };
        });

        return self;
    };

    //make "tzDateInstance instanceof Date" return true
    angular.mock.TzDate.prototype = Date.prototype;
    /* jshint +W101 */

    angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

    .config(['$provide', function($provide)
    {

        $provide.factory('$$forceReflow', function()
        {
            function reflowFn()
            {
                reflowFn.totalReflows++;
            }
            reflowFn.totalReflows = 0;
            return reflowFn;
        });

        $provide.factory('$$animateAsyncRun', function()
        {
            var queue = [];
            var queueFn = function()
            {
                return function(fn)
                {
                    queue.push(fn);
                };
            };
            queueFn.flush = function()
            {
                if (queue.length === 0) return false;

                for (var i = 0; i < queue.length; i++)
                {
                    queue[i]();
                }
                queue = [];

                return true;
            };
            return queueFn;
        });

        $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF',
            '$$forceReflow', '$$animateAsyncRun', '$rootScope',
            function($delegate, $timeout, $browser, $$rAF,
                $$forceReflow, $$animateAsyncRun, $rootScope)
            {
                var animate = {
                    queue: [],
                    cancel: $delegate.cancel,
                    on: $delegate.on,
                    off: $delegate.off,
                    pin: $delegate.pin,
                    get reflows()
                    {
                        return $$forceReflow.totalReflows;
                    },
                    enabled: $delegate.enabled,
                    flush: function()
                    {
                        $rootScope.$digest();

                        var doNextRun, somethingFlushed = false;
                        do {
                            doNextRun = false;

                            if ($$rAF.queue.length)
                            {
                                $$rAF.flush();
                                doNextRun = somethingFlushed = true;
                            }

                            if ($$animateAsyncRun.flush())
                            {
                                doNextRun = somethingFlushed = true;
                            }
                        } while (doNextRun);

                        if (!somethingFlushed)
                        {
                            throw new Error('No pending animations ready to be closed or flushed');
                        }

                        $rootScope.$digest();
                    }
                };

                angular.forEach(
                    ['animate', 'enter', 'leave', 'move', 'addClass', 'removeClass', 'setClass'],
                    function(method)
                    {
                        animate[method] = function()
                        {
                            animate.queue.push(
                            {
                                event: method,
                                element: arguments[0],
                                options: arguments[arguments.length - 1],
                                args: arguments
                            });
                            return $delegate[method].apply($delegate, arguments);
                        };
                    });

                return animate;
            }
        ]);

    }]);


    /**
     * @ngdoc function
     * @name angular.mock.dump
     * @description
     *
     * *NOTE*: this is not an injectable instance, just a globally available function.
     *
     * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
     * debugging.
     *
     * This method is also available on window, where it can be used to display objects on debug
     * console.
     *
     * @param {*} object - any object to turn into string.
     * @return {string} a serialized string of the argument
     */
    angular.mock.dump = function(object)
    {
        return serialize(object);

        function serialize(object)
        {
            var out;

            if (angular.isElement(object))
            {
                object = angular.element(object);
                out = angular.element('<div></div>');
                angular.forEach(object, function(element)
                {
                    out.append(angular.element(element).clone());
                });
                out = out.html();
            }
            else if (angular.isArray(object))
            {
                out = [];
                angular.forEach(object, function(o)
                {
                    out.push(serialize(o));
                });
                out = '[ ' + out.join(', ') + ' ]';
            }
            else if (angular.isObject(object))
            {
                if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply))
                {
                    out = serializeScope(object);
                }
                else if (object instanceof Error)
                {
                    out = object.stack || ('' + object.name + ': ' + object.message);
                }
                else
                {
                    // TODO(i): this prevents methods being logged,
                    // we should have a better way to serialize objects
                    out = angular.toJson(object, true);
                }
            }
            else
            {
                out = String(object);
            }

            return out;
        }

        function serializeScope(scope, offset)
        {
            offset = offset || '  ';
            var log = [offset + 'Scope(' + scope.$id + '): {'];
            for (var key in scope)
            {
                if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/))
                {
                    log.push('  ' + key + ': ' + angular.toJson(scope[key]));
                }
            }
            var child = scope.$$childHead;
            while (child)
            {
                log.push(serializeScope(child, offset + '  '));
                child = child.$$nextSibling;
            }
            log.push('}');
            return log.join('\n' + offset);
        }
    };

    /**
     * @ngdoc service
     * @name $httpBackend
     * @description
     * Fake HTTP backend implementation suitable for unit testing applications that use the
     * {@link ng.$http $http service}.
     *
     * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
     * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
     *
     * During unit testing, we want our unit tests to run quickly and have no external dependencies so
     * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
     * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
     * to verify whether a certain request has been sent or not, or alternatively just let the
     * application make requests, respond with pre-trained responses and assert that the end result is
     * what we expect it to be.
     *
     * This mock implementation can be used to respond with static or dynamic responses via the
     * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
     *
     * When an Angular application needs some data from a server, it calls the $http service, which
     * sends the request to a real server using $httpBackend service. With dependency injection, it is
     * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
     * the requests and respond with some testing data without sending a request to a real server.
     *
     * There are two ways to specify what test data should be returned as http responses by the mock
     * backend when the code under test makes http requests:
     *
     * - `$httpBackend.expect` - specifies a request expectation
     * - `$httpBackend.when` - specifies a backend definition
     *
     *
     * ## Request Expectations vs Backend Definitions
     *
     * Request expectations provide a way to make assertions about requests made by the application and
     * to define responses for those requests. The test will fail if the expected requests are not made
     * or they are made in the wrong order.
     *
     * Backend definitions allow you to define a fake backend for your application which doesn't assert
     * if a particular request was made or not, it just returns a trained response if a request is made.
     * The test will pass whether or not the request gets made during testing.
     *
     *
     * <table class="table">
     *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
     *   <tr>
     *     <th>Syntax</th>
     *     <td>.expect(...).respond(...)</td>
     *     <td>.when(...).respond(...)</td>
     *   </tr>
     *   <tr>
     *     <th>Typical usage</th>
     *     <td>strict unit tests</td>
     *     <td>loose (black-box) unit testing</td>
     *   </tr>
     *   <tr>
     *     <th>Fulfills multiple requests</th>
     *     <td>NO</td>
     *     <td>YES</td>
     *   </tr>
     *   <tr>
     *     <th>Order of requests matters</th>
     *     <td>YES</td>
     *     <td>NO</td>
     *   </tr>
     *   <tr>
     *     <th>Request required</th>
     *     <td>YES</td>
     *     <td>NO</td>
     *   </tr>
     *   <tr>
     *     <th>Response required</th>
     *     <td>optional (see below)</td>
     *     <td>YES</td>
     *   </tr>
     * </table>
     *
     * In cases where both backend definitions and request expectations are specified during unit
     * testing, the request expectations are evaluated first.
     *
     * If a request expectation has no response specified, the algorithm will search your backend
     * definitions for an appropriate response.
     *
     * If a request didn't match any expectation or if the expectation doesn't have the response
     * defined, the backend definitions are evaluated in sequential order to see if any of them match
     * the request. The response from the first matched definition is returned.
     *
     *
     * ## Flushing HTTP requests
     *
     * The $httpBackend used in production always responds to requests asynchronously. If we preserved
     * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
     * to follow and to maintain. But neither can the testing mock respond synchronously; that would
     * change the execution of the code under test. For this reason, the mock $httpBackend has a
     * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
     * the async api of the backend, while allowing the test to execute synchronously.
     *
     *
     * ## Unit testing with mock $httpBackend
     * The following code shows how to setup and use the mock backend when unit testing a controller.
     * First we create the controller under test:
     *
      ```js
      // The module code
      angular
        .module('MyApp', [])
        .controller('MyController', MyController);

      // The controller code
      function MyController($scope, $http) {
        var authToken;

        $http.get('/auth.py').success(function(data, status, headers) {
          authToken = headers('A-Token');
          $scope.user = data;
        });

        $scope.saveMessage = function(message) {
          var headers = { 'Authorization': authToken };
          $scope.status = 'Saving...';

          $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
            $scope.status = '';
          }).error(function() {
            $scope.status = 'Failed...';
          });
        };
      }
      ```
     *
     * Now we setup the mock backend and create the test specs:
     *
      ```js
        // testing controller
        describe('MyController', function() {
           var $httpBackend, $rootScope, createController, authRequestHandler;

           // Set up the module
           beforeEach(module('MyApp'));

           beforeEach(inject(function($injector) {
             // Set up the mock http service responses
             $httpBackend = $injector.get('$httpBackend');
             // backend definition common for all tests
             authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});

             // Get hold of a scope (i.e. the root scope)
             $rootScope = $injector.get('$rootScope');
             // The $controller service is used to create instances of controllers
             var $controller = $injector.get('$controller');

             createController = function() {
               return $controller('MyController', {'$scope' : $rootScope });
             };
           }));


           afterEach(function() {
             $httpBackend.verifyNoOutstandingExpectation();
             $httpBackend.verifyNoOutstandingRequest();
           });


           it('should fetch authentication token', function() {
             $httpBackend.expectGET('/auth.py');
             var controller = createController();
             $httpBackend.flush();
           });


           it('should fail authentication', function() {

             // Notice how you can change the response even after it was set
             authRequestHandler.respond(401, '');

             $httpBackend.expectGET('/auth.py');
             var controller = createController();
             $httpBackend.flush();
             expect($rootScope.status).toBe('Failed...');
           });


           it('should send msg to server', function() {
             var controller = createController();
             $httpBackend.flush();

             // now you don’t care about the authentication, but
             // the controller will still send the request and
             // $httpBackend will respond without you having to
             // specify the expectation and response for this request

             $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
             $rootScope.saveMessage('message content');
             expect($rootScope.status).toBe('Saving...');
             $httpBackend.flush();
             expect($rootScope.status).toBe('');
           });


           it('should send auth header', function() {
             var controller = createController();
             $httpBackend.flush();

             $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
               // check if the header was sent, if it wasn't the expectation won't
               // match the request and the test will fail
               return headers['Authorization'] == 'xxx';
             }).respond(201, '');

             $rootScope.saveMessage('whatever');
             $httpBackend.flush();
           });
        });
      ```
     *
     * ## Dynamic responses
     *
     * You define a response to a request by chaining a call to `respond()` onto a definition or expectation.
     * If you provide a **callback** as the first parameter to `respond(callback)` then you can dynamically generate
     * a response based on the properties of the request.
     *
     * The `callback` function should be of the form `function(method, url, data, headers, params)`.
     *
     * ### Query parameters
     *
     * By default, query parameters on request URLs are parsed into the `params` object. So a request URL
     * of `/list?q=searchstr&orderby=-name` would set `params` to be `{q: 'searchstr', orderby: '-name'}`.
     *
     * ### Regex parameter matching
     *
     * If an expectation or definition uses a **regex** to match the URL, you can provide an array of **keys** via a
     * `params` argument. The index of each **key** in the array will match the index of a **group** in the
     * **regex**.
     *
     * The `params` object in the **callback** will now have properties with these keys, which hold the value of the
     * corresponding **group** in the **regex**.
     *
     * This also applies to the `when` and `expect` shortcut methods.
     *
     *
     * ```js
     *   $httpBackend.expect('GET', /\/user\/(.+)/, undefined, undefined, ['id'])
     *     .respond(function(method, url, data, headers, params) {
     *       // for requested url of '/user/1234' params is {id: '1234'}
     *     });
     *
     *   $httpBackend.whenPATCH(/\/user\/(.+)\/article\/(.+)/, undefined, undefined, ['user', 'article'])
     *     .respond(function(method, url, data, headers, params) {
     *       // for url of '/user/1234/article/567' params is {user: '1234', article: '567'}
     *     });
     * ```
     *
     * ## Matching route requests
     *
     * For extra convenience, `whenRoute` and `expectRoute` shortcuts are available. These methods offer colon
     * delimited matching of the url path, ignoring the query string. This allows declarations
     * similar to how application routes are configured with `$routeProvider`. Because these methods convert
     * the definition url to regex, declaration order is important. Combined with query parameter parsing,
     * the following is possible:
     *
      ```js
        $httpBackend.whenRoute('GET', '/users/:id')
          .respond(function(method, url, data, headers, params) {
            return [200, MockUserList[Number(params.id)]];
          });

        $httpBackend.whenRoute('GET', '/users')
          .respond(function(method, url, data, headers, params) {
            var userList = angular.copy(MockUserList),
              defaultSort = 'lastName',
              count, pages, isPrevious, isNext;

            // paged api response '/v1/users?page=2'
            params.page = Number(params.page) || 1;

            // query for last names '/v1/users?q=Archer'
            if (params.q) {
              userList = $filter('filter')({lastName: params.q});
            }

            pages = Math.ceil(userList.length / pagingLength);
            isPrevious = params.page > 1;
            isNext = params.page < pages;

            return [200, {
              count:    userList.length,
              previous: isPrevious,
              next:     isNext,
              // sort field -> '/v1/users?sortBy=firstName'
              results:  $filter('orderBy')(userList, params.sortBy || defaultSort)
                          .splice((params.page - 1) * pagingLength, pagingLength)
            }];
          });
      ```
     */
    angular.mock.$HttpBackendProvider = function()
    {
        this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
    };

    /**
     * General factory function for $httpBackend mock.
     * Returns instance for unit testing (when no arguments specified):
     *   - passing through is disabled
     *   - auto flushing is disabled
     *
     * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
     *   - passing through (delegating request to real backend) is enabled
     *   - auto flushing is enabled
     *
     * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
     * @param {Object=} $browser Auto-flushing enabled if specified
     * @return {Object} Instance of $httpBackend mock
     */
    function createHttpBackendMock($rootScope, $timeout, $delegate, $browser)
    {
        var definitions = [],
            expectations = [],
            responses = [],
            responsesPush = angular.bind(responses, responses.push),
            copy = angular.copy;

        function createResponse(status, data, headers, statusText)
        {
            if (angular.isFunction(status)) return status;

            return function()
            {
                return angular.isNumber(status) ? [status, data, headers, statusText] : [200, status, data, headers];
            };
        }

        // TODO(vojta): change params to: method, url, data, headers, callback
        function $httpBackend(method, url, data, callback, headers, timeout, withCredentials)
        {
            var xhr = new MockXhr(),
                expectation = expectations[0],
                wasExpected = false;

            function prettyPrint(data)
            {
                return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp) ? data : angular.toJson(data);
            }

            function wrapResponse(wrapped)
            {
                if (!$browser && timeout)
                {
                    timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
                }

                return handleResponse;

                function handleResponse()
                {
                    var response = wrapped.response(method, url, data, headers, wrapped.params(url));
                    xhr.$$respHeaders = response[2];
                    callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                        copy(response[3] || ''));
                }

                function handleTimeout()
                {
                    for (var i = 0, ii = responses.length; i < ii; i++)
                    {
                        if (responses[i] === handleResponse)
                        {
                            responses.splice(i, 1);
                            callback(-1, undefined, '');
                            break;
                        }
                    }
                }
            }

            if (expectation && expectation.match(method, url))
            {
                if (!expectation.matchData(data))
                {
                    throw new Error('Expected ' + expectation + ' with different data\n' +
                        'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
                }

                if (!expectation.matchHeaders(headers))
                {
                    throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
                }

                expectations.shift();

                if (expectation.response)
                {
                    responses.push(wrapResponse(expectation));
                    return;
                }
                wasExpected = true;
            }

            var i = -1,
                definition;
            while ((definition = definitions[++i]))
            {
                if (definition.match(method, url, data, headers ||
                    {}))
                {
                    if (definition.response)
                    {
                        // if $browser specified, we do auto flush all requests
                        ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
                    }
                    else if (definition.passThrough)
                    {
                        $delegate(method, url, data, callback, headers, timeout, withCredentials);
                    }
                    else throw new Error('No response defined !');
                    return;
                }
            }
            throw wasExpected ?
                new Error('No response defined !') :
                new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                    (expectation ? 'Expected ' + expectation : 'No more request expected'));
        }

        /**
         * @ngdoc method
         * @name $httpBackend#when
         * @description
         * Creates a new backend definition.
         *
         * @param {string} method HTTP method.
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
         *   data string and returns true if the data is as expected.
         * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
         *   object and returns true if the headers match the current definition.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         *
         *  - respond –
         *      `{function([status,] data[, headers, statusText])
         *      | function(function(method, url, data, headers, params)}`
         *    – The respond method takes a set of static data to be returned or a function that can
         *    return an array containing response status (number), response data (string), response
         *    headers (Object), and the text for the status (string). The respond method returns the
         *    `requestHandler` object for possible overrides.
         */
        $httpBackend.when = function(method, url, data, headers, keys)
        {
            var definition = new MockHttpExpectation(method, url, data, headers, keys),
                chain = {
                    respond: function(status, data, headers, statusText)
                    {
                        definition.passThrough = undefined;
                        definition.response = createResponse(status, data, headers, statusText);
                        return chain;
                    }
                };

            if ($browser)
            {
                chain.passThrough = function()
                {
                    definition.response = undefined;
                    definition.passThrough = true;
                    return chain;
                };
            }

            definitions.push(definition);
            return chain;
        };

        /**
         * @ngdoc method
         * @name $httpBackend#whenGET
         * @description
         * Creates a new backend definition for GET requests. For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(Object|function(Object))=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#whenHEAD
         * @description
         * Creates a new backend definition for HEAD requests. For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(Object|function(Object))=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#whenDELETE
         * @description
         * Creates a new backend definition for DELETE requests. For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(Object|function(Object))=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#whenPOST
         * @description
         * Creates a new backend definition for POST requests. For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
         *   data string and returns true if the data is as expected.
         * @param {(Object|function(Object))=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#whenPUT
         * @description
         * Creates a new backend definition for PUT requests.  For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
         *   data string and returns true if the data is as expected.
         * @param {(Object|function(Object))=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#whenJSONP
         * @description
         * Creates a new backend definition for JSONP requests. For more info see `when()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled.
         */
        createShortMethods('when');

        /**
         * @ngdoc method
         * @name $httpBackend#whenRoute
         * @description
         * Creates a new backend definition that compares only with the requested route.
         *
         * @param {string} method HTTP method.
         * @param {string} url HTTP url string that supports colon param matching.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled. See #when for more info.
         */
        $httpBackend.whenRoute = function(method, url)
        {
            var pathObj = parseRoute(url);
            return $httpBackend.when(method, pathObj.regexp, undefined, undefined, pathObj.keys);
        };

        function parseRoute(url)
        {
            var ret = {
                    regexp: url
                },
                keys = ret.keys = [];

            if (!url || !angular.isString(url)) return ret;

            url = url
                .replace(/([().])/g, '\\$1')
                .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option)
                {
                    var optional = option === '?' ? option : null;
                    var star = option === '*' ? option : null;
                    keys.push(
                    {
                        name: key,
                        optional: !!optional
                    });
                    slash = slash || '';
                    return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (star && '(.+?)' || '([^/]+)') + (optional || '') + ')' + (optional || '');
                })
                .replace(/([\/$\*])/g, '\\$1');

            ret.regexp = new RegExp('^' + url, 'i');
            return ret;
        }

        /**
         * @ngdoc method
         * @name $httpBackend#expect
         * @description
         * Creates a new request expectation.
         *
         * @param {string} method HTTP method.
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
         *  receives data string and returns true if the data is as expected, or Object if request body
         *  is in JSON format.
         * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
         *   object and returns true if the headers match the current expectation.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *  request is handled. You can save this object for later use and invoke `respond` again in
         *  order to change how a matched request is handled.
         *
         *  - respond –
         *    `{function([status,] data[, headers, statusText])
         *    | function(function(method, url, data, headers, params)}`
         *    – The respond method takes a set of static data to be returned or a function that can
         *    return an array containing response status (number), response data (string), response
         *    headers (Object), and the text for the status (string). The respond method returns the
         *    `requestHandler` object for possible overrides.
         */
        $httpBackend.expect = function(method, url, data, headers, keys)
        {
            var expectation = new MockHttpExpectation(method, url, data, headers, keys),
                chain = {
                    respond: function(status, data, headers, statusText)
                    {
                        expectation.response = createResponse(status, data, headers, statusText);
                        return chain;
                    }
                };

            expectations.push(expectation);
            return chain;
        };

        /**
         * @ngdoc method
         * @name $httpBackend#expectGET
         * @description
         * Creates a new request expectation for GET requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled. See #expect for more info.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectHEAD
         * @description
         * Creates a new request expectation for HEAD requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectDELETE
         * @description
         * Creates a new request expectation for DELETE requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectPOST
         * @description
         * Creates a new request expectation for POST requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
         *  receives data string and returns true if the data is as expected, or Object if request body
         *  is in JSON format.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectPUT
         * @description
         * Creates a new request expectation for PUT requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
         *  receives data string and returns true if the data is as expected, or Object if request body
         *  is in JSON format.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectPATCH
         * @description
         * Creates a new request expectation for PATCH requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
         *   and returns true if the url matches the current definition.
         * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
         *  receives data string and returns true if the data is as expected, or Object if request body
         *  is in JSON format.
         * @param {Object=} headers HTTP headers.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */

        /**
         * @ngdoc method
         * @name $httpBackend#expectJSONP
         * @description
         * Creates a new request expectation for JSONP requests. For more info see `expect()`.
         *
         * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
         *   and returns true if the url matches the current definition.
         * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         *   request is handled. You can save this object for later use and invoke `respond` again in
         *   order to change how a matched request is handled.
         */
        createShortMethods('expect');

        /**
         * @ngdoc method
         * @name $httpBackend#expectRoute
         * @description
         * Creates a new request expectation that compares only with the requested route.
         *
         * @param {string} method HTTP method.
         * @param {string} url HTTP url string that supports colon param matching.
         * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
         * request is handled. You can save this object for later use and invoke `respond` again in
         * order to change how a matched request is handled. See #expect for more info.
         */
        $httpBackend.expectRoute = function(method, url)
        {
            var pathObj = parseRoute(url);
            return $httpBackend.expect(method, pathObj.regexp, undefined, undefined, pathObj.keys);
        };


        /**
         * @ngdoc method
         * @name $httpBackend#flush
         * @description
         * Flushes all pending requests using the trained responses.
         *
         * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
         *   all pending requests will be flushed. If there are no pending requests when the flush method
         *   is called an exception is thrown (as this typically a sign of programming error).
         */
        $httpBackend.flush = function(count, digest)
        {
            if (digest !== false) $rootScope.$digest();
            if (!responses.length) throw new Error('No pending request to flush !');

            if (angular.isDefined(count) && count !== null)
            {
                while (count--)
                {
                    if (!responses.length) throw new Error('No more pending request to flush !');
                    responses.shift()();
                }
            }
            else
            {
                while (responses.length)
                {
                    responses.shift()();
                }
            }
            $httpBackend.verifyNoOutstandingExpectation(digest);
        };


        /**
         * @ngdoc method
         * @name $httpBackend#verifyNoOutstandingExpectation
         * @description
         * Verifies that all of the requests defined via the `expect` api were made. If any of the
         * requests were not made, verifyNoOutstandingExpectation throws an exception.
         *
         * Typically, you would call this method following each test case that asserts requests using an
         * "afterEach" clause.
         *
         * ```js
         *   afterEach($httpBackend.verifyNoOutstandingExpectation);
         * ```
         */
        $httpBackend.verifyNoOutstandingExpectation = function(digest)
        {
            if (digest !== false) $rootScope.$digest();
            if (expectations.length)
            {
                throw new Error('Unsatisfied requests: ' + expectations.join(', '));
            }
        };


        /**
         * @ngdoc method
         * @name $httpBackend#verifyNoOutstandingRequest
         * @description
         * Verifies that there are no outstanding requests that need to be flushed.
         *
         * Typically, you would call this method following each test case that asserts requests using an
         * "afterEach" clause.
         *
         * ```js
         *   afterEach($httpBackend.verifyNoOutstandingRequest);
         * ```
         */
        $httpBackend.verifyNoOutstandingRequest = function()
        {
            if (responses.length)
            {
                throw new Error('Unflushed requests: ' + responses.length);
            }
        };


        /**
         * @ngdoc method
         * @name $httpBackend#resetExpectations
         * @description
         * Resets all request expectations, but preserves all backend definitions. Typically, you would
         * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
         * $httpBackend mock.
         */
        $httpBackend.resetExpectations = function()
        {
            expectations.length = 0;
            responses.length = 0;
        };

        return $httpBackend;


        function createShortMethods(prefix)
        {
            angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method)
            {
                $httpBackend[prefix + method] = function(url, headers, keys)
                {
                    return $httpBackend[prefix](method, url, undefined, headers, keys);
                };
            });

            angular.forEach(['PUT', 'POST', 'PATCH'], function(method)
            {
                $httpBackend[prefix + method] = function(url, data, headers, keys)
                {
                    return $httpBackend[prefix](method, url, data, headers, keys);
                };
            });
        }
    }

    function MockHttpExpectation(method, url, data, headers, keys)
    {

        this.data = data;
        this.headers = headers;

        this.match = function(m, u, d, h)
        {
            if (method != m) return false;
            if (!this.matchUrl(u)) return false;
            if (angular.isDefined(d) && !this.matchData(d)) return false;
            if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
            return true;
        };

        this.matchUrl = function(u)
        {
            if (!url) return true;
            if (angular.isFunction(url.test)) return url.test(u);
            if (angular.isFunction(url)) return url(u);
            return url == u;
        };

        this.matchHeaders = function(h)
        {
            if (angular.isUndefined(headers)) return true;
            if (angular.isFunction(headers)) return headers(h);
            return angular.equals(headers, h);
        };

        this.matchData = function(d)
        {
            if (angular.isUndefined(data)) return true;
            if (data && angular.isFunction(data.test)) return data.test(d);
            if (data && angular.isFunction(data)) return data(d);
            if (data && !angular.isString(data))
            {
                return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
            }
            return data == d;
        };

        this.toString = function()
        {
            return method + ' ' + url;
        };

        this.params = function(u)
        {
            return angular.extend(parseQuery(), pathParams());

            function pathParams()
            {
                var keyObj = {};
                if (!url || !angular.isFunction(url.test) || !keys || keys.length === 0) return keyObj;

                var m = url.exec(u);
                if (!m) return keyObj;
                for (var i = 1, len = m.length; i < len; ++i)
                {
                    var key = keys[i - 1];
                    var val = m[i];
                    if (key && val)
                    {
                        keyObj[key.name || key] = val;
                    }
                }

                return keyObj;
            }

            function parseQuery()
            {
                var obj = {},
                    key_value, key,
                    queryStr = u.indexOf('?') > -1 ? u.substring(u.indexOf('?') + 1) : "";

                angular.forEach(queryStr.split('&'), function(keyValue)
                {
                    if (keyValue)
                    {
                        key_value = keyValue.replace(/\+/g, '%20').split('=');
                        key = tryDecodeURIComponent(key_value[0]);
                        if (angular.isDefined(key))
                        {
                            var val = angular.isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
                            if (!hasOwnProperty.call(obj, key))
                            {
                                obj[key] = val;
                            }
                            else if (angular.isArray(obj[key]))
                            {
                                obj[key].push(val);
                            }
                            else
                            {
                                obj[key] = [obj[key], val];
                            }
                        }
                    }
                });
                return obj;
            }

            function tryDecodeURIComponent(value)
            {
                try
                {
                    return decodeURIComponent(value);
                }
                catch (e)
                {
                    // Ignore any invalid uri component
                }
            }
        };
    }

    function createMockXhr()
    {
        return new MockXhr();
    }

    function MockXhr()
    {

        // hack for testing $http, $httpBackend
        MockXhr.$$lastInstance = this;

        this.open = function(method, url, async)
        {
            this.$$method = method;
            this.$$url = url;
            this.$$async = async;
            this.$$reqHeaders = {};
            this.$$respHeaders = {};
        };

        this.send = function(data)
        {
            this.$$data = data;
        };

        this.setRequestHeader = function(key, value)
        {
            this.$$reqHeaders[key] = value;
        };

        this.getResponseHeader = function(name)
        {
            // the lookup must be case insensitive,
            // that's why we try two quick lookups first and full scan last
            var header = this.$$respHeaders[name];
            if (header) return header;

            name = angular.lowercase(name);
            header = this.$$respHeaders[name];
            if (header) return header;

            header = undefined;
            angular.forEach(this.$$respHeaders, function(headerVal, headerName)
            {
                if (!header && angular.lowercase(headerName) == name) header = headerVal;
            });
            return header;
        };

        this.getAllResponseHeaders = function()
        {
            var lines = [];

            angular.forEach(this.$$respHeaders, function(value, key)
            {
                lines.push(key + ': ' + value);
            });
            return lines.join('\n');
        };

        this.abort = angular.noop;
    }


    /**
     * @ngdoc service
     * @name $timeout
     * @description
     *
     * This service is just a simple decorator for {@link ng.$timeout $timeout} service
     * that adds a "flush" and "verifyNoPendingTasks" methods.
     */

    angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser)
    {

        /**
         * @ngdoc method
         * @name $timeout#flush
         * @description
         *
         * Flushes the queue of pending tasks.
         *
         * @param {number=} delay maximum timeout amount to flush up until
         */
        $delegate.flush = function(delay)
        {
            $browser.defer.flush(delay);
        };

        /**
         * @ngdoc method
         * @name $timeout#verifyNoPendingTasks
         * @description
         *
         * Verifies that there are no pending tasks that need to be flushed.
         */
        $delegate.verifyNoPendingTasks = function()
        {
            if ($browser.deferredFns.length)
            {
                throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
                    formatPendingTasksAsString($browser.deferredFns));
            }
        };

        function formatPendingTasksAsString(tasks)
        {
            var result = [];
            angular.forEach(tasks, function(task)
            {
                result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
            });

            return result.join(', ');
        }

        return $delegate;
    }];

    angular.mock.$RAFDecorator = ['$delegate', function($delegate)
    {
        var rafFn = function(fn)
        {
            var index = rafFn.queue.length;
            rafFn.queue.push(fn);
            return function()
            {
                rafFn.queue.splice(index, 1);
            };
        };

        rafFn.queue = [];
        rafFn.supported = $delegate.supported;

        rafFn.flush = function()
        {
            if (rafFn.queue.length === 0)
            {
                throw new Error('No rAF callbacks present');
            }

            var length = rafFn.queue.length;
            for (var i = 0; i < length; i++)
            {
                rafFn.queue[i]();
            }

            rafFn.queue = rafFn.queue.slice(i);
        };

        return rafFn;
    }];

    /**
     *
     */
    angular.mock.$RootElementProvider = function()
    {
        this.$get = function()
        {
            return angular.element('<div ng-app></div>');
        };
    };

    /**
     * @ngdoc service
     * @name $controller
     * @description
     * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
     * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
     *
     *
     * ## Example
     *
     * ```js
     *
     * // Directive definition ...
     *
     * myMod.directive('myDirective', {
     *   controller: 'MyDirectiveController',
     *   bindToController: {
     *     name: '@'
     *   }
     * });
     *
     *
     * // Controller definition ...
     *
     * myMod.controller('MyDirectiveController', ['log', function($log) {
     *   $log.info(this.name);
     * })];
     *
     *
     * // In a test ...
     *
     * describe('myDirectiveController', function() {
     *   it('should write the bound name to the log', inject(function($controller, $log) {
     *     var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
     *     expect(ctrl.name).toEqual('Clark Kent');
     *     expect($log.info.logs).toEqual(['Clark Kent']);
     *   });
     * });
     *
     * ```
     *
     * @param {Function|string} constructor If called with a function then it's considered to be the
     *    controller constructor function. Otherwise it's considered to be a string which is used
     *    to retrieve the controller constructor using the following steps:
     *
     *    * check if a controller with given name is registered via `$controllerProvider`
     *    * check if evaluating the string on the current scope returns a constructor
     *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
     *      `window` object (not recommended)
     *
     *    The string can use the `controller as property` syntax, where the controller instance is published
     *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
     *    to work correctly.
     *
     * @param {Object} locals Injection locals for Controller.
     * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
     *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
     * @return {Object} Instance of given controller.
     */
    angular.mock.$ControllerDecorator = ['$delegate', function($delegate)
    {
        return function(expression, locals, later, ident)
        {
            if (later && typeof later === 'object')
            {
                var create = $delegate(expression, locals, true, ident);
                angular.extend(create.instance, later);
                return create();
            }
            return $delegate(expression, locals, later, ident);
        };
    }];


    /**
     * @ngdoc module
     * @name ngMock
     * @packageName angular-mocks
     * @description
     *
     * # ngMock
     *
     * The `ngMock` module provides support to inject and mock Angular services into unit tests.
     * In addition, ngMock also extends various core ng services such that they can be
     * inspected and controlled in a synchronous manner within test code.
     *
     *
     * <div doc-module-components="ngMock"></div>
     *
     */
    angular.module('ngMock', ['ng']).provider(
    {
        $browser: angular.mock.$BrowserProvider,
        $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
        $log: angular.mock.$LogProvider,
        $interval: angular.mock.$IntervalProvider,
        $httpBackend: angular.mock.$HttpBackendProvider,
        $rootElement: angular.mock.$RootElementProvider
    }).config(['$provide', function($provide)
    {
        $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
        $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
        $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
        $provide.decorator('$controller', angular.mock.$ControllerDecorator);
    }]);

    /**
     * @ngdoc module
     * @name ngMockE2E
     * @module ngMockE2E
     * @packageName angular-mocks
     * @description
     *
     * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
     * Currently there is only one mock present in this module -
     * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
     */
    angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    }]);

    /**
     * @ngdoc service
     * @name $httpBackend
     * @module ngMockE2E
     * @description
     * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
     * applications that use the {@link ng.$http $http service}.
     *
     * *Note*: For fake http backend implementation suitable for unit testing please see
     * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
     *
     * This implementation can be used to respond with static or dynamic responses via the `when` api
     * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
     * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
     * templates from a webserver).
     *
     * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
     * is being developed with the real backend api replaced with a mock, it is often desirable for
     * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
     * templates or static files from the webserver). To configure the backend with this behavior
     * use the `passThrough` request handler of `when` instead of `respond`.
     *
     * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
     * testing. For this reason the e2e $httpBackend flushes mocked out requests
     * automatically, closely simulating the behavior of the XMLHttpRequest object.
     *
     * To setup the application to run with this http backend, you have to create a module that depends
     * on the `ngMockE2E` and your application modules and defines the fake backend:
     *
     * ```js
     *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
     *   myAppDev.run(function($httpBackend) {
     *     phones = [{name: 'phone1'}, {name: 'phone2'}];
     *
     *     // returns the current list of phones
     *     $httpBackend.whenGET('/phones').respond(phones);
     *
     *     // adds a new phone to the phones array
     *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
     *       var phone = angular.fromJson(data);
     *       phones.push(phone);
     *       return [200, phone, {}];
     *     });
     *     $httpBackend.whenGET(/^\/templates\//).passThrough();
     *     //...
     *   });
     * ```
     *
     * Afterwards, bootstrap your app with this new module.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#when
     * @module ngMockE2E
     * @description
     * Creates a new backend definition.
     *
     * @param {string} method HTTP method.
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(string|RegExp)=} data HTTP request body.
     * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
     *   object and returns true if the headers match the current definition.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     *
     *  - respond –
     *    `{function([status,] data[, headers, statusText])
     *    | function(function(method, url, data, headers, params)}`
     *    – The respond method takes a set of static data to be returned or a function that can return
     *    an array containing response status (number), response data (string), response headers
     *    (Object), and the text for the status (string).
     *  - passThrough – `{function()}` – Any request matching a backend definition with
     *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
     *    to the server.)
     *  - Both methods return the `requestHandler` object for possible overrides.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenGET
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for GET requests. For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenHEAD
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for HEAD requests. For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenDELETE
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for DELETE requests. For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenPOST
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for POST requests. For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(string|RegExp)=} data HTTP request body.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenPUT
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for PUT requests.  For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(string|RegExp)=} data HTTP request body.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenPATCH
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for PATCH requests.  For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(string|RegExp)=} data HTTP request body.
     * @param {(Object|function(Object))=} headers HTTP headers.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */

    /**
     * @ngdoc method
     * @name $httpBackend#whenJSONP
     * @module ngMockE2E
     * @description
     * Creates a new backend definition for JSONP requests. For more info see `when()`.
     *
     * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
     *   and returns true if the url matches the current definition.
     * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
     *   {@link ngMock.$httpBackend $httpBackend mock}.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */
    /**
     * @ngdoc method
     * @name $httpBackend#whenRoute
     * @module ngMockE2E
     * @description
     * Creates a new backend definition that compares only with the requested route.
     *
     * @param {string} method HTTP method.
     * @param {string} url HTTP url string that supports colon param matching.
     * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
     *   control how a matched request is handled. You can save this object for later use and invoke
     *   `respond` or `passThrough` again in order to change how a matched request is handled.
     */
    angular.mock.e2e = {};
    angular.mock.e2e.$httpBackendDecorator = ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


    /**
     * @ngdoc type
     * @name $rootScope.Scope
     * @module ngMock
     * @description
     * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
     * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
     * `ngMock` module is loaded.
     *
     * In addition to all the regular `Scope` methods, the following helper methods are available:
     */
    angular.mock.$RootScopeDecorator = ['$delegate', function($delegate)
    {

        var $rootScopePrototype = Object.getPrototypeOf($delegate);

        $rootScopePrototype.$countChildScopes = countChildScopes;
        $rootScopePrototype.$countWatchers = countWatchers;

        return $delegate;

        // ------------------------------------------------------------------------------------------ //

        /**
         * @ngdoc method
         * @name $rootScope.Scope#$countChildScopes
         * @module ngMock
         * @description
         * Counts all the direct and indirect child scopes of the current scope.
         *
         * The current scope is excluded from the count. The count includes all isolate child scopes.
         *
         * @returns {number} Total number of child scopes.
         */
        function countChildScopes()
        {
            // jshint validthis: true
            var count = 0; // exclude the current scope
            var pendingChildHeads = [this.$$childHead];
            var currentScope;

            while (pendingChildHeads.length)
            {
                currentScope = pendingChildHeads.shift();

                while (currentScope)
                {
                    count += 1;
                    pendingChildHeads.push(currentScope.$$childHead);
                    currentScope = currentScope.$$nextSibling;
                }
            }

            return count;
        }


        /**
         * @ngdoc method
         * @name $rootScope.Scope#$countWatchers
         * @module ngMock
         * @description
         * Counts all the watchers of direct and indirect child scopes of the current scope.
         *
         * The watchers of the current scope are included in the count and so are all the watchers of
         * isolate child scopes.
         *
         * @returns {number} Total number of watchers.
         */
        function countWatchers()
        {
            // jshint validthis: true
            var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
            var pendingChildHeads = [this.$$childHead];
            var currentScope;

            while (pendingChildHeads.length)
            {
                currentScope = pendingChildHeads.shift();

                while (currentScope)
                {
                    count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
                    pendingChildHeads.push(currentScope.$$childHead);
                    currentScope = currentScope.$$nextSibling;
                }
            }

            return count;
        }
    }];


    if (window.jasmine || window.mocha)
    {

        var currentSpec = null,
            annotatedFunctions = [],
            isSpecRunning = function()
            {
                return !!currentSpec;
            };

        angular.mock.$$annotate = angular.injector.$$annotate;
        angular.injector.$$annotate = function(fn)
        {
            if (typeof fn === 'function' && !fn.$inject)
            {
                annotatedFunctions.push(fn);
            }
            return angular.mock.$$annotate.apply(this, arguments);
        };


        (window.beforeEach || window.setup)(function()
        {
            annotatedFunctions = [];
            currentSpec = this;
        });

        (window.afterEach || window.teardown)(function()
        {
            var injector = currentSpec.$injector;

            annotatedFunctions.forEach(function(fn)
            {
                delete fn.$inject;
            });

            angular.forEach(currentSpec.$modules, function(module)
            {
                if (module && module.$$hashKey)
                {
                    module.$$hashKey = undefined;
                }
            });

            currentSpec.$injector = null;
            currentSpec.$modules = null;
            currentSpec = null;

            if (injector)
            {
                injector.get('$rootElement').off();
            }

            // clean up jquery's fragment cache
            angular.forEach(angular.element.fragments, function(val, key)
            {
                delete angular.element.fragments[key];
            });

            MockXhr.$$lastInstance = null;

            angular.forEach(angular.callbacks, function(val, key)
            {
                delete angular.callbacks[key];
            });
            angular.callbacks.counter = 0;
        });

        /**
         * @ngdoc function
         * @name angular.mock.module
         * @description
         *
         * *NOTE*: This function is also published on window for easy access.<br>
         * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
         *
         * This function registers a module configuration code. It collects the configuration information
         * which will be used when the injector is created by {@link angular.mock.inject inject}.
         *
         * See {@link angular.mock.inject inject} for usage example
         *
         * @param {...(string|Function|Object)} fns any number of modules which are represented as string
         *        aliases or as anonymous module initialization functions. The modules are used to
         *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
         *        object literal is passed they will be registered as values in the module, the key being
         *        the module name and the value being what is returned.
         */
        window.module = angular.mock.module = function()
        {
            var moduleFns = Array.prototype.slice.call(arguments, 0);
            return isSpecRunning() ? workFn() : workFn;
            /////////////////////
            function workFn()
            {
                if (currentSpec.$injector)
                {
                    throw new Error('Injector already created, can not register a module!');
                }
                else
                {
                    var fn, modules = currentSpec.$modules || (currentSpec.$modules = []);
                    angular.forEach(moduleFns, function(module)
                    {
                        if (angular.isObject(module) && !angular.isArray(module))
                        {
                            fn = function($provide)
                            {
                                angular.forEach(module, function(value, key)
                                {
                                    $provide.value(key, value);
                                });
                            };
                        }
                        else
                        {
                            fn = module;
                        }
                        if (currentSpec.$providerInjector)
                        {
                            currentSpec.$providerInjector.invoke(fn);
                        }
                        else
                        {
                            modules.push(fn);
                        }
                    });
                }
            }
        };

        /**
         * @ngdoc function
         * @name angular.mock.inject
         * @description
         *
         * *NOTE*: This function is also published on window for easy access.<br>
         * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
         *
         * The inject function wraps a function into an injectable function. The inject() creates new
         * instance of {@link auto.$injector $injector} per test, which is then used for
         * resolving references.
         *
         *
         * ## Resolving References (Underscore Wrapping)
         * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
         * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
         * that is declared in the scope of the `describe()` block. Since we would, most likely, want
         * the variable to have the same name of the reference we have a problem, since the parameter
         * to the `inject()` function would hide the outer variable.
         *
         * To help with this, the injected parameters can, optionally, be enclosed with underscores.
         * These are ignored by the injector when the reference name is resolved.
         *
         * For example, the parameter `_myService_` would be resolved as the reference `myService`.
         * Since it is available in the function body as _myService_, we can then assign it to a variable
         * defined in an outer scope.
         *
         * ```
         * // Defined out reference variable outside
         * var myService;
         *
         * // Wrap the parameter in underscores
         * beforeEach( inject( function(_myService_){
         *   myService = _myService_;
         * }));
         *
         * // Use myService in a series of tests.
         * it('makes use of myService', function() {
         *   myService.doStuff();
         * });
         *
         * ```
         *
         * See also {@link angular.mock.module angular.mock.module}
         *
         * ## Example
         * Example of what a typical jasmine tests looks like with the inject method.
         * ```js
         *
         *   angular.module('myApplicationModule', [])
         *       .value('mode', 'app')
         *       .value('version', 'v1.0.1');
         *
         *
         *   describe('MyApp', function() {
         *
         *     // You need to load modules that you want to test,
         *     // it loads only the "ng" module by default.
         *     beforeEach(module('myApplicationModule'));
         *
         *
         *     // inject() is used to inject arguments of all given functions
         *     it('should provide a version', inject(function(mode, version) {
         *       expect(version).toEqual('v1.0.1');
         *       expect(mode).toEqual('app');
         *     }));
         *
         *
         *     // The inject and module method can also be used inside of the it or beforeEach
         *     it('should override a version and test the new version is injected', function() {
         *       // module() takes functions or strings (module aliases)
         *       module(function($provide) {
         *         $provide.value('version', 'overridden'); // override version here
         *       });
         *
         *       inject(function(version) {
         *         expect(version).toEqual('overridden');
         *       });
         *     });
         *   });
         *
         * ```
         *
         * @param {...Function} fns any number of functions which will be injected using the injector.
         */



        var ErrorAddingDeclarationLocationStack = function(e, errorForStack)
        {
            this.message = e.message;
            this.name = e.name;
            if (e.line) this.line = e.line;
            if (e.sourceId) this.sourceId = e.sourceId;
            if (e.stack && errorForStack)
                this.stack = e.stack + '\n' + errorForStack.stack;
            if (e.stackArray) this.stackArray = e.stackArray;
        };
        ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

        window.inject = angular.mock.inject = function()
        {
            var blockFns = Array.prototype.slice.call(arguments, 0);
            var errorForStack = new Error('Declaration Location');
            return isSpecRunning() ? workFn.call(currentSpec) : workFn;
            /////////////////////
            function workFn()
            {
                var modules = currentSpec.$modules || [];
                var strictDi = !!currentSpec.$injectorStrict;
                modules.unshift(function($injector)
                {
                    currentSpec.$providerInjector = $injector;
                });
                modules.unshift('ngMock');
                modules.unshift('ng');
                var injector = currentSpec.$injector;
                if (!injector)
                {
                    if (strictDi)
                    {
                        // If strictDi is enabled, annotate the providerInjector blocks
                        angular.forEach(modules, function(moduleFn)
                        {
                            if (typeof moduleFn === "function")
                            {
                                angular.injector.$$annotate(moduleFn);
                            }
                        });
                    }
                    injector = currentSpec.$injector = angular.injector(modules, strictDi);
                    currentSpec.$injectorStrict = strictDi;
                }
                for (var i = 0, ii = blockFns.length; i < ii; i++)
                {
                    if (currentSpec.$injectorStrict)
                    {
                        // If the injector is strict / strictDi, and the spec wants to inject using automatic
                        // annotation, then annotate the function here.
                        injector.annotate(blockFns[i]);
                    }
                    try
                    {
                        /* jshint -W040 */
                        /* Jasmine explicitly provides a `this` object when calling functions */
                        injector.invoke(blockFns[i] || angular.noop, this);
                        /* jshint +W040 */
                    }
                    catch (e)
                    {
                        if (e.stack && errorForStack)
                        {
                            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
                        }
                        throw e;
                    }
                    finally
                    {
                        errorForStack = null;
                    }
                }
            }
        };


        angular.mock.inject.strictDi = function(value)
        {
            value = arguments.length ? !!value : true;
            return isSpecRunning() ? workFn() : workFn;

            function workFn()
            {
                if (value !== currentSpec.$injectorStrict)
                {
                    if (currentSpec.$injector)
                    {
                        throw new Error('Injector already created, can not modify strict annotations');
                    }
                    else
                    {
                        currentSpec.$injectorStrict = value;
                    }
                }
            }
        };
    }


})(window, window.angular);
;/*
angular.module('mocks.api')
.run(function(Mocks, $log)
{
    //-------------------------------------------------------------
    Mocks.whenGET("Events/Details", function(method, url, data)
    {
        var now = new Date();
        var result = {
            title: "Clase de Actuación",
            description: "ventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ",
            knowledge:
            {
                name: "Actuación",
                recommendations: 25
            },
            participants: 30,
            date: (new Date()).toISOString(),
            user:
            {
                "fullname": "Sebastian Moreno",
                "photo": "bundles/mocks/images/avatar1.png",
                "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
            },
            tags: [
                "AireLibre",
                "Cerro",
                "Fit",
                "VidaSana",
                "Prueba",
                "LasCondes"
            ],
            comments: [
            {
                createdAt: new Date(now.getTime() - (1000 * 10)).toISOString(),
                user:
                {
                    "fullName": "Sebastian Moreno",
                    "photo": "bundles/mocks/images/avatar1.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                comment: "unt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libe"
            },
            {
                createdAt: new Date(now.getTime() - (1500 * 10)).toISOString(),
                user:
                {
                    "fullName": "Fabian Elgueta",
                    "photo": "bundles/mocks/images/avatar2.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                comment: "t know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some g"
            }]
        };


        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------


    //-------------------------------------------------------------
    Mocks.whenGET("Events/Tags", function(method, url, data)
    {
        var result = {
            "offset": 0,
            "limit": 10,
            "total": 1,
            "elapsedTime": "00:00:00.0214845",
            "items": [
            {
                "name": "Trekking"
            },
            {
                "name": "Gestión"
            },
            {
                "name": "Emprendimiento"
            }]
        };


        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

    //-------------------------------------------------------------
    Mocks.whenGET("Events/Search", function(method, url, data)
    {
        var result = {
            "limit": 10,
            "offset": 0,
            "total": 5,
            "items": [
            {
                "date": "2016-01-20T00:00:00-03:00",
                "createdAt": "2016-01-20T19:48:21.41-03:00",
                "description": "ng through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in c",
                "locarion": null,
                "name": "Evento de Ejemplo",
                "updateAt": "2016-01-20T19:48:21.41-03:00",
                "token": "6f83b2ff-69d7-449c-95b5-7b8f187404b0",
                "knowledge":
                {
                    "name": "Trekking",
                    "token": "117fa83f-836c-44bc-a562-c035421cb882"
                },
                "type":
                {
                    "name": null,
                    "token": "127fa83f-236c-44bc-a562-c035421cb882"
                },
                "user":
                {
                    "fullName": "Sebastian Moreno",
                    "photo": "bundles/mocks/images/avatar1.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                "tags": [
                    "AireLibre",
                    "Cerro",
                    "Fit",
                    "VidaSana",
                    "Prueba",
                    "LasCondes"
                ]
            },
            {
                "date": "2016-01-19T17:28:20.48-03:00",
                "createdAt": "2016-01-19T15:06:48.457-03:00",
                "description": " perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt",
                "locarion": null,
                "name": "Evento de Prueba",
                "updateAt": "2016-01-19T15:06:48.457-03:00",
                "token": "a1134548-1be5-4de9-bfc4-628873763a5b",
                "knowledge":
                {
                    "name": "Trekking",
                    "token": "117fa83f-836c-44bc-a562-c035421cb882"
                },
                "type":
                {
                    "name": null,
                    "token": "00000000-0000-0000-0000-000000000000"
                },
                "user":
                {
                    "fullName": "Fabian Elgueta",
                    "photo": "bundles/mocks/images/avatar2.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                "tags": [
                    "AireLibre",
                    "Cerro",
                    "Fit",
                    "VidaSana",
                    "Prueba",
                    "LasCondes",
                    "Healthy",
                    "Running",
                    "Free",
                    "Working",
                    "Sport",
                    "Las Condes"
                ]
            },
            {
                "date": "2016-01-19T17:28:20.48-03:00",
                "createdAt": "2016-01-19T15:07:07.33-03:00",
                "description": "us modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse",
                "locarion": null,
                "name": "Angular Ionic",
                "updateAt": "2016-01-19T15:07:07.33-03:00",
                "token": "4bb61b55-9139-4458-b606-183019f2d304",
                "knowledge":
                {
                    "name": "AngularJS",
                    "token": "ec6e2c28-23fa-4f05-bd7d-c478e1395130"
                },
                "type":
                {
                    "name": null,
                    "token": "00000000-0000-0000-0000-000000000000"
                },
                "user":
                {
                    "fullName": "David Antonio",
                    "photo": "bundles/mocks/images/avatar3.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                "tags": [
                    "AngularJS",
                    "Ionic",
                    "Charla",
                    "Providencia"
                ]
            },
            {
                "date": "2016-01-19T17:28:20.48-03:00",
                "createdAt": "2016-01-19T15:07:29.16-03:00",
                "description": "ose who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can p",
                "locarion": null,
                "name": "Curso AngularJS",
                "updateAt": "2016-01-19T15:07:29.16-03:00",
                "token": "fb9e8aee-9242-4df2-8462-d0d5b0aaedd4",
                "knowledge":
                {
                    "name": "ionic",
                    "token": "35ebc2f7-0aef-4e16-9ab2-9f0f03034e72"
                },
                "type":
                {
                    "name": null,
                    "token": "00000000-0000-0000-0000-000000000000"
                },
                "user":
                {
                    "fullName": "David Antonio",
                    "photo": "bundles/mocks/images/avatar3.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                "tags": [
                    "AngularJS",
                    "Ionic",
                    "Charla",
                    "Providencia"
                ]
            },
            {
                "date": "2016-01-19T17:28:20.48-03:00",
                "createdAt": "2016-01-19T15:08:20.19-03:00",
                "description": "vident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis v",
                "locarion": null,
                "name": "Desarrollando un proyecto en 30 días",
                "updateAt": "2016-01-19T15:08:20.19-03:00",
                "token": "4d86b2d6-9eab-4cc4-b468-4a856a3fc913",
                "knowledge":
                {
                    "name": "Gale",
                    "token": "514baf4f-093c-49c2-ac8f-956be713fa46"
                },
                "type":
                {
                    "name": null,
                    "token": "00000000-0000-0000-0000-000000000000"
                },
                "user":
                {
                    "fullName": "David Antonio",
                    "photo": "bundles/mocks/images/avatar3.png",
                    "token": "e6dc2176-6f74-4d3c-b1b4-06680d865b8f"
                },
                "tags": [
                    "Motivacional",
                    "Innovación",
                    "Emprendimiento",
                    "Providencia"
                ]
            }]
        };


        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------
});
*/;/*
angular.module('mocks.api')
.run(function(Mocks, $log)
{


    //-------------------------------------------------------------
    Mocks.whenGET("Knowledges/MostRequested", function(method, url, data)
    {
        var items = [
        {
            name: "Trekking",
            requested: 70,
        },
        {
            name: "Sushi",
            requested: 67,
        },
        {
            name: "Coaching",
            requested: 59
        },
        {
            name: "Gestión Laboral",
            requested: 52
        },
        {
            name: "Emprendimiento",
            requested: 30
        },
        {
            name: "AngularJS",
            requested: 24
        },
        {
            name: "Ionic",
            requested: 20
        }];


        return [
            200,
            items,
            {}
        ];
    });
    //-------------------------------------------------------------

return; 

    //-------------------------------------------------------------
    Mocks.whenGET("Knowledges", function(method, url, data)
    {
        var items = [
        {
            name: "Trekking",
            token: "e614c1ce-10d2-4f41-ab56-d169be113253",
            counts:
            {
                recomendations: 20,
                delivered: 100
            }
        },
        {
            name: "Sushi",
            token: "e614c1ce-10d2-4f41-ab56-d169be113253",
            counts:
            {
                recomendations: 12,
                delivered: 20
            }
        },
        {
            name: "Yoga",
            token: "e614c1ce-10d2-4f41-ab56-d169be113253",
            counts:
            {
                recomendations: 5,
                delivered: 10
            }
        }];


        return [
            200,
            {
                items: items
            },
            {}
        ];
    });
    //-------------------------------------------------------------


});
*/;angular.module('mocks.api')
.run(function(Mocks, $log)
{
    //-------------------------------------------------------------
    Mocks.whenGET("/Notifications", function(method, url, data)
    {
        var now = new Date();
        var result = {
            timestamp: now.toISOString(),
            items: [
            {
                createdAt: new Date(now.getTime() - (1000 * 10)).toISOString(),
                name: "Ruta Compartida",
                observation: "Juan Jorquera esta realizando una de tus rutas",
                image: "bundles/mocks/images/avatar1.png",
                readed: false,
                type:
                {
                    identifier: "INFO",
                    name: "Información"
                }
            },
            {
                createdAt: new Date(now.getTime() - (1000 * 8)).toISOString(),
                name: "Tienes un nuevo seguidor/a",
                observation: "Ligia Alcayaga a comenzado a seguirte",
                image: "bundles/mocks/images/avatar2.png",
                readed: false,
                type:
                {
                    identifier: "INFO",
                    name: "Información"
                }
            },
            {
                createdAt: new Date(now.getTime() - (1000 * 6)).toISOString(),
                name: "Actualización de Embajador",
                observation: "Chaleco Lopez acaba de compartir una nueva ruta",
                image: "bundles/mocks/images/avatar4.png",
                readed: false,
                type:
                {
                    identifier: "INFO",
                    name: "Información"
                }
            },
            {
                createdAt: new Date(now.getTime() - (1000 * 4)).toISOString(),
                name: "Nueva Medalla",
                observation: "Has ganado la medalla 'A la aventura'",
                image: "bundles/mocks/images/avatar5.png",
                readed: false,
                type:
                {
                    identifier: "INFO",
                    name: "Información"
                }
            }]
        };

        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

    //-------------------------------------------------------------
    Mocks.whenPUT("/Notifications/MarkAsReaded", function(method, url, data)
    {
        return [
            200,
            {},
            {}
        ];
    });
    //-------------------------------------------------------------
});
;/*
angular.module('mocks.api')
.run(function(Mocks, $log)
{
    //-------------------------------------------------------------
    Mocks.whenGET("Places", function(method, url, data)
    {

        var items = [
        {
            address: "Nueva de Lyon 96, Providencia, Providencia, Región Metropolitana, Chile",
            capacity: 40,
            createdAt: "2016-02-06T13:04:01.457-03:00",
            latitude: -33.4208741,
            longitude: -70.61063949999999,
            name: "Oficina Valentys",
            tip: "Oficina 701, piso 7",
            token: "8f76d956-e136-41bb-b017-46ef5b0d9503",
            creator:
            {
                fullname: "David Antonio Muñoz Gaete",
                photo: null,
                token: "811fc234-9026-42ca-8b0d-f80ea57aa61c"
            }
        },
        {
            address: "Nueva de Lyon 96, Providencia, Providencia, Región Metropolitana, Chile",
            capacity: 40,
            createdAt: "2016-02-06T13:04:01.457-03:00",
            latitude: -33.4208741,
            longitude: -70.61063949999999,
            name: "Oficina Valentys",
            tip: "Oficina 701, piso 7",
            token: "8f76d956-e136-41bb-b017-46ef5b0d9503",
            creator:
            {
                fullname: "David Antonio Muñoz Gaete",
                photo: null,
                token: "811fc234-9026-42ca-8b0d-f80ea57aa61c"
            }
        },
        {
            address: "Nueva de Lyon 96, Providencia, Providencia, Región Metropolitana, Chile",
            capacity: 40,
            createdAt: "2016-02-06T13:04:01.457-03:00",
            latitude: -33.4208741,
            longitude: -70.61063949999999,
            name: "Oficina Valentys",
            tip: "Oficina 701, piso 7",
            token: "8f76d956-e136-41bb-b017-46ef5b0d9503",
            creator:
            {
                fullname: "David Antonio Muñoz Gaete",
                photo: null,
                token: "811fc234-9026-42ca-8b0d-f80ea57aa61c"
            }
        }];


        return [
            200,
            {
                items: items
            },
            {}
        ];
    });
    //-------------------------------------------------------------
});
*/;/*
angular.module('mocks.api')
.run(function(Mocks, $log)
{
    //-------------------------------------------------------------
    Mocks.whenPOST("Security/Authorize", function(method, url, data)
    {

        var user = angular.fromJson(data);

        if (user.username == "a")
        {
            //SIMULATE ERROR
            return [
                400,
                {
                    "error": "BAD_USER_OR_PASSWORD",
                    "error_description": null
                },
                {}
            ];
        }
        else
        {
            //SIMULATE RESPONSE OK!
            return [
                200,
                {
                    "expires_in": 1426991771,
                    "token_type": "Bearer",
                    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRtdW5vemdhZXRlQGdtYWlsLmNvbSIsInByaW1hcnlzaWQiOiI4MTFmYzIzNC05MDI2LTQyY2EtOGIwZC1mODBlYTU3YWE2MWMiLCJ1bmlxdWVfbmFtZSI6IkRhdmlkIEFudG9uaW8gTXXDsW96IEdhZXRlIiwicGhvdG8iOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJyb2xlIjoiUk9PVCIsImlzcyI6Ik9BdXRoU2VydmVyIiwiYXVkIjoiT0F1dGhDbGllbnQiLCJleHAiOjE0ODU2NDE5ODAsIm5iZiI6MTQ1NDEwNTk4MH0.FovwfTuqq6s3P-r8yAx3qavszmHiynG_KnN05LUwel8"
                },
                {}
            ];
        }

    });
    //-------------------------------------------------------------

});
*/;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('commentsViewer', function($window)
{
    return {
        restrict: 'E',
        scope:
        {
            event: '=',
            onAddComment: '&'
        },
        templateUrl: 'bundles/widul/components/comments-viewer/comments-viewer.tpl.html',
        controller: function($scope, $element, $q, $Api, $log, $timeout, $restrictedAccess)
        {
            $scope.model = {};

            fetch = function()
            {
                var offset = 0;
                var limit = 5;
                var totalRows = 0;

                var paginate = function()
                {
                    return $Api.read("Events/{event}/Comments",
                    {
                        event: $scope.event,
                        params:
                        {
                            limit: limit,
                            offset: offset
                        }
                    }).success(function(data)
                    {
                        //UPDATE OFFSET COUNTER
                        offset += data.items.length;
                        totalRows = data.total;

                    });
                };

                paginate().success(function(data)
                {
                    //Set Items to List (RESETING)
                    $scope.model.items = data.items;
                });

                return {
                    total: function()
                    {
                        return totalRows;
                    },
                    nextPage: function()
                    {
                        return paginate();
                    },
                    hasNext: function()
                    {
                        return totalRows > 0 && offset < totalRows;
                    }
                };
            };


            //Set Starting Point Pagination (delay for smoothness)
            var delay = $timeout(function()
            {
                $scope.pagination = fetch();

                $timeout.cancel(delay);
            }, 300);

            //------------------------------------------------
            // Action's
            $scope.comment = function(event, newlyComment)
            {
                $restrictedAccess.validate().then(function()
                {
                    var delay = $timeout(function()
                    {
                        //--------------------------------------------
                        // Create New Comment
                        $Api.create("Events/{{event}}/Comments",
                            {
                                event: $scope.event,
                                comment: newlyComment
                            })
                            .success(function(comment)
                            {
                                //Add the new Comment
                                $scope.model.items.splice(0, 0, comment);

                                if($scope.onAddComment()){
                                    $scope.onAddComment()(comment);
                                };
                            })
                            .finally(function()
                            {
                                newlyComment.comment = "";
                                newlyComment.isCreating = false;
                            });
                        //--------------------------------------------

                        $timeout.cancel(delay);
                    }, 250);

                    //Set "meanwhile" value
                    newlyComment.isCreating = true;

                });
            };


            $scope.nextPage = function()
            {
                return $scope.pagination.nextPage().success(function(data)
                {
                    $scope.model.items = $scope.model.items.concat(data.items);
                });
            };

            $scope.hasNext = function()
            {
                return $scope.pagination.hasNext();
            };
        },
        link: function(scope, element, attrs, ctrl) {

        }
    };
});
;// SERVICE
angular.module('widul.components')
    .provider('$friendsSelectorDialog', function()
    {
        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'FriendsSelectorDialogController',
                        templateUrl: 'bundles/widul/components/friends-selector/friends-selector-dialog.tpl.html',
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: true
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            return self;
        };
    });
;//MODAL CONTROLLER
angular.module('widul.components')
    .controller('FriendsSelectorDialogController', function(
        $scope,
        $log,
        $q,
        $mdDialog,
        $timeout,
        $Api
    )
    {
        //---------------------------------------------------
        // Model
        $scope.model = {
            invites: []
        };

        fetch = function()
        {

            var offset = 0;
            var limit = 10;
            var totalRows = 0;

            var paginate = function()
            {
                return $Api.read("Accounts/Me/Friends/",
                {

                    limit: limit,
                    offset: offset

                }).success(function(data)
                {
                    //UPDATE OFFSET COUNTER
                    offset += data.items.length;
                    totalRows = data.total;

                });
            };

            paginate().success(function(data)
            {
                //Set Items to List (RESETING)
                $scope.model.friends = data.items;
            });

            return {
                total: function()
                {
                    return totalRows;
                },
                nextPage: function()
                {
                    return paginate();
                },
                hasNext: function()
                {
                    return totalRows > 0 && offset < totalRows;
                }
            };
        };


        //Set Starting Point Pagination (delay for smoothness)
        $scope.pagination = fetch();


        //-------------------------------------------
        // Function's
        $scope.friends = {
            onSelect: function(friend)
            {
                if (friend)
                {
                    //Try to find in the friends list :P
                    var exists = _.find($scope.model.friends,
                    {
                        token: friend.token
                    });
                    if (exists)
                    {
                        friend = exists;
                    }

                    //If the friend is not selected yet, toggle
                    if (!friend.selected)
                    {
                        $scope.toggleFriend(friend);
                    }

                    $scope.searchText = '';
                    $scope.friendsSelected = undefined;

                    //CAN FIX OTHER WAY :S!! 
                    //https://github.com/angular/material/issues/3287
                    $timeout(function()
                    {
                        var elm = angular.element(document.getElementById("buggyAutocomplete"));
                        elm.find("input").val("");
                    }, 0);

                }
            },
            onClear: function(name) {

            },
            find: function(query)
            {
                var deferred = $q.defer();

                $Api.read("Accounts/Find",
                {
                    q: query,
                    limit: 10,
                    offset: 0

                }).success(function(data)
                {
                    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

                    //If no accounts finded, but is an Email
                    if (data.items.length == 0 && EMAIL_REGEXP.test(query.toLowerCase()))
                    {

                        //Organic Growth
                        //Add the posibility to send 
                        //invitation to the Non Widul User
                        deferred.resolve([
                        {
                            type: "mail",
                            token: query,
                            photo: null,
                            fullname: query
                        }]);

                    }
                    else
                    {
                        deferred.resolve(data.items);
                    }
                });

                return deferred.promise;

            }
        };
        //-------------------------------------------
        // Function's
        $scope.toggleFriend = function(friend, skipToggle)
        {

            if (!skipToggle)
            {
                friend.selected = !friend.selected
            }

            //Update Invites 
            if (friend.selected)
            {
                //Add to Invites List
                $scope.model.invites.push(friend);

            }
            else
            {
                //Remove from Invites List
                _.remove($scope.model.invites,
                {
                    token: friend.token
                });

            }

        };
        $scope.removeSelectedFriend = function(friend)
        {
            friend.selected = false;
            _.remove($scope.model.invites,
            {
                token: friend.token
            });
        }

        //-------------------------------------------
        // Action's
        $scope.nextPage = function()
        {
            return $scope.pagination.nextPage().success(function(data)
            {
                $scope.model.friends = $scope.model.friends.concat(data.items);
            });
        };

        $scope.hasNext = function()
        {
            return $scope.pagination.hasNext();
        };

        $scope.save = function(model)
        {
            $mdDialog.hide(model.invites);
        };

        $scope.cancel = function()
        {
            $mdDialog.cancel();
        };

    });
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('knowledgeSelector', function($interpolate)
{
    return {
        restrict: 'E',
        require: ['ngModel'],
        scope:
        {
            ngModel: '=' // Ng-Model
        },
        transclude: true,
        templateUrl: 'bundles/widul/components/knowledge-selector/knowledge-selector.tpl.html',
        compile: function()
        {
            return {             
                post: function(scope, element, attrs, controller, transcludeFn)
                {         

                    //Watch Disabled Attr (and ng-disabled too)
                    attrs.$observe('disabled', function(val)
                    {
                        if (val === "")
                        {
                            val = true;
                        }
                        scope.disabled = val;
                    });

                }         
            };
        },
        controller: function($scope, $element, $knowledgeSelectorDialog, $q)
        {
            $scope.data = {
                placeholder: $scope.placeholder,
                displayValue: null
            };

            var focusedClass = "md-input-focused";
            $scope.show = function(ev)
            {
                if ($scope.disabled)
                {
                    return;
                }
                var inputContainer = $element.parent();
                inputContainer.addClass(focusedClass);

              
                //DEFER
                $knowledgeSelectorDialog.show(ev,
                {
                    selected: $scope.ngModel,
                    itemText: $scope.itemText,
                    classToAdd: $element.attr("class"),
                }).then(function(data)
                {
                    // Set
                    if (data)
                    {
                        $scope.ngModel = data;
                    }

                    inputContainer.removeClass(focusedClass);
                }, function()
                {
                    inputContainer.removeClass(focusedClass);
                });

            };


            //Set Placeholder Label (from the input-container, or via placeholder attr)
            //md-input-container
            var parent = $element.parent();
            if (parent.length > 0)
            {
                var label = parent.find("label");
                $scope.placeholder = label.html();
            }
            else
            {
                $scope.placeholder = $element.attr("placeholder");
            }


        }
    };
});
;// SERVICE
angular.module('widul.components')
    .provider('$knowledgeSelectorDialog', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev, config)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'KnowledgeSelectorDialogController',
                        templateUrl: 'bundles/widul/components/knowledge-selector/knowledge-selector-dialog.tpl.html',
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: true,
                        locals:
                        {
                            config: config
                        }
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            return self;
        };
    });
;//MODAL CONTROLLER
angular.module('widul.components')
    .controller('KnowledgeSelectorDialogController', function(
        $scope,
        $log,
        $q,
        config,
        $mdDialog,
        $Api
    )
    {
        //---------------------------------------------------
        // Model
        $scope.model = {};
        $scope.graph = {};

        //Find Selected in the collection (Binding via ngModel)
        $Api.read("Knowledges/MostRequested")
            .success(function(data)
            {

                var graphData = [];

                //Interpolate to Graph Standard
                angular.forEach(data, function(item)
                {
                    graphData.push(
                        {
                            "key": item.name,
                            "values": [
                                [0, item.requested]
                            ]
                        }

                    );

                });

                $scope.graph = {
                    mostRequested: graphData
                };
            });


        var ordinal = 0;
        $scope.valueFormatFunction = function()
        {
            return function(d)
            {
                var label = $scope.graph.mostRequested[ordinal].key + (" (" + d + ")");
                ordinal++;
                return label;
            };
        };

        //-------------------------------------------
        // Function's
        $scope.knowledge = {
            onSelect: function(knowledge)
            {
                if (knowledge)
                {
                    $scope.model = {
                        name: knowledge.name,
                        token: knowledge.token
                    };
                }
            },
            onClear: function(name)
            {

                $scope.model = {
                    name: name
                };

            },
            find: function(query)
            {
                var deferred = $q.defer();

                $Api.kql("Knowledges",
                {
                    filters: [
                    {
                        property: "name",
                        operator: "contains",
                        value: query
                    }]
                }).success(function(data)
                {
                    deferred.resolve(data.items);
                });

                return deferred.promise;

            }
        };



        if (config.selected)
        {
            var selected = angular.copy(config.selected);
            $scope.knowledgeSelected = selected;
        }

        
        //-------------------------------------------
        // Action's
        $scope.save = function(model)
        {
            $mdDialog.hide(model);
        };

        $scope.cancel = function()
        {
            $mdDialog.cancel();
        };

    });
;// SERVICE
angular.module('widul.components')
    .provider('$participantsViewerDialog', function()
    {
        this.$get = function($log, $q, $mdDialog, $restrictedAccess)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev, config)
            {
                var deferred = $q.defer();

                $restrictedAccess.validate().then(function()
                {

                    $mdDialog.show(
                        {
                            controller: 'ParticipantsViewerDialogController',
                            templateUrl: 'bundles/widul/components/participants-viewer/participants-viewer.tpl.html',
                            targetEvent: ev,
                            clickOutsideToClose: true,
                            escapeToClose: true,
                            focusOnOpen: false,
                            locals:
                            {
                                config: config
                            }
                        })
                        .then(function(data)
                        {
                            deferred.resolve(data);
                        }, function()
                        {
                            deferred.reject();
                        });

                });

                return deferred.promise;
            };

            return self;
        };
    });
;//MODAL CONTROLLER
angular.module('widul.components')
    .controller('ParticipantsViewerDialogController', function(
        $scope,
        $log,
        $q,
        $mdDialog,
        $timeout,
        $Api,
        config
    )
    {
        //---------------------------------------------------
        // Model
        $scope.model = {};

        fetch = function()
        {

            var offset = 0;
            var limit = 10;
            var totalRows = 0;

            var paginate = function()
            {
                return $Api.read("Events/{event}/Participants",
                {
                    event: config.event,
                    limit: limit,
                    offset: offset

                }).success(function(data)
                {
                    //UPDATE OFFSET COUNTER
                    offset += data.items.length;
                    totalRows = data.total;

                });
            };

            paginate().success(function(data)
            {
                //Set Items to List (RESETING)
                $scope.model.participants = data.items;
            });

            return {
                total: function()
                {
                    return totalRows;
                },
                nextPage: function()
                {
                    return paginate();
                },
                hasNext: function()
                {
                    return totalRows > 0 && offset < totalRows;
                }
            };
        };


        //Set Starting Point Pagination (delay for smoothness)
        $scope.pagination = fetch();

        //-------------------------------------------
        // Action's
        $scope.nextPage = function()
        {
            return $scope.pagination.nextPage().success(function(data)
            {
                $scope.model.participants = $scope.model.participants.concat(data.items);
            });
        };

        $scope.hasNext = function()
        {
            return $scope.pagination.hasNext();
        };

        $scope.cancel = function()
        {
            $mdDialog.cancel();
        };

    });
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('googleMap', function($interpolate)
{
    return {
        restrict: 'E',
        scope:
        {
            coordinates: '=',
            title: '=',
            readonly: '='
        },
        templateUrl: 'bundles/widul/components/place-locator/google-map.tpl.html',
        controller: function($scope, $element, googleMapService, $q)
        {
            var coordinates = null;

            var setMarker = function(coords)
            {
                if (typeof google != "undefined" && google.maps)
                {
                    var latLng = {
                        lat: coords.lat,
                        lng: coords.lng
                    };

                    // FIX GOOGLE MAPS REPAINT PROBLEM (GOOGLE MAPS DOWNLOAD THIS FONT, AND
                    // MAKE THAT WEBSITE REPAINT THE SOME, FLICKERING WEBSITE :/
                    // BUG EXPLAIN: http://stackoverflow.com/questions/25523806/google-maps-v3-prevent-api-from-loading-roboto-font#25902239
                    var head = document.getElementsByTagName('head')[0];
                    var insertBeforeOriginal = head.insertBefore;
                    head.insertBefore = function(newElement, referenceElement)
                    {
                        //OVERRIDE TEMPORARY 
                        if (newElement.href && newElement.href.indexOf('http://fonts.googleapis.com/css?family=Roboto') === 0)
                        {
                            return;
                        }

                        insertBeforeOriginal.call(head, newElement, referenceElement);
                    };


                    var config = {
                        zoom: 14,
                        center: latLng
                    };

                    //Disable Map Control's
                    if ($scope.readonly)
                    {
                        config.disableDefaultUI = true;
                    };

                    var map = new google.maps.Map($element.find("map")[0], config);


                    var marker = new google.maps.Marker(
                    {
                        position: latLng,
                        map: map
                    });

                    if ($scope.title)
                    {
                        var infowindow = new google.maps.InfoWindow(
                        {
                            content: $scope.title
                        });
                        infowindow.open(map, marker);
                    }

                    /*
                    //extend the bounds to include each marker's position
                    var bounds = new google.maps.LatLngBounds();
                    bounds.extend(marker.position);

                    //Automatic Zoom and center
                    map.fitBounds(bounds);
                    */


                    $scope.showLoading = false;
                }
            };

            //start loading Map
            googleMapService.load().then(function()
            {
                if (coordinates)
                {
                    setMarker(coordinates);
                }
            });

            //Wath For Model Change
            $scope.$watch("coordinates", function(value)
            {
                if (value)
                {
                    coordinates = value;
                    setMarker(coordinates);
                }
                else
                {
                    $scope.showLoading = true;
                }
            });


        }
    };
});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('placeLocator', function($interpolate)
{
    return {
        restrict: 'E',
        require: ['ngModel'],
        scope:
        {
            ngModel: '=' // Ng-Model
        },
        transclude: true,
        templateUrl: 'bundles/widul/components/place-locator/place-locator.tpl.html',
        compile: function()
        {
            return {             
                post: function(scope, element, attrs, controller, transcludeFn)
                {         

                    //Watch Disabled Attr (and ng-disabled too)
                    attrs.$observe('disabled', function(val)
                    {
                        if (val === "")
                        {
                            val = true;
                        }
                        scope.disabled = val;
                    });

                }         
            };
        },
        controller: function($scope, $element, $placeLocatorDialog, $q)
        {
            $scope.data = {
                placeholder: $scope.placeholder,
                displayValue: null
            };

            var focusedClass = "md-input-focused";
            $scope.show = function(ev)
            {
                if ($scope.disabled)
                {
                    return;
                }
                var inputContainer = $element.parent();
                inputContainer.addClass(focusedClass);

              
                //DEFER
                $placeLocatorDialog.show(ev,
                {
                    selected: $scope.ngModel,
                    itemText: $scope.itemText,
                    classToAdd: $element.attr("class"),
                }).then(function(data)
                {
                    // Set
                    if (data)
                    {
                        $scope.ngModel = data;
                    }

                    inputContainer.removeClass(focusedClass);
                }, function()
                {
                    inputContainer.removeClass(focusedClass);
                });

            };


            //Set Placeholder Label (from the input-container, or via placeholder attr)
            //md-input-container
            var parent = $element.parent();
            if (parent.length > 0)
            {
                var label = parent.find("label");
                $scope.placeholder = label.html();
            }
            else
            {
                $scope.placeholder = $element.attr("placeholder");
            }

        }
    };
});
;// SERVICE
angular.module('widul.components')
    .provider('$placeLocatorDialog', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev, config)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'PlaceLocatorDialogController',
                        templateUrl: 'bundles/widul/components/place-locator/place-locator-dialog.tpl.html',
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: true,
                        locals:
                        {
                            config: config
                        }
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            return self;
        };
    });
; //MODAL CONTROLLER
 angular.module('widul.components')
     .controller('PlaceLocatorDialogController', function(
         $scope,
         $log,
         $q,
         config,
         $mdDialog,
         googleMapService,
         $Api
     )
     {
         //---------------------------------------------------
         // Model
         $scope.model = {};

         var toLocatorPlace = function(apiPlace)
         {
             return {
                 token: apiPlace.token,
                 name: apiPlace.name,
                 tip: apiPlace.tip,
                 capacity: apiPlace.capacity,
                 address:
                 {
                     line: apiPlace.address,
                     coordinates:
                     {
                         lat: apiPlace.lat,
                         lng: apiPlace.lng
                     }
                 }
             };
         };

         //-------------------------------------------
         // Function's
         $scope.places = {
             onSelect: function(place)
             {
                 if (place)
                 {
                     $scope.model = toLocatorPlace(place);
                 }
             },
             onClear: function(name)
             {
                 $scope.model = {
                     name: name
                 };

             },
             find: function(query)
             {
                 var deferred = $q.defer();

                 $Api.query("Places",
                 {
                     filters: [
                     {
                         property: "name",
                         operator: "contains",
                         value: query
                     }]
                 }).success(function(data)
                 {
                     deferred.resolve(data.items);
                 });

                 return deferred.promise;

             }
         };

         $scope.address = {
             onSelect: function(address) {

             },
             onClear: function() {},
             find: function(query)
             {
                 var deferred = $q.defer();

                 googleMapService.load().then(function()
                 {

                     //When google Maps is ready
                     var geocoder = new google.maps.Geocoder();
                     geocoder.geocode(
                     {
                         'address': query
                     }, function(results, status)
                     {
                         if (status === google.maps.GeocoderStatus.OK)
                         {
                             var items = [];
                             angular.forEach(results, function(result)
                             {

                                 items.push(
                                 {
                                     line: result.formatted_address,
                                     coordinates:
                                     {
                                         lat: result.geometry.location.lat(),
                                         lng: result.geometry.location.lng(),
                                     }
                                 });

                             });
                             deferred.resolve(items);

                         }
                         else
                         {
                             deferred.resolve([]);
                         }
                     });

                 });

                 return deferred.promise;
             }

         };


         //Find Selected in the collection (Binding via ngModel)
         if (config.selected)
         {
             // var selected = angular.copy(config.selected);
             var place = toLocatorPlace(config.selected);
             $scope.model = place;
             $scope.place = place;
         }

         //-------------------------------------------
         // Action's
         $scope.save = function(place)
         {
             var data = {
                 name: place.name,
                 address: place.address.line,
                 lat: place.address.coordinates.lat,
                 lng: place.address.coordinates.lng,
                 capacity: place.capacity,
                 tip: place.tip
             };

             //Exist Place ??, set Token
             if (place.token)
             {
                 data.token = place.token;
             }

             $log.debug(data);
             $mdDialog.hide(data);
         };

         $scope.cancel = function()
         {
             $mdDialog.cancel();
         };

     });
;angular.module('widul.components')

.service('googleMapService', function($window, $q)
{
    var deferreds = []; //When various google maps are present in one page!

    // Load Google map API script
    function loadScript()
    {
        // Use global document since Angular's $document is weak
        var script = document.createElement('script');
        script.src = '//maps.googleapis.com/maps/api/js?sensor=false&language=en&callback=initGoogleMaps';

        document.body.appendChild(script);
    }

    return {

        load: function()
        {
            var deferred = $q.defer();

            if (typeof google !== "undefined" && google.maps)
            {
                deferred.resolve();
            }
            else
            {
                //MULTIPLE STACKING'S!!
                if (deferreds.length > 0)
                {
                    //Is loading from other place!
                    deferreds.push(deferred);

                    return deferred.promise;
                }
                else
                {
                    // Script loaded callback, send resolve
                    $window.initGoogleMaps = function()
                    {
                        //RESOLVE ALL STACKED PROMISES
                        angular.forEach(deferreds, function(deferred)
                        {
                            deferred.resolve();
                        });

                        //REMOVE INIT REFERENCE
                        deferreds = [];
                        delete $window.initGoogleMaps;
                    };

                    //Stack the first request always =)!
                    deferreds.push(deferred);

                    loadScript();
                }
            }

            return deferred.promise;

        }

    };

});
;/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('placeViewer', function($window)
{
    return {
        restrict: 'E',
        scope:
        {
            place: '='
        },
        templateUrl: 'bundles/widul/components/place-viewer/place-viewer.tpl.html',
        controller: function($scope, $element, $q, $Api, $log, $timeout)
        {
            $scope.model = {};

            //(delay for smoothness)
            $Api.read("Places/{place}",
                {
                    place: $scope.place
                })
                .success(function(data)
                {
                    $scope.model.place = data;
                });


        },
        link: function(scope, element, attrs, ctrl) {


        }
    };
});
;angular.route('public.boot/index', function(
    $scope,
    $log,
    $Configuration,
    Synchronizer,
    $q,
    ApplicationCleanse,
    $LocalStorage,
    $location
)
{
    var stamps = $Configuration.get("localstorageStamps");
    var new_version_defer = $q.defer();

    var onBooted = function()
    {
        Synchronizer.start().then(function()
        {

            // --------------------------------
            var path = $location.search().path;
            //Reset when path are in "boot" or "exception"
            if (path.length <= 2 ||
                path.indexOf("boot") === 0 ||
                path.indexOf("exception") > 0)
            {
                var url = $Configuration.get("application");
                path = url.home;
            }
            $location.url(path);
            // --------------------------------

        });

    };

    //When all Process are Checked, run APP
    $q.all([
        new_version_defer.promise
    ]).then(onBooted, function(err)
    {
        $log.error(err);
    });


    // ---------------------------------------------------------
    // NEW VERSION SECTION! (ONLY WHEN NEW VERSION IS ACQUIRED)
    if ($LocalStorage.get(stamps.new_version))
    {

        ApplicationCleanse.clean(true).then(function()
        {
            new_version_defer.resolve();
        }, function(err)
        {
            new_version_defer.reject(err);
        });

        //Remove new Version Flag
        $LocalStorage.remove(stamps.new_version);

    }
    else
    {
        new_version_defer.resolve();
    }
    // ---------------------------------------------------------


});
;angular.route('exception.error/404', function(
    $scope,
    $state,
    $log,
    $stateParams
) {
    console.log("404");
});
;angular.route('private.events/create/step-1', function(
    $scope,
    $state,
    $log,
    $Api,
    $interval,
    $timeout,
    $q,
    $mdDialog,
    $galeDatepickerDialog,
    $mdConstant,
    $loadingDialog,
    $window,
    $Identity
)
{

    //---------------------------------------------------
    // Model
    $scope.model = {
        user: $Identity.getCurrent(),
        event:
        {
            tags: []
        },
        results:
        {
            items: []
        },
        tags:
        {
            electricChars: [
                $mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, $mdConstant.KEY_CODE.TAB
                //,$mdConstant.KEY_CODE.SPACE
            ]
        }
    };

    //---------------------------------------------------
    // Hour's For Time
    var times = [];
    var zeroDay = moment(0).startOf('day');
    for (var index = 0; index < 46; index++)
    {
        if (index > 0)
        {
            zeroDay.add(30, 'minutes');
        }

        times.push(
        {
            value: new Date(zeroDay.toDate()),
            label: zeroDay.format("HH:mm a").toUpperCase()
        });
    }
    $scope.times = times;
    //---------------------------------------------------


    //---------------------------------------------------
    // Function's
    $scope.queryTags = function(query)
    {
        var deferred = $q.defer();

        $Api.kql("Events/Tags",
        {
            filters: [
            {
                property: "name",
                operator: "contains",
                value: query
            }]
        }).success(function(data)
        {
            deferred.resolve(data.items);
        });

        return deferred.promise;
    };

    $scope.setOrRegister = function(chip)
    {
        // If it is an object, it's already a known chip
        if (angular.isObject(chip))
        {
            return chip;
        }

        // Otherwise, create a new one
        return {
            name: chip
        };
    };

    $scope.find = function(tags)
    {
        $scope.model.results.loading = true;
        delete $scope.model.results.items;

        var query = _.pluck(tags, "name").join(",");
        $Api.read("Events/Search",
            {
                q: query
            })
            .success(function(data)
            {
                $scope.model.results.items = data.items;
            })
            .finally(function()
            {
                $scope.model.results.loading = false;
            });
    };

    //---------------------------------------------------
    // Action's
    $scope.save = function(newEvent)
    {
        var place_deferred = $q.defer();
        var knowledge_deferred = $q.defer();


        $loadingDialog.show(
        {
            title: "Creando Evento..."
        });

        $q.all([place_deferred.promise, knowledge_deferred.promise])
            .then(function(resolves)
            {

                var place = resolves[0];
                var knowledge = resolves[1];
                var dateAndTime = moment(newEvent.date).add(newEvent.time.value);

                $Api.create("Events",
                    {
                        name: newEvent.name,
                        description: newEvent.description,
                        isRestricted: newEvent.isRestricted,
                        isPrivate: newEvent.isPrivate,
                        date: dateAndTime,
                        place: place,
                        knowledge: knowledge,
                        tags: _.pluck(newEvent.tags, 'name')

                    })
                    .success(function(data)
                    {

                        $state.go("public.events/view/resume/index",
                        {
                            token: data.token
                        });
                    })
                    .finally(function()
                    {
                        $loadingDialog.hide();
                    });

            });

        //Check Place
        if (newEvent.place.token)
        {
            place_deferred.resolve(newEvent.place.token);
        }
        else
        {
            //CREATE PLACES
            $Api.create("Places", newEvent.place)
                .success(function(data)
                {
                    newEvent.place.token = data.token;
                    place_deferred.resolve(data.token);
                });
        }

        //Check Kwnoledge
        if (newEvent.knowledge.token)
        {
            knowledge_deferred.resolve(newEvent.knowledge.token);
        }
        else
        {
            //CREATE KNOWLEDGE
            $Api.create("Knowledges", newEvent.knowledge)
                .success(function(data)
                {
                    newEvent.knowledge.token = data.token;
                    knowledge_deferred.resolve(data.token);
                }).error(function(error)
                {
                    knowledge_deferred.reject(error);
                });
        }

    };

    $scope.cancel = function()
    {
        $window.history.back();
    };

    $scope.tooggleSettings = function()
    {

        var isShow = $scope.showAdvancedSettings = !$scope.showAdvancedSettings;
        if (isShow)
        {
            //Move to bottom
            setTimeout(function()
            {
                window.scrollTo(0, 500);
            }, 200);

        }
    };

    $scope.showCalendar = function(ev, date)
    {
        $galeDatepickerDialog.show(ev,
        {
            selected: (date || new Date())
        }).then(function(selectedDate)
        {
            $scope.model.event.date = selectedDate;
        });
    };

});
;angular.module('app.controllers')
    .controller('EventDetailsDialogController', function(
        $scope,
        $log,
        $timeout,
        $q,
        $Api,
        token,
        $mdDialog,
        $restrictedAccess,
        $mdSidenav
    )
    {
        smoothDelay = 250; //0.4 seconds

        //---------------------------------------------------
        // Model
        $scope.model = {
            panel: {},
            newcomment:
            {}
        };

        $Api.query("Events/{token}",
            {
                token: token
            })
            .success(function(data)
            {
                $scope.model.event = data;
            });


        //---------------------------------------------------
        // Function's
        $scope.follow = function(event)
        {
            $restrictedAccess.validate().then(function()
            {

                //--------------------------------------------
                // Toggle Follow / Unfollow Account
                if (event.creator.following)
                {
                    var delay = $timeout(function()
                    {
                        //Unfollow
                        $Api.delete("Accounts/{creator}/Follow",
                        {
                            creator: event.creator.token
                        }).success(function()
                        {
                            event.creator.followers -= 1;
                            event.creator.following = false;
                        });

                        $timeout.cancel(delay);
                    }, smoothDelay);
                }
                else
                {
                    var delay = $timeout(function()
                    {
                        //Follow
                        $Api.create("Accounts/{creator}/Follow",
                        {
                            creator: event.creator.token
                        }).success(function()
                        {
                            event.creator.followers += 1;
                            event.creator.following = true;
                        });

                        $timeout.cancel(delay);
                    }, smoothDelay);
                }

                //Set "meanwhile" value
                event.creator.following = null;
                //--------------------------------------------

            });
        };

        $scope.join = function(event)
        {
            $restrictedAccess.validate().then(function()
            {
                //--------------------------------------------
                // Join Button
                if (event.joined === "NONE")
                {
                    var delay = $timeout(function()
                    {
                        //Unfollow
                        $Api.create("Events/{event}/Join",
                        {
                            event: event.token
                        }).success(function(data)
                        {
                            //Set Joining State
                            event.joined = data.state;
                        });

                        $timeout.cancel(delay);
                    }, smoothDelay);
                }
                else
                {
                    var delay = $timeout(function()
                    {
                        //Follow
                        $Api.delete("Events/{event}/Join",
                        {
                            event: event.token
                        }).success(function()
                        {
                            event.joined = "NONE";
                        });

                        $timeout.cancel(delay);
                    }, smoothDelay);
                }

                //Set "meanwhile" value
                event.joined = null;
                //--------------------------------------------

            });
        };

        $scope.comment = function(event, newlyComment)
        {
            $restrictedAccess.validate().then(function()
            {
                var delay = $timeout(function()
                {
                    //--------------------------------------------
                    // Create New Comment
                    $Api.create("Events/{{event}}/Comments",
                        {
                            event: event.token,
                            comment: newlyComment
                        })
                        .success(function(comment)
                        {
                            //Add the new Comment
                            event.lastComments.splice(0, 0, comment);
                        })
                        .finally(function()
                        {
                            newlyComment.comment = "";
                            newlyComment.isCreating = false;
                        });
                    //--------------------------------------------

                    $timeout.cancel(delay);
                }, smoothDelay);

                //Set "meanwhile" value
                newlyComment.isCreating = true;

            });
        };

        //---------------------------------------------------
        // Action's
        $scope.showAllComments = function()
        {
            $scope.model.panel.comments = true;
          
            $mdSidenav("eventDetailsRight").toggle();
        };

        $scope.showMap = function(place)
        {
            var delay = $timeout(function()
            {

                $scope.panel = {
                    name: "map",
                    place: place
                };

                $timeout.cancel(delay);
            }, 300);

            $mdSidenav("eventDetailsLeft").toggle();
        };

        $scope.cancel = function()
        {
            $mdDialog.cancel();
        };

    });
;angular.route('public.events/view/resume/index/:token?forceAuthentication', function(
    $scope,
    $state,
    $log,
    $Api,
    $q,
    $window,
    $stateParams,
    $Identity,
    $timeout,
    $mdSidenav,
    $loadingDialog,
    Facebook,
    $Configuration,
    $friendsSelectorDialog,
    $participantsViewerDialog,
    $restrictedAccess,
    $rootScope
)
{
    //---------------------------------------------------
    // Model
    $scope.model = {};

        $scope.newdate = function() {

        var rawDate = $scope.model.event.date;

        return rawDate.replace("T", " a las ").replace("-03:00", "");

    };

    //---------------------------------------------------
    // Custom Function's
    $rootScope.$on("auth-login-success", function(token)
    {
        $scope.model.user = $Identity.getCurrent();

        //If login is Success, get the personal information
        //Following and participation
        getPersonalnformation();

    });
    $rootScope.$on("auth-logout-success", function(token)
    {
        //When Logout , remove the user identity
        delete $scope.model.user;
        delete $scope.model.personal;
    });

    //Refresh all UI Data
    var refresh = $scope.refresh = function()
    {
        //Refresh some stadistic's
        $Api.query("Events/{token}",
            {
                token: $stateParams.token
            })
            .success(function(data)
            {
                $scope.model.event.participants = data.participants;
                $scope.model.event.comments.total = data.comments.total;
            });

    };

    //Get the personal information , like particpation state or creator follow
    var getPersonalnformation = function()
    {
        var deferred = $q.defer();

        $Api.query("Events/{token}/Personal",
            {
                token: $stateParams.token
            })
            .success(function(data)
            {
                $scope.model.personal = data;
                deferred.resolve(data);
            })
            .error(deferred.reject);


        return deferred.promise;
    };

    //Delay Execution (For smoothness UI)
    var smooth = function(callback)
    {
        var smoothDelay = 250; //0.4 seconds
        var delay = $timeout(function()
        {

            callback();

            $timeout.cancel(delay);
        }, smoothDelay);
    };

    //---------------------------------------------------
    // Function's
    var deferreds = [
        $Api.query("Events/{token}",
        {
            token: $stateParams.token
        })
    ];

    //If is Authenticated , Set the current identity
    // And add another request to get personal information
    if ($Identity.isAuthenticated())
    {
        deferreds.push(getPersonalnformation()); //It's a Promise
        $scope.model.user = $Identity.getCurrent();
    }

    //Whe all is loaded :P
    $q.all(deferreds).then(function(resolves)
    {
        $scope.model.event = resolves[0];
    });

    //---------------------------------------------------
    // Action's
    $scope.invite = function(ev)
    {
        $restrictedAccess.validate().then(function()
        {
            $friendsSelectorDialog.show(ev)
                .then(function(guests)
                {
                    $loadingDialog.show(ev);

                    var invitations = _.pluck(guests, 'token');

                    $Api.create("Events/{event}/Invitations",
                        {
                            event: $scope.model.event.token,
                            data: invitations
                        })
                        .success(function(data)
                        {
                            $loadingDialog.hide();
                            refresh();
                        })
                        .error($loadingDialog.hide);
                });
        });
    };

    $scope.follow = function(event)
    {
        $restrictedAccess.validate().then(function()
        {
            var personal = $scope.model.personal;
            //--------------------------------------------
            // Toggle Follow / Unfollow Account
            if (personal.creator.following)
            {
                smooth(function()
                {
                    //Unfollow
                    $Api.delete("Accounts/{creator}/Follow",
                    {
                        creator: event.creator.token
                    }).success(function()
                    {
                        event.creator.followers -= 1;
                        personal.creator.following = false;
                    });

                });
            }
            else
            {
                smooth(function()
                {
                    //Follow
                    $Api.create("Accounts/{creator}/Follow",
                    {
                        creator: event.creator.token
                    }).success(function()
                    {
                        event.creator.followers += 1;
                        personal.creator.following = true;
                    });

                });
            }

            //Set "meanwhile" value
            personal.creator.following = null;
            //--------------------------------------------

        });
    };

    $scope.join = function(event)
    {

        var defer = $q.defer();

        // USABILITY
        //Whe need to check if the particpation state for the user 
        //when is not authenticated yet, is "JOINED", because
        //in this state , whe don't do nothing :P  (USABILITY)
        defer.promise.then(function(participation)
        {
            //--------------------------------------------
            // Join Button
            if (participation.state === "NONE" || participation.state === "INVITED")
            {
                smooth(function()
                {
                    //Unfollow
                    $Api.create("Events/{event}/Join",
                    {
                        event: event.token
                    }).success(function(data)
                    {
                        //Set Joining State
                        participation.state = data.state;
                        refresh();
                    });

                });
            }
            else
            {
                smooth(function()
                {
                    //Follow
                    $Api.delete("Events/{event}/Join",
                    {
                        event: event.token
                    }).success(function()
                    {
                        participation.state = "NONE";
                        refresh();
                    });

                });
            }

            //Set "meanwhile" value
            participation.state = null;
            //--------------------------------------------
        });

        //Not Authenticated YET??
        $restrictedAccess.validate().then(function()
        {
            //Clicked in the "Particpate" button
            //when is not authenticated 
            if (!$scope.model.personal)
            {
                getPersonalnformation().then(function(data)
                {
                    //Only Change State when is not joined
                    if (data.participation.state !== "JOINED")
                    {
                        defer.resolve(data.participation);
                    }
                });
            }
            else
            {
                //Already Logged
                defer.resolve($scope.model.personal.participation);
            }
        });
    };

    $scope.share = function(ev, event)
    {
        $restrictedAccess.validate().then(function()
        {
            var api_url = $Configuration.get("API_Endpoint");
            var picture = [
                api_url,
                "Events/",
                event.token,
                "/Thumbnail?",
                (new Date()).getTime()
            ].join("");

            //NOT WORK IN LOCALHOST OR DEV ENVIRONMENT!!!
            // BECAUSE FACEBOOK SCRAPPER NEED TO BE ACCESIBLE FROM INTERNET!
            // SO CHANGE $window.location.href TO 'http://www.google.cl'
            // AND DEV TO A INTERNET SERVER 

            Facebook.ui(
            {
                method: 'share',
                href: $window.location.href,
                //Open Graph Tags 
                title: event.name, // The same than name in feed method
                picture: picture,
                caption: event.place.address,
                description: event.description,

            }, function(response) {});
        });

    };

    $scope.showParticipants = function(ev, model)
    {
        $participantsViewerDialog.show(
            ev,
            {
                event: model.token
            }
        );
    };

    $scope.showMap = function(place)
    {
        smooth(function()
        {
            $scope.panel = 'PLAC';
        });

        $mdSidenav("mapPanel").toggle();
    };

    $scope.showComments = function(model)
    {
        smooth(function()
        {
            $scope.panel = 'COMM';
        });

        $mdSidenav("commentsPanel").toggle();
    };
    $scope.addComment = function(model)
    {
        $restrictedAccess.validate().then(function()
        {
            $scope.showComments(model);
        });
    };

    $scope.cancel = function()
    {
        $window.history.back();
    };


    //Force Authentication ???
    if ($stateParams.forceAuthentication == "1")
    {
        $restrictedAccess.validate().then(function()
        {
            //Do nothing :P
        });
    }


});
;angular.route('public.home/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $interval,
    $timeout,
    $q,
    $mdConstant,
    $mdDialog,
    $restrictedAccess
)
{

    //-----------------------------------------------
    //Model
    $scope.model = {
        image:
        {
            url: "landscape-1.jpg"
        },
        results:
        {
            items: []
        },
        tags:
        {
            electricChars: [
                $mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, $mdConstant.KEY_CODE.TAB
                //,$mdConstant.KEY_CODE.SPACE
            ],
            items: []
        }
    };

    $scope.shortName = function(rawName) {

        var splitName = rawName.split(" ");
        var newName = splitName[0] + " " + splitName[1];

        return newName;

    };

    //-----------------------------------------------
    // Function's
    $scope.queryTags = function(query)
    {
        var deferred = $q.defer();

        $Api.kql("Events/Tags",
        {
            filters: [
            {
                property: "name",
                operator: "contains",
                value: query
            }]
        }).success(function(data)
        {
            deferred.resolve(data.items);
        });

        return deferred.promise;
    };

    $scope.setOrRegister = function(chip)
    {
        // If it is an object, it's already a known chip
        if (angular.isObject(chip))
        {
            return chip;
        }

        // Otherwise, create a new one
        return {
            name: chip
        };
    };

    $scope.find = function(tags)
    {

        $scope.model.results.loading = true;
        delete $scope.model.results.items;

        var query = _.pluck(tags, "name").join(",");
        $Api.read("Events/Search",
            {
                q: query
            })
            .success(function(data)
            {
                $scope.model.results.items = data.items;
            })
            .finally(function()
            {
                $scope.model.results.loading = false;
            });
    };

    //-----------------------------------------------
    // Action's
    $scope.onImageLoaded = function(h, w)
    {
        $scope.model.image.loaded = true;

        //Find the neareast or the most accurated results =)!
        $scope.find([
        {}]);
    };


    $scope.showDetails = function(ev, item)
    {

        $state.go("public.events/view/resume/index",
        {
            token: item.token
        });
        /*
        $mdDialog.show(
            {
                controller: 'EventDetailsDialogController',
                templateUrl: 'views/events/view/dialogs/eventDetails.tpl.html',
                clickOutsideToClose: false,
                escapeToClose: true,
                focusOnOpen: false,
                fullscreen: true,
                locals:
                {
                    token: item.token
                }
            })
            .then(function(data)
            {
                //Update Data
            });
            */
    };

    $scope.createEvent = function(ev, item)
    {
        $restrictedAccess.validate().then(function()
        {

            $state.go("private.events/create/step-1");

        });

    };



});
;angular.module('app.layouts').controller('ExceptionLayoutController', function(
    $scope,
    $mdSidenav,
    $state,
    $log
)
{
});
;angular.module('app.layouts')
    .controller('PrivateLayoutController', function(
        $rootScope,
        $scope,
        $mdSidenav,
        $state,
        $log,
        $Configuration,
        $mdDialog,
        $mdToast,
        $stateParams,
        $timeout,
        $galeLoading,
        $Identity
    )
    {

        $scope.user = $Identity.getCurrent();


        //------------------------------------------------------------------------------------
        // Model
        $scope.config = {
            application: $Configuration.get("application")
        };

        $scope.toogleMenu = function(side)
        {
            $mdSidenav(side).toggle();
        };

        $scope.logout = function()
        {
            $Identity.logOut();
        };

    });
;angular.module('app.layouts')
    .controller('PublicLayoutController', function(
        $rootScope,
        $scope,
        $mdSidenav,
        $state,
        $log,
        $Configuration,
        $mdDialog,
        $mdToast,
        $stateParams,
        $timeout,
        $galeLoading,
        $Identity
    )
    {
        if ($Identity.isAuthenticated())
        {
            $scope.user = $Identity.getCurrent();
        }
        
        //------------------------------------------------------------------------------------
        // Model
        $scope.config = {
            application: $Configuration.get("application")
        };

        $scope.toogleMenu = function(side)
        {
            $mdSidenav(side).toggle();
        };

        $scope.logout = function()
        {
            $Identity.logOut();
        };

    });
;angular.route('security/identity/login', function(
    $log,
    $Configuration,
    $Localization,
    $Api,
    $mdToast,
    $state,
    $timeout,
    $Identity,
    $scope,
    $location
)
{
    //Application Information
    $scope.signature = $Configuration.get("application");
    $scope.user = {};

    //Set State accord to user
    var changeState = function(new_state)
    {
        var state = {};
        switch (new_state)
        {
            case "invalid":
                state = {
                    text: "login.state.valid.button",
                    disabled: true,
                    icon: "action:lock_open"
                };
                break;
            case "valid":
                state = {
                    text: "login.state.valid.button",
                    disabled: false,
                    icon: "action:lock_open"
                };
                break;
            case "validating":
                state = {
                    text: "login.state.validating.button",
                    disabled: true,
                    icon: null
                };
                break;
        }
        state.name = new_state;
        $scope.state = state;
    };
    $scope.isValidating = function()
    {
        return $scope.state.name === 'validating';
    };
    $scope.onChange = function(form)
    {
        changeState(form.$valid ? 'valid' : 'invalid');
    };
    $scope.login = function(credentials)
    {
        changeState('validating');
        //Delay for UX
        $timeout(function()
        {
            $Identity.authenticate(credentials)
                .success(function(data)
                {
                    //Boot URL
                    $location.url($scope.signature.home);

                })
                .error(function(error)
                {
                    var error_message = $Localization.get("ERR.API.UNAVAILABLE");
                    if (error && error.error_description)
                    {
                        error_message = error.error_description;
                    }
                    $mdToast.show(
                        $mdToast.simple()
                        .content(error_message)
                        .position('bottom left')
                        .hideDelay(3000)
                    );
                    changeState("valid");
                });
        }, 500);
    };
    changeState('invalid');
});
;angular.route('security/identity/logout', function(
    $Identity,
    $scope
) {
      
    $Identity.logOut();

});
;angular.route('security/identity/social', function(
    $log,
    $Configuration,
    $mdToast,
    $state,
    $timeout,
    $Identity,
    $scope,
    $location,
    $Api
)
{
    //Application Information
    $scope.signature = $Configuration.get("application");

    //Set State accord to user
    $scope.onUpdateState = function(new_state)
    {
        $scope.state = new_state;
    };

    $scope.onAuthenticationFails = function(message)
    {
        $mdToast.show(
            $mdToast.simple()
            .content(message)
            .position('bottom left')
            .hideDelay(3000)
        );

        throw {
            message: message
        };
    };

    $scope.onAuthenticationSuccess = function(type) {
        $state.go("public.boot");
    };
});
;/*

    gale-material:          ANGULAR-GALE & ANGULAR-GALE-MATERIALLIBRARY
    app:                    CUSTOM PROJECT LIBRARY
    widul:                  WIDUL PROJECT LIBRARY (COMPONENTS)
    material-icons:         CUSTOM PROJECT BUNDLES (ADD SVG ICON'S)
    nvd3ChartDirectives:    N3 CHART DIRECTIVES
    facebook:               FACEBOOK SDK
    angularMoment:          ANGULAR MOMENT
    angularFileUpload:      ANGULAR FILE UPLOAD
    mocks:                  Mocks Only for Testing

*/

angular.module('App', [
        'gale-material',
        'app',
        'widul',
        'material-icons',
        'facebook',
        'angularMoment',
        'angularFileUpload',
        'mocks'
    ])
    .run(function($location)
    {
        //REDIRECT TO MAIN HOME (ONLY WHEN NO HAVE PATH)
        var currentPath = $location.url();
        var boot = $location.path("public/boot").search(
        {
            path: currentPath
        });

        $location.url(boot.url());
    })
    .config(function($ApiProvider, $uploadFileProvider, CONFIGURATION)
    {
        //API Base Endpoint
        $ApiProvider.setEndpoint(CONFIGURATION.API_Endpoint);
        $uploadFileProvider.setFileEndpoint(CONFIGURATION.API_Endpoint + "Files/");
    })
    .config(function(FacebookProvider)
    {
        FacebookProvider.init('1559148417736822');
    })
    .config(function($IdentityProvider, SynchronizerProvider, MocksProvider)
    {
        //Security Provider
        $IdentityProvider
            .enable() //Enable
            // FACEBOOK AUTHENTICATION
            //.setIssuerEndpoint("Security/Authorize") 
            .setLogInRoute("security/identity/social")
            .redirectToLoginOnLogout(false)
            .setWhiteListResolver(function(toState, current)
            {

                //Only Enable Access to Exception && Public State's
                if (toState.name.startsWith("boot") ||
                    toState.name.startsWith("exception.") ||
                    toState.name.startsWith("public."))
                {
                    return true;
                }

                //Restrict Other State's
                return false;

            });

        //Synchronizer Manager
        SynchronizerProvider
            .autoLoadSynchronizers() //Auto Load Synchronizer via Reflection
            .frequency(45000); //Frequency between sync process

        //Mocking Module (While the API is in Construction)
        MocksProvider
            .enable()
            .setDelay(0); //Simulate a Short Delay ^^, (More 'Real' experience)

    })
    .config(function(
        MocksProvider,
        SynchronizerProvider,
        ApplicationCleanseProvider,
        CONFIGURATION)
    {
        //Enable Debug for GPS and RouteTracker
        if (CONFIGURATION.debugging)
        {
            //Debugger Information
            MocksProvider.debug();
            SynchronizerProvider.debug();
            ApplicationCleanseProvider.debug();
        }

    })
    .config(function($mdThemingProvider)
    {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink',
            {
                'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
            })
            .warnPalette('red');
    })
    .config(function($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('app',
            {
                url: "/app",
                abstract: true,
                // ---------------------------------------------
                // ONE-PAGE COLUMNS TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/one-page.html",
                controller: "OnePageLayoutController"
            })
            .state('exception',
            {
                url: "/exception",
                abstract: true,
                // ---------------------------------------------
                // EXCEPTION TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/exception.html",
                controller: "ExceptionLayoutController"
            })
            .state('public',
            {
                url: "/public",
                abstract: true,
                // ---------------------------------------------
                // PUBLIC TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/public.html",
                controller: "PublicLayoutController"
            })
            .state('private',
            {
                url: "/private",
                abstract: true,
                // ---------------------------------------------
                // PRIVATE TEMPLATE (SECURITED)
                // ---------------------------------------------
                templateUrl: "views/layouts/private.html",
                controller: "PrivateLayoutController"
            });
        $urlRouterProvider.otherwise(function($injector, $location)
        {
            if ($location.path() !== "/")
            {
                var $state = $injector.get("$state");
                var $log = $injector.get("$log");

                $log.error("404", $location);
                $state.go("exception.error/404");
            }
        });
    })
    .config(function($logProvider, CONFIGURATION)
    {
        $logProvider.debugEnabled(CONFIGURATION.debugging || false);
    });
;angular.module("config", []).constant("GLOBAL_CONFIGURATION",
{
    //Application data
    application:
    {
        version: "1.0.1-rc.6",
        environment: "qas",
        language: "es",
        name: "Widul",
        home: "public/home"
    },

    on_build_new_version: function(newVersion, oldVersion)
    {
        //When has new Version , set the mark in the localstoage 
        localStorage.setItem("$_new_version", 1);
    },

    localstorageStamps:
    {
        new_version: "$_new_version"
    }
});
