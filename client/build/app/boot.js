System.register(["angular2/platform/browser", 'angular2/http', "angular2/router", "./components/services/services", "./components/main/main"], function(exports_1) {
    var browser_1, http_1, router_1, services_1, main_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            //Bootstraping
            browser_1.bootstrap(main_1.TaskApp, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, services_1.SERVICE_PROVIDER
            ]);
        }
    }
});
