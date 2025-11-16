import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Users, Code, FileText, BarChart3 } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import StatCard from '../components/StatCard';
import AgentCard from '../components/AgentCard';

export default function Dashboard() {
  // Mock data
  const myAgents = [
    { id: 1, name: 'Code Assistant', icon: Code, lastUsed: '2 hours ago', conversations: 15 },
    { id: 2, name: 'Content Writer', icon: FileText, lastUsed: '1 day ago', conversations: 8 },
    { id: 3, name: 'Data Analyst', icon: BarChart3, lastUsed: '3 days ago', conversations: 5 },
  ];

  const recentConversations = [
    { id: 1, agent: 'Code Assistant', preview: 'Help me debug this React component...', time: '2 hours ago' },
    { id: 2, agent: 'Content Writer', preview: 'Write a blog post about AI trends...', time: '1 day ago' },
    { id: 3, agent: 'Data Analyst', preview: 'Analyze sales data for Q4...', time: '2 days ago' },
  ];

  const sharedAgents = [
    { id: 1, name: 'Marketing Expert', icon: Users, sharedBy: 'John Doe', users: 12 },
    { id: 2, name: 'Legal Advisor', icon: Bot, sharedBy: 'Jane Smith', users: 8 },
  ];

  return (
    <PageLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back!</h2>
          <p className="text-gray-300">Here's what's happening with your AI agents today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="My Agents" value={myAgents.length} icon={Bot} />
          <StatCard label="Conversations" value={28} icon={MessageSquare} />
          <StatCard label="Shared With Me" value={sharedAgents.length} icon={Users} />
        </div>

        {/* My Agents Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">My Agents</h3>
            <Link to="/agent-builder" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myAgents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Conversations */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Recent Conversations</h3>
            <div className="space-y-4">
              {recentConversations.map((conv) => (
                <div
                  key={conv.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-500 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{conv.agent}</h4>
                    <span className="text-xs text-gray-400">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{conv.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shared Agents */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Shared With Me</h3>
            <div className="space-y-4">
              {sharedAgents.map((agent) => {
                const IconComponent = agent.icon;
                return (
                  <div
                    key={agent.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-purple-600/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{agent.name}</h4>
                        <p className="text-sm text-gray-400">Shared by {agent.sharedBy}</p>
                      </div>
                      <div className="text-sm text-gray-300">{agent.users} users</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
