import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eum consequuntur exercitationem saepe, minima atque natus praesentium aperiam nihil esse! Veniam, voluptatibus deserunt tenetur, iusto labore incidunt quo porro quibusdam distinctio aut error vitae asperiores eos vero! </p> Ex, suscipit accusamus eos, excepturi minima hic id accusantium ipsam quia, dicta corporisamet consectetur adipisicing elit. Consequatur eum consequuntur exercitationem saepe, minima atque natus praesentium aperiam nihil esse! Veniam, voluptatibus deserunt tenetur, iusto labore incidunt quo porro quibusdam distinctio aut error vitae asperiores eos vero! Ex, suscipit accusamus eos, excepturi minima hic id accusantium ipsam quia, dicta corpori.',
    description: 'This my first article ❤❤❤!',
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
  },
  {
    id: 2,
    title: 'My Second Article',
    content: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eum consequuntur
              exercitationem saepe, minima atque natus praesentium aperiam nihil esse! Veniam,
               voluptatibus deserunt tenetur, iusto labore incidun quo porro quibusdam distinctio aut error
                vitae asperiores eos vero!</p>
              Ex, suscipit accusamus eos, excepturi minima hic id accusantium ipsam quia, dicta corporis.
              amet consectetur adipisicing elit. Consequatur eum consequuntur exercitationem saepe, minima
               atque natus praesentium aperiam nihil esse! Veniam, voluptatibus deserunt tenetur, iusto
               labore incidunt quo porro quibusdam distinctio aut error vitae asperiores eos vero! Ex,
               suscipit accusamus eos, excepturi minima hic id accusantium ipsam quia, dicta corpori`,
    description: 'This my Second article ❤❤❤!',
    key: 'my-second-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
  }
];
