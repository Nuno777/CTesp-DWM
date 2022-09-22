<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'CTesp-DWM' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j,}8+z&h[0Vw],N3AGlVfV}.:k*.+tTxqr^Tx$a&%^Dz+(LuoR;5K-Rrf8M7dt) ');
define('SECURE_AUTH_KEY',  '0f9hJaN0=quAN,y4L}6,WVMa&!i$6cAZFy?p]S8jN[pSD|)55ot^`NCNEIK$LaA9');
define('LOGGED_IN_KEY',    'i2#G&O3xcR3*XS9;-Xm[7+iVy/5,xH^<>gBG:|?OQNu^lZ@g-[7&/A?VlkdqyLxY');
define('NONCE_KEY',        'b%K}|?Dt~H|h+4&yQu>TyE=gCA-dSEpwu}|6>CE.Jmomt~v+~1ZoCANSIg0.jla-');
define('AUTH_SALT',        '3A{EJzt^.|RP|=Q.5l^IJ_wil0C28T7W^#Bqgj4g5uxiW810*z:m3<E$yW)[zOGO');
define('SECURE_AUTH_SALT', 'JSuL~4/fz?Gp@f81l+5$4bIb&s 9!JCjz9#JzdM7OC)[?LivoU(LUn;t*RPwrO{t');
define('LOGGED_IN_SALT',   'GXuwtT]%Yr9k58n?5n)xu?j;VmD$B,}}mb&$hhEiKs;k9pdkLS( ? &te8F<:wr(');
define('NONCE_SALT',       'v{<.?)s+pLuOaN!3j8(4s_Lc/tRb<o@mpf)3GX6X>Se+K2V -,ASH[>&%2/qSb,M');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
