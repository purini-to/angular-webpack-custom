# angular-webpack-custom

Fork from [angular-webpack](https://github.com/preboot/angular-webpack)

# Customize

* No html. using [Jade](http://jade-lang.com/)
* No css. using [Stylus](http://stylus-lang.com/)
* Design framework is [Angular Material](https://material.angularjs.org/latest/) with [Angular Material Icons](https://klarsys.github.io/angular-material-icons/)
* Server side is [LoopBack](http://loopback.io/). No [AngularJS JavaScript SDK](https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK). using [Restangular](https://github.com/mgonto/restangular)

# Install

`npm install`

# Running the app

Build client side. Output to `/dist`.
```
npm run build
```

Start Server. The page displayed to you as `http://localhost:3000` and loopback is `http://localhost:3000/exploler`.
```
node .
```

# Devloping

Start loopback. The loopabck displayed `http://localhost:3000/exploler`.
```
node .
```

Start webpack-dev-server in other process. The page displayed `http://localhost:8080`.
Running Webpack proxy. Transport `http://localhost:8080/api/notes` to `http://localhost:3000/api/notes`.
```
npm start
```

# License

[MIT](/LICENSE)
