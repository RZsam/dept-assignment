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

export type Post = List | Card;
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
];

const getData: () => Promise<Post[]> = () => Promise.resolve(data);

export default getData;
