const User = require('../models/user');

const testData = [{ object: 'card',
  id: '621cfd79-be4e-41e3-95ce-62b0eeff5baf',
  oracle_id: 'c75e55f2-fd6c-4816-9d96-21eeb8369aff',
  multiverse_ids: [ 430834 ],
  mtgo_id: 64774,
  mtgo_foil_id: 64775,
  arena_id: 65769,
  tcgplayer_id: 135094,
  name: 'The Scarab God',
  lang: 'en',
  released_at: '2017-07-14',
  uri:
   'https://api.scryfall.com/cards/621cfd79-be4e-41e3-95ce-62b0eeff5baf',
  scryfall_uri:
   'https://scryfall.com/card/hou/145/the-scarab-god?utm_source=api',
  layout: 'normal',
  highres_image: true,
  image_uris:
   { small:
      'https://img.scryfall.com/cards/small/en/hou/145.jpg?1517813031',
     normal:
      'https://img.scryfall.com/cards/normal/en/hou/145.jpg?1517813031',
     large:
      'https://img.scryfall.com/cards/large/en/hou/145.jpg?1517813031',
     png:
      'https://img.scryfall.com/cards/png/en/hou/145.png?1517813031',
     art_crop:
      'https://img.scryfall.com/cards/art_crop/en/hou/145.jpg?1517813031',
     border_crop:
      'https://img.scryfall.com/cards/border_crop/en/hou/145.jpg?1517813031' },
  mana_cost: '{3}{U}{B}',
  cmc: 5,
  type_line: 'Legendary Creature — God',
  oracle_text:
   'At the beginning of your upkeep, each opponent loses X life and you scry X, where X is the number of Zombies you control.\n{2}{U}{B}: Exile target creature card from a graveyard. Create a token that\'s a copy of it, except it\'s a 4/4 black Zombie.\nWhen The Scarab God dies, return it to its owner\'s hand at the beginning of the next end step.',
  power: '5',
  toughness: '5',
  colors: [ 'B', 'U' ],
  color_identity: [ 'B', 'U' ],
  legalities:
   { standard: 'not_legal',
     future: 'not_legal',
     frontier: 'legal',
     modern: 'legal',
     legacy: 'legal',
     pauper: 'not_legal',
     vintage: 'legal',
     penny: 'not_legal',
     commander: 'legal',
     '1v1': 'legal',
     duel: 'legal',
     brawl: 'not_legal' },
  games: [ 'arena', 'mtgo', 'paper' ],
  reserved: false,
  foil: true,
  nonfoil: true,
  oversized: false,
  promo: false,
  reprint: false,
  set: 'hou',
  set_name: 'Hour of Devastation',
  set_uri:
   'https://api.scryfall.com/sets/65ff168b-bb94-47a5-a8f9-4ec6c213e768',
  set_search_uri:
   'https://api.scryfall.com/cards/search?order=set&q=e%3Ahou&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/hou?utm_source=api',
  rulings_uri:
   'https://api.scryfall.com/cards/621cfd79-be4e-41e3-95ce-62b0eeff5baf/rulings',
  prints_search_uri:
   'https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ac75e55f2-fd6c-4816-9d96-21eeb8369aff&unique=prints',
  collector_number: '145',
  digital: false,
  rarity: 'mythic',
  illustration_id: '21600ba2-0d50-4e68-a33e-522d240be5fd',
  artist: 'Lius Lasahido',
  border_color: 'black',
  frame: '2015',
  frame_effect: '',
  full_art: false,
  story_spotlight: false,
  edhrec_rank: 1287,
  related_uris:
   { gatherer:
      'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=430834',
     tcgplayer_decks:
      'https://decks.tcgplayer.com/magic/deck/search?contains=The+Scarab+God&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
     edhrec: 'http://edhrec.com/route/?cc=The+Scarab+God',
     mtgtop8:
      'http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=The+Scarab+God' },
  myId: 66 },
  { object: 'card',
    id: 'fa6ac7d2-0127-49a8-b7d2-a38308d3c27b',
    oracle_id: '64a9a6b4-26b5-4d23-be86-85c54e9c4727',
    multiverse_ids: [ 414388 ],
    mtgo_id: 61152,
    mtgo_foil_id: 61153,
    tcgplayer_id: 120266,
    name: 'Liliana, the Last Hope',
    lang: 'en',
    released_at: '2016-07-22',
    uri:
     'https://api.scryfall.com/cards/fa6ac7d2-0127-49a8-b7d2-a38308d3c27b',
    scryfall_uri:
     'https://scryfall.com/card/emn/93/liliana-the-last-hope?utm_source=api',
    layout: 'normal',
    highres_image: true,
    image_uris:
     { small:
        'https://img.scryfall.com/cards/small/en/emn/93.jpg?1517813031',
       normal:
        'https://img.scryfall.com/cards/normal/en/emn/93.jpg?1517813031',
       large:
        'https://img.scryfall.com/cards/large/en/emn/93.jpg?1517813031',
       png:
        'https://img.scryfall.com/cards/png/en/emn/93.png?1517813031',
       art_crop:
        'https://img.scryfall.com/cards/art_crop/en/emn/93.jpg?1517813031',
       border_crop:
        'https://img.scryfall.com/cards/border_crop/en/emn/93.jpg?1517813031' },
    mana_cost: '{1}{B}{B}',
    cmc: 3,
    type_line: 'Legendary Planeswalker — Liliana',
    oracle_text:
     '+1: Up to one target creature gets -2/-1 until your next turn.\n−2: Put the top two cards of your library into your graveyard, then you may return a creature card from your graveyard to your hand.\n−7: You get an emblem with "At the beginning of your end step, create X 2/2 black Zombie creature tokens, where X is two plus the number of Zombies you control."',
    loyalty: '3',
    colors: [ 'B' ],
    color_identity: [ 'B' ],
    all_parts:
     [ { object: 'related_card',
         id: 'fa6ac7d2-0127-49a8-b7d2-a38308d3c27b',
         component: 'combo_piece',
         name: 'Liliana, the Last Hope',
         type_line: 'Legendary Planeswalker — Liliana',
         uri:
          'https://api.scryfall.com/cards/fa6ac7d2-0127-49a8-b7d2-a38308d3c27b' },
       { object: 'related_card',
         id: '06e7f8df-826e-4ba7-9c6c-8c8eb7a61de8',
         component: 'token',
         name: 'Zombie',
         type_line: 'Token Creature — Zombie',
         uri:
          'https://api.scryfall.com/cards/06e7f8df-826e-4ba7-9c6c-8c8eb7a61de8' },
       { object: 'related_card',
         id: '1512fe7b-5e01-424e-9747-8d4840a5d22a',
         component: 'combo_piece',
         name: 'Liliana, the Last Hope Emblem',
         type_line: 'Emblem — Liliana',
         uri:
          'https://api.scryfall.com/cards/1512fe7b-5e01-424e-9747-8d4840a5d22a' } ],
    legalities:
     { standard: 'not_legal',
       future: 'not_legal',
       frontier: 'legal',
       modern: 'legal',
       legacy: 'legal',
       pauper: 'not_legal',
       vintage: 'legal',
       penny: 'not_legal',
       commander: 'legal',
       '1v1': 'legal',
       duel: 'legal',
       brawl: 'not_legal' },
    games: [ 'mtgo', 'paper' ],
    reserved: false,
    foil: true,
    nonfoil: true,
    oversized: false,
    promo: false,
    reprint: false,
    set: 'emn',
    set_name: 'Eldritch Moon',
    set_uri:
     'https://api.scryfall.com/sets/5f0e4093-334f-4439-bbb5-a0affafd0ffc',
    set_search_uri:
     'https://api.scryfall.com/cards/search?order=set&q=e%3Aemn&unique=prints',
    scryfall_set_uri: 'https://scryfall.com/sets/emn?utm_source=api',
    rulings_uri:
     'https://api.scryfall.com/cards/fa6ac7d2-0127-49a8-b7d2-a38308d3c27b/rulings',
    prints_search_uri:
     'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A64a9a6b4-26b5-4d23-be86-85c54e9c4727&unique=prints',
    collector_number: '93',
    digital: false,
    rarity: 'mythic',
    illustration_id: '7d2174c3-3631-4de3-9bf9-2932b24d663f',
    artist: 'Anna Steinbauer',
    border_color: 'black',
    frame: '2015',
    frame_effect: '',
    full_art: false,
    story_spotlight: false,
    edhrec_rank: 1708,
    related_uris:
     { gatherer:
        'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=414388',
       tcgplayer_decks:
        'https://decks.tcgplayer.com/magic/deck/search?contains=Liliana%2C+the+Last+Hope&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
       edhrec: 'http://edhrec.com/route/?cc=Liliana%2C+the+Last+Hope',
       mtgtop8:
        'http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Liliana%2C+the+Last+Hope' },
    myId: 116 }];

exports.saveCardsToDB = function(req, res, next) {

    cards.save(function(err) {
          if (err) { return next(err); }

          // Repond to request indicating the user was created
          res.json({ cards: testData });
        });
};
