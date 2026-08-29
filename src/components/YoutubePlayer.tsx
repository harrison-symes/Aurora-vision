import * as React from "react";

interface IYoutubePlayerProps {
  videoId: string;
  /** Used in the play button's label, e.g. "Play the Temporal trailer". */
  title?: string;
}

const thumbnail = (videoId: string, quality: "maxresdefault" | "hqdefault") =>
  `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;

/**
 * Shows the video's thumbnail and only loads YouTube once someone presses
 * play, in a fullscreen dialog. Pages here carry up to eight videos, and
 * embedding each one directly meant eight YouTube iframes on first paint.
 */
const YoutubePlayer = (props: IYoutubePlayerProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const label = props.title ?? "Play video";

  const open = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
  };

  // Clicking the backdrop closes. The dialog fills the viewport, so compare
  // against the frame rather than the event target.
  const onDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      close();
    }
  };

  return (
    <>
      <button type="button" className="video" onClick={open} aria-label={label}>
        <img
          className="video__thumb"
          src={thumbnail(props.videoId, "maxresdefault")}
          onError={(event) => {
            // Not every video has a maxres still.
            const img = event.currentTarget;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "true";
              img.src = thumbnail(props.videoId, "hqdefault");
            }
          }}
          alt=""
          loading="lazy"
        />
        <span className="video__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="video-modal"
        onClick={onDialogClick}
        onClose={() => setIsOpen(false)}
      >
        <button
          type="button"
          className="video-modal__close"
          onClick={close}
          aria-label="Close video"
        >
          Close
        </button>
        {/* Unmounting the iframe on close is what stops playback. */}
        {isOpen && (
          <div className="video-modal__frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </dialog>
    </>
  );
};

export default YoutubePlayer;
