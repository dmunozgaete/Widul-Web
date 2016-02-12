angular.module('app.controllers')
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

        $scope.join = function()
        {
            $restrictedAccess.validate().then(function()
            {
                var delay = $timeout(function()
                {
                    alert("JOIN");
                    $timeout.cancel(delay);
                }, smoothDelay);

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
