import ls from 'local-storage';
const config= {
    rootUrl: 'https://addon-dot-apt-cubist-307713.ew.r.appspot.com/',
    apikey: ls.get('apiKey'),
    userId: 66381 // store to local storage later
}

export default config;