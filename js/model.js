import 'whatwg-fetch'

const VIMEO_API_URL = `http://vimeo.com/api/v2`;

export function getChannelVideos(channelName) {
  return fetch(`${VIMEO_API_URL}/channel/${channelName}/videos.json`)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      // validate json data. return only items have required data.
      return json.filter((item) => {
        return (item.id && item.title && item.width && item.height && item.thumbnail_large);
      })
    }).catch(function (ex) {
      console.log('parsing failed', ex);
      throw ex;
    })
}
