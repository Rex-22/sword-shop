var Product = require("../models/product");
var database = require("../middleware/database");

var products = [
  new Product({
    name: "Akaviri Sword",
    description:
      'This sword is carried by Dexion Evicus after he is rescued during the quest "Prophet." It can be pickpocketed if the Dragonborn has the Misdirection perk.',
    short_description:
      "The Akaviri Sword is a unique Blades Sword found in The Elder Scrolls V: Dawnguard.",
    price: 300,
    image_url: "products/Bladessword.webp"
  }),
  new Product({
    name: "Chillrend",
    description:
      "Chillrend is a unique, leveled glass sword found in The Elder Scrolls V: Skyrim. Returning from Oblivion, Chillrend is in the possession of the Thieves Guilds leader Mercer Frey. Because the sword is leveled, the magnitude of the enchantment, base strength, and value are contingent upon character level. The sword can be obtained as early as level one.",
    short_description:
      "Chillrend is a unique, leveled glass sword found in The Elder Scrolls V: Skyrim.",
    price: 1442,
    image_url: "products/Glassswordchillrend.webp"
  }),
  new Product({
    name: "Dragonbade",
    description:
      "Dragonbane is a leveled unique Blades Sword found in The Elder Scrolls V: Skyrim. The sword is leveled, and the magnitude of the enchantments, base strength, and value are based upon character level.",
    short_description:
      "Dragonbane is a leveled unique Blades Sword found in The Elder Scrolls V: Skyrim.",
    price: 1560,
    image_url: "products/Bladessword.webp"
  }),
  new Product({
    name: "Nightingale Blade",
    description:
      "The Nightingale Blade is a leveled, unique, one-handed weapon that appears in The Elder Scrolls V: Skyrim. It once belonged to the Nightingale and former Thieves Guild Guildmaster Gallus Desidenius.",
    short_description:
      "The Nightingale Blade is a leveled, unique, one-handed weapon that appears in The Elder Scrolls V: Skyrim.",
    price: 1665,
    image_url: "products/Nightingale_Blade.webp"
  }),
  new Product({
    name: "Windshear",
    description:
      "Windshear is a unique scimitar found in The Elder Scrolls V: Skyrim. Although its appearance is identical to the Scimitar, the enchantment is one of a kind and cannot be disenchanted.",
    short_description:
      "Windshear is a unique scimitar found in The Elder Scrolls V: Skyrim.",
    price: 40,
    image_url: "products/Scimitar.webp"
  }),
  new Product({
    name: "Eduj",
    description:
      "Eduj is a unique Nord Hero Sword found in The Elder Scrolls V: Skyrim. Old Nordic stories say it was one of the weapons that Kvenel the Tongue favored when he fought in battle. The other weapon was the legendary war axe, Okin.",
    short_description:
      "Eduj is a unique Nord Hero Sword found in The Elder Scrolls V: Skyrim.",
    price: 330,
    image_url: "products/Nordherosword.webp"
  }),
  new Product({
    name: "Daedric Sword",
    description:
      "Daedric swords are somewhat similar in appearance to scimitars: They have a curved handle and a blade that sweeps backwards, though the similarity stops there, as the Daedric sword has a much darker color, contains sharper edges around the hilt, a serrated blade, and decorative etchings.",
    short_description:
      "The Daedric Sword is a one-handed weapon that appears in The Elder Scrolls V: Skyrim.",
    price: 1250,
    image_url: "products/Daedricsword.webp"
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  const product = products[i];
  database
    .query(
      `INSERT INTO products(name, description, short_description, price, image_url) VALUES(
    '${product.name}',
    '${product.description}',
    '${product.short_description}',
    '${product.price}',
    '${product.image_url}')`
    )
    .then(result => {
      if (++done === products.length) process.exit(0);
    })
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
}
