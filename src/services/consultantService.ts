import { ConsultantResponse, TrendData, ActionPlan } from '../types';
import { raymondTrends, raymondProducts, raymondKPIs } from '../data/raymondData';

interface MarketContext {
  seasonality: string;
  competitorActivity: string;
  economicFactors: string;
  socialTrends: string[];
  hyperlocalInsights: string[];
}

interface PredictiveModel {
  confidence: number;
  factors: string[];
  riskAssessment: string;
  timeframe: string;
  llmProcessing: {
    intentAnalysis: string;
    contextUnderstanding: string;
    marketIntelligence: string;
    strategicReasoning: string;
  };
}

interface LLMFunction {
  name: string;
  description: string;
  execute: (params: any) => Promise<any>;
}

export class ConsultantService {
  private static instance: ConsultantService;
  private marketContext: MarketContext;
  private conversationMemory: Array<{ query: string; response: ConsultantResponse; timestamp: Date }> = [];
  private llmFunctions: Map<string, LLMFunction> = new Map();

  private constructor() {
    this.marketContext = {
      seasonality: 'Wedding Season Peak (Oct-Feb) + Festive Season',
      competitorActivity: 'Manyavar expanding, Allen Solly price competition, Cotton King tier-2 growth',
      economicFactors: 'Pune IT sector growth, rising disposable income, premium segment expansion',
      socialTrends: ['Premium quality focus', 'Custom tailoring demand', 'Wedding market expansion', 'Corporate formal wear growth'],
      hyperlocalInsights: [
        'Shivajinagar IT professionals prefer formal shirts during weekdays',
        'Wedding season driving 40% increase in ethnic wear demand',
        'Premium positioning resonating with local demographics',
        'Corporate bulk orders increasing 25% month-over-month'
      ]
    };

    this.initializeLLMFunctions();
  }

  public static getInstance(): ConsultantService {
    if (!ConsultantService.instance) {
      ConsultantService.instance = new ConsultantService();
    }
    return ConsultantService.instance;
  }

