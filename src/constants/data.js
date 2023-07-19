import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R$56',
    tags: 'Garrafa',
  },
  {
    title: 'Catena Malbee',
    price: 'R$59',
    tags: 'Garrafa',
  },
  {
    title: 'La Vieille Rose',
    price: 'R$44',
    tags: '750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R$31',
    tags: '750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R$26',
    tags: '750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R$20',
    tags: 'Aperol | Villa Marchesi prosecco | Refrigerante | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$16',
    tags: 'Rum negro | Cerveja de gengibre | Fatia de limão',
  },
  {
    title: 'Daiquiri',
    price: 'R$10',
    tags: 'Rum | Suco Cítrico | Açúcar',
  },
  {
    title: 'Old Fashioned',
    price: 'R$31',
    tags: 'Bourbon | Açúcar Mascávo | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'R$26',
    tags: 'Gin | Vermouth doce | Campari | Enfeite de laranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrela em ascensão',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalidade AA',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Excelente Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
