/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')

.directive('commentsViewer', function($window)
{
    return {
        restrict: 'E',
        scope:
        {
            event: '='
        },
        templateUrl: 'views/events/view/dialogs/comments-viewer/comments-viewer.tpl.html',
        controller: function($scope, $element, $q, $Api, $log, $timeout)
        {
            $scope.model = {
                items: []
            };

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
        link: function(scope, element, attrs, ctrl)
        {

            //Calculate the height max setting for the Comment (need to be dinamycally)
            //var header = document.getElementsByClassName('main-container')[0];
            var headerHeight = 68;
            element.find("md-content").css("height", ($window.innerHeight - headerHeight) + "px")


        }
    };
});
