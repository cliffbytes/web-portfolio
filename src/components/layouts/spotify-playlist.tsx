import { FC } from "react";

interface SpotifyPlaylistProps {
  playlistId?: string;
  theme?: number;
  width?: string | number;
  height?: string | number;
}

const SpotifyPlaylist: FC<SpotifyPlaylistProps> = ({
  playlistId = "7pIYWxTqgUHDSM6cq9SDUV",
  theme = 1,
  width,
  height,
}) => {
  const src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${theme}`;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl">
        <iframe
          className={"spotify-playlist-iframe"}
          title="Spotify playlist player"
          src={src}
          width={width || "100%"}
          height={height || 352}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
