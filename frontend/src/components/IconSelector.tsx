import { LucideIcon } from 'lucide-react';

interface IconOption {
  name: string;
  icon: LucideIcon;
}

interface IconSelectorProps {
  options: IconOption[];
  selected: string;
  onSelect: (name: string) => void;
}

export default function IconSelector({ options, selected, onSelect }: IconSelectorProps) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {options.map((option) => {
        const IconComponent = option.icon;
        return (
          <button
            key={option.name}
            type="button"
            onClick={() => onSelect(option.name)}
            className={`p-3 rounded-lg transition-all ${
              selected === option.name
                ? 'bg-purple-600 ring-2 ring-purple-400'
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <IconComponent className="w-8 h-8 text-white mx-auto" />
          </button>
        );
      })}
    </div>
  );
}
