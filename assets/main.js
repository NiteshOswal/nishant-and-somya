;(function() {

    $(document).ready(function() {
        $("body").flowtype();
        $("#wedding-container").fullpage({
            navigation: true,
            lockanchors: true,
            navigationTooltips: ['Big NEWS!', 'Meet the Couple', 'Dates & Venue', 'Countdown & Contact'],
            responsiveWidth: 920
        });
        var currentDate = new Date();

        // Set some date in the future. In this case, it's always Jan 1
        var futureDate  = new Date('02-04-2016');

        // Calculate the difference in seconds between the future and current date
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        // Instantiate a coutdown FlipClock
        clock = $('#countdown').FlipClock(diff, {
            clockFace: 'DailyCounter',
            countdown: true,
            showSeconds: false
        });
    });

})();