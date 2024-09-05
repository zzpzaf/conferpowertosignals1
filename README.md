# conferpowerdemo

## An Angular demo repo on how to trasfer your observable subscriptions to Angular Signals

![screen-shoot](/src/assets/images/confer-power.png)

It uses:

* The DataService (Uses the HttpClient and defines the necessary Observables)
* The ContentService - as an **intermediate** service that subscribes to DataService Observables and transforms their output to Signals

and 

The following 4 components:

* HeaderComponent
* MenuComponent (Data consumer Component using Signals)
* ContentComponent (Data consumer Component using Signals)
* FooterComponent

Read more at my post: **"Angular: Confer the power from your Observables to Signals!"**
* **[Medium](https://medium.com/@zzpzaf.se)**
* **[DevXperiences](https://www.devxperiences.com/developers-posts/)** 

----
### Auto-generated Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
