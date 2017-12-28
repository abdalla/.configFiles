module.exports = {
	config: {
		tabIcons: {
			mapIcons: {
				compile: [
					'cc',
					'ccache',
					'clang',
					'gcc',
					'gmake',
					'make',
					'xcodebuild'
				],
				docker: ['docker-compose'],
				git: [
					'git-remote-ftp',
					'git-remote-ftps',
					'git-remote-http',
					'git-remote-https'
				],
				monitor: ['htop', 'iftop', 'top'],
				nodejs: ['node'],
				ruby: ['irb', 'sidekiq'],
				shell: ['zsh', 'bash', 'fish']
			},
			disableColors: false,
			mapColors: {
				bash: '#C5DB00',
				fish: '#D8494F',
				zsh: '#C5DB00'
			},
			inactiveStyle: {
				color: 'rgb(232, 163, 8)',
				opacity: 0.3
			},
			activeStyle: {
				borderColor: '#528bff'
			}
		},

		// default font size in pixels for all tabs
		fontSize: '13',

		// font family with optional fallbacks
		fontFamily: '"Fira Code Light", "Inconsolata for Powerline"',
		//fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

		// terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
		cursorColor: 'rgba(242,208,0,0.8)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
		cursorShape: 'BEAM',

		// color of the text
		foregroundColor: '#ffff00',

		// terminal background color
		//backgroundColor: 'rgb(76, 85, 101)',

		// border color (window, tabs)
		borderColor: 'rgb(232, 163, 8)',

		// custom css to embed in the main window
		// css: 'borderColor: rgb(232, 163, 8) !important',

		// custom css to embed in the terminal window
		termCSS: '~/hyper_custom.css',

		// set to `true` if you're using a Linux set up
		// that doesn't shows native menus
		// default: `false` on Linux, `true` on Windows (ignored on macOS)
		showHamburgerMenu: 'false',

		// set to `false` if you want to hide the minimize, maximize and close buttons
		// additionally, set to `'left'` if you want them on the left, like in Ubuntu
		// default: `true` on windows and Linux (ignored on macOS)
		showWindowControls: '',

		// custom padding (css format, i.e.: `top right bottom left`)
		padding: '12px 14px',

		// the full list. if you're going to provide the full color palette,
		// including the 6 x 6 color cubes and the grayscale map, just provide
		// an array here instead of a color map object
		colors: {
			black: '#000000',
			red: '#ff0000',
			green: '#33ff00',
			yellow: '#ffff00',
			blue: '#0066ff',
			magenta: '#cc00ff',
			cyan: '#00ffff',
			white: '#d0d0d0',
			lightBlack: '#808080',
			lightRed: '#ff0000',
			lightGreen: '#33ff00',
			lightYellow: '#ffff00',
			lightBlue: '#0066ff',
			lightMagenta: '#cc00ff',
			lightCyan: '#00ffff',
			lightWhite: '#ffffff'
		},


		// the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
		// if left empty, your system's login shell will be used by default
		shell: 'zsh',

		// for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
		// by default ['--login'] will be used
		shellArgs: [],

		// for environment variables
		env: {},

		// set to false for no bell'hyper-blink'
		bell: false,

		// if true, selected text will automatically be copied to the clipboard
		copyOnSelect: true

		// URL to custom bell
		// bellSoundURL: 'http://example.com/bell.mp3',

		// for advanced config flags please refer to https://hyper.is/#cfg
	},

	// a list of plugins to fetch and install from npm
	// format: [@org/]project[#version]
	//		'hyper-statusline',
// THEMES
// 'hyperterm-spacegray',
// 'hyperterm-material'
// 'hyperterm-hipster'
//'hyperterm-material-spacegray',
//'hyperpanic',

	plugins: [
		'hyper-quit',
		'hyperterm-cursor',
		'hyperterm-safepaste',
		'hyperterm-tab-icons',
		'hyperterm-electron-highlighter',
		'hyper-statusline'
	],
	//plugins: ['hyper-tab-icons', 'hyperterm-base16-ocean-saturated'],

	// in development, you can create a directory under
	// `~/.hyper_plugins/local/` and include it here
	// to load it and avoid it being `npm install`ed
	localPlugins: []
};
