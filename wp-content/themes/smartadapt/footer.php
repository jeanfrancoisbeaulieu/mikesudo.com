<footer id="main-footer" class="main-footer">
    <?php

    if (!is_404())
        get_sidebar('footer'); //Add footer sidebar
    ?>
    <div id="footer-bottom">
        <div class="row">
            <div class="four columns">


                Powered by <a href="http://netbiel.pl/smartadapt" title="smartadapt">SmartAdapt</a>.
            </div>
            <div class="twelve columns footer-navigation">
                <?php wp_nav_menu(array('theme_location' => 'footer_pages', 'container' => false)); ?>
            </div>
        </div>
    </div>
</footer>
    <?php wp_footer(); ?>
        <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/examples/public/js/prettify.js"></script>
    <script type="text/javascript">prettyPrint();</script>
    <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/examples/public/js/jquery.min.js"></script>
    <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/examples/public/js/waveviewer.js"></script>
    <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/examples/public/js/main.js"></script>
    <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/timbre.js"></script>
    <script type="text/javascript" src="http://sudocoda.com/scwp/wp-content/themes/origami/timbre/index.js"></script>
    <script src="http://sudocoda.com/scwp/wp-content/themes/origami/js/jquery.slabtext.min.js"></script>
    <script>
        // Function to slabtext the H1 headings
        function slabTextHeadlines() {
                $(".super").slabText({
                        // Don't slabtext the headers if the viewport is under 380px
                        "viewportBreakpoint":380
                });
        };

        // Called one second after the onload event for the demo (as I'm hacking the fontface load event a bit here)
        // you should really use google WebFont loader events (or something similar) for better control
        $(window).load(function() {
                setTimeout(slabTextHeadlines, 1000);
        });
    </script>
</body>
</html>
