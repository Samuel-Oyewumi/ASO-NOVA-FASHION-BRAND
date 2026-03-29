export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-do-you-measure-love",
    title: "How do you measure love?",
    excerpt: "I measure it by a box of wrapped aso-oke fabric.",
    content: `You may be wondering how I got here. Having spent my childhood days with my grandmother, I was privileged to hear her tell cultural stories right before we hit the hay. One of the amazing stories that held my heart was that of Aso oke, a prestigious fabric acknowledged as a Yoruba classic.

_Aso oke means "top cloth" in yoruba,_ traditionally handwoven by skilled artisans. It is made from long narrow stripes woven individually and then joined together to form a complete cloth. She used to say, 

" Aso oke is never just a cloth but a symbol". 

Each pattern is carefully chosen and the choice of colour used in the making of the designs is a reflection of aspects of the beliefs and life of the Yoruba people. 

When I witnessed the making of Aso oke, I was fascinated. The leg work, finger work and the intersection of threads coming together to create a masterpiece kept me in awe. 

_It is said that the beauty comes out more when it is taken as Aso ebi_ and today it is everywhere: The bridal gown that steals the show, the bold men's wear that exudes confidence, whether crafted into tailored suit , skirt or stylish accessories, Aso oke is a champion of *economic* conscious fashion. _It can exist an 100years without fading, it is built to last_ .

So when Brown, my husband asked me what I wanted as a gift for my birthday. I simply told him to get me Aso oke  because when I wear it, I'm not just looking at a fabric, I see resilience, I see strength, I see resilience that won't fade into history.  

*I see me.* 

Known for their love for tradition and culture, Aso nova  brand has brought to our table a unique way to celebrate our culture every single day. The procedures are easy to follow.

It's simply from shopping online directly to your door steps, open 24 hours.`,
    image: "https://picsum.photos/seed/blog-aso-oke-love/1200/600",
    date: "March 25, 2026",
    author: "Aso Nova"
  }
];
