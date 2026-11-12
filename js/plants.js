/* =====================================================================
   FLOREAMUS UNA — PLANT LIST
   This one list feeds The Windowbox (shop), the Plant Finder and the
   care guides in The Greenroom. Edit here and every page updates.

   pet:    true = non-toxic to cats and dogs, false = keep away from pets
   easy:   true = good for beginners
   light:  any of "low", "medium", "high"
   care:   "little" | "some" | "lots"  (how much attention it needs)
   art:    picture style: trailing, broad, upright, tall, fern, palm, succulent, round
   price:  null shows "Coming soon"; put a number like 18 when selling
   buyUrl: paste a payment link (e.g. a Stripe Payment Link) to show a Buy button
   ===================================================================== */
const PLANTS = [
  {name:"Spider Plant", latin:"Chlorophytum comosum", art:"trailing", pet:true, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Arching striped leaves and little 'babies' on long stems that you can pot up and share.",
   guide:{Water:"When the top 2–3 cm of soil feel dry. Roughly weekly in summer, less in winter.",Light:"Bright, indirect light is best; copes with some shade.",Humidity:"Average room humidity is fine.",Feeding:"Monthly in spring and summer with a balanced liquid feed.",Watch:"Brown tips often come from dry air or minerals in tap water. Rainwater helps."}},
  {name:"Calathea", latin:"Calathea spp. (now Goeppertia)", art:"broad", pet:true, easy:false, light:["low","medium"], care:"lots", price:null, buyUrl:"",
   intro:"Painted, patterned leaves that fold up at night, like its relative the prayer plant.",
   guide:{Water:"Keep the soil lightly moist but never soggy. Use rainwater or filtered water if you can.",Light:"Medium, indirect light. Direct sun fades and scorches the patterns.",Humidity:"High. Kitchens and bathrooms with a window suit them.",Feeding:"Half-strength feed monthly from spring to late summer.",Watch:"Crispy edges mean dry air; curling leaves mean thirst."}},
  {name:"Boston Fern", latin:"Nephrolepis exaltata", art:"fern", pet:true, easy:false, light:["medium"], care:"some", price:null, buyUrl:"",
   intro:"A full, feathery fountain of fronds. Lovely on a stand or in a hanging pot.",
   guide:{Water:"Keep evenly moist. Don't let it dry out completely.",Light:"Bright, indirect light; no harsh sun.",Humidity:"High. Mist, group with other plants or use a pebble tray.",Feeding:"Monthly in the growing season at half strength.",Watch:"Shedding brown fronds usually means the air or soil is too dry."}},
  {name:"Parlour Palm", latin:"Chamaedorea elegans", art:"palm", pet:true, easy:true, light:["low","medium"], care:"some", price:null, buyUrl:"",
   intro:"A graceful, slow-growing palm that has brightened British homes since Victorian times.",
   guide:{Water:"When the top few centimetres are dry. Water less in winter.",Light:"Low to medium, indirect light.",Humidity:"Average; enjoys a little extra.",Feeding:"Monthly in spring and summer.",Watch:"Brown leaf tips mean dry air or uneven watering."}},
  {name:"Peperomia", latin:"Peperomia obtusifolia", art:"round", pet:true, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Glossy, rounded leaves on a compact plant. Perfect for desks and shelves.",
   guide:{Water:"Let the top half of the soil dry out; its thick leaves store water.",Light:"Medium, indirect light; tolerates lower light.",Humidity:"Average.",Feeding:"Every 6–8 weeks in spring and summer.",Watch:"Soft, drooping stems mean overwatering."}},
  {name:"Haworthia", latin:"Haworthiopsis attenuata", art:"succulent", pet:true, easy:true, light:["medium","high"], care:"little", price:null, buyUrl:"",
   intro:"A small, striped succulent rosette, a pet-safe alternative to aloe.",
   guide:{Water:"Only when the soil is completely dry, then water thoroughly.",Light:"Bright light, including some gentle sun.",Humidity:"Low to average.",Feeding:"A cactus feed two or three times in summer.",Watch:"Mushy leaves mean too much water."}},
  {name:"Prayer Plant", latin:"Maranta leuconeura", art:"broad", pet:true, easy:false, light:["low","medium"], care:"some", price:null, buyUrl:"",
   intro:"Leaves that lift and fold each evening like hands in prayer.",
   guide:{Water:"Keep lightly moist; use room-temperature water.",Light:"Medium, indirect light.",Humidity:"Medium to high.",Feeding:"Monthly at half strength in the growing season.",Watch:"Faded leaves mean too much light."}},
  {name:"Cast Iron Plant", latin:"Aspidistra elatior", art:"upright", pet:true, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Earned its name by surviving dim, chilly Victorian hallways. Nearly unbreakable.",
   guide:{Water:"When the top half of the soil is dry.",Light:"Low to medium light; keep out of direct sun.",Humidity:"Average.",Feeding:"Two or three times a year.",Watch:"Overwatering is the only real way to upset it."}},
  {name:"Ponytail Palm", latin:"Beaucarnea recurvata", art:"palm", pet:true, easy:true, light:["medium","high"], care:"little", price:null, buyUrl:"",
   intro:"A swollen trunk that stores water and a shock of curly leaves on top.",
   guide:{Water:"Every 2–3 weeks; let the soil dry out fully.",Light:"Bright light with some sun.",Humidity:"Low to average.",Feeding:"Two or three times in spring and summer.",Watch:"A soft trunk base means too much water."}},
  {name:"Bird's Nest Fern", latin:"Asplenium nidus", art:"broad", pet:true, easy:false, light:["low","medium"], care:"some", price:null, buyUrl:"",
   intro:"Wavy, glossy fronds unfurling from a central 'nest'.",
   guide:{Water:"Keep the soil moist. Water around the edge, not into the centre.",Light:"Medium to low, indirect light.",Humidity:"High; perfect for a bright bathroom.",Feeding:"Monthly at half strength in spring and summer.",Watch:"Don't touch new fronds as they unfurl; they mark easily."}},
  {name:"Snake Plant", latin:"Dracaena trifasciata (Sansevieria)", art:"upright", pet:false, easy:true, light:["low","medium","high"], care:"little", price:null, buyUrl:"",
   intro:"Bold, sword-like leaves and a famously forgiving nature.",
   guide:{Water:"Sparingly; let the soil dry out completely. Every 2–4 weeks.",Light:"Anything from shade to bright light.",Humidity:"Average.",Feeding:"Two or three times a year.",Watch:"Overwatering causes root rot, the main way they die."}},
  {name:"ZZ Plant", latin:"Zamioculcas zamiifolia", art:"upright", pet:false, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Glossy leaves on upright stems, growing from water-storing roots.",
   guide:{Water:"Every 2–3 weeks; less in winter.",Light:"Low to bright, indirect light.",Humidity:"Average.",Feeding:"Two or three times in the growing season.",Watch:"Yellow leaves usually mean too much water."}},
  {name:"Golden Pothos", latin:"Epipremnum aureum", art:"trailing", pet:false, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Heart-shaped, gold-splashed leaves that trail or climb. One of the easiest plants there is.",
   guide:{Water:"When the top half of the soil is dry.",Light:"Low to bright, indirect light; more light means more gold.",Humidity:"Average.",Feeding:"Monthly in spring and summer.",Watch:"Long bare stems mean it wants more light. Trim to make it bushier."}},
  {name:"Monstera", latin:"Monstera deliciosa", art:"broad", pet:false, easy:true, light:["medium"], care:"some", price:null, buyUrl:"",
   intro:"The classic Swiss cheese plant, with big, split leaves that make a statement.",
   guide:{Water:"When the top 5 cm of soil are dry.",Light:"Bright, indirect light for more splits.",Humidity:"Average to high.",Feeding:"Monthly in spring and summer.",Watch:"Give it a moss pole to climb; it'll grow bigger leaves."}},
  {name:"Peace Lily", latin:"Spathiphyllum wallisii", art:"broad", pet:false, easy:true, light:["low","medium"], care:"some", price:null, buyUrl:"",
   intro:"Dark, glossy leaves and elegant white flowers.",
   guide:{Water:"When the top few centimetres are dry. It droops dramatically when thirsty, then recovers.",Light:"Low to medium, indirect light.",Humidity:"Average to high.",Feeding:"Monthly in spring and summer.",Watch:"No flowers usually means not enough light."}},
  {name:"Rubber Plant", latin:"Ficus elastica", art:"tall", pet:false, easy:true, light:["medium","high"], care:"some", price:null, buyUrl:"",
   intro:"Big, glossy, deep-green or burgundy leaves on a sturdy stem.",
   guide:{Water:"When the top 5 cm of soil are dry.",Light:"Bright, indirect light.",Humidity:"Average.",Feeding:"Monthly in spring and summer.",Watch:"Wipe dust off the leaves to keep them shining."}},
  {name:"Fiddle Leaf Fig", latin:"Ficus lyrata", art:"tall", pet:false, easy:false, light:["medium","high"], care:"lots", price:null, buyUrl:"",
   intro:"Large, violin-shaped leaves. The designer favourite.",
   guide:{Water:"When the top 5 cm of soil are dry; water thoroughly.",Light:"Bright, indirect light near a window.",Humidity:"Average to high.",Feeding:"Monthly in spring and summer.",Watch:"Dislikes being moved and cold draughts; may drop leaves if upset."}},
  {name:"Alocasia", latin:"Alocasia spp.", art:"broad", pet:false, easy:false, light:["medium"], care:"lots", price:null, buyUrl:"",
   intro:"Dramatic, arrow-shaped leaves with bold veins.",
   guide:{Water:"Keep slightly moist, never soggy.",Light:"Bright, indirect light.",Humidity:"High.",Feeding:"Monthly at half strength in spring and summer.",Watch:"It may go dormant in winter. Ease off watering and wait for spring."}},
  {name:"Heartleaf Philodendron", latin:"Philodendron hederaceum", art:"trailing", pet:false, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Soft, heart-shaped leaves on long trailing stems.",
   guide:{Water:"When the top few centimetres are dry.",Light:"Low to bright, indirect light.",Humidity:"Average.",Feeding:"Monthly in spring and summer.",Watch:"Yellow leaves mean too much water; small leaves mean too little light."}},
  {name:"Chinese Evergreen", latin:"Aglaonema spp.", art:"broad", pet:false, easy:true, light:["low","medium"], care:"little", price:null, buyUrl:"",
   intro:"Silver, green and sometimes pink-patterned leaves that thrive in dim corners.",
   guide:{Water:"When the top half of the soil is dry.",Light:"Low to medium, indirect light.",Humidity:"Average.",Feeding:"Every 6–8 weeks in spring and summer.",Watch:"Keep away from cold draughts and windows in winter."}}
];

