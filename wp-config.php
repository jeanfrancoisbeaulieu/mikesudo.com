<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sudodb');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}`V4}z6!>1jgF(F.0.ep<_{_jXM!y;fA@fhU;TXR&|Z)gaRdsm[OvPB~ni+^YElI');
define('SECURE_AUTH_KEY',  'h8kh8d#)L{.N|kWQUiq4CTW|8U>T0^3REN<eH,a(]i@z}=lF9.{}];&Mp8BOjP/+');
define('LOGGED_IN_KEY',    'raN?miJ> Tq.}Lq[>#CC+H8oraka(7O;e=UoQ> ]RWQ{e-UNlflZMCI)e.~#1}[.');
define('NONCE_KEY',        'wTDH$m s,.CJ9uf*znQ49<AdcZBvW3XE49x:zKb@E_SaeO9o+/xm&s&P:BZ,:QWF');
define('AUTH_SALT',        '4x%_XdEW$uNt&JVN&B^vXfT V(`$9r{r>yNfs6V54x6`1HtKI3E0g[Op@F6GE4Q_');
define('SECURE_AUTH_SALT', '[cy4`.fr?Bwm}|5qK{:Va%_.4y[Hg~W7s^ov#Z[._JJ#p>h4f^J@O)h2lpa>C^Fa');
define('LOGGED_IN_SALT',   'bJ.}-%IcMkwnz%3%K:[GRS$_17_>?H?6#l6I+.%vjU_L<8]yrIs/XQV[p9)|5j|;');
define('NONCE_SALT',       'i97QzR+!CHK$_!vmXALNIfgm#pmjU72]e6M)s.|/JLOn.:uv>ND8hw|7I>,[9:5H');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ms_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
