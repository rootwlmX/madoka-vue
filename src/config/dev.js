const GITHUB_OAUTH = {
  url: 'https://github.com/login/oauth/authorize?client_id=d36422ab56e8ee83ebd0&state=blog',
  clientid: 'd36422ab56e8ee83ebd0'
}
const WEIBO_OAUTH = {
  url: 'https://api.weibo.com/oauth2/authorize?client_id=1075586328&redirect_uri=http://aimeeserver.mangoya.cn:8899/v1/user/login&response_type=code&state=weibo_blog',
  clientid: '1075586328'
}
export default {
  GITHUB_OAUTH,
  WEIBO_OAUTH
}