/* Seasonal tips (the Greenroom shows the current season automatically) */
const SEASONS = {
  Spring:["<strong>Wake-up time.</strong> Growth picks up, so slowly increase watering.","<strong>Repot</strong> plants whose roots poke out of the bottom, going up just one pot size.","<strong>Start feeding</strong> again with a gentle liquid feed.","<strong>Turn your plants</strong> weekly so they grow evenly towards the light."],
  Summer:["<strong>Water more often</strong>, but always check the soil first.","<strong>Watch for scorch.</strong> Move delicate plants back from hot, sunny windows.","<strong>Holiday plan:</strong> group plants together out of direct sun and water well before you go.","<strong>Feed regularly</strong> while plants are growing fast."],
  Autumn:["<strong>Ease off feeding</strong> as growth slows.","<strong>Bring outdoor plants in</strong> before the first cold nights, checking for pests.","<strong>Move plants closer to windows</strong> as the days shorten.","<strong>Water less</strong>: the soil stays wet for longer now."],
  Winter:["<strong>Water less.</strong> Most houseplants rest in winter, so let the soil dry out more.","<strong>Watch the radiators.</strong> Dry heat lowers humidity, so group plants or use a pebble tray.","<strong>Chase the light.</strong> Move plants nearer windows and dust their leaves.","<strong>Check for pests.</strong> Spider mites love warm, dry rooms, so look under leaves."]
};

/* Book reviews to feature on The Bookshelf (leave empty to show a placeholder) */
const REVIEWS = [
  // {title:"Book title", author:"Author name", reviewer:"First name", leaves:4, text:"A short review."},
];
