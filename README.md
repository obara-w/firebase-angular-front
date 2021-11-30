1. Angular Project

ng new portal
cd portal/
ng serve

ng g module pages --routing
ng g component pages
ng g component pages/home
ng g component pages/not-found

2. Bootstrap

npm install bootstrap

add:
@import '~bootstrap/dist/css/bootstrap.min.css';
no:
src/styles.scss

add:
"scripts": ["./node_modules/bootstrap/dist/js/bootstrap.min.js"]
no:
portal/angular.json

3. Material

ng add @angular/material

4. Font Awesome

ng add @fortawesome/angular-fontawesome