angular.route('public.events/view/resume/index/:token', function(
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
    $friendsSelectorDialog,
    $loadingDialog,
    Facebook,
    $Configuration,
    $restrictedAccess,
    $rootScope
)
{
    //---------------------------------------------------
    // Model
    $scope.model = {};

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

});
