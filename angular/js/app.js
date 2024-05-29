(function (ng) {
    const { NgModule, Component, enableProdMode } = ng.core;
    const { BrowserModule } = ng.platformBrowser;

    enableProdMode();

    @Component({
        selector: 'app-root',
        template: '<h1 >Hola Mundo</h1>'
    })
    class AppComponent { }

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent]
    })
    class AppModule { }

    ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
})(window.ng);