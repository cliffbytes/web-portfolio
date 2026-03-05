import { FC } from "react";

interface SpotifyPlayerProps {
  trackId?: string;
  theme?: number;
  width?: string | number;
  height?: string | number;
}

const trackIds = ["2ms2VLHcIj35LXNoQDPFqz", "0B3NlHnhOImiPxuQmo9Xl1"];

const SpotifyMusic: FC<SpotifyPlayerProps> = ({
  trackId = trackIds[0],
  theme = 1,
  width,
  height,
}) => {
  const src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=${theme}`;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl">
        <iframe
          className={"spotify-music-iframe"}
          title="Spotify music player"
          src={src}
          width={width || "100%"}
          height={height || 152}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SpotifyMusic;
