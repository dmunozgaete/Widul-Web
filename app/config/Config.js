angular.module("config", []).constant("GLOBAL_CONFIGURATION",
{
    //Application data
    application:
    {
        version: "1.0.0-rc.1",
        environment: "dev",
        language: "es",
        name: "Widul",
        //home: "security/identity/social",
        //home: "public/events/view/resume/index/d69417c1-886d-4ec1-92d6-7ffa627774ab"
        home: "public/home"
        
    },

    on_build_new_version: function(newVersion, oldVersion)
    {

        //When has new Version , set the mark in the localstoage 
        localStorage.setItem("$_new_version", 1);
    },

    localstorageStamps:
    {
        new_version: "$_new_version"
    }

});
