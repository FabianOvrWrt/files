var MIME = [	{
		'mime': 'image/*',
		'pattern': '^image\/.+',
		'extensions': ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
		'class': 'image',
		'actions': 'O'
	},
	{
		'mime': 'audio/*',
		'pattern': '^audio\/.+',
		'extensions': ['mp3', 'ogg', 'opus', 'flac', 'alac', 'wav'],
		'class': 'audio',
		'actions': 'O'
	},
	{
		'mime': 'video/*',
		'pattern': '^video\/.+',
		'extensions': ['mp4', '3gp', 'ogv', 'webm'],
		'class': 'video',
		'actions': 'O'
	},
	{
		'mime': 'application/pdf',
		'pattern': '.+\/pdf$',
		'extensions': ['pdf'],
		'class': 'pdf',
		'actions': 'O'
	},
	{
		'mime': 'application/zip',
		'pattern': '.+\/zip$',
		'extensions': ['zip'],
		'class': 'zip',
		'actions': ''
	},
	{
		'mime': 'application/x-web-app-manifest+json',
		'pattern': '^application+\/.*app.manifest.*$',
		'extensions': ['webapp'],
		'class': 'developer',
		'actions': 'O'
	},
	{
		'mime': 'text/plain',
		'pattern': '^text\/plain$',
		'extensions': ['txt', 'log'],
		'class': 'text',
		'actions': 'O'
	},
	{
		'mime': 'text/html',
		'pattern': '^text\/html$',
		'extensions': ['htm', 'html'],
		'class': 'html',
		'actions': 'O'
	},
	{
		'mime': 'text/javascript',
		'pattern': 'javascript$',
		'extensions': ['js', 'json'],
		'class': 'developer',
		'actions': 'O'
	},
	{
		'mime': 'text/css',
		'pattern': '^text\/css$',
		'extensions': ['css'],
		'class': 'css',
		'actions': 'O'
	},
	{
		'mime': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'pattern': '.*officedocument\.wordprocessingml.*',
		'extensions': ['doc', 'docx', 'odt'],
		'class': 'word',
		'actions': ''
	},
	{
		'mime': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		'pattern': '.*officedocument\.spreadsheetml.*',
		'extensions': ['xls', 'xlsx', 'ods'],
		'class': 'excel',
		'actions': ''
	},
	{
		'mime': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		'pattern': '.*officedocumentº.presentationml.*',
		'extensions': ['ppt', 'pptx', 'odp'],
		'class': 'powerpoint',
		'actions': ''
	}
];
