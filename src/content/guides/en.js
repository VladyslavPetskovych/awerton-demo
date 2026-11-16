import { checklist, figure, h, list, p, photo, steps, table, takeaways, tip } from './blocks'

export default {
  'stand-out': {
    title: 'How to Make Your Property Stand Out',
    author: 'Maryana',
    alt: 'Bedroom with a four-poster bed, a feature ceiling and tall curtained windows',
    excerpt:
      'Guests decide in seconds while scrolling. Here is how to build a listing — and a stay — that wins the click, the booking and the five-star review.',
    body: [
      p('A guest looking for a weekend in Lviv sees hundreds of apartments and boutique hotels at similar prices. The properties that win are not always the biggest or the newest. They are the ones with a clear identity, an honest promise and a stay that matches the photos.'),
      h('Start with one clear idea'),
      p('Decide who your ideal guest is and what single feeling the property should deliver: a romantic city break, a calm base for business travel, a family apartment close to the centre. Every decision — décor, amenities, photos, wording — should support that one idea. A property that tries to please everyone rarely stands out to anyone.'),
      h('Give guests one signature reason to book'),
      p('Think of the one thing guests will mention in their review: a jacuzzi by the window, a loft bedroom under wooden beams, a balcony over the old town, a fireplace, a proper espresso machine with local coffee. Make it visible in the first photo and the first line of the listing.'),
      figure(
        [
          photo('royal-bath-window', 'Freestanding bath with rose petals beside a window seat'),
          photo('aristo-jacuzzi', 'In-room jacuzzi surrounded by candles and flowers'),
        ],
        'A signature feature gives guests one memorable reason to choose you.',
      ),
      h('Photography is your shop window'),
      checklist([
        'Hire a professional interior photographer — it is usually the highest-return investment in a listing.',
        'Shoot in daylight with every lamp on; open the curtains and remove personal items, cables and remote controls.',
        'Lead with your strongest wide shot, then follow the guest’s path: living area, bedroom, bathroom, kitchen, details, view and neighbourhood.',
        'Add at least one detail shot per room — bedding, the coffee corner, amenities. Details sell the feeling.',
        'Show the bathroom and kitchen honestly: guests look for them first.',
        'Reshoot after every renovation or furniture change.',
      ]),
      h('Write a listing that answers questions in advance'),
      list([
        ['Title:', 'lead with a benefit and the location, not adjectives. “Loft with balcony, 5 min to Rynok Square” beats “Amazing cozy apartment”.'],
        ['First paragraph:', 'who the place is perfect for, and its signature feature.'],
        ['Practical details:', 'bed sizes, floor and lift, parking, check-in method, workspace, Wi-Fi speed, noise level.'],
        ['Neighbourhood:', 'walking times to the centre, cafés, public transport and the railway station.'],
      ]),
      tip('Read your last 20 reviews and note the words guests repeat. Use those exact words in your title and description — they prove your promise is real.'),
      figure(
        [
          photo('royal-dining-green', 'Kitchen with a breakfast bar and a marble dining table with green velvet chairs'),
          photo('royal-kitchen', 'Modern kitchen with wood-panelled cabinets and a long white worktop'),
        ],
        'A fully equipped kitchen is one of the most searched-for amenities for stays of three nights or more.',
      ),
      h('Make reviews work for you'),
      p('Reviews are the strongest ranking factor on most booking platforms. Reply to every one: thank guests for praise, and answer criticism calmly with what you have changed. A thoughtful reply to a three-star review often persuades future guests more than a dozen five-star ones.'),
      takeaways([
        'Define one ideal guest and one signature feature.',
        'Invest in professional photos and keep them up to date.',
        'Build titles and descriptions around benefits and real details.',
        'Answer every review — publicly and constructively.',
      ]),
    ],
  },

  'professional-management': {
    title: 'Is Professional Property Management Worth It?',
    author: 'Maryana',
    alt: 'Courtyard of a modern residential complex with landscaped gardens',
    excerpt:
      'An honest look at what self-managing really involves, what a good management company does, and how to tell whether it will pay for itself.',
    body: [
      p('Many owners start by managing their property themselves, and for a single long-term let that can work well. A short-term rental is different: it is a small hospitality business that runs seven days a week, and every booking brings communication, cleaning, laundry, check-in and problem-solving.'),
      h('What self-management really involves'),
      list([
        ['Messages and bookings:', 'questions arrive at any hour, and slow replies push your listing down in search.'],
        ['Pricing:', 'daily rates, minimum stays, discounts and last-minute changes.'],
        ['Turnovers:', 'cleaning, laundry and restocking after every single stay.'],
        ['Check-in and keys:', 'late arrivals, lost keys, early check-in requests.'],
        ['Maintenance:', 'a leaking tap or a broken boiler does not wait until Monday.'],
        ['Accounting:', 'payouts, platform fees, utilities and taxes.'],
      ]),
      p('For an active short-term rental this easily adds up to 10–20 hours a month — more in high season, and usually at the least convenient moments.'),
      h('What a good management company does'),
      steps([
        ['Set-up:', 'inspection, professional photos, listing, pricing strategy and house rules.'],
        ['Distribution:', 'booking platforms, direct bookings and the manager’s own client base.'],
        ['Guest care:', '24/7 communication, check-in, local recommendations and fast problem-solving.'],
        ['Operations:', 'professional cleaning, linen, consumables and preventive maintenance.'],
        ['Reporting:', 'a clear monthly statement of revenue, occupancy, costs and payouts.'],
      ]),
      figure(
        [
          photo('prime-living', 'Bright living and dining area with a grey sofa and a dining table'),
          photo('royal-open-living', 'Open-plan living room with a grey sofa, kitchen island and bar stools'),
        ],
        'Managed apartments stay guest-ready between stays — cleaned, restocked and checked.',
      ),
      h('How to tell whether it pays for itself'),
      p('Compare net income, not the fee. A professional manager usually achieves higher occupancy and a higher average nightly rate through dynamic pricing, better listings and wider distribution. If that extra revenue covers the commission — and you get your time back — management is worth it.'),
      table(
        ['', 'Self-managed', 'Professionally managed'],
        [
          ['Pricing', 'Updated now and then', 'Adjusted daily to demand'],
          ['Reply time', 'When you are free', 'Within minutes, 24/7'],
          ['Cleaning', 'Varies from stay to stay', 'Checklist-based and inspected'],
          ['Reporting', 'Your own spreadsheets', 'Monthly statement'],
          ['Your time', '10–20 hours a month', 'A short monthly review'],
        ],
      ),
      h('Questions to ask before you sign'),
      checklist([
        'What exactly is included in the fee, and what is charged extra?',
        'How are prices set, and how often are they reviewed?',
        'Who cleans, and how is quality checked?',
        'How are damage and deposits handled?',
        'Which reports will I receive, and how often?',
        'What is the notice period if I want to leave?',
        'Can I see properties you already manage and speak to an owner?',
      ]),
      tip('Be wary of anyone who guarantees unusually high income without seeing the property. A serious manager starts with an inspection and a realistic forecast based on comparable listings.'),
      takeaways([
        'A short-term rental is a seven-day-a-week business.',
        'Judge management by net income and time saved, not by the fee alone.',
        'Insist on transparent reporting and a clear contract.',
      ]),
    ],
  },

  'small-details': {
    title: 'Small Details That Make a Big Difference',
    author: 'Maryana',
    alt: 'Bed with monogrammed white pillows beside a black table lamp with a golden base',
    excerpt:
      'Lighting, textiles, scent and a few thoughtful extras — the low-cost upgrades guests notice first and mention most in reviews.',
    body: [
      p('Creating an exceptional property experience doesn’t always require major renovations or significant investments. Often, it’s the smallest details that leave the strongest impression — and they are exactly what guests write about in reviews.'),
      h('Layer the lighting'),
      p('A single ceiling light makes any room feel flat. Aim for three layers: general light, task light (reading lamps on both sides of the bed, a bright mirror light in the bathroom) and warm accent light (a floor lamp, a table lamp, an LED strip). Use warm bulbs of around 2700–3000 K in bedrooms and living areas, and make sure guests can switch everything off from the bed.'),
      figure(
        [
          photo('royal-bed-roses', 'Bed with crisp linen, a bedside lamp and a vase of roses'),
          photo('royal-bed-pillows', 'Plump pillows on a tufted bed with wall lights on both sides'),
        ],
        'Bedside lamps on both sides, quality linen and blackout curtains define a good night’s sleep.',
      ),
      h('Invest where guests touch'),
      list([
        ['Bed and pillows:', 'a quality mattress topper and two kinds of pillow — firm and soft.'],
        ['Linen:', 'white, hotel-grade cotton. It can be washed hot, bleached, and always looks fresh.'],
        ['Towels:', 'two per guest plus a bath mat; heavier towels feel more luxurious.'],
        ['Blackout curtains:', 'one of the most requested features for city stays.'],
      ]),
      h('Make the first five minutes effortless'),
      p('The first five minutes shape the whole review. Send clear instructions the day before, keep the entrance tidy, and have the lights on and the temperature comfortable when guests arrive. A small welcome — local sweets, a bottle of water, a handwritten note — costs little and is remembered.'),
      figure(
        [
          photo('aristo-tea-tray', 'Golden tray with black cups, tea sachets and an electric kettle'),
          photo('aristo-amenities', 'Bathroom vanity with a vessel basin, toiletries and a bathrobe'),
        ],
        'A tea and coffee tray and a well-stocked amenity kit are inexpensive — and appear in reviews again and again.',
      ),
      h('Thoughtful amenities'),
      checklist([
        'Kettle, tea, good coffee, sugar and drinking water',
        'Hair dryer, iron and ironing board',
        'Sockets or chargers next to the bed',
        'A full-length mirror and enough hangers',
        'Space or a rack for luggage',
        'Shampoo, conditioner, shower gel and body lotion',
        'A basic first-aid kit and spare toilet paper',
        'A short guide with Wi-Fi, house rules and local tips',
      ]),
      h('Engage all the senses'),
      p('Guests notice smell before anything else. A light, consistent signature scent, fresh air before arrival and no harsh cleaning chemicals make a space feel cared for. Sound matters too: felt pads on chair legs, soft-closing doors and a quiet fridge do more than they seem.'),
      tip('Spend one night in your own property every few months. You will immediately notice the creaking door, the missing hook in the bathroom and the light you cannot switch off from the bed.'),
      p('At AWERTON, we believe successful property management is built on a balance of style, comfort and thoughtful care. Every detail matters when it comes to creating lasting value.'),
      takeaways([
        'Three layers of warm light in every room.',
        'Spend on the bed, linen, towels and blackout curtains.',
        'Make arrival effortless and add a small welcome.',
        'Test the stay yourself regularly.',
      ]),
    ],
  },

  pricing: {
    title: 'A Smarter Approach to Rental Pricing',
    author: 'Maryana',
    alt: 'Sculptures on the facade of the Lviv Opera House against a blue sky',
    excerpt:
      'Seasonality, events, minimum stays and gap nights — a practical framework for rates that keep the calendar full without leaving money on the table.',
    body: [
      p('Pricing is the biggest single lever on a rental’s income. Set rates too high and the calendar stays empty; too low and every night sells while you earn less than you could. The goal is neither maximum occupancy nor maximum price — it is maximum revenue per available night.'),
      h('Know your three numbers'),
      list([
        ['Occupancy:', 'the share of available nights that were booked.'],
        ['ADR (average daily rate):', 'room revenue divided by the number of nights sold.'],
        ['RevPAR:', 'revenue per available night, or occupancy × ADR. This is the number to optimise.'],
      ]),
      p('Example: 90% occupancy at 1,800 UAH a night gives a RevPAR of 1,620 UAH. 78% occupancy at 2,200 UAH gives 1,716 UAH — more income with fewer turnovers and less wear.'),
      h('Build a seasonal calendar'),
      p('Lviv, like most city destinations, has a clear rhythm: the Christmas and New Year season, spring and early-summer weekends, the summer peak and autumn city breaks, plus spikes around festivals, concerts, conferences and public holidays. Mark these dates a year ahead, with higher base rates and longer minimum stays on peak dates.'),
      figure(
        [
          photo('royal-spa-bath', 'Candle-lit bath with steps in a warm marble bathroom'),
          photo('royal-petal-bath', 'Bathtub scattered with rose petals beside a glass shower'),
        ],
        'Packages for special occasions — an anniversary, Valentine’s Day, a proposal — raise the value of a stay, not just its price.',
      ),
      h('Adjust by lead time'),
      list([
        ['60+ days ahead:', 'hold your rate. Early bookers plan around dates, not price.'],
        ['2–4 weeks ahead:', 'if dates are still open, compare similar listings and adjust gradually.'],
        ['Last minute (0–7 days):', 'a small discount can fill a gap — but don’t drop so low that you teach guests to wait.'],
      ]),
      h('Minimum stays and gap nights'),
      p('A two-night minimum on weekends protects you from single nights that block longer bookings. But a one-night gap between two bookings will almost never sell at full price, so allow one-night stays for gaps automatically or offer them with a small discount.'),
      h('Reward longer stays'),
      p('Weekly (7+ nights) and monthly (28+ nights) discounts cut turnover costs — fewer cleanings, less laundry, less wear — and smooth out the low season. Many owners start at about 10% off weekly and 20–30% off monthly stays, then test what works for their property.'),
      tip('Review prices weekly, not monthly. Check what similar properties nearby charge for the same dates — the market moves faster than most owners expect.'),
      takeaways([
        'Optimise RevPAR, not occupancy alone.',
        'Plan peak dates and events a year ahead.',
        'Use lead-time rules, minimum stays and gap-night pricing.',
        'Long-stay discounts reduce costs and fill the low season.',
      ]),
    ],
  },

  'guest-expectations': {
    title: 'What Do Guests Really Expect From a Great Stay?',
    author: 'Maryana',
    alt: 'Dining table set for breakfast with fruit, flowers and gold-rimmed plates',
    excerpt:
      'From the booking confirmation to the review request — a step-by-step guide to the guest journey and what makes every moment feel effortless.',
    body: [
      p('Guests rarely remember the exact price they paid. They remember how easy it was to arrive, how clean the bathroom was, how quickly someone answered when the Wi-Fi stopped working, and whether the place looked like the photos. Great hospitality is the sum of small, reliable moments.'),
      h('The non-negotiables'),
      list([
        ['Spotless cleanliness:', 'the most-mentioned factor in reviews — above all bathrooms, bedding and kitchens.'],
        ['Accuracy:', 'the property must look exactly as it does in the photos.'],
        ['A comfortable bed and a quiet night:', 'sleep quality decides most ratings.'],
        ['Fast, reliable Wi-Fi:', 'essential for business and leisure guests alike.'],
        ['Quick replies:', 'guests expect an answer within minutes, not hours.'],
      ]),
      h('The guest journey, step by step'),
      steps([
        ['After booking:', 'a warm confirmation with the address, check-in time and what to expect.'],
        ['The day before:', 'clear check-in instructions with a photo of the entrance, the door code or key pick-up, parking and a contact number.'],
        ['Arrival:', 'lights on, a comfortable temperature, a small welcome and an easy-to-find guide with Wi-Fi and house rules.'],
        ['First evening:', 'a short message — “Have you settled in? Is there anything you need?” It catches problems before they become reviews.'],
        ['During the stay:', 'be available but unobtrusive; share local tips on restaurants, coffee, sights and transport.'],
        ['Departure:', 'simple check-out instructions and, when possible, a flexible check-out time.'],
        ['After the stay:', 'a thank-you message and a gentle request for a review.'],
      ]),
      figure(
        [
          photo('royal-morning-coffee', 'Guest in a bathrobe enjoying a morning coffee by a large window'),
          photo('aristo-luggage', 'Luggage beside a vanity desk and a yellow velvet pouf'),
        ],
        'Guests remember the feeling of a slow morning — and the practical details, like space for their luggage.',
      ),
      h('Personal touches that turn good into memorable'),
      p('Ask about the purpose of the trip when the booking arrives. A birthday, an anniversary and a business trip each call for something different: a card and a small cake, flowers, an early breakfast, or a quiet room with a proper desk. Personalisation does not need to be expensive — it needs to be relevant.'),
      tip('Keep a simple guest file: preferences, special dates and anything that went wrong. Returning guests who are greeted by name and find their favourite pillow already in place are the most likely to book again — directly.'),
      figure(
        [
          photo('royal-flowers-living', 'Living room with a table set for two and fresh flowers'),
        ],
        'Fresh flowers and a set table say “we were expecting you” before a word is spoken.',
      ),
      h('When something goes wrong'),
      p('Problems happen in every property. What guests judge is the response: acknowledge quickly, fix the issue or offer an alternative, then follow up. A heater replaced within two hours, with an apology and a small gesture, can earn a review as good as a stay where nothing went wrong at all.'),
      takeaways([
        'Cleanliness, accuracy, sleep, Wi-Fi and fast replies come first.',
        'Plan every step of the guest journey in advance.',
        'Personalise around the purpose of the trip.',
        'Respond to problems fast — and follow up.',
      ]),
    ],
  },

  maintenance: {
    title: 'The Essential Property Maintenance Guide',
    author: 'Maryana',
    alt: 'Modern bathroom with a washing machine, heated towel rail and concrete-effect tiles',
    excerpt:
      'A between-stays routine, a seasonal checklist and a simple budgeting rule — everything you need to prevent costly repairs and protect your asset.',
    body: [
      p('Preventive maintenance protects both your guests and your investment. A planned repair always costs less than the same repair in an emergency — and far less than a cancelled booking or a bad review.'),
      h('Between every stay'),
      checklist([
        'Test all lights, sockets and appliances',
        'Check taps, shower and toilet for leaks and slow drains',
        'Look for stains, chips and damage on furniture and walls',
        'Check the smoke detector, locks, keys and door codes',
        'Run a Wi-Fi speed test and restart the router if needed',
        'Report anything unusual with a photo so it is fixed before the next arrival',
      ]),
      figure(
        [
          photo('prime-kitchen', 'Bright kitchen with light cabinets, a steel fridge and an oven'),
          photo('royal-dark-bathroom', 'Dark stone-effect bathroom with a round backlit mirror and a glass shower'),
        ],
        'Kitchens and bathrooms see the most wear — and are the first places guests inspect.',
      ),
      h('A seasonal checklist'),
      list([
        ['Spring:', 'service the air conditioning and clean its filters; check window and balcony seals; inspect the facade, balconies and drains after winter.'],
        ['Summer:', 'check ventilation and humidity; inspect bathroom silicone and grout; refresh balcony furniture and plants.'],
        ['Autumn:', 'service the boiler and heating; bleed the radiators; clean gutters and check the roof before rain and frost.'],
        ['Winter:', 'protect pipes from freezing; check insulation and drafts; keep a spare heater; test smoke and carbon monoxide detectors.'],
      ]),
      figure(
        [
          photo('royal-balcony', 'Glazed balcony with two chairs and a small table overlooking the street'),
        ],
        'Balconies, windows and seals need a check every spring and autumn.',
      ),
      h('Keep a maintenance log'),
      p('Record every inspection, repair and replacement: the date, the issue, who fixed it, the cost and a photo. Keep warranties and appliance manuals in the same place. A clear log reveals recurring problems, supports insurance claims and adds value — and trust — when the property is sold.'),
      h('Plan the budget'),
      p('A common rule of thumb is to set aside 1–2% of the property’s value each year for maintenance, and more for older buildings or high-turnover rentals. Plan replacements in cycles too: linen and towels every one to two years, mattresses every seven to ten years, paint and soft furnishings every few years depending on wear.'),
      h('Build a reliable team'),
      p('Have a trusted plumber, electrician, handyman and appliance service on call before you need them. Agree response times and prices in advance — midnight on a Saturday is too late to start searching.'),
      tip('Fix small things at once. A dripping tap, a loose handle or a flickering bulb takes minutes to repair, but guests read it as a sign that the whole property is neglected.'),
      takeaways([
        'A quick technical check between every stay.',
        'A seasonal plan for heating, cooling and water.',
        'Log everything, with photos.',
        'Budget 1–2% of the property’s value a year and keep contractors on call.',
      ]),
    ],
  },

  'cleaning-standards': {
    title: 'Cleaning & Turnover Standards That Earn Five Stars',
    author: 'Maryana',
    alt: 'Hotel bed with a red throw and neatly folded white towels',
    excerpt:
      'Cleanliness is the number-one factor in guest reviews. Here is how professional teams turn a property around — quickly, consistently and to hotel standard.',
    body: [
      p('Guests will forgive a small apartment or a busy street. They rarely forgive a hair in the shower or a stain on the pillow. Cleaning is not a cost to minimise — it is the foundation of every rating, and consistency matters more than perfection on a single day.'),
      h('Work from a written standard'),
      p('Every property needs a room-by-room checklist with reference photos of how each room should look when it is ready: how the bed is made, how towels are folded, where the remote and the welcome guide sit. Photos remove guesswork, speed up training and let anyone check quality at a glance.'),
      figure(
        [
          photo('aristo-bathroom-top', 'Bathroom seen from above with a double basin, towels and a robe'),
          photo('royal-light-bedroom', 'Bright bedroom with a white duvet, a wooden bed frame and a wall lamp'),
        ],
        'A reference photo for every room shows exactly what “ready for guests” looks like.',
      ),
      h('The turnover routine'),
      steps([
        ['Air and strip:', 'open the windows, remove all linen and towels, empty the bins.'],
        ['Kitchen:', 'wash and put away dishes, clean appliances inside and out, wipe every surface.'],
        ['Bathroom:', 'descale and disinfect the shower, toilet and basin; polish mirrors and fittings; clear the drains.'],
        ['Bedrooms:', 'fresh linen; check under the bed and in drawers for forgotten items; dust surfaces and lampshades.'],
        ['Floors:', 'vacuum and mop last, from the farthest room towards the door.'],
        ['Restock and stage:', 'consumables, toiletries and welcome items; set lights and temperature for arrival.'],
        ['Final inspection:', 'walk through with the checklist and photograph every room.'],
      ]),
      h('Linen and consumables'),
      list([
        'Keep at least three sets of linen and towels per bed: one in use, one in the laundry, one in reserve.',
        'Choose white linen — it can be washed hot and bleached.',
        'Track coffee, toilet paper, toiletries and cleaning products on a simple stock sheet and reorder at a set minimum.',
        'Replace stained or thinning items immediately — guests always notice.',
      ]),
      h('Deep cleaning'),
      p('Turnover cleaning keeps the property guest-ready; deep cleaning keeps it in good condition. Schedule one every one to three months depending on occupancy: windows, behind and under furniture, inside the oven and fridge, mattresses and upholstery, descaling the kettle and washing machine.'),
      tip('Ask your cleaning team to finish every turnover with photos of each room. It takes two minutes, protects you in damage disputes and gives you a remote quality check.'),
      takeaways([
        'Written, photo-based standards for every room.',
        'A fixed turnover sequence that ends with an inspection.',
        'Three sets of linen and towels per bed.',
        'Regular deep cleaning on a schedule.',
      ]),
    ],
  },

  'short-vs-long-term': {
    title: 'Short-Term or Long-Term Rental: Which Is Right for You?',
    author: 'Maryana',
    alt: 'Open-plan studio with a bed, dining table, kitchen and large windows',
    excerpt:
      'Income, workload, wear and flexibility compared side by side — plus the mid-term option many owners overlook.',
    body: [
      p('The same apartment can be let for a weekend, for a few months or for several years. Each model has a different income profile, workload and level of risk. The right choice depends on the property, its location and how involved you want to be.'),
      table(
        ['', 'Short-term (nightly)', 'Mid-term (1–6 months)', 'Long-term (12+ months)'],
        [
          ['Income potential', 'Highest, but variable', 'Medium and steady', 'Lowest, most predictable'],
          ['Vacancy risk', 'Seasonal swings', 'Low', 'Very low once let'],
          ['Workload', 'High — daily operations', 'Medium', 'Low'],
          ['Wear and tear', 'Higher', 'Moderate', 'Lower, but less control'],
          ['Furnishing', 'Fully furnished and equipped', 'Fully furnished', 'Often unfurnished'],
          ['Owner flexibility', 'High — block dates any time', 'Medium', 'Low'],
        ],
      ),
      h('When short-term works best'),
      list([
        'The property is in or near the centre, close to sights, business districts or transport.',
        'It has something distinctive: design, a view, a balcony or a signature feature.',
        'You can rely on professional operations — cleaning, guest communication and pricing.',
        'Local rules and your building allow short-term letting.',
      ]),
      figure(
        [
          photo('prime-dining', 'Kitchen-dining area with a table for four and a pendant lamp'),
          photo('royal-studio-kitchen', 'Studio with a full kitchen, a dining table and a sofa'),
        ],
        'Fully furnished apartments with a real kitchen and a place to work suit nightly guests and mid-term tenants alike.',
      ),
      h('When long-term is the better fit'),
      list([
        'The property is in a residential area with little tourist demand.',
        'You prefer stable, predictable income with minimal involvement.',
        'The apartment is large and suits families who want to stay for years.',
        'You do not want to invest in furnishing, linen and regular refreshes.',
      ]),
      figure(
        [
          photo('royal-family-living', 'Spacious living room with a burgundy sofa, armchairs and a chandelier'),
        ],
        'Larger apartments with a separate living room suit families and long stays.',
      ),
      h('The overlooked middle: mid-term rentals'),
      p('Stays of one to six months — relocating professionals, students, remote workers, families between homes, people on medical or business trips — combine much of the income of short-term letting with far fewer turnovers. They are an excellent way to fill the low season or to test a property before committing to one model.'),
      h('Compare net, not gross'),
      p('Compare the models after all costs: platform and management fees, cleaning and laundry, utilities (usually included in short stays), consumables, furniture depreciation, empty nights and taxes. A short-term let with higher gross revenue can still earn less if the property is far from demand.'),
      tip('You don’t have to choose forever. A hybrid strategy — nightly in the high season, mid-term in the low season — often gives the best result over the year. A good manager can model all three scenarios with real numbers for your property.'),
      takeaways([
        'Short-term: highest potential, highest workload.',
        'Long-term: lowest effort, lowest flexibility.',
        'Mid-term is a strong option for the low season.',
        'Always compare net income after every cost.',
      ]),
    ],
  },

  'durable-interiors': {
    title: 'Designing a Rental Interior That Lasts',
    author: 'Maryana',
    alt: 'Bright living room with a beige sofa, a wooden table, abstract art and a palm by the window',
    excerpt:
      'How to furnish a rental that photographs beautifully, feels like home and still looks good after hundreds of stays.',
    body: [
      p('A rental interior has two jobs: to look great in photos and to survive hundreds of guests. The best designs are calm, practical and made from durable materials, with personality added through details that are easy to update.'),
      h('Start with a calm base'),
      p('Choose a warm, neutral base — light walls, natural wood, soft greys or beige — and add character with two or three accent colours, art, textiles and lighting. A calm base photographs well, appeals to more guests and lets you refresh the look without renovating.'),
      figure(
        [
          photo('royal-mustard-sofa', 'Living room with a mustard velvet sofa, wood panelling and a fireplace'),
          photo('royal-fireplace', 'Marble feature wall with a fireplace, TV and lit shelving'),
        ],
        'A neutral base with natural textures; character comes from flowers, art and one statement wall.',
      ),
      h('Choose materials for real life'),
      list([
        ['Floors:', 'quality laminate, engineered wood or porcelain tiles. Avoid soft wood and light carpets.'],
        ['Walls:', 'washable, scrubbable paint. Keep a labelled tin of every colour for touch-ups.'],
        ['Upholstery:', 'performance fabrics with removable, washable covers; mid-tones hide wear better than white or black.'],
        ['Worktops and tables:', 'quartz, compact laminate or sealed surfaces that resist heat, stains and scratches.'],
        ['Bathrooms:', 'large-format tiles with fewer grout lines; wall-hung fittings that are easy to clean beneath.'],
      ]),
      figure(
        [
          photo('royal-wood-kitchen', 'Kitchen with wood-effect cabinets, white gloss fronts and a black stone worktop'),
          photo('royal-marble-bath', 'Bathroom with large-format marble-effect tiles, a bathtub and a wall-hung toilet'),
        ],
        'Stone worktops, large-format tiles and wood-effect fronts still look new after hundreds of stays.',
      ),
      h('Plan the layout around the guest'),
      checklist([
        'A place to drop keys and bags by the entrance',
        'Luggage space that does not block a walkway',
        'A bedside table, lamp and socket on both sides of the bed',
        'A proper desk or table with a comfortable chair',
        'Enough hangers, hooks and storage for a week-long stay',
        'Seats at the table for as many guests as the property sleeps',
        'Blackout curtains in every bedroom',
      ]),
      h('Spend where it matters'),
      p('Put the budget into what guests touch and what appears in photos: the bed and mattress, the sofa, lighting, the kitchen and the bathroom. Save on decorative items that are easy to replace. Buy furniture from collections that stay in production, so a broken chair can be replaced with an identical one.'),
      h('Personality without clutter'),
      p('A few well-chosen pieces of local art, a statement lamp, plants and quality textiles give a property its own character. Avoid lots of small objects — they get moved, broken or taken, and they slow down cleaning. Every item should either be useful or earn its place in the photos.'),
      tip('Before buying anything, ask three questions: will it survive 300 guests, can it be cleaned in five minutes, and can it be replaced quickly? If any answer is no, look for an alternative.'),
      takeaways([
        'A calm, neutral base with a few accents.',
        'Durable, washable, easily replaceable materials.',
        'A layout built around how guests actually live.',
        'Spend on the bed, sofa, lighting, kitchen and bathroom.',
      ]),
    ],
  },
}
