export interface Musica {
  track_id: string;
  track_name: string;
  track_artist: string;
  track_popularity: number;
  track_album_id: string;
  track_album_name: string;
  track_album_release_date: string;
  playlist_name: string;
  playlist_id: string;
  playlist_genre: string;
  playlist_subgenre: string;
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  duration_ms: number;
}
