$(document).ready(function() {
    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: 'aqua',
            size: '110',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });

});
