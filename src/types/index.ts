export interface ResponsePayload<T = unknown> {
  status: "success" | "failed";
  message: string;
  statusCode: number;
  data?: T;
}

export interface DataSong {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}
