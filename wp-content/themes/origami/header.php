<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale = 1.0, user-scalable=0' />
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="shortcut icon" href="/scwp/wp-content/themes/origami/images/suico.ico" type="image/x-icon" />
    <link type="text/css" media="screen" rel="stylesheet" href="/scwp/wp-content/themes/origami/timbre/examples/public/css/examples.css">
    <link type="text/css" media="screen" rel="stylesheet" href="/scwp//wp-content/themes/origami/timbre/examples/public/css/prettify.css">
    <link type="text/css" media="screen" rel="stylesheet" href="/scwp//wp-content/themes/origami/css/slabtext.css">
    <script src="http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="<?php print get_stylesheet_uri() ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <style>
        @font-face 
            {                            
            font-family: 'LeagueGothicRegular';
            src: url('League_Gothic-webfont.eot');
            src: url('League_Gothic-webfont.eot?#iefix') format('embedded-opentype'),
            url('League_Gothic-webfont.woff') format('woff'),
            url('League_Gothic-webfont.ttf') format('truetype'),
            url('League_Gothic-webfont.svg#LeagueGothicRegular') format('svg');
            font-weight: normal;
            font-style: normal;
            }                                
        html,
        body
            {
            background:#fcfcfc;
            color:#444;
            }
        body
            {
            font: 16px/1.8 "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            width:80%;
            padding:20px 0;
            max-width:960px;
            margin:0 auto;
            }            
        /* http://css-tricks.com/simple-styles-for-horizontal-rules/ */
        hr 
            {
            border: 0;
            height: 1px;
            background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0)); 
            background-image:    -moz-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0)); 
            background-image:     -ms-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0)); 
            background-image:      -o-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0)); 
            }
        .col-1
            {
            width:47.5%;
            margin:0 2.5% 0 0;
            float:left;
            }
        .col-2
            {
            width:47.5%;
            margin:0 0 0 2.5%;
            float:left;
            } 
        .col-1 p,
        .col-2 p
            {
            color:#888;
            font-size:80%;
            text-align:center;
            }       
        a
            {
            color:#111;             
            }
        h1 a
            {
            text-decoration:none;
            }
        p
            {
            margin:0 0 1.5em 0;
            line-height:1.5em;
            }
        dt
            {
            font-family:monospace;
            }
        pre
            {
            line-height:1.2;
            }
        footer
            {
            border-top:3px double #aaa;
            padding-top:1em;
            }
        footer section
            {
            border-bottom:3px double #aaa;
            padding-bottom:1em;
            margin-bottom:1em;
            }
        sup a
            {
            text-decoration:none;
            }
        #h4
            {
            clear:both;
            }
        .amp
            {
            font-family:Baskerville,'Goudy Old Style',Palatino,'Book Antiqua',serif;
            font-style:italic;
            font-weight:lighter;
            }
        /* Set font-sizes for the headings to be given the slabText treatment */
        h1
            {
            text-align:left;
            font-family:'LeagueGothicRegular', "Impact", Charcoal, Arial Black, Gadget, Sans serif;
            text-transform: uppercase;           
            line-height:1;   
            color:#222;             
            font-size:300%;
            /* Remember to set the correct font weight if using fontface */
            font-weight:normal;
            }
        /* Smaller font-size for the side-by-side demo */
        .col-1 h1,
        .col-2 h1
            {
            font-size: 32px;
            }
        h2
            {
            font-size: 25px;
            }
        /* Adjust the line-height for all headlines that have been given the
           slabtext treatment. Use a unitless line-height to stop sillyness */
        .slabtexted h1
            {
            line-height:.9;
            }
        /* Target specific lines in the preset Studio One demo */
        .slabtexted #studio-one span:nth-child(2)
            {
            line-height:.8;
            }
        .slabtexted #studio-one span:nth-child(3)
            {
            line-height:1.1;
            }
        /* Fun with media queries - resize your browser to view changes. */
        @media screen and (max-width: 960px) 
            {
                body
                    {
                    padding:10px 0;                                
                    min-width:20em;
                    }
                .col-1,
                .col-2
                    {
                    float:none;
                    margin:0;
                    width:100%;
                    }
                h1
                    {
                    font-size:36px;
                    }
                h2
                    {
                    font-size:22px;
                    }
            }        
        @media screen and (max-width: 460px) 
            {
                h1
                    {
                    font-size:26px;
                    }
                h2
                    {
                    font-size:18px;
                    }
            }
    </style>
    <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
<canvas id="waveviewer"></canvas>
<div class="container">
    <div id="page-container">
        <div id="logo">
            <a href="<?php print esc_url(home_url('/')) ?>" title="<?php print esc_attr(get_bloginfo('description')) ?>" class="logo-link">
                <?php
                if(get_header_image()){
                    ?><img src="<?php esc_url(header_image()); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="<?php print esc_attr(get_bloginfo('name')) ?>" /><?php
                }
                else{
                    ?>
                    <h1 class="logo"><?php bloginfo('name') ?></h1><br/>
                    <h3 class="logo"><?php bloginfo('description') ?></h3>
                    <?php
                }
                ?>
            </a>
            <?php if(so_setting('display_header_search')) get_search_form(); ?>
        </div>
        <div id="menu">
            <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id' => 'main-menu',
                    'depth' => 2,
                ));
            ?>
        </div>