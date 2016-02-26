/*------------------------------------------------------
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
