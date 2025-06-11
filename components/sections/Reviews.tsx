"use client";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getConfig from "@/lib/config";
import { ReviewsConfig } from "@/config/types";

// Function to get country flag emoji
const getCountryFlag = (country: string): string => {
  const countryFlags: { [key: string]: string } = {
    "United Kingdom": "🇬🇧",
    "Kazakhstan": "🇰🇿",
    "Thailand": "🇹🇭",
    "United States": "🇺🇸",
    "Canada": "🇨🇦",
    "Australia": "🇦🇺",
    "Germany": "🇩🇪",
    "France": "🇫🇷",
    "Japan": "🇯🇵",
    "Singapore": "🇸🇬",
    "Malaysia": "🇲🇾",
    "Indonesia": "🇮🇩",
    "Philippines": "🇵🇭",
    "Vietnam": "🇻🇳",
    "South Korea": "🇰🇷",
    "China": "🇨🇳",
    "India": "🇮🇳",
    "Russia": "🇷🇺",
    "Brazil": "🇧🇷",
    "Mexico": "🇲🇽",
    "Spain": "🇪🇸",
    "Italy": "🇮🇹",
    "Netherlands": "🇳🇱",
    "Sweden": "🇸🇪",
    "Norway": "🇳🇴",
    "Denmark": "🇩🇰",
    "Finland": "🇫🇮",
    "Switzerland": "🇨🇭",
    "Austria": "🇦🇹",
    "Belgium": "🇧🇪",
    "Ireland": "🇮🇪",
    "New Zealand": "🇳🇿",
    "South Africa": "🇿🇦",
    "UAE": "🇦🇪",
    "Saudi Arabia": "🇸🇦",
    "Israel": "🇮🇱",
    "Turkey": "🇹🇷",
    "Greece": "🇬🇷",
    "Portugal": "🇵🇹",
    "Poland": "🇵🇱",
    "Czech Republic": "🇨🇿",
    "Hungary": "🇭🇺",
    "Romania": "🇷🇴",
    "Bulgaria": "🇧🇬",
    "Croatia": "🇭🇷",
    "Slovenia": "🇸🇮",
    "Slovakia": "🇸🇰",
    "Estonia": "🇪🇪",
    "Latvia": "🇱🇻",
    "Lithuania": "🇱🇹",
    "Ukraine": "🇺🇦",
    "Belarus": "🇧🇾",
    "Moldova": "🇲🇩",
    "Georgia": "🇬🇪",
    "Armenia": "🇦🇲",
    "Azerbaijan": "🇦🇿",
    "Uzbekistan": "🇺🇿",
    "Kyrgyzstan": "🇰🇬",
    "Tajikistan": "🇹🇯",
    "Turkmenistan": "🇹🇲",
    "Mongolia": "🇲🇳",
    "Nepal": "🇳🇵",
    "Bangladesh": "🇧🇩",
    "Sri Lanka": "🇱🇰",
    "Myanmar": "🇲🇲",
    "Cambodia": "🇰🇭",
    "Laos": "🇱🇦",
    "Brunei": "🇧🇳",
    "Taiwan": "🇹🇼",
    "Hong Kong": "🇭🇰",
    "Macau": "🇲🇴"
  };
  return countryFlags[country] || "🏳️";
};

export default function Reviews() {
  const config = getConfig();
  const reviewsConfig: ReviewsConfig = config.reviews;

  const allReviews = [
    ...reviewsConfig.reviews.google,
    ...reviewsConfig.reviews.booking,
    ...reviewsConfig.reviews.tripadvisor,
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">
            {reviewsConfig.sectionTitle}
          </h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">
            {reviewsConfig.sectionDescription}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={review.avatar} alt={review.author} />
                    <AvatarFallback>
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {review.author}
                      </h4>
                      <span className="text-lg">
                        {review.country && getCountryFlag(review.country)}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.platform}
                      </span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{review.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}