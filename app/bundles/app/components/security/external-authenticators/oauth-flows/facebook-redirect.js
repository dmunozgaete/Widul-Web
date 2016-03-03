/*------------------------------------------------------
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

                    if (!data.email)
                    {
                        //TODO: Enable Setting Up the Email, but how =/ (a dialog??)
                        //Meanwhile , Send a email to hola@widul.com
                        data.email = "hola@widul.com";
                    }

                    $Api.create("/Security/Oauth/Facebook", data)
                        .success(function(oauthToken)
                        {
                            //Authenticated
                            $Identity.logIn(oauthToken);

                            var redirect_uri = "{0}://{1}{2}/#{3}".format([
                                $location.protocol(),
                                $location.host(),
                                ($location.port() ? ":" + $location.port() : ""),
                                parameters.url
                            ]);

                            $window.location.href = redirect_uri;


                        });
                });


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
