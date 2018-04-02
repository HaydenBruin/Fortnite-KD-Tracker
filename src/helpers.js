export function APIUrl() {
    var config = [];
    if(process.env.NODE_ENV === "development")
    {
        config['apiurl'] = "http://fortnite.bruindev.com";
    }
    else
    {
        config['apiurl'] = "https://fortnitekd.club";
    }
    return config;
}