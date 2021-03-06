/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have a URL defined', function() {
            allFeeds.forEach(function(feed) { //loop through each feed
                expect(feed.url).toBeDefined(); //check if url is defined
            });
        });

        it ('have a URL length', function() {
            allFeeds.forEach(function(feed) { //loop through each feed
                expect(feed.url.length).not.toBe(0); //check if url has content
            });
        });
            


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have a name defined', function() {
            allFeeds.forEach(function(feed) { //loop through each feed
                expect(feed.name).toBeDefined(); //check if name is defined
            });
        });

        it ('have a name length', function() {
            allFeeds.forEach(function(feed) { //loop through each feed
                expect(feed.name.length).not.toBe(0); //check if name has content
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
      describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden on load', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); //check if class hiding menu exists
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('shows when menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false); //check if class hiding menu class is turned off by a click
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true); //check if class hiding menu class is turned back on by a click
        });
    });   

    /* TODO: Write a new test suite named "Initial Entries" */
    describe ('Initial Entries', function() {
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('are in the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0); //check that the feed entry has content
        });
    }); //Credit Rennie: https://discussions.udacity.com/t/trouble-with-testing-the-entries-existence-in-asychronous-test/19247/4

        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe ('New Feed Selection', function() {
        var currentTitle = $('.header-title').html();

        beforeEach(function(done){
            loadFeed(1, done); //load a different feed
        });

        afterEach(function(done) {
            loadFeed(0, done); //return to original feed after content change 
        });

        it('changes when new feed is loaded', function() {
            expect($('.header-title').html()).not.toBe(currentTitle);
        });
    }) //Credit Rennie: https://discussions.udacity.com/t/trouble-with-testing-the-entries-existence-in-asychronous-test/19247/4
   
}());
