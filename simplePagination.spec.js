'use strict';

describe('simplePagination', function() {

  var pagination;

  // load the app
  beforeEach(module('simplePagination'));

  // get service 
  beforeEach(inject(function(Pagination) {
    pagination = Pagination.getNew();
  }));

  it('should paginate', function() {
    pagination.numPages = 2;

    expect(pagination.page).toBe(0);

    pagination.nextPage();
    expect(pagination.page).toBe(1);   

    pagination.prevPage(); 
    expect(pagination.page).toBe(0);
  });

  it('should not paginate outside min and max page', function() {
    pagination.numPages = 2;

    pagination.page = 0;
    pagination.prevPage();
    expect(pagination.page).toBe(0);

    pagination.page = 1;
    pagination.nextPage();
    expect(pagination.page).toBe(1);
  });

  it('should jump to a given page id', function() {
    pagination.numPages = 3;

    expect(pagination.page).toBe(0);

    pagination.toPageId(2);
    expect(pagination.page).toBe(2);
  });

});
