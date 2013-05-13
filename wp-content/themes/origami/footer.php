		<?php $sidebars_widgets = wp_get_sidebars_widgets(); ?>

		<?php if(!empty($sidebars_widgets['site-footer'])) : ?>
			<div id="footer-widgets">
				<div id="footer-widgets-wrapper">
					<?php dynamic_sidebar('Footer') ?>
					<div class="clear"></div>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>
	<div id="footer">
		<div id="fire">
			<span class="fire">Made with ❤ in Wordpress.</span>
		</div>
		<div class="clear"></div>
	</div>
</div>
<?php wp_footer() ?>
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