  private initializeLLMFunctions(): void {
    // Sales Performance Analysis Function
    this.llmFunctions.set('analyze_sales_performance', {
      name: 'analyze_sales_performance',
      description: 'Deep dive analysis of sales metrics, trends, and performance indicators',
      execute: async (params) => {
        return {
          analysis: 'Raymond Shivajinagar showing strong performance with 18.5% revenue growth',
          keyMetrics: {
            monthlyRevenue: '₹28.5L',
            avgOrderValue: '₹8,750',
            conversionRate: '4.8%',
            customTailoringOrders: 145
          },
          trends: ['Wedding season driving ethnic wear sales', 'Corporate formal wear steady growth'],
          recommendations: ['Focus on premium wedding packages', 'Expand corporate partnerships']
        };
      }
    });

    // Demand Forecasting Function
    this.llmFunctions.set('predict_demand_forecast', {
      name: 'predict_demand_forecast',
      description: 'AI-powered demand forecasting for inventory planning',
      execute: async (params) => {
        return {
          forecast: {
            nextMonth: '+22% increase in wedding wear',
            nextQuarter: '+15% overall growth',
            seasonalPeaks: ['Nov-Feb wedding season', 'Aug-Sep festive season']
          },
          recommendations: [
            'Increase sherwani inventory by 30%',
            'Stock premium fabrics for custom orders',
            'Prepare for corporate bulk orders'
          ]
        };
      }
    });

    // Hyperlocal Insights Function
    this.llmFunctions.set('hyperlocal_insights', {
      name: 'hyperlocal_insights',
      description: 'Location-specific insights and market dynamics',
      execute: async (params) => {
        return {
          location: 'Shivajinagar, Pune',
          demographics: { millennials: 52, genX: 35, genZ: 13 },
          localTrends: [
            'IT professionals driving formal wear demand',
            'Wedding season premium positioning success',
            'Custom tailoring services highly valued'
          ],
          competitorActivity: 'Allen Solly nearby, Manyavar expanding',
          opportunities: ['Corporate partnerships', 'Wedding packages', 'Premium positioning']
        };
      }
    });

    // Sentiment Analysis Function
    this.llmFunctions.set('analyze_customer_sentiment', {
      name: 'analyze_customer_sentiment',
      description: 'Customer sentiment analysis from reviews and feedback',
      execute: async (params) => {
        return {
          overallSentiment: 91,
          categories: {
            customTailoring: { sentiment: 94, mentions: 1240 },
            weddingCollection: { sentiment: 89, mentions: 890 },
            formalWear: { sentiment: 87, mentions: 2100 },
            storeExperience: { sentiment: 92, mentions: 1560 }
          },
          insights: [
            'Custom tailoring receiving highest praise',
            'Wedding collection quality appreciated',
            'Store service excellence recognized'
          ]
        };
      }
    });

    // Market Research Function
    this.llmFunctions.set('research_market_trends', {
      name: 'research_market_trends',
      description: 'Comprehensive market research and competitor analysis',
      execute: async (params) => {
        return {
          marketSize: '₹45,000 Cr (Premium Menswear)',
          growthRate: '12% CAGR',
          keyTrends: [
            'Premium positioning gaining traction',
            'Custom tailoring demand increasing',
            'Wedding market expanding',
            'Corporate formal wear growth'
          ],
          competitorAnalysis: {
            manyavar: 'Leading wedding segment',
            allenSolly: 'Strong casual-formal positioning',
            cottonKing: 'Value segment expansion'
          }
        };
      }
    });

    // Inventory Optimization Function
    this.llmFunctions.set('optimize_inventory_mix', {
      name: 'optimize_inventory_mix',
      description: 'Optimize inventory allocation based on trends and demand',
      execute: async (params) => {
        return {
          recommendations: {
            increase: ['Sherwanis (+30%)', 'Premium fabrics (+25%)', 'Business suits (+20%)'],
            decrease: ['Casual wear (-10%)', 'Basic shirts (-15%)'],
            maintain: ['Accessories', 'Formal trousers']
          },
          reasoning: [
            'Wedding season approaching',
            'Corporate demand steady',
            'Premium positioning success'
          ]
        };
      }
    });
  }

  async processPrompt(query: string): Promise<ConsultantResponse> {
    // Enhanced LLM-style processing
    const llmProcessing = await this.performLLMProcessing(query);
    
    const intent = this.identifyIntent(query);
    const context = this.buildEnhancedContext(query);
    const relevantTrends = this.findRelevantTrends(query);
    const predictiveModel = this.buildAdvancedPredictiveModel(intent, relevantTrends, context, llmProcessing);
    
    // Check if query matches any LLM functions
    const functionResult = await this.executeLLMFunction(query);
    
    const insights = this.generateAdvancedInsights(query, intent, relevantTrends, context, predictiveModel, functionResult);
    const recommendations = this.generateStrategicRecommendations(intent, relevantTrends, context, predictiveModel, functionResult);
    const forecast = this.generateEnhancedForecast(intent, relevantTrends, predictiveModel);
    const actions = this.generateActionPlan(intent, relevantTrends, context, predictiveModel);

    const response: ConsultantResponse = {
      query,
      intent,
      insights,
      recommendations,
      forecast,
      trends: relevantTrends,
      actions
    };

    this.conversationMemory.push({
      query,
      response,
      timestamp: new Date()
    });

    if (this.conversationMemory.length > 10) {
      this.conversationMemory = this.conversationMemory.slice(-10);
    }

    return response;
  }

