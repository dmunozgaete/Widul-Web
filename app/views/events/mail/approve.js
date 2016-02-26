angular.route('public.events/mail/approve/:event/:accessToken', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams,
    $restrictedAccess
)
{

    var goToEvent = function()
    {
        $state.go("public.events/view/resume/index",
        {
            token: $stateParams.event
        });
    };


    if ($stateParams.accessToken)
    {
        var customHeader = {
            "Authorization": "Bearer " + $stateParams.accessToken
        };

        //Join Event Simulating the User Invitation
        $Api.create("Events/{event}/Join",
        {
            event: $stateParams.event
        }, customHeader).success(function(data)
        {
            $restrictedAccess.validate().then(function()
            {
                goToEvent();
            });
        });
    }
    else
    {
        goToEvent();
    }

});
