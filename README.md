# f10k

f10k should become the answer to the 10k saving limit of Spotify. This web-based player
can be used to save tracks, artists and albums by saving the corresponding ids to its own storage.

## Current features

- Save tracks and artists
- View saved tracks and artists
- Track/artist lists pagination (also in search)
- Import saved tracks from your Spotify account
- Play tracks
- Next + previous song
- Current track information (track position, album, artist)
- Search tracks and artists

## Planned features

- Control other devices
- Play a list of all your saved tracks
- Play your saved tracks on shuffle
- Volume control
- Replacing pagination by virtual scrolling
- Play an album
- Export saved tracks to Spotify

## Contributing

First you will need to add a new app to your [Spotify dashboard](https://developer.spotify.com/dashboard/login).

Copy `./src/.environment-example.ts` and paste it as `environment.ts` in the same folder. 

Change the client-id in `environment.ts` to your own client-id found at your dashboard.

Up until now, there is no backend yet, so just run the regular commands for Angular:

``` 
npm install
npm run start
``` 
