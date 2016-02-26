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
                    $scope.toggleFriend(friend);

                    $scope.searchText = '';
                    $scope.friendsSelected = undefined;
                }

                //CAN FIX OTHER WAY :S!! 
                //https://github.com/angular/material/issues/3287
                $timeout(function()
                {
                    var elm = angular.element(document.getElementById("buggyAutocomplete"));
                    elm.find("input").val("");
                }, 0);

            },
            onClear: function(name) {

            },
            find: function(query)
            {
                var deferred = $q.defer();

                $Api.kql("Accounts",
                {
                    filters: [
                    {
                        property: "fullname",
                        operator: "contains",
                        value: query
                    }],
                    orderBy:
                    {
                        property: "fullname",
                        order: "asc"
                    }
                }).success(function(data)
                {
                    deferred.resolve(data.items);
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
