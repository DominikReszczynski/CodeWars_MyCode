function domainName(url) {
	url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/, '');
	//url = url.slice(0,7) === "http://" ? url= url.replace(url.slice(0,7),"") : url=url.replace(url.slice(0,8), "")
	url = url.split('.');
	return `${url[0]}`;
}
