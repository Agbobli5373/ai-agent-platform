import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-300 text-sm">{label}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        <Icon className="w-10 h-10 text-purple-400" />
      </div>
    </div>
  );
}
