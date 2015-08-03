# Project Name #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## Heading ##
  > Name the product in a way the reader (i.e. your target customers) will understand.
  Node Graticule

## Sub-Heading ##
  > Describe who the market for the product is and what benefit they get. One sentence only underneath the title.
  Making maps is easy; making maps that are useful is surprisingly hard.  

## Summary ##
  > Give a summary of the product and the benefit. Assume the reader will not read anything else so make this paragraph good.
  Learn the secrets to wealth and long life, from industry professionals.
  An NPM module to generate geographic grids and generate spatial distribution statistics
  If Oprah were a cartographer, she would buy one of these for all her guests

## Problem ##
  > Describe the problem your product solves.
  Dropping points on a map says surprisingly little about your dataset.  What matters is distribution and density, across different
  variables.  Ignoring means you will likely create maps that suggests that
  [Kansas has a surprising propensity for social unrest](http://foreignpolicy.com/2013/08/23/mapped-every-protest-on-the-planet-since-1979/).
  This is particularly difficult in cases where the input data is geolocated with different levels of precision, meaning some points
  might be geolocated to a city, while others are geolocated to a province or country.

## Solution ##
  > Describe how your product elegantly solves the problem.
  Aggregating points within the respective containing boundary of each, while disaggregating these aggregates across evenly-sized grid cells 
  creates accurate visualizations of spatial density.  In cases where the geolocation precision varies across points, weighting input by geolocation
  boundary area distributes that count across many grid cells.  E.g. one protest geolocated to the United States will count as a small fraction in
  all cells that overlap the US country boundary, while one protest geolocated to Kansas will count as a much larger fraction in cells that overlap
  the Kansas state boundary.

## Quote from You ##
  > A quote from a spokesperson in your company.
  "Don't be like Foreign Policy and make stupid maps that suggest incorrect conclusions, 
  and then try to explain it away as a quirk of the dataset."

## How to Get Started ##
  > Describe how easy it is to get started.
  run `npm install geo-grid`

## Customer Quote ##
  > Provide a quote from a hypothetical customer that describes how they experienced the benefit.
  "Hey man, why do you have to pick on us.  It was just a cool map we whipped up in an afternoon"
  --Foreign Policy

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.
  Oh, Brave New World!
