export type Card = {
  type: 'card';
  wide?: boolean;
  client?: string;
  description?: string;
  imgUrl?: string;
};
export type List = {
  list?: { client: string; description: string }[];
  type: 'list';
};
export type Qoute = {
  type: 'qoute';
  client?: string;
  description?: string;
};

export type Post = List | Card | Qoute;
const posts: Post[] = [
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/bcc3/3e29/bc86f11a9c3fa774d6c31ab1c73d93e4?Expires=1661731200&Signature=BlDXGpyrTEbqfmBhtfvlWPqLj2JNK8z2N9HgsX7l3P7lyBROOv7caMreyE3QXtveSTEmumRC8e~FTN6pR47FSYY~leze6sHGZoifdjQ5RclXVT5lbHsQw-xQ9WuVSnewEMfrdYf9Nwelpj3Nj370P8KhEr4rX3ZzG7T-u0EJA-TuERsc6nct4mzwamiEl7N99-4FE~B3x6Df7DUjHR38WVs-QjkXjyloCVqQHlQP7XP~47wiimECSeB2kUaXYutYDHctACnWql~IMa2OLT9yPHKVp7pi7Ytm2g7-ho5aFOGWRpJTVyVZn918snha-rELpfiyi0e6PbPkKs4yT-TqiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'KEMPEN',
    description: 'Not some average banking website',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1661731200&Signature=KHFA-gK-jKY80gHdcyBPOzOAwqxHpezmt4UrmVlW9vQlZOhW40okEidJA3gyNu67QFahAN2sJqa3UgYL842Tx2cIdzcXHH-H5OcdfNk-K~OEzuiUBlgYLSoLz7gc93mwtbXKycpqnWvJAj8eQgVhjbAh6heDy-o~Vw5Y1Ck3kZojLrYug9wcC7653ybHz1Nh6Mxqf6iOmowUpqk31dZQu8dl2Smff3-Tp4v~DWCpwp9R69UtmQD2CEmwHAtOaKOhEJgIZmzR~3NImdCi1GfXUpSQd9zjpCuJbpdGRh2IifP4tJK0UFCzIElpZtLxGl~meaZMhp-Fkv0px-hNYk39EA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'PHILIPS',
    description: 'Beautiful design meets innovative technology',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/e58a/278c/b9ace8ad0e58ac15b5f8e1ba9f148a50?Expires=1661731200&Signature=L3kTuIpyABn-dR20BiU6JPq1wkPAfLLu0ZWFp2lrvzZ-N54osLPouHs~gglhylcT8-A5w-pyBDXdztpxcpXfycLmgx~ST8r3DrmewxvalIYDWVylZVYcvXkFgCt-iT7b0nwpf7Z8We0ALJ12Xbv0xxPradAtW5rZUiKHgSrShmhNebJtG4h7ttcgDkKiqQvUjKrKLDLaQNAzn2mjTehjZNHSTFcjTAb2wSH1gT279HAwoWhls8tyIqmXVNxBL1HyKK4e49RSIwbu8EDChMRRxkVxfFRdn63taVFnjzp301-k-hT6KbIJljwCaOy7-kzKHgYaEkF79qUTIon06eSNCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'GEMEENTEMUSEUM',
    description: 'A 100 years of Mondriaan & De Stijl',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/739b/7bd9/9d51ca34b3170058cf4e7a56811bac85?Expires=1661731200&Signature=Mt8H-oC5jIt~8ds9T9tkiT95FbSboQuMW23qH1qnFdsg7VtjiMgGpJLVVpI9sKE5CGWHZMVlRSse1i2qI-abe7QpIW61tCX2gyxq6isQ5-oDBaw3DBsdgrJXaDNlO1ZdvsyUgWm0WxtC-7POjePakM6A7GYU8~abnlDoIauMEqO-ns3UH6fWBopU9S4iJFBcEBjMXctpOSb3JGOVy21LIKiliSz1UvBiESw7PhxMjKokIrvYDU7sA3R3YddTKk-ZFN03lHzsyiQYfjGgnRQsHGmA0wLQyqLH3AgHKJZFKICTxhqqZ5RXsmDT8zvBla~WvnUjl1CzUDcCEcA8Diyjgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'FLORENSIS',
    description: 'Rethinking the entire online ecosystem',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/7a04/0d8c/2576032268cb7eac9e433fcbe5a4475a?Expires=1661126400&Signature=TO5LhVFUTzIoComV6fatASD1GP6Awqq46Pz6RbqEIQcAQ-26nQIe9q81HohhlYC6W4f72-EoXL3YTIOHBJYpaOeqRwSIE-V0oOtyZmrPBnvLyQiEVgQoS6P2vfnX0~7x5XMHsU6NyRP8gJ~GGY-jeLhuH5XLyje2kZx8iPi3IMj6RL0mhAeNQM06b9KgZ4psedgFWTkwKSarfG05~4x~lzhfFOaq~XeAPOfRpkhHaPnmMnB2f8VYhu-rJ~axgKZNoPUmHFsKwCQhq2GdtQSUoFGow6tV~sBuICUFgyMxcid5~rBfWU9maEOFl~RwnRz2EJJ2IL~KTP8kVqn29NGTKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    wide: true,
  },
  {
    type: 'list',
    list: [
      {
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      },
      {
        client: 'O’NEILL',
        description:
          'Integrating existing content into O’Neills’s new e-commerce platform',
      },
      {
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      },
    ],
  },
  {
    type: 'card',
    client: 'BE LIGHTNING',
    description: 'Delivering clarity on a global scale',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/a23d/7414/ed34b594d209a483440f612e55125b99?Expires=1661126400&Signature=cpye294QFju3OxbKVjJF6DnL7fKfhwmz61GJ-5bfKrZDxfvUpPQs1Wtiw6BebfuIRfRM5Fu7p69LHX5nIv86x2gfPN6bO24XlYWidgqhua7gYo7oGpGq7r26RsKx8jQev8CkHv0kyXAYCqHNjnjdxk3SqbVy5HHrWeVF1qMZdkD4SOdPjXoerBpZbq6r0panRajY4z83sYEAqogzsbaJ7YpkBcdNKj9zUqavGnl5Ccs9-4nRYDgvEWwyn6owIUiLYUCjjAJBU3e65K62Ijb3fAcTq~eI3ePJmptu8fwQx9tLZL1zqd~YnJO3L7UFlSaT0KsCH-gYFYjPVEzltYOkcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'TUI',
    description: 'Swipe to find your next holiday destination',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/a8dd/37e6/debfaa29789421aa2d8f687c07f8ba27?Expires=1661126400&Signature=PROhS0BIoD45WrXeDHUTW-Dr4OFq~RYXaT93VxpXcDKDCXktTGqWpSmp~bgf~7mMUMexMbhTRkrfeixk2mgCtzPsE7ZWggHEVyPCWAixhdzim7Oz9vGgG~slZ8URp6xlOi5guSJn8La7t4PBJdAXQeDbG4E4iFhRTLazTs~NrLugLsKvMBbuUXkyB1ffF6GX7zm-8aSWI3NSu8qb-Deac9Jx2a5POimYmZMKJARoVbz6C6wHIWGBFVp5UyemclTRZOO6nvqAD1wEImjlJjfDneVj3a7jSaE0bF8g0JEZii97EvKxe-X3hWuQMRnWz1~ZJwnEc7BiS0Mchd8Aey4XQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },

  {
    type: 'list',
    list: [
      {
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      },
      {
        client: 'O’NEILL',
        description:
          'Integrating existing content into O’Neills’s new e-commerce platform',
      },
      {
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      },
    ],
  },
  {
    type: 'card',
    client: 'FLORENSIS',
    description: 'Rethinking the entire online ecosystem',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/bbd2/8c8e/f51ad081f27f0b0e9f9533eea103f4c7?Expires=1661126400&Signature=Hlcoz~RCV6IfeIgdcmZiE7iBmw5fuj1kcCYNTkYeO9iiIDGMQ2sxb1i2wCjFP7LL-uECwEuOjvm9wqSHhR~aoMVOTYpE-ZT-JIy22lXcccw1FOlBsUvvEdaHKabTq7OZ8qcGi4zdAqJCpp-H1FbswTZqIIpwR5iY55c-MP1z0LSlauq1W0XianBm150KbP~gizIUFoYuXSRj6NPBcYuqWpQA0hUpXjPEktQw41oL0dSNpUuw3Or3zdb6eANBr56PjJ9G0K8d0KO6SvdOu1hdIYc~~dBSm~9DhkEma-Cd85K8~BCSuQNiNF87fgS7ipj4neZCDpEGwC8qp7mhBeoKJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    wide: true,
  },
  {
    type: 'card',
    client: 'CHOCOMEL',
    description: 'A campaign for the limited edition letter packs',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/af18/cd0f/1ba3398b18f41de8b3eabceb4c21802a?Expires=1661126400&Signature=UusYmD4FttjrEj12xiLnGFiK~O-2VJVqWvXzwFXekdWsVlqCzXySMDrxQWo6kbiq8weIfiznZMP8rjruGrtp6olD9DTxg0UaTCc3T~0M6bzHpbibHQUSQ2R~zzVKw6kxnyYAYQ2QgKDQVyjmKnYseIkpyTEZDznWs90mblCgLYpoiX6WA4NuT3FsWXBfMmEO8G0kvk6cHADePM6Nv5JHgEfDwxh6i26FvDSFmlF-JpnvylrrxTbnIoBeiUE7ixY2ZEE-SMwY0o9wzm1lunHevYfwBPJQdmIKNwlt1x9maOU6zscSIulreQAZj-OP~jNM8BDU5Hy6MR43Bwsf7hGnew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'JBL',
    description: 'Live like a champion with Jerome Boateng',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/14dd/0879/11282bdbbe052fee9d667f9afa12fbce?Expires=1661126400&Signature=hBZaLp4Uc~ShGCEbR-ZYxzJx5wMvX9aah0M47L7-WQJJ5H0bgyXdDMeSqq-9RErcBzU~pDss-mmAMnF0ksoq1ickgiS~S9rVJEyrYP4CodG-PkihoWbIdR~OK9NBzu7YTizaL5my~Q1ip9H~OdQ0rpsxBWCBNI4QFKgs8X6YhIj5-zjf20BqGjfrFIUs24FSX-CmjaTEb3w-2Wmc9KcqM1lnzYNp~84mHUSxgwTHomvYUUF5D7x17NHkVZLhG2s~lFXyNU3UUbzbNCxZ4~s1QvROWeWt0xIVT~vwRcsJDzGcVPyzprGkaFLOatKadGUT0Pu0tDw9yWrecxzdDkydNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'ZALANDO',
    description: 'Innovative SEO and content strategy for Zalando',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/02ad/df7e/b98261e56f7ac75733edae19ef6cc5bf?Expires=1661126400&Signature=AYQsnh~NzGgqkIPK2H~cy2WnNfkrhwMhn4i2n38aPkvL9RDRl1y95pF1VkJ2AC8NLUxpPNtxH33y5ZmjCIiH9frp-g0EH8Or1g1cTLeLTsM2LmggU5fXXxkre6FO-cmCTIiYXvGcvtyCJQDXWO5Rtg0E5R8o2jULsyBCbE9f4w5gGWdhYpvJYwHHqT~0nC~IvCaCe59QJ8slLryPKwYZ5MTUFOU~Ib3khBqqastJCzcwz8UPzpVROrfqeAU6rtoEnhEQEgStTMv35qztYGrGU7lbBsaN0iBcJlLz6vkqP0A~OxnUzQK4VchpkaMkJ6-6p6LEQiBT5ubSi4z9CTLB0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'KONINKLIJKE BIBLIOTHEEK',
    description: 'The search of the most influential book ever',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/3279/db32/a106f97cdd55a48f48a92a5344b4ecbc?Expires=1661126400&Signature=BQcT0R7ozXzHwb9dNSHmWowz68ycCrX2obko6ioqgph2~J6uuW~79qcZAvwK5OSJY5RRtcee5lHYeCGHFqhnE7WT1ulrdZH5Oyq2rpMJmjme1Skpmm6d6QuW~0yUf8pofIm~7Knmwt7RNwhLrxN8GgDHPRkmqG7SJnUG4ablczPIC9gcu9p9LetHPkr38IJRsV8ogfsPua8KbI1U0LUlHEBL~vwy5FjRkL4whEAKHh-mI~5wbJHiO~VmxiysdmCl-pXcvk8IqKmk9EdD7q9b-yliJoLgy2gqRw0ZT1RgspUbkOYNHB-UeGeqxELaUq8bZpww44sVA7fiTKZk6RWLzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'qoute',
    client: 'MATTIJS TEN DRINK - CEO, TRANSAVIA',
    description:
      '“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month””',
  },
  {
    type: 'card',
    client: 'LIBERTY GLOBAL ',
    description: 'Delivering complex commerce solutions',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/243e/e101/66fd97ef61fbb8116ffdcbb99b1d987a?Expires=1661126400&Signature=OWPAMrKZp6LJBlJ9GAmZIZMEntjDt8eBasH41UE7kznrJhwmcrVti~EX1TYVWgiU-TofCsCYdzWwvNxuJcO1T1sIAwhlUSt1XPRwmF2Jtkmnu6PBLQIAtixlWZrfRiL-Dr5OZEsXzZCtRaMjaLedVHHLNBFhwE2oi7ScFeYohmwsVnpdP1VAamMAX4DhY4VO6IpwyutOfDI3LkeLPAG96Uqs2QXrni0JGPEBN8qKhgUhyrUAu~eYlUnttaKNfL5CZ1a8vDDgsqlBSIT1wumwkGC9HgCmSc7fz3spmCRmjx3-~5B9Zy7oDyiSQj4pspLpTjUra7UXPhbQ-fcBPfEk4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'ARLA',
    description: 'Swipe to find your next holiday destination',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/b819/4a06/84577923e709666953f1c5233160af10?Expires=1661126400&Signature=G-CAcrNHWolAt5fKLcjx4UGdtqEKBUKQT6ZRdN75ENf2loKu-AqBOM--nOkIKEiKvhUHc4MVM3dxaenlv52c5vSzrs8J2cB8HtQNwmjm4Xl878MnXDu9wAbcQS0XO5lJa~7brM38IDZTEIKaCoNcUhzIA1DYxbO4V-kZWMrzWlbexfu66uJ77VXm7rCiApubCFgjkklISFsT6VVUKx8J4xhvnURARzRHtrX39Md4J82ipkF89ZNfMD091ruuYlQHd5EQD9NTvjVN5UD-4F5PmthVqrUfX5W9wfgoXCi2PugFLv01Z82inMb-ZdtS82OLMxbyOI6BNhQdDFNl3SMsBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

type Client = {
  description: string;
  clients: { logoUrl: string; alt: string }[];
};
const clients: Client = {
  description:
    'We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.',
  clients: [
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/08f0/5880/690bec9b107da8daf364f1012c7ac9fd?Expires=1661126400&Signature=JWhLjX9dwX-tCcDtMYiMzdYZTC9cqEaQlDspKhihxp1BxWYnLFHNUAt-i2OoUjdjobr1B5SjriGK1bMY3wznxThe3rdAAhoK1i8va-IxqB0PXbmElOeMZFV0yIEZuuXaNGAtiexwyKljV3RiqCuyRqBGDY0EVqXUkQ8yaxYiRrfYRTrS9ZxmCRrj5q5-qhON7vE03ktCnwiRKGWidID9FCmhzbwTq9sVdzAg-wvSn09s7~9BrrAIt0Z8fOipv0UGbygI46notRGPE14ytYufAMRvGxps~0YYNCL7z4fVKYQYxU944THXtFC6X~vvKQ7QDReK6uEKMGugBUQLsVMD4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Goolge',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/f767/9b69/12e6beb6be464b2c142475f153c0e2d1?Expires=1661126400&Signature=FEJ1r536NRuTvJN1mqAThtYG6zO8t99FY4g4gN59rfMnRNa4iXbdeGG2t~aGg1TxnS81kzcun~gdoGsVYPTG6rU1DKicy3BcUXgLEvrX5LgDU1~P1VzZB6r2oSyui6lDzsTSiXlfFLQ12ata1-xK3vXclXfpH6a-Y8UqRS0k3OmQSFLHwXTeUhxgUNkwrgR0JU-tMuSATG6Z4my5V2XrnHe2HtlzY5kF6AM0q4hWUnFmlAbCMLWyXOVOv25L5GNL5rNWHgc77RcjscWkIZIQRDGvq4dW0iNRaNWeqVVeE62ELIMtPvujVqe9ojnP7pkC4JJK7Cn9YXoANJfcKgh1Hg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: "LEVI's",
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/8458/801d/0396fa45ca80e1c7031c6cd79ad19d20?Expires=1661126400&Signature=gFFZNSmneU4JzO33108sUFgGlfw-7j4Zt5v1S0~sYIP6wH6tLBPm9m5vMskSHKHdOl9rhaGS1nUZqAHXF95kOVm6uo~3VldNA0KoGgb8GJQxKoHwYJWzYvBgjbGZxHUZI~2bVw6IsoedhI3WNjBp2Mn9OUQ0Mgkqw9lQDtR3LCx4K0VDOYgGp6N46nNRUl5FG3U2RkY89QAXta7s3dwH8FOlRiVmGoLoQWxBk9kfUU86nhEseKHsgyAUApKzY1kl1CA01tUQxoEmLsAe2WuXytxJsnydL-yOVqYkN5hjtDrMS0lwEezrGCVEyP~mxhz8ub~lGoWHsiGwDfLJ42nteA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'NETFLIX',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/f8a1/2431/be6c9981f24cf22648916f866913a1f1?Expires=1661126400&Signature=JtAojLwC-vxVazsWzKDAO9dA1gQwZpHb2nWrsSm5DBVcwsHMJiV~UjQn5gYoQe~dBd1r0YAJAOEa0sLwtF2KZkDWcMAXc~d~Gfm79E~yuzazLctl5ScwiBUdTpnyLFVkEtB80WSbnVgQw7OyMnf9dhkiylKF-CQm3KGFn1vz3fIU0jZV0AiTiAf1ENfoRR-R42PKJZNh3yYDcGIGqmSR5KYjFTko~WXCqwVfiwfKE8SPU5vpYubSm9PGmlgcEcl3VFYva81oczcuBXKOdGvjfcGxJe05vwJTIcHH10QL-uBpMeZbBdJZcEhDr~JgKDinXCQ0fR6KTTxIkpfsP8Vmbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Spotify',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/dc6f/f96f/d9fe63ccf1ec185cd1f0404d2a25073a?Expires=1661126400&Signature=YWCisqNsnmSssL7Qa8QyU42s1kctrjbLq4inVm-6kwPxlQIMPNpjK7uegb127ebEINId-rQKhNc3hIneH70DG8HwlgEQy4~CTbiCJwYAV~cbLaEQ~P~-sINZyy44e6rlRl4GoiYotZXGbJO1IxtrjUFl6mwTKEycuahxmyF-et03KUAzl83ouFwVi2Tmd2Uz29J7mKbKetGD6U1aeSU~fKRbYXRYbOH6K7WPWuXdRS5rfhjsPBE281U1ZkY1R2gpacLiDo5GWKwkcpiM8aALCOH7f5qutxKETGVS6Ic-2fo1HU1mWP3IAqzfMip-Dny4b2vfJq2cD0v5ZWoxmGVROQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Patagonia',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/7247/ee65/0e1d8894602f0d95344468f7fc8624a2?Expires=1661126400&Signature=MCbsXHias-ISjW9SIszKvYpN3JoQou06s6BiJ7xd4UTxDwFyiUY9e1ckipeU7u4TkmbFdm3RwWfmChJwBHMXr43l1sWpttIAonUs--I8ZHh7E7LegEGFsZQ39jS4Lts3b5yollFKhdHIHQDRk6~AlEn9U4mGd1uutQ03GHwgaMnq~HxCKE4EAPOHjEJfvRgmyUsxP-McfCktSe1x2UOW3qeuD1j7htQGkIlmBRFfg4-6iO1N1WpeLSDLxEWKcGiqrpcrgl4s6KUYU-qa9SXLaU4mqR4FAFxNJdooe-XEUrMf8RhEIUHEJHGw0Vbqz1RquTufMNHaaVMDzuDN1i-jyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Fujitsu',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/079d/8082/c5752018c3a424b376abfba8f2d477fb?Expires=1661126400&Signature=FygHiG6CwY7n7hxs~pFV1QyFuBraa9sbw5iYlerCDI70D9NB4JMotQbYNzvEK89nGsk1KETupGLZd~0dbQIbMyXspgWjpASgiwCZAnUlyblfvzZ9s0wEArNJf948n3ccqjxgD4SWeJtfs-C~zbqxeaPrBffi92bCOmnYUDYy9LVmZBsbAW7NM2BqAgeEG8D-lgXakSzWAWp7YhY5bYdDlHvPOf-NfHJ32lFD9U0A7d5ermi9zjzX7CJUs6letDlhuB4dXYe08EAsjNqpCUriIGarJN5aeJ-4iV29ErjV6v3GEdUIuuWNNbWvHYeXtvwgU0d0x5FosuzlOLa30~gMcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Adyen',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/3e2e/44c9/617c7773c93bd9230727ec0bbd80d561?Expires=1661126400&Signature=XWcia~O4g-VowOt1529aUc6Gkz42tiPNHw21aU4uZ1BkjxRV~1BMPC8i19koJDKlPOAOqFNbbHqO5H~jZauV41ZssQhWR3Pvu~nPJlTXZX8YC4FheZQ3SMD2niHIb2zcrJ0O~ei-S7K6KpBDjEq9RyTBhQVyov2F1ps-P~xGAksi2HTqM9CTKSu~gnj1Aru7tOMAdRFOOVOfHnXPcKZgOlm4MXkx2zVx3eFVKDFS5gK8~OxMjtG1VvrwcVQRGUqux2lgDT0Uuk1-efxjYY8wYwqi-VYJyTaym4zoewfqjBT95~rgbTZNaUpChDaMLSgD7Q-KIbHtymV2~HgSfdiwZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Audi',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/e5f3/da26/d10aa857015f280e34b7f17ba57b6ddd?Expires=1661126400&Signature=KjpB2GG-NvZbyWgiaXR-CzJr3DdgocV5~4NifDTKQDmKVar02BJNC-JKDQ~eftpQFM5JEaRzOG7GfPSZbbVERdYvFosPtKYTo7NgWK2rrSMYUD27rgj29bLFSxlkg9sqpUw9Ygtk4t5g-r03RCL5~MZ9eshP9IW0f73CDgb-VtGOI73TSTiXn8G1-0QFSq-NNYlEVp9zAeT6S~J5k0Z-YBE~v6x13tCUf6NM8WNDdaEIbSJcAh8WUo0uWTnppGkSjM6IWw1BIp7sekm0emmcovJbLQznLssB1r3kSSgety5m0AVPUBQsqAkRbwmwwcMKEkDxxYYI3Zj5fPHoQ8-NAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Triumph',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/7e4d/9945/0811c99caf31fcb17763879ca4f8911d?Expires=1661126400&Signature=BOS4xcqRnGCpmURqT19LQs7RBji06wMF3XyCxlOWlFAz3QjVZRHUqTIqPYCk9zEeXGDivjpGDDDASJrnQkjv6kZhdVoVucJL3Mghpnx9KVE5pzwNLZLJKeDs-bDMUW5wo-FEhfNQkOYMM6FYxK4dO67Y0~65r4BYdOze--Bq9sb2igzwNoLa-JDYDLR-dxIqrnSI6nWvj~k~KMpqWoU2pE7WxnQj9OuMG-WSP0DJctc0sDrQQ2aKdh84~hq479B2g1yvydt~EkxkselrYUQLpME3a37TJcesa1nkRyhNP19CKl8Rb1mzOqT6fUXE8k0SL65glHnG~LVWckzAO7rB7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Tesla',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/5854/ae2a/f1bef8bca42e8f609b37d34c1327fce3?Expires=1661126400&Signature=OFC3H~yGlT0BU-obtMhjVFFNVL5fGNclxrdIePTqw0hVRmNrJBjNdrHLk0lZr--m00NTSWXppyOxEnAE8WO6oJkaWWvV77r0ve6YZOqQ4MN3d-Ti72FtPWaZ-8OYh4GWW3proMcgJpyapJ8ZPWmNbqSKJNNnoEOlkXMogSSdInXSFkb4FwM1iHmt-yIMBASJlpjLsuWCHGJu-el7P7L~VMOqZblz1t6hxfQNjmhNjqceWpAoR3lbD3Kempyg0x~kW1W9QFpLl2hUqWVwsedmAh3uuc0zDvGlqYIqneXO~YborICV81270W1LMRHMYOBhrLvg9a8IKBDl5QFhUFpwWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'asos',
    },
    {
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/5e7d/bfc5/6f5f55485853ed8694885e216e7b755e?Expires=1661126400&Signature=Zn5tkeWUx-ECG1ShEqdXIqCmOe4KSP-VUWajlfqGRXy3JAxdS1YH3DbdJAdd5E7rR4RuR0mPP2brux4anqL~zVa2cMegSos7ynmcJ7v0hL6vb3MebzCvqVvVt5F1LAWbrJOJ8FDHTMnBYKJ3GLeJscAU-MCz8Zqz6X4md6N8AQX4Z07vvKJaaFMQAxQCtT9Je0sUkXK4x52~4FLDZj8J0q68Qt99zXHrwlTzCdgUgCyueHqXe1acjmV~h-VDxkVxAWLTpNBL3vsZLAN3SqP3qlIkj273j0bl0ugb6G8BKlh0HZtliIfV8gFROYYP58i2ORjcRovK9ADw8YYff1hHXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'TakeAway.com',
    },
  ],
};

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const getPost: () => Promise<Post[]> = () => Promise.resolve(posts);
const getClient: () => Promise<Client> = () => Promise.resolve(clients);

const getPostWithDelay = async () => {
  await wait(Math.random() * 500);

  return getPost();
};
const getClientWithDelay = async () => {
  await wait(Math.random() * 500);
  return getClient();
};
export { getPostWithDelay as getPost, getClientWithDelay as getClient };
