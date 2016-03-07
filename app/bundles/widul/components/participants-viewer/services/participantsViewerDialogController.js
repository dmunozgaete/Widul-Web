//MODAL CONTROLLER
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
