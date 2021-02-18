# Bee Blooms

## What is Bee Blooms?

Bee blooms is a web app that gives you a list of flowering plants near you.

Note: This only works in Canada.

## Why?

Bees are amazing creatures with huge importance to our daily lives. [About 35% of our crops are, to some extent, dependant on bees](https://geneticliteracyproject.org/2015/08/12/pollinator-myth-bees-responsible-one-third-global-food-heightening-crisis-like-7/). 
This includes fruits like apples, melons, cranberries and strawberries. Bees also produce byproducts
like beeswax, with uses from painting to wood polishing, and honey, a sweetener that doesn't go bad even after thousands of years.

Unfortunately, with the expansion of modern farming, the worldwide bee population is suffering. [Nearly 1 in 4 european bumblebee species
face extinction, whereas in North America, more than a quarter are in decline](https://www.theguardian.com/commentisfree/2020/feb/14/bees-flowers-danger-pollinate-human-foodstuffs-farming). The meadows and fields that used to host a variety of flowers
to feed bees are gone, replaced by fields of wheat and corn covered in pesticides harmful to bees. The best thing we can do to contribute is
plant more flowering plants, and slowly help the bees build their populations back.

## How?

This app interacts with various APIs to return a list of flowering plants. Because of this, depending on the internet connection, you may have to wait several seconds.
APIs include:

+ Geolocation
+ CORS Anywhere
+ Natural Resources Canada's Plant Hardiness Database

Upon clicking the button, we use your IP to get your location data. At no point is your location data saved. Using the location data, we are able to use the plant hardiness
database to return a list of plants see growing 100km away from you. We then compare this to our own database of bee-friendly flowering plants to return a list of bee-friendly
flowering plants near you.

## Contributors:

+ [Joshua Sheng](https://github.com/joshuasheng)
+ [Catherine Huang](https://github.com/pickledturnips)
+ [Yi Deng](https://github.com/beautifultimes)

