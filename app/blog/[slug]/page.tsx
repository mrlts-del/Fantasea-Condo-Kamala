import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Calendar, Clock, ArrowLeft, ChevronRight, Tag } from 'lucide-react';
import { TableOfContents } from '@/components/blog/TableOfContents';

// Blog posts data - same as in the main blog page
const BLOG_POSTS_DATA = [
  {
    id: 1,
    title: "Why Stay in a Japanese-Style Condo Near Kamala Beach?",
    excerpt: "A look at the unique blend of minimalist Japanese design and tropical comfort offered by condos near Kamala Beach.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Why_Stay_in_a_Japanese-Style_Condo_Near_Kamala_Beach.png`,
    slug: `why-stay-japanese-style-condo-kamala-beach`
  },
  {
    id: 2,
    title: "Top Amenities at Japanese-Style Condos Close to Kamala Beach",
    excerpt: "An overview of premium amenities such as rooftop pools, fitness centers, and lush gardens available in these condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Top_Amenities_at_Japanese-Style_Condos_Close_to_Kamala_Beach.png`,
    slug: `top-amenities-japanese-style-condos-kamala-beach`
  },
  {
    id: 3,
    title: "A Guide to Kamala Beach: Phuket's Hidden Gem",
    excerpt: "Information about Kamala Beach as a tranquil, family-friendly destination.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/A_Guide_to_Kamala_Beach_Phukets_Hidden_Gem.png`,
    slug: `guide-kamala-beach-phuket-hidden-gem`
  },
  {
    id: 4,
    title: "Japanese Minimalism Meets Phuket Paradise: Interior Design Trends",
    excerpt: "Details on how Japanese-inspired interiors create a calming, stylish atmosphere in Kamala's condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Japanese_Minimalism_Meets_Phuket_Paradise_Interior_Design_Trends.png`,
    slug: `japanese-minimalism-phuket-paradise-interior-design`
  },
  {
    id: 5,
    title: "Family-Friendly Activities Near Kamala Beach Condos",
    excerpt: "A list of family activities located close to Japanese-style condos near Kamala Beach.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Family_Friendly_Activities_Near_Kamala_Beach.png`,
    slug: `family-friendly-activities-kamala-beach-condos`
  },
  {
    id: 6,
    title: "How to Choose the Best Condo Type for Your Kamala Beach Stay",
    excerpt: "A comparison of one-bedroom, two-bedroom, and studio layouts for different types of stays.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/How_to_Choose_the_Best_Condo_Type_for_Your_Kamala_Beach_Stay.png`,
    slug: `how-to-choose-best-condo-type-kamala-beach`
  },
  {
    id: 7,
    title: "Local Attractions: What's Within Walking Distance of Kamala Beach Condos?",
    excerpt: "A summary of nearby attractions such as Phuket FantaSea, local markets, and beaches accessible from the condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Local_Attractions_What's_Within_Walking_Distance_of_Kamala_Beach_Condos.png`,
    slug: `local-attractions-walking-distance-kamala-beach-condos`
  },
  {
    id: 8,
    title: "The Benefits of Beachfront Living in Kamala",
    excerpt: "Information on direct beachfront access and ocean views from Kamala Beach condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/The_Benefits_of_Beachfront_Living_in_Kamala.png`,
    slug: `benefits-beachfront-living-kamala`
  },
  {
    id: 9,
    title: "Investing in Real Estate: Is Kamala Beach the Right Choice?",
    excerpt: "An analysis of investment potential, rental yields, and lifestyle benefits of owning property in Kamala Beach.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Investing_in_Real_Estates_Is_Kamala_Beach_the_Right_Choice.png`,
    slug: `investing-japanese-style-condos-kamala-beach`
  },
  {
    id: 10,
    title: "Dining and Nightlife: Best Spots Near Kamala Beach",
    excerpt: "A guide to restaurants, beach bars, and local eateries near Japanese-style condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Dining_and_Nightlife_Best_Spots_Near_Kamala_Beach.png`,
    slug: `dining-nightlife-best-spots-kamala-beach`
  },
  {
    id: 11,
    title: "Wellness and Relaxation: Spa and Fitness Options in Kamala",
    excerpt: "Information on spas, wellness centers, and fitness facilities available to condo residents and visitors.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Wellness_and_Relaxation_Spa_and_Fitness_Options_in_Kamala4.png`,
    slug: `wellness-relaxation-spa-fitness-kamala`
  },
  {
    id: 12,
    title: "Getting Around Kamala: Transportation Tips for Condo Guests",
    excerpt: "Details on shuttle services, local taxis, and transportation options for exploring Kamala and Phuket.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Getting_Around_Kamala_Transportation_Tips_for_Condo_GuestsUntitled_Project.png`,
    slug: `getting-around-kamala-transportation-tips`
  },
  {
    id: 13,
    title: "Safety, Security, and Convenience: What Condo Residents Can Expect",
    excerpt: "A review of security features, contactless check-in, and on-site conveniences at Kamala Beach condos.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Safety_Security_and_Convenience_What_Condo_Residents_Can_Expect.png`,
    slug: `safety-security-convenience-condo-residents`
  },
  {
    id: 14,
    title: "Seasonal Guide: When Is the Best Time to Visit Kamala Beach?",
    excerpt: "Information on Phuket's weather, high and low seasons, and what to expect throughout the year.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/Seasonal_Guide_When_Is_the_Best_Time_to_Visit_Kamala_Beach.png`,
    slug: `seasonal-guide-best-time-visit-kamala-beach`
  },
  {
    id: 15,
    title: "A Day in the Life: What It's Like to Stay in a Kamala Beach Condo",
    excerpt: "A description of a typical day enjoying the pool, gardens, nearby attractions, and the ambiance of Japanese-inspired living.",
    image: `/Fantasea_Condo_Images/Article_Thumbnails/A_Day_in_the_Life_What_Its_Like_to_Stay_in_a_Kamala_Beach_Condo.png`,
    slug: `day-in-life-stay-kamala-beach-condo`
  }
];

