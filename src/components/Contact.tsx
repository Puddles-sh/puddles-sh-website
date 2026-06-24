export function Contact() {
  function handleWatchlistClick() {
    window.alert(
      "Repo watchlist: hard hat issued. Public repo notification system is still made of sticky notes and optimism."
    );
  }

  return (
    <div className="contact-panel">
      <div>
        <h2>Built in the open. Designed for production.</h2>
        <p>
          The framework is actively developed and headed for open source. The repo is currently
          wearing a hard hat backstage while the build gets cleaned up.
        </p>
      </div>
      <div className="contact-links">
        <button type="button" onClick={handleWatchlistClick}>
          Repo watchlist
        </button>
        <a href="mailto:puddles.sh@gmail.com">puddles.sh@gmail.com</a>
      </div>
    </div>
  );
}
