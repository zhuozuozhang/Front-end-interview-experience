# 关于回车

Windows系统是CRLF —  `\r\n` Unix系统是LF — ` \n` 

所以Windows系统打开Unix系统下编辑的文件会出现不可打印字符黑框框而不进行换行。而在Unix系统下打开Windows系统编辑的文件，在每行末尾会有一个多出来的^M字符，是` \r` 打印出来的。
