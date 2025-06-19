// This is a mock implementation of the AI service
// In a real application, this would integrate with OpenAI or another AI provider

interface GeneratedIdea {
  title: string;
  description: string;
  keywords: string[];
}

// Mock implementation that returns pre-defined ideas based on content type
export const generateContentIdeas = async (
  contentType: string,
  industry: string,
  tone: string,
  keywords: string[] = [],
  additionalInfo: string = ''
): Promise<GeneratedIdea[]> => {
  // In a real implementation, we would make API calls to an AI service
  // and pass the parameters to generate customized ideas
  
  console.log(`Generating ideas for ${contentType} in ${industry} with ${tone} tone`);
  console.log(`Keywords: ${keywords.join(', ')}`);
  console.log(`Additional info: ${additionalInfo}`);
  
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate between 3-6 ideas
  const numIdeas = Math.floor(Math.random() * 4) + 3;
  const ideas: GeneratedIdea[] = [];
  
  // Content type specific idea templates
  const ideaTemplates: Record<string, GeneratedIdea[]> = {
    blog: [
      {
        title: `The Ultimate Guide to ${industry} Trends in 2025`,
        description: `A comprehensive overview of emerging ${industry} trends that will shape the market in 2025. This in-depth analysis provides actionable insights for professionals looking to stay ahead of the curve.`,
        keywords: ['trends', '2025', 'guide', industry]
      },
      {
        title: `10 ${industry} Strategies That Actually Work`,
        description: `Discover proven strategies that have delivered real results in the ${industry} sector. Learn from case studies and expert opinions to improve your approach.`,
        keywords: ['strategies', 'proven', 'results', industry]
      },
      {
        title: `How to Solve the Biggest Problems in ${industry}`,
        description: `A practical guide to addressing the most significant challenges facing ${industry} professionals today. Includes expert tips and innovative solutions.`,
        keywords: ['problems', 'solutions', 'challenges', industry]
      },
      {
        title: `The Future of ${industry}: Predictions from Industry Leaders`,
        description: `Exclusive insights from top ${industry} executives and thought leaders on where the industry is headed and how to prepare for upcoming changes.`,
        keywords: ['future', 'predictions', 'industry leaders', industry]
      },
      {
        title: `${industry} 101: A Beginner's Guide to Success`,
        description: `Everything newcomers need to know about the ${industry} field. This starter guide breaks down complex concepts into digestible, actionable information.`,
        keywords: ['beginners', 'guide', 'basics', industry]
      },
      {
        title: `Case Study: How Company X Revolutionized Their ${industry} Approach`,
        description: `An in-depth analysis of how a leading organization transformed their ${industry} strategy to achieve remarkable results and what you can learn from their journey.`,
        keywords: ['case study', 'success story', 'transformation', industry]
      }
    ],
    social: [
      {
        title: `5 Viral ${industry} Social Media Campaigns to Inspire Your Strategy`,
        description: `Analysis of successful social media campaigns in the ${industry} sector with key takeaways you can apply to your own content strategy.`,
        keywords: ['viral', 'social media', 'campaigns', industry]
      },
      {
        title: `Behind-the-Scenes Look at Our ${industry} Process`,
        description: `Give your audience an exclusive glimpse into how your ${industry} products or services come to life, building transparency and trust with your followers.`,
        keywords: ['behind the scenes', 'process', 'transparency', industry]
      },
      {
        title: `Quick Tip Tuesday: ${industry} Hack That Saves Time`,
        description: `Share a valuable, easy-to-implement tip related to ${industry} that your audience can put into action immediately.`,
        keywords: ['quick tip', 'hack', 'time-saving', industry]
      },
      {
        title: `Poll: What's Your Biggest ${industry} Challenge?`,
        description: `Engage your audience by asking them to share their experiences and challenges with ${industry}, creating conversation and providing insights for future content.`,
        keywords: ['poll', 'engagement', 'challenges', industry]
      },
      {
        title: `${industry} Myth vs. Reality`,
        description: `Debunk common misconceptions about ${industry} with factual information, positioning your brand as a trusted authority in the field.`,
        keywords: ['myths', 'misconceptions', 'facts', industry]
      },
      {
        title: `#ThrowbackThursday: How ${industry} Has Evolved`,
        description: `Compare past and present ${industry} practices, highlighting innovation and progress while leveraging the popular #TBT hashtag.`,
        keywords: ['throwback', 'evolution', 'innovation', industry]
      }
    ],
    video: [
      {
        title: `${industry} Explained in 60 Seconds`,
        description: `A concise, visually engaging explanation of a complex ${industry} concept that viewers can quickly understand and share with others.`,
        keywords: ['explainer', 'short-form', 'educational', industry]
      },
      {
        title: `Day in the Life of a ${industry} Professional`,
        description: `Follow a typical day of someone working in ${industry}, offering viewers insight into the career path and what the job really entails.`,
        keywords: ['day in the life', 'career', 'behind the scenes', industry]
      },
      {
        title: `${industry} Product Review: Is It Worth the Investment?`,
        description: `An honest, in-depth review of a popular ${industry} product or service, helping viewers make informed purchasing decisions.`,
        keywords: ['review', 'product', 'recommendation', industry]
      },
      {
        title: `3 ${industry} Mistakes Everyone Makes (And How to Avoid Them)`,
        description: `Identify common pitfalls in ${industry} and provide practical advice on how to overcome them, positioning your brand as a helpful industry guide.`,
        keywords: ['mistakes', 'tips', 'advice', industry]
      },
      {
        title: `${industry} Expert Interview Series: Insights from [Name]`,
        description: `Feature a conversation with a recognized ${industry} authority, discussing trends, challenges, and opportunities in the field.`,
        keywords: ['interview', 'expert', 'insights', industry]
      },
      {
        title: `How We Achieved [Result] in Our ${industry} Strategy`,
        description: `Share a success story about your ${industry} approach, including the strategy, implementation, and measurable results that viewers can learn from.`,
        keywords: ['success story', 'results', 'strategy', industry]
      }
    ],
    newsletter: [
      {
        title: `This Month in ${industry}: Top Stories You Need to Know`,
        description: `A curated roundup of the most important ${industry} news, trends, and developments from the past month that subscribers shouldn't miss.`,
        keywords: ['news roundup', 'industry updates', 'monthly digest', industry]
      },
      {
        title: `${industry} Insider: Exclusive Tips and Resources`,
        description: `Provide subscribers with privileged information, tools, and resources related to ${industry} that aren't available elsewhere.`,
        keywords: ['exclusive', 'insider', 'resources', industry]
      },
      {
        title: `${industry} Case Study: From Challenge to Success`,
        description: `Detailed analysis of how a specific ${industry} problem was solved, with lessons learned and actionable takeaways for subscribers.`,
        keywords: ['case study', 'problem-solving', 'success story', industry]
      },
      {
        title: `New Research Reveals Surprising ${industry} Trends`,
        description: `Share original research or findings about ${industry}, offering subscribers data-driven insights they can use to inform their own strategies.`,
        keywords: ['research', 'data', 'trends', industry]
      },
      {
        title: `${industry} Q&A: Answering Your Most Asked Questions`,
        description: `Address common queries about ${industry} topics, providing valuable information based on subscriber input and industry expertise.`,
        keywords: ['Q&A', 'questions', 'answers', industry]
      },
      {
        title: `${industry} Toolbox: Essential Resources for Professionals`,
        description: `A carefully selected collection of ${industry} tools, platforms, and resources to help subscribers improve their efficiency and results.`,
        keywords: ['tools', 'resources', 'productivity', industry]
      }
    ]
  };
  
  // Default to blog ideas if content type not found
  const availableTemplates = ideaTemplates[contentType] || ideaTemplates.blog;
  
  // Randomly select ideas from templates
  const selectedIndices = new Set<number>();
  while (selectedIndices.size < numIdeas && selectedIndices.size < availableTemplates.length) {
    selectedIndices.add(Math.floor(Math.random() * availableTemplates.length));
  }
  
  // Create ideas from templates
  selectedIndices.forEach(index => {
    const template = availableTemplates[index];
    
    // Add any user keywords to the template keywords
    const combinedKeywords = [...new Set([...template.keywords, ...keywords])];
    
    ideas.push({
      title: template.title,
      description: template.description,
      keywords: combinedKeywords.slice(0, 5) // Limit to 5 keywords
    });
  });
  
  return ideas;
};