  private async performLLMProcessing(query: string): Promise<PredictiveModel['llmProcessing']> {
    // Simulate advanced LLM processing steps
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
      intentAnalysis: `Identified intent: ${this.identifyIntent(query)} with high confidence`,
      contextUnderstanding: 'Analyzed Raymond store context, market position, and competitive landscape',
      marketIntelligence: 'Processed real-time market data, competitor activities, and trend indicators',
      strategicReasoning: 'Applied business strategy frameworks and predictive analytics'
    };
  }

  private async executeLLMFunction(query: string): Promise<any> {
    const lowerQuery = query.toLowerCase();
    
    // Check if query matches any function
    for (const [functionName, func] of this.llmFunctions) {
      if (lowerQuery.includes(functionName.replace('_', ' ')) || 
          lowerQuery.includes(func.description.toLowerCase().split(' ').slice(0, 3).join(' '))) {
        try {
          return await func.execute({});
        } catch (error) {
          console.error(`Error executing function ${functionName}:`, error);
          return null;
        }
      }
    }
    
    return null;
  }

  private identifyIntent(query: string): string {
    const lowerQuery = query.toLowerCase();
    
    const intentPatterns = {
      'hyperlocal-analysis': ['hyperlocal', 'local', 'shivajinagar', 'pune', 'area', 'location', 'nearby'],
      'sentiment-analysis': ['sentiment', 'customer feedback', 'reviews', 'satisfaction', 'opinion'],
      'wedding-intelligence': ['wedding', 'sherwani', 'bandhgala', 'ethnic', 'marriage', 'groom', 'bride'],
      'corporate-strategy': ['corporate', 'business', 'b2b', 'bulk', 'office', 'professional', 'it sector'],
      'competitive-intelligence': ['competitor', 'competition', 'manyavar', 'allen solly', 'cotton king', 'vs'],
      'demand-forecasting': ['forecast', 'predict', 'demand', 'future', 'next month', 'upcoming'],
      'inventory-optimization': ['inventory', 'stock', 'optimize', 'allocation', 'mix'],
      'sales-performance': ['sales', 'performance', 'revenue', 'growth', 'metrics'],
      'trend-analysis': ['trend', 'fashion', 'style', 'trending', 'popular'],
      'premium-positioning': ['premium', 'luxury', 'high-end', 'quality', 'positioning']
    };

    for (const [intent, patterns] of Object.entries(intentPatterns)) {
      if (patterns.some(pattern => lowerQuery.includes(pattern))) {
        return intent;
      }
    }
    
    return 'raymond-strategic-consulting';
  }

  private buildEnhancedContext(query: string): any {
    const recentConversations = this.conversationMemory.slice(-3);
    const relatedTopics = recentConversations.map(conv => conv.response.intent);
    
    return {
      marketContext: this.marketContext,
      recentTopics: relatedTopics,
      queryComplexity: this.assessQueryComplexity(query),
      urgencyLevel: this.assessUrgency(query),
      businessImpact: this.assessBusinessImpact(query),
      storeContext: 'Raymond Shivajinagar - Premium Menswear Flagship',
      hyperlocalFactors: this.marketContext.hyperlocalInsights,
      competitiveLandscape: 'Premium positioning vs mid-market competitors'
    };
  }

  private buildAdvancedPredictiveModel(
    intent: string, 
    trends: TrendData[], 
    context: any, 
    llmProcessing: PredictiveModel['llmProcessing']
  ): PredictiveModel {
    const baseConfidence = trends.length > 0 ? 
      trends.reduce((sum, t) => sum + t.confidence, 0) / trends.length : 85;
    
    let adjustedConfidence = baseConfidence;
    if (context.queryComplexity === 'complex') adjustedConfidence *= 0.95;
    if (context.businessImpact === 'high') adjustedConfidence *= 1.1;
    if (trends.length > 2) adjustedConfidence *= 1.05;
    if (intent.includes('hyperlocal')) adjustedConfidence *= 1.08; // Local data boost

    const factors = [
      'Raymond heritage brand positioning',
      'Pune market dynamics and IT sector growth',
      'Wedding season patterns and demand cycles',
      'Hyperlocal customer preferences',
      'Competitive landscape analysis',
      'Premium segment trends'
    ];

    if (trends.length > 0) {
      factors.push(`${trends[0].name} trend momentum and market adoption`);
    }

    const riskLevel = adjustedConfidence > 90 ? 'Low' : 
                    adjustedConfidence > 75 ? 'Medium' : 'High';

    return {
      confidence: Math.round(adjustedConfidence),
      factors,
      riskAssessment: riskLevel,
      timeframe: this.determineTimeframe(intent, context),
      llmProcessing
    };
  }

  private generateCaseStudyInsights(
    query: string, 
    intent: string, 
    trends: TrendData[], 
    context: any, 
    model: PredictiveModel,
    functionResult: any
  ): string[] {
    const insights: string[] = [];
    
    // Generate case study format based on intent
    if (intent.includes('inventory') || query.toLowerCase().includes('inventory')) {
      insights.push(
        `🧾 **Case Study: Inventory Optimization at Raymond Shivajinagar, Pune**\n\n` +
        `🏬 **Business Context:**\n` +
        `Raymond's Shivajinagar store caters to premium clientele with high expectations around product variety, custom tailoring, and festive ethnic collections. Current challenges:\n` +
        `• Overstock of seasonal ethnic wear post-festive period\n` +
        `• Frequent stockouts in core formalwear sizes\n` +
        `• Reactive inventory planning with minimal data visibility\n\n` +
        `📄 **AI-Powered Report Summary:**\n` +
        `"48% of ethnic SKUs unsold for 60+ days. High sell-through of formalwear (especially blazers in M-size). Recommend bundling stagnant ethnic stock and prioritizing restock of fast-moving SKUs."\n\n` +
        `🔮 **AI Forecast & Prediction:**\n` +
        `• Projected stockout in M-size blazers within 5 days if restocking not initiated\n` +
        `• Clearance on ethnic wear required to avoid 15% YoY write-off loss\n` +
        `• Demand spike expected for wedding season inventory in next 30 days`
      );
      
      insights.push(
        `🚀 **Strategic Business Recommendations:**\n\n` +
        `**Option A:** Launch "Bundle & Save" festive clearance (Ethnic + Formal Shirt)\n` +
        `*Expected Impact:* Clear dead stock, raise AOV by 25%\n\n` +
        `**Option B:** Auto-restock top 10 SKUs weekly\n` +
        `*Expected Impact:* Reduce lost revenue from stockouts by 40%\n\n` +
        `**Option C:** Reconfigure shelf layout using demand heatmap\n` +
        `*Expected Impact:* Improve in-store conversions by 18%`
      );
    }
    
    if (intent.includes('sales') || query.toLowerCase().includes('sales')) {
      insights.push(
        `🧾 **Case Study: Sales Optimization at Raymond JM Road, Pune**\n\n` +
        `🏬 **Business Context:**\n` +
        `The JM Road store is positioned in a high-footfall area but faces challenges:\n` +
        `• Mid-week sales drop-offs (24% decline Tue-Thu)\n` +
        `• Low campaign attribution clarity\n` +
        `• Minimal customer engagement post-purchase\n\n` +
        `📄 **AI-Powered Report Summary:**\n` +
        `"June revenue ₹14.2 Lakhs. 24% weekday dip observed. 61% new customers. High-margin combos performing well. Recommend mid-week engagement strategy and loyalty-linked offers."\n\n` +
        `🔮 **AI Forecast & Prediction:**\n` +
        `• Sales expected to decline further mid-week unless proactive interventions occur\n` +
        `• High-spending customers likely to increase frequency by 20% if engaged via loyalty touchpoints\n` +
        `• Weekend sales projected to grow 15% with targeted promotions`
      );
      
      insights.push(
        `🚀 **Strategic Business Recommendations:**\n\n` +
        `**Option A:** Launch "Mid-Week Must-Haves" with combo offers\n` +
        `*Expected Impact:* Boost weekday footfall by 30%\n\n` +
        `**Option B:** Auto-send coupons via WhatsApp to repeat buyers\n` +
        `*Expected Impact:* Raise conversion & retention by 25%\n\n` +
        `**Option C:** Enable bill tagging for campaigns\n` +
        `*Expected Impact:* Track ROI of promotions in real-time, improve campaign efficiency by 35%`
      );
    }
    
    if (intent.includes('customer') || query.toLowerCase().includes('customer')) {
      insights.push(
        `🧾 **Case Study: Customer Intelligence & Segmentation Analysis**\n\n` +
        `🏬 **Business Context:**\n` +
        `Raymond's customer base spans multiple generations with varying preferences:\n` +
        `• 52% Millennials (primary wedding market)\n` +
        `• 35% Gen X (corporate buyers)\n` +
        `• 13% Gen Z (emerging segment)\n\n` +
        `📄 **AI-Powered Customer Analysis:**\n` +
        `"High-value customers (₹15K+ AOV) show 89% retention rate. Wedding segment customers have 3.2x lifetime value. Corporate buyers prefer weekday shopping with 67% conversion rate."\n\n` +
        `🔮 **Customer Behavior Predictions:**\n` +
        `• Wedding season will drive 40% increase in high-value transactions\n` +
        `• Corporate segment likely to grow 25% with targeted B2B approach\n` +
        `• Gen Z engagement can improve 50% with digital-first strategies`
      );
    }
    
    // Add function-specific insights if available
    if (functionResult) {
      if (functionResult.analysis) {
        insights.push(`📊 **Dashboard Insights:** ${functionResult.analysis}`);
      }
      if (functionResult.localTrends) {
        insights.push(`🗺️ **Hyperlocal Intelligence:** ${functionResult.localTrends.join(', ')}`);
      }
      if (functionResult.overallSentiment) {
        insights.push(`💭 **Sentiment Analysis:** ${functionResult.overallSentiment}% positive sentiment across all touchpoints`);
      }
    }
    
    // Add summary of value delivered
    insights.push(
      `📌 **Summary of Value Delivered by ForesightFlow X Arealis:**\n\n` +
      `**Operational Layer:** Real-time SKU alerts, predictive restocking, automated inventory optimization\n` +
      `**Strategic Layer:** Forecast-driven promotions, customer segmentation, competitive intelligence\n` +
      `**Tactical Layer:** Day-wise demand trends, visual reports for staff decisions, campaign ROI tracking\n` +
      `**Competitive Advantage:** Faster decisions than competitors relying on static BI tools\n\n` +
      `💡 **Why It Matters for Raymond's Business:**\n` +
      `• Reduces working capital lock through better inventory rotation\n` +
      `• Boosts sales & loyalty via micro-targeted promotions and CRM sync\n` +
      `• Aligns with Raymond's push toward digitally connected retail and omnichannel excellence`
    );
    
    return insights;
  }

  private generateStrategicRecommendations(
    intent: string, 
    trends: TrendData[], 
    context: any, 
    model: PredictiveModel,
    functionResult: any
  ): string[] {
    const recommendations: string[] = [];
    
    // Add function-specific recommendations
    if (functionResult?.recommendations) {
      if (Array.isArray(functionResult.recommendations)) {
        recommendations.push(...functionResult.recommendations);
      } else if (functionResult.recommendations.increase) {
        recommendations.push(`Inventory optimization: Increase ${functionResult.recommendations.increase.join(', ')} based on demand forecasting`);
      }
    }
    
    if (context.urgencyLevel === 'high') {
      recommendations.push(
        'Immediate action: Capitalize on current wedding season momentum through targeted premium ethnic wear campaigns and custom tailoring promotions to high-value customer segments.'
      );
    }
    
    if (trends.length > 0) {
      const topTrend = trends[0];
      recommendations.push(
        `Strategic trend leverage: Develop exclusive ${topTrend.name} collection with 25-30% inventory allocation, targeting ${topTrend.generation.join(' and ')} demographics for ${topTrend.forecastedImpact}% revenue impact.`
      );
    }
    
    // Intent-specific recommendations
    switch (intent) {
      case 'hyperlocal-analysis':
        recommendations.push(
          'Hyperlocal strategy: Partner with nearby IT companies for corporate bulk orders, establish weekday express tailoring services, and create location-specific marketing campaigns.'
        );
        break;
      
      case 'corporate-strategy':
        recommendations.push(
          'B2B expansion: Develop corporate partnership program with Pune IT corridor companies, offering bulk discounts, on-site consultations, and executive wardrobe services.'
        );
        break;
      
      case 'wedding-intelligence':
        recommendations.push(
          'Wedding market dominance: Launch comprehensive groom packages combining sherwanis, accessories, and styling services with 6-month advance booking incentives and family referral programs.'
        );
        break;
    }
    
    recommendations.push(
      'Digital transformation: Implement virtual consultation services and AR fitting technology to extend Raymond\'s premium experience to digital channels while maintaining in-store craftsmanship focus.'
    );
    
    recommendations.push(
      'Premium positioning reinforcement: Leverage heritage storytelling, showcase craftsmanship expertise, and create exclusive fabric collections to further differentiate from mid-market competitors.'
    );
    
    return recommendations;
  }

  private generateEnhancedForecast(
    intent: string, 
    trends: TrendData[], 
    model: PredictiveModel
  ): { metric: string; predicted: number; confidence: number; timeframe: string; factors: string[] } {
    let baseImpact = 12; // Enhanced Raymond baseline
    let metric = 'Revenue Growth';
    
    if (trends.length > 0) {
      const weightedImpact = trends.reduce((sum, trend, index) => {
        const weight = 1 / (index + 1);
        return sum + (trend.forecastedImpact * (trend.confidence / 100) * weight);
      }, 0);
      
      baseImpact = weightedImpact / trends.length;
    }
    
    // Intent-specific adjustments
    switch (intent) {
      case 'wedding-intelligence':
        baseImpact *= 1.6; // Wedding season has higher impact
        metric = 'Wedding Season Revenue Growth';
        break;
      case 'corporate-strategy':
        baseImpact *= 1.4;
        metric = 'Corporate Segment Growth';
        break;
      case 'hyperlocal-analysis':
        baseImpact *= 1.3;
        metric = 'Local Market Share Growth';
        break;
      case 'premium-positioning':
        metric = 'Premium Segment Revenue Growth';
        break;
    }
    
    // Raymond-specific premium brand adjustments
    if (model.riskAssessment === 'Low') baseImpact *= 1.2; // Premium brand advantage
    if (model.confidence > 90) baseImpact *= 1.15; // High confidence boost
    if (model.riskAssessment === 'High') baseImpact *= 0.9;
    
    return {
      metric,
      predicted: Math.round(baseImpact * 10) / 10,
      confidence: model.confidence,
      timeframe: model.timeframe,
      factors: model.factors
    };
  }

  private generateActionPlan(
    intent: string, 
    trends: TrendData[], 
    context: any, 
    model: PredictiveModel
  ): ActionPlan[] {
    const actions: ActionPlan[] = [];
    
    if (trends.length > 0) {
      const topTrend = trends[0];
      actions.push({
        id: '1',
        title: `Premium ${topTrend.name} Strategy Implementation`,
        description: `Launch exclusive ${topTrend.name} collection with heritage craftsmanship positioning, targeting ${topTrend.generation.join(' and ')} segments through personalized marketing and in-store experiences`,
        priority: context.urgencyLevel === 'high' ? 'high' : 'medium',
        effort: 'moderate',
        impact: Math.round(topTrend.forecastedImpact * 1.4),
        timeline: context.urgencyLevel === 'high' ? '2-3 weeks' : '4-6 weeks'
      });
    }
    
    // Intent-specific actions
    if (intent.includes('hyperlocal')) {
      actions.push({
        id: '2',
        title: 'Hyperlocal Market Penetration',
        description: 'Develop location-specific strategies for Shivajinagar area including IT company partnerships, local influencer collaborations, and community engagement programs',
        priority: 'high',
        effort: 'moderate',
        impact: 28,
        timeline: '3-5 weeks'
      });
    }
    
    if (intent.includes('corporate')) {
      actions.push({
        id: '3',
        title: 'Corporate Partnership Program',
        description: 'Establish B2B relationships with Pune IT corridor companies for bulk orders, executive wardrobes, and corporate uniform services',
        priority: 'high',
        effort: 'complex',
        impact: 32,
        timeline: '6-10 weeks'
      });
    }
    
    actions.push({
      id: '4',
      title: 'Premium Digital Experience Enhancement',
      description: 'Implement virtual consultation services, AR fitting technology, and personalized online experiences while maintaining Raymond\'s premium in-store service standards',
      priority: 'medium',
      effort: 'complex',
      impact: 22,
      timeline: '8-12 weeks'
    });
    
    return actions.slice(0, 4);
  }

  // Helper methods remain the same
  private assessQueryComplexity(query: string): 'simple' | 'moderate' | 'complex' {
    const complexityIndicators = ['compare', 'analyze', 'optimize', 'strategy', 'forecast', 'multiple', 'vs', 'against', 'hyperlocal', 'sentiment'];
    const matches = complexityIndicators.filter(indicator => 
      query.toLowerCase().includes(indicator)
    ).length;
    
    if (matches >= 3) return 'complex';
    if (matches >= 1) return 'moderate';
    return 'simple';
  }

  private assessUrgency(query: string): 'low' | 'medium' | 'high' {
    const urgencyKeywords = ['urgent', 'immediate', 'asap', 'quickly', 'now', 'today', 'this week', 'shortage', 'crisis'];
    const hasUrgency = urgencyKeywords.some(keyword => 
      query.toLowerCase().includes(keyword)
    );
    
    if (hasUrgency) return 'high';
    if (query.toLowerCase().includes('next') || query.toLowerCase().includes('soon')) return 'medium';
    return 'low';
  }

  private assessBusinessImpact(query: string): 'low' | 'medium' | 'high' {
    const highImpactKeywords = ['revenue', 'profit', 'sales', 'growth', 'strategy', 'competition', 'wedding', 'premium', 'market share'];
    const matches = highImpactKeywords.filter(keyword => 
      query.toLowerCase().includes(keyword)
    ).length;
    
    if (matches >= 2) return 'high';
    if (matches >= 1) return 'medium';
    return 'low';
  }

  private determineTimeframe(intent: string, context: any): string {
    if (context.urgencyLevel === 'high') return '1-2 weeks';
    if (intent.includes('wedding')) return '2-4 months';
    if (intent.includes('seasonal')) return '3-6 months';
    if (intent.includes('hyperlocal')) return '2-6 weeks';
    if (intent.includes('trend')) return '1-3 months';
    return '1-2 months';
  }

  private findRelevantTrends(query: string): TrendData[] {
    const lowerQuery = query.toLowerCase();
    
    const relevantTrends = raymondTrends.filter(trend => {
      if (trend.name.toLowerCase().includes(lowerQuery) ||
          trend.category.toLowerCase().includes(lowerQuery)) {
        return true;
      }
      
      if (trend.tags.some(tag => lowerQuery.includes(tag.toLowerCase()))) {
        return true;
      }
      
      if (trend.generation.some(gen => 
        lowerQuery.includes(gen.toLowerCase().replace(' ', '')))) {
        return true;
      }
      
      return false;
    });

    return relevantTrends.sort((a, b) => {
      const scoreA = a.growth * (a.confidence / 100) * a.forecastedImpact;
      const scoreB = b.growth * (b.confidence / 100) * b.forecastedImpact;
      return scoreB - scoreA;
    }).slice(0, 3);
  }
}