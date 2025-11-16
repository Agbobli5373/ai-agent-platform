import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface AgentCardProps {
  id: number;
  name: string;
  icon: LucideIcon;
  lastUsed: string;
  conversations: number;
}

export default function AgentCard({ id, name, icon: Icon, lastUsed, conversations }: AgentCardProps) {
  return (
    <Link
      to={`/chat/${id}`}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500 transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-purple-600/20 rounded-lg">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white group-hover:text-purple-400">
            {name}
          </h4>
          <p className="text-sm text-gray-400">Last used {lastUsed}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-300">
        <span>{conversations} conversations</span>
        <span className="text-purple-400">Chat →</span>
      </div>
    </Link>
  );
}
