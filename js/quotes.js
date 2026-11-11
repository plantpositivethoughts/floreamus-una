/* =====================================================================
   QUOTE OF THE DAY — the same quote as the Floreamus Una app, every day.
   The website first reads the quote list straight from the live app, so
   when you add quotes to the app they appear here automatically. If the
   app can't be reached, it uses this backup copy.
   ===================================================================== */
const APP_URL = 'https://plantpositivethoughts.github.io/flourish-together/';
const BACKUP_QUOTES = [
  "Water yourself as you water your plants.",
  "Growth is slow, then sudden. Keep tending.",
  "Rest is part of the growing season.",
  "Roots first. Blooms later.",
  "Small, steady care beats grand gestures.",
  "Notice one new leaf today, on a plant or in yourself.",
  "You do not have to bloom all year round.",
  "A seed does not hurry, and still it becomes a forest.",
  "Breathe in the green. Breathe out the grey.",
  "Be as patient with yourself as you are with a seedling.",
  "Every leaf turns towards the light. So can you.",
  "Stillness is not empty. It is where roots grow.",
  "Today, let something be enough.",
  "Even the oak was once a quiet acorn.",
  "Tend the small things, and the big things will follow.",
  "Soft soil lets roots go deep. Be gentle with yourself.",
  "There is no wrong pace for growing.",
  "Pause. Look closely. Something is changing.",
  "Pruning is not loss. It makes room for new growth.",
  "The garden does not compare its flowers.",
  "Let this breath be the only thing you do.",
  "Winter is not the end. It is the gathering.",
  "Kindness is a kind of sunlight.",
  "You can begin again with every watering.",
  "What you nourish, grows.",
  "A wilted leaf is not a failed plant.",
  "Slow is still moving.",
  "Make a little room today for nothing at all.",
  "Your roots are stronger than your storms.",
  "Notice the light before you notice the shadows.",
  "Grow where you are, as you are.",
  "Quiet days grow deep roots.",
  "Every bloom began in the dark.",
  "Let go of the leaves that no longer serve you.",
  "Gentleness is a strength that bends and does not break.",
  "A single green thing can change a whole room.",
  "You are allowed to be a work in progress.",
  "Return to the breath, as a plant returns to the sun.",
  "Care is a quiet way of saying: you matter.",
  "Not every season is for flowering.",
  "The smallest sprout still reaches for the sky.",
  "Be the soil, not the storm.",
  "Look up. The sky is part of your garden too.",
  "Bloom softly. It still counts.",
  "Take today one breath, one step, one leaf at a time.",
  "Where attention goes, life grows.",
  "Even rain is a kind of care.",
  "There is calm in doing one thing slowly.",
  "The heart, like a garden, needs tending.",
  "Let your thoughts drift like leaves on water.",
  "Repotting is uncomfortable. Growth often is.",
  "Celebrate the new leaf, however small.",
  "You do not need to see the roots to trust they are growing.",
  "The garden never hurries, and still the roses come.",
  "Be here, the way a tree is here.",
  "A gentle word waters the spirit.",
  "Make space, and life will fill it with green.",
  "Today's tending is tomorrow's flourishing.",
  "Sit with what is, as the earth sits with the seed.",
  "You are part of the living world, not apart from it.",
  "Rest your eyes on something green, and let your shoulders drop.",
  "Let the morning be soft.",
  "A little light, a little water, a little time.",
  "Grow at the speed of your own heart.",
  "The quietest moments plant the deepest peace.",
  "What blooms in you today?",
  "Some days are for growing. Some are for resting. Both are good.",
  "Hold your worries lightly, like a seed in an open hand.",
  "Each new day is fresh soil.",
  "Peace grows in the spaces we leave empty.",
  "Let the day unfold, petal by petal.",
  "Be curious about your own growing.",
  "There is beauty in the half-opened bud.",
  "Breathe like the forest: slow, deep, unhurried.",
  "The world is softer when we move slowly through it.",
  "Care for one living thing today, and you have done good.",
  "Wherever you are planted, you can still turn towards the light.",
  "Even a cracked pot can hold a thriving plant.",
  "Let your breath be the rain that settles the dust.",
  "Healing, like growing, happens out of sight.",
  "You are allowed to take up space, like a tree in a meadow.",
  "The leaves let go without fear. Spring always returns.",
  "Simple care, done daily, is a quiet kind of love.",
  "Notice what is already flourishing.",
  "Every garden has weeds. Every garden is still beautiful.",
  "You don't have to grow alone. Let us flourish together.",
  "Lean towards what brings you light.",
  "Ground yourself. Feel your feet like roots in the earth.",
  "Stillness waters the soul.",
  "Begin again, as gently as the dawn."
];

(function () {
  const boxes = document.querySelectorAll('[data-quote]');
  if (!boxes.length) return;
  // Identical day calculation to the app, so both show the same quote
  const d = new Date();
  const dayIndex = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  const show = list => {
    const q = list[dayIndex % list.length];
    boxes.forEach(b => {
      b.querySelector('.qotd-text').textContent = q;
      const btn = b.querySelector('.qotd-share');
      if (btn) btn.onclick = async () => {
        const text = `“${q}” — Floreamus Una 🌿`;
        try {
          if (navigator.share) await navigator.share({ title: 'Quote of the day', text, url: APP_URL });
          else { await navigator.clipboard.writeText(text); btn.textContent = 'Copied ✓'; setTimeout(() => btn.textContent = 'Share', 2000); }
        } catch (e) {}
      };
    });
  };
  show(BACKUP_QUOTES);
  fetch(APP_URL, { cache: 'no-cache' })
    .then(r => r.ok ? r.text() : Promise.reject())
    .then(html => {
      const m = html.match(/const QUOTES = \[([\s\S]*?)\];/);
      if (!m) return;
      const list = JSON.parse('[' + m[1].trim().replace(/,\s*$/, '') + ']');
      if (Array.isArray(list) && list.length) show(list);
    })
    .catch(() => {});
})();
