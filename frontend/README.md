# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Frontend starts $$$$$$$$$$$$$$$$$$$$$$$$$

####################  Git setup ###############################
1. Open git bash prompt: Remove git from ..MEAN/frontend: open git bash : rm -rf .git
2. Open command propmt: Now go to root directory : cd .. (MEAN)
3. git init
4. git commit -m "first commit"
5. git branch -M main
6. git remote add origin https://mdzaidkhan855@github.com/mdzaidkhan855/MEAN-food.git
7. git push -u origin main

####################### Header component ########################
1. Go to frontend folder: ng g c components/partials/header
2. Go to app.component.html: remove all


####################### Home Component #########################
1. Generate models app/shared/models/Food.ts and mock data src/data.ts
2. Create images in folder src/assets
3. Create a Food service: ng g s services/food
4. Create Home component : ng g c components/pages/home
5. If get The attribute name of [ *ngFor ] must be in lowercase, go to setting of VSCode
   and apply "htmlhint.options": {"attr-lowercase": false}
6. Press the "Windows" key and the "." (period) key at the same time to open the emoji panel.
7. install ng-starrating:npm i ng-starrating --force

######################## Search Componenet ####################
1. change the tsconfig.json as "noPropertyAccessFromIndexSignature": false
2. By doing above, params.searchTerm in Home component does not give error in indexing
3. ng g c components/partials/search

######################## Tags Componenet ####################
1. ng g c components/partials/tags

######################## food Componenet ####################
1. ng g c components/pages/food-page

$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Frontend ends $$$$$$$$$$$$$$$$$$$$$$$$$
