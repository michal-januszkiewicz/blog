// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require jquery.autosize
//= require jquery.purr
//= require_tree .
//= require best_in_place

jQuery(document).ready(function() {

    $('.best_in_place').best_in_place();

    $('.edit-comment').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.comment').children().children('div > .best_in_place').click();

    });

    // Toggle add comment form.
    jQuery(".comments-toggle").on("click", function(e) {
        e.preventDefault();
        jQuery(".comments-list").toggle();
    });

    jQuery(".comment-text-area").autosize();

});
