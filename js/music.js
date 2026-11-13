/* =====================================================================
   THE LISTENING ROOM — edit these to update the music page.
   Leave a value as null (or a list empty) and the page shows a gentle
   "coming soon" message instead.
   ===================================================================== */

// Album of the month, e.g.
// { title: 'Album name', artist: 'Artist', note: 'Why we chose it.', link: 'https://open.spotify.com/album/...' }
const ALBUM_OF_MONTH = null;

// What Floreamus Una is listening to today, e.g.
// { title: 'Song or album', artist: 'Artist', note: 'Perfect for a slow Sunday repot.', link: '' }
const NOW_PLAYING = null;

// Recent picks from the community or from us, newest first, e.g.
// { title: 'Album', artist: 'Artist', by: 'Brett', note: 'One line on why.' }
const MUSIC_PICKS = [];

(function () {
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function link(item, text) { return item.link ? ' <a href="' + esc(item.link) + '" target="_blank" rel="noopener" style="color:inherit">' + text + ' ↗</a>' : ''; }

  var a = document.getElementById('aotm');
  if (a && ALBUM_OF_MONTH) {
    a.innerHTML = '<p class="eyebrow" style="color:var(--sage)">Album of the month</p>' +
      '<h3>' + esc(ALBUM_OF_MONTH.title) + '</h3>' +
      '<p style="opacity:1;margin-bottom:.4rem">by ' + esc(ALBUM_OF_MONTH.artist) + '</p>' +
      '<p>' + esc(ALBUM_OF_MONTH.note) + link(ALBUM_OF_MONTH, 'Listen') + '</p>';
  }

  var n = document.getElementById('now-playing');
  if (n) {
    n.innerHTML = NOW_PLAYING
      ? '<span class="np-dot" aria-hidden="true"></span><div><p class="eyebrow">On our speakers today</p><h3>' + esc(NOW_PLAYING.title) +
        ' <span class="np-artist">· ' + esc(NOW_PLAYING.artist) + '</span></h3><p>' + esc(NOW_PLAYING.note) + link(NOW_PLAYING, 'Listen') + '</p></div>'
      : '<span class="np-dot" aria-hidden="true"></span><div><p class="eyebrow">On our speakers today</p><h3>Our first pick is coming soon</h3><p>In the meantime, tell us what you\'re playing in the discussion below.</p></div>';
  }

  var p = document.getElementById('music-picks');
  if (p) {
    p.innerHTML = MUSIC_PICKS.length
      ? MUSIC_PICKS.map(function (v) { return '<div class="review"><h3>' + esc(v.title) + '</h3><p class="by">by ' + esc(v.artist) + (v.by ? ' · picked by ' + esc(v.by) : '') + '</p><p>' + esc(v.note) + '</p></div>'; }).join('')
      : '<div class="review" style="grid-column:1/-1;text-align:center"><p>No picks yet. Be the first to share what you\'re listening to in the discussion below.</p></div>';
  }
})();
