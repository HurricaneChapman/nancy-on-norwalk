<?php
/**
 * The loop that displays a page.
 *
 * @package WordPress
 * @subpackage Starkers
 * @since Starkers HTML5 3.2
 */
?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class('type-page'); ?>>
			<header class="story-head">
				<?php if ( is_front_page() ) { ?>
					<h2 class="post-title"><?php the_title(); ?></h2>
				<?php } else { ?>	
					<h1 class="post-title"><?php the_title(); ?></h1>
				<?php } ?>
			</header>				
			<div class="the-content">
				<?php the_content(); ?>
			</div>
						
				<?php //wp_link_pages( array( 'before' => '<nav>' . __( 'Pages:', 'starkers' ), 'after' => '</nav>' ) ); ?>
						
			<footer>
				<?php edit_post_link( __( 'Edit', 'starkers' ), '', '' ); ?>
			</footer>
		</article>

				<?php comments_template( '', true ); ?>

<?php endwhile; ?>