angular.module("config", []).constant("GLOBAL_CONFIGURATION",
{
    //Application data
    application:
    {
        version: "1.0.0-rc.8",
        environment: "qas",
        language: "es",
        name: "Widul",
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
