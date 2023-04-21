import { Song } from '../common/song';
import { SongRepository } from '../server/songrepository';
import { Album } from '../common/album';
import { AlbumRepository } from '../server/albumrepository';
import { Playlist } from '../common/playlist';
import { PlaylistRepository } from '../server/playlistrepository';

const songRepository = new SongRepository();

// First Album
const song1 = new Song();
song1.id = 1;
song1.songName = "Welcome to New York";
song1.artistName = "Taylor Swift";
song1.albumId = 1;
song1.length = 3*60 + 32;
songRepository.add(song1);

const song2 = new Song();
song2.id = 2;
song2.songName = "Blank Space";
song2.artistName = "Taylor Swift";
song2.albumId = 1;
song2.length = 3*60 + 51;
songRepository.add(song2);

const song3 = new Song();
song3.id = 3;
song3.songName = "Style";
song3.artistName = "Taylor Swift";
song3.albumId = 1;
song3.length = 3*60 + 51;
songRepository.add(song3);

const song4 = new Song();
song4.id = 4;
song4.songName = "Out of The Woods";
song4.artistName = "Taylor Swift";
song4.albumId = 1;
song4.length = 3*60 + 55;
songRepository.add(song4);

const song5 = new Song();
song5.id = 5;
song5.songName = "All You Had To Do Was Stay";
song5.artistName = "Taylor Swift";
song5.albumId = 1;
song5.length = 3*60 + 13;
songRepository.add(song5);

const song6 = new Song();
song6.id = 6;
song6.songName = "Shake It Off";
song6.artistName = "Taylor Swift";
song6.albumId = 1;
song6.length = 3*60 + 39;
songRepository.add(song6);

const song7 = new Song();
song7.id = 7;
song7.songName = "I Wish You Would";
song7.artistName = "Taylor Swift";
song7.albumId = 1;
song7.length = 3*60 + 27;
songRepository.add(song7);

const song8 = new Song();
song8.id = 8;
song8.songName = "Bad Blood";
song8.artistName = "Taylor Swift";
song8.albumId = 1;
song8.length = 3*60 + 31;
songRepository.add(song8);

const song9 = new Song();
song9.id = 9;
song9.songName = "Wildest Dreams";
song9.artistName = "Taylor Swift";
song9.albumId = 1;
song9.length = 3*60 + 40;
songRepository.add(song9);

const song10 = new Song();
song10.id = 10;
song10.songName = "How You Get The Girl";
song10.artistName = "Taylor Swift";
song10.albumId = 1;
song10.length = 4*60 + 7;
songRepository.add(song10);

const song11 = new Song();
song11.id = 11;
song11.songName = "This Love";
song11.artistName = "Taylor Swift";
song11.albumId = 1;
song11.length = 4*60 + 10;
songRepository.add(song11);

const song12 = new Song();
song12.id = 12;
song12.songName = "I Know Places";
song12.artistName = "Taylor Swift";
song12.albumId = 1;
song12.length = 3*60 + 15;
songRepository.add(song12);

const song13 = new Song();
song13.id = 13;
song13.songName = "Clean";
song13.artistName = "Taylor Swift";
song13.albumId = 1;
song13.length = 4*60 + 31;
songRepository.add(song13);

// Second Album
const song14 = new Song();
song14.id = 14;
song14.songName = "Song 14";
song14.artistName = "Artist 2";
song14.albumId = 2;
song14.length = 60;
songRepository.add(song14);

const song15 = new Song();
song15.id = 15;
song15.songName = "Song 15";
song15.artistName = "Artist 2";
song15.albumId = 2;
song15.length = 60;
songRepository.add(song15);

const song16 = new Song();
song16.id = 16;
song16.songName = "Song 16";
song16.artistName = "Artist 2";
song16.albumId = 2;
song16.length = 60;
songRepository.add(song16);

const song17 = new Song();
song17.id = 17;
song17.songName = "Song 17";
song17.artistName = "Artist 2";
song17.albumId = 2;
song17.length = 60;
songRepository.add(song17);

const song18 = new Song();
song18.id = 18;
song18.songName = "Song 18";
song18.artistName = "Artist 2";
song18.albumId = 2;
song18.length = 60;
songRepository.add(song18);

const song19 = new Song();
song19.id = 19;
song19.songName = "Dynamite";
song19.artistName = "BTS";
song19.albumId = 3;
song19.length = 3*60 + 19;
songRepository.add(song19);

const song20 = new Song();
song20.id = 20;
song20.songName = "How You Like That";
song20.artistName = "BLACKPINK";
song20.albumId = 4;
song20.length = 3*60 + 1;
songRepository.add(song20);

// Creating albums
const albumRepository = new AlbumRepository();

const album1 = new Album();
album1.id = 1;
album1.albumName = "1989";
album1.artistName = "Taylor Swift";
album1.songs.push(song1);
album1.songs.push(song2);
album1.songs.push(song3);
album1.songs.push(song4);
album1.songs.push(song5);
album1.songs.push(song6);
album1.songs.push(song7);
album1.songs.push(song8);
album1.songs.push(song9);
album1.songs.push(song10);
album1.songs.push(song11);
album1.songs.push(song12);
album1.songs.push(song13);
albumRepository.add(album1);

const album2 = new Album();
album2.id = 2;
album2.albumName = "Album 2";
album2.artistName = "Artist 2";
album2.songs.push(song14);
album2.songs.push(song15);
album2.songs.push(song16);
album2.songs.push(song17);
album2.songs.push(song18);
albumRepository.add(album2);

// Playlist Data
const playlistRepository = new PlaylistRepository();

// First Album
const playlist1 = new Playlist();
playlist1.id = 1;
playlist1.playlistName = "K-Pop";
playlist1.creatorId = 1;
playlist1.songs.push(song19)
playlist1.songs.push(song20)
playlistRepository.add(playlist1);

// Export repositories for use in frontend
export { songRepository, albumRepository, playlistRepository};