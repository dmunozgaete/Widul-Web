//MODAL CONTROLLER
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
                    if (data.items.length == 0 && EMAIL_REGEXP.test(query))
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