// Table of contents sections
const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'main-content', title: 'Main Content' },
  { id: 'key-benefits', title: 'Key Benefits' },
  { id: 'practical-tips', title: 'Practical Tips' },
  { id: 'conclusion', title: 'Conclusion' }
];

// Related Posts component
const RelatedPosts = ({ currentSlug }: { currentSlug: string }) => {
  const relatedPosts = BLOG_POSTS_DATA
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-12 pt-8 border-t border-brand-teal/20">
      <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Card key={post.id} className="flex flex-col h-full bg-white border-brand-teal/10 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-video relative w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover rounded-t-lg" 
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 p-4">
              <CardTitle className="text-lg leading-tight text-brand-charcoal font-serif mb-2">
                {post.title}
              </CardTitle>
              <CardDescription className="text-sm text-brand-charcoal/70 mb-4">
                {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
              </CardDescription>
              <div className="mt-auto">
                <Button variant="outline" asChild className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Main blog post page component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the blog post by slug
  const post = BLOG_POSTS_DATA.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Generate URL-friendly title for the URL (as requested)
  const urlTitle = post.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Navbar />
      
      <main className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-8 lg:py-10 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-brand-charcoal/70">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <Link href="/blog" className="hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-brand-charcoal font-medium" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-xl shadow-lg border border-brand-teal/10 overflow-hidden">
                {/* Hero Image */}
                <div className="aspect-video relative w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover" 
                    priority
                  />
                </div>

                {/* Article Header */}
                <header className="p-6 sm:p-8 lg:p-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/70 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20">
                          Travel
                        </Badge>
                        <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20">
                          Kamala Beach
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </header>

                <Separator className="mx-6 sm:mx-8 lg:mx-10" />

                {/* Article Content */}
                <div className="p-6 sm:p-8 lg:p-10 prose prose-lg max-w-none">
                  <TableOfContents sections={tocSections} />
                  <section id="introduction">
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Introduction</h2>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </section>

                  <section id="main-content">
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4 mt-8">Main Content</h2>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                    
                    <blockquote className="border-l-4 border-brand-teal bg-brand-cream/50 p-4 my-6 italic">
                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                    </blockquote>
                  </section>

                  <section id="key-benefits">
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4 mt-8">Key Benefits</h2>
                    <ul className="list-disc list-inside space-y-3 text-brand-charcoal/80 mb-6">
                      <li>Similique sunt in culpa qui officia deserunt mollitia animi</li>
                      <li>Id est laborum et dolorum fuga et harum quidem rerum</li>
                      <li>Facilis est et expedita distinctio nam libero tempore</li>
                      <li>Cum soluta nobis est eligendi optio cumque nihil impedit</li>
                      <li>Quo minus id quod maxime placeat facere possimus</li>
                    </ul>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>
                  </section>

                  <section id="practical-tips">
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4 mt-8">Practical Tips</h2>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-brand-charcoal/80 mb-6">
                      <li>Id quod maxime placeat facere possimus, omnis voluptas assumenda est</li>
                      <li>Omnis dolor repellendus temporibus autem quibusdam et aut</li>
                      <li>Officiis debitis aut rerum necessitatibus saepe eveniet</li>
                      <li>Ut et voluptates repudiandae sint et molestiae non recusandae</li>
                    </ol>
                  </section>

                  <section id="conclusion">
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4 mt-8">Conclusion</h2>
                    <p className="text-brand-charcoal/80 leading-relaxed mb-6">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                    <p className="text-brand-charcoal/80 leading-relaxed">
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </section>
                </div>
              </article>

              {/* Related Posts */}
              <RelatedPosts currentSlug={post.slug} />
            </div>


          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Fantasea Condo Kamala`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}