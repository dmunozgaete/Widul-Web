angular.module('app.components')
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
