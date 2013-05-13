<?php get_header(); ?>

<div class="post">
	<h1 class="entry-title noinfo"><?php _e('Not Found', 'origami') ?></h1>
	
	<div class="content" id="blog-archives">
		<?php print wpautop(so_setting('messages_not_found')) ?>
		<h1 class="bizarro">Oh noes! Super sorry, but you've encountered a 404!</h1>
	</div>
</div>

<?php get_footer(); ?>