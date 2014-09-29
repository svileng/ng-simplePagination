# ng-simplePagination

**Previously known as "angular-SimplePagination"**; is an AngularJS module for simple pagination on static data. No directives here, just a service and some helpful filters.

Mostly based on various snippets which I found on JSFiddle, with some changes by me.

## Quick start

```
bower install ng-simplePagination
```
or alternatively download and include `simplePagination.js` after `angular.min.js`.

Add the `simplePagination` module as a dependency when creating your app, e.g.

```
var app = angular.module('myApp', ['simplePagination']);`
```

Inject the `Pagination` service to the controller containing the data which you want to paginate, and set it on the $scope:

```
app.controller('MyCtrl', ['$scope', 'Pagination',
function($scope, Pagination) {
  $scope.pagination = Pagination.getNew();
}]);
```

This defaults to 5 items per page. You can pass an optional parameter with the number of items you want per page:

```
$scope.pagination = Pagination.getNew(10);
```

Finally, calculate and set the number of pages depending on your data. Here's an example with a pre-defined `$scope.posts` array for a blog application:

```
$scope.pagination.numPages = Math.ceil($scope.posts.length/$scope.pagination.perPage);
```

Replace `$scope.posts` with whatever data you have initialised.

## Rendering

There is a custom filter called `startFrom` to help you rendering items per page.

```
<div ng-repeat="post in posts | startFrom: pagination.page * pagination.perPage | limitTo: pagination.perPage">
	<!-- stuff -->
</div>
```

Again, replace `post in posts` with your data.

### Previous / Next page buttons
```
<button ng-click="pagination.prevPage()">Previous</button>
<button ng-click="pagination.nextPage()">Next</button>
```
Optionally you can add some logic to hide/disable the buttons using the `pagination.page` and `pagination.numPages` attributes; here's an example:

```
ng-hide="pagination.page == 0" ng-click="pagination.prevPage()"
ng-hide="pagination.page + 1 >= pagination.numPages" ng-click="pagination.nextPage()"
```

### Page numbers
Using another built-in filter called `range`:
```
<ul class="pagination">
<li><a href="" ng-click="pagination.prevPage()">&laquo;</a></li>
  <li ng-repeat="n in [] | range: pagination.numPages" ng-class="{active: n == pagination.page}">
  <a href="" ng-click="pagination.toPageId(n)">{{n + 1}}</a>
  </li>
  <li><a href="" ng-click="pagination.nextPage()">&raquo;</a></li>
</ul>
```

If you use, bootstrap.css, Above given list HTML coding give good appearance. Note that the first page is actually __0__ hence the {{n + 1}}.

## Contributions

Any pull requests are more than welcome. Please make your changes in your own branch, make sure the current specs in `simplePagination.spec.js` are passing (Jasmine/Karma) and update/add tests if necessary.

For problems/suggestions please create an issue on Github.

## Contributors

* [@svileng](https://twitter.com/svileng)

## Credits

* AngularJS range filter: [http://www.yearofmoo.com/](http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#more-about-loops)
* AngularJS pagination: [http://jsfiddle.net/2ZzZB/56/](http://jsfiddle.net/2ZzZB/56/)
* Other uknown JSFiddles
