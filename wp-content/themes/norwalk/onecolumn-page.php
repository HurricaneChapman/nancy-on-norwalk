<?php
/**
 * Template Name: One column, no sidebar
 *
 * @package WordPress
 * @subpackage Starkers
 * @since Starkers HTML5 3.0
 */

get_header(); ?>
<div id="main-content">

	<div class="content">
	<?php get_template_part( 'loop', 'page' ); ?>
	</div>
</div>

<?php get_footer(); ?>