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
const data: Post[] = [
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/bcc3/3e29/bc86f11a9c3fa774d6c31ab1c73d93e4?Expires=1660521600&Signature=NeF9-e0aIjWea9m7nlqecuebJ~tbtpaQwOSH3Cs~20UKQY-0B74nfVi6gfQ8MV6TzezGrPTmMSTW~E~KKHJhfr88llKKMcW1eb-bbOnzpKz~7SYPEccZpNevcCOHbrjp31I~XG0PkYgZ-I0INL4COsJk30ph2gjhOICOaN-Pyn-baHl1eP5LcWIvqnXoruZh-b-pYMiu4jUBKzpAnXlI59yeXS9Qy9DvVZbPg4geF-UhcW2bymVMmLpHssMyzhLoWG09LRaOUqsahArFGT~06DYvcKy8LBrdI2GxImK9Qc3~mBv4pLMERHh3kxhvvAE4TqTLREZEn40cbtCuEQYS6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'KEMPEN',
    description: 'Not some average banking website',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'PHILIPS',
    description: 'A 100 years of Mondriaan & De Stijl',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/e58a/278c/b9ace8ad0e58ac15b5f8e1ba9f148a50?Expires=1660521600&Signature=ZXIpIXgNaHvzrIkn7UZIgTWKuhYMyyNPLB4V~Ny6X6ooJsoLJ1SLL~OswR-RcaCTxD5gQWYHYUPmygw0F3L2noo9duFEQhajNQR~HhrW1ABtZz047h~ZBLD9bG6OiUrXgPWY7E7jbErEhy3SGe3PXbmznlCDjpd8S6mKt-Be8CwMzYDi9qrRBvRR0DnGnOqnVDZflPEcEE8JOEkMFQNe2ilfNqbYHLbsyT7sB68mW~uRy-Djr1iBe0ma4KPw~jRjacsm8mSe2-lKo50vZqNAVKP19KS0ULnHWG8Z-yHYL5jfGrxvyKzzpGkMxPjJv2ILAb7fEho3tZdGhac7WZ4Cmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'GEMEENTEMUSEUM',
    description: 'Beautiful design meets innovative technology',
    imgUrl:
      'https://www.figma.com/file/ZQyqteqZXwbsnqoRFWPALB/image/739b7bd99d51ca34b3170058cf4e7a56811bac85?fuid=900302851002662983',
  },
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
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
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    type: 'card',
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
        client: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
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
    client: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/1d23/0681/e1ee8c3448486cd3ea821251feb7254e?Expires=1660521600&Signature=fMxYAUNJatLya-DrUBQLllV0-G4zmg1ym2udxI7~Auh9ANH~2hqEhykW6LDB-MzEIgvY2JVYCv59lGzRrLMjoie3d5g9CX5v9xRR6CD70LvlsUJxJPqJOS0fSgtlgkrmT5IlUJHNKFm2BCfjdgSnQpbDOudRhkrlG~z047g4p68xN3ZDcYXbt-IJZJXFlQjQIuhZK0Dyl9tZnc1YjD5vPDAgoNSWM4MZy41OqGH1rmAfOTsXv6-oMz5UQgnGiL2QKvRvHt5LeBequSO68jOT9~cRpvA85ellVFWJqiHOAgtSZe7F9ifaDVrYfUvLXUWy3cevhV30tgyJCIWy-9~Q6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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

const getData: () => Promise<Post[]> = () => Promise.resolve(data);

export default getData;
