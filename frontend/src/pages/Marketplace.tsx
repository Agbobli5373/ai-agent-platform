import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Users, MessageSquare, Star } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import StatCard from '../components/StatCard';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'productivity', 'creative', 'analytics', 'development', 'business'];

  const agents = [
    {
      id: 1,
      name: 'Code Assistant Pro',
      description: 'Advanced coding companion with multi-language support and debugging capabilities',
      category: 'development',
      author: 'DevTools Inc',
      users: 1250,
      rating: 4.8,
      conversations: 5420,
      tags: ['coding', 'debugging', 'AI'],
    },
    {
      id: 2,
      name: 'Content Creator',
      description: 'Generate high-quality blog posts, articles, and marketing copy with ease',
      category: 'creative',
      author: 'ContentAI',
      users: 980,
      rating: 4.6,
      conversations: 3890,
      tags: ['writing', 'marketing', 'SEO'],
    },
    {
      id: 3,
      name: 'Data Analyst',
      description: 'Analyze datasets, create visualizations, and extract meaningful insights',
      category: 'analytics',
      author: 'DataMind',
      users: 756,
      rating: 4.9,
      conversations: 2340,
      tags: ['data', 'analytics', 'visualization'],
    },
    {
      id: 4,
      name: 'Marketing Expert',
      description: 'Strategic marketing advice, campaign planning, and ROI optimization',
      category: 'business',
      author: 'MarketPro',
      users: 1100,
      rating: 4.7,
      conversations: 4120,
      tags: ['marketing', 'strategy', 'campaigns'],
    },
    {
      id: 5,
      name: 'Task Manager',
      description: 'Organize your workflow, set priorities, and boost productivity',
      category: 'productivity',
      author: 'ProductivityHub',
      users: 890,
      rating: 4.5,
      conversations: 3200,
      tags: ['productivity', 'organization', 'tasks'],
    },
    {
      id: 6,
      name: 'Creative Designer',
      description: 'Get design ideas, color palettes, and creative direction for your projects',
      category: 'creative',
      author: 'DesignMasters',
      users: 670,
      rating: 4.8,
      conversations: 2890,
      tags: ['design', 'creative', 'branding'],
    },
  ];

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      searchQuery === '' ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Discover AI Agents</h2>
          <p className="text-gray-300">
            Browse and find the perfect AI agent for your needs from our marketplace
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search agents by name or description..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            label="Total Agents"
            value={agents.length}
            icon={TrendingUp}
          />
          <StatCard
            label="Active Users"
            value={agents.reduce((sum, a) => sum + a.users, 0).toLocaleString()}
            icon={Users}
          />
          <StatCard
            label="Total Conversations"
            value={agents.reduce((sum, a) => sum + a.conversations, 0).toLocaleString()}
            icon={MessageSquare}
          />
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-gray-400">by {agent.author}</p>
                </div>
                <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">{agent.rating}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{agent.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{agent.users} users</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{agent.conversations}</span>
                </div>
              </div>

              <Link
                to={`/chat/${agent.id}`}
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Try Agent
              </Link>
            </div>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No agents found matching your criteria</p>
          </div>
        )}
      </main>
    </PageLayout>
  );
}
