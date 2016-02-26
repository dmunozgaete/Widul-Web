angular.route('public.events/mail/reject/:event/:accessToken', function(
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

        //Remove Participation
        $Api.delete("Events/{event}/Join",
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
