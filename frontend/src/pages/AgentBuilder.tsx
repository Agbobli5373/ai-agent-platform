import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Code, FileText, BarChart3, Palette, FlaskConical, Smartphone, Scale, Target, Rocket } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import IconSelector from '../components/IconSelector';

export default function AgentBuilder() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('Bot');
  const [personality, setPersonality] = useState('friendly');
  const [instructions, setInstructions] = useState('');
  const [capabilities, setCapabilities] = useState({
    textGeneration: true,
    imageAnalysis: false,
    codeGeneration: false,
    dataAnalysis: false,
    webSearch: false,
  });

  const avatarOptions = [
    { name: 'Bot', icon: Bot },
    { name: 'Code', icon: Code },
    { name: 'FileText', icon: FileText },
    { name: 'BarChart3', icon: BarChart3 },
    { name: 'Palette', icon: Palette },
    { name: 'FlaskConical', icon: FlaskConical },
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Scale', icon: Scale },
    { name: 'Target', icon: Target },
    { name: 'Rocket', icon: Rocket },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Agent created:', { name, avatar, personality, instructions, capabilities });
    navigate('/dashboard');
  };

  return (
    <PageLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Create New Agent</h2>
          <p className="text-gray-300">Configure your AI agent with custom personality and capabilities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                id="name"
                label="Agent Name"
                value={name}
                onChange={setName}
                placeholder="e.g., Code Assistant"
                required
              />

              {/* Avatar Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Select Icon
                </label>
                <IconSelector
                  options={avatarOptions}
                  selected={avatar}
                  onSelect={setAvatar}
                />
              </div>

              {/* Personality */}
              <div>
                <label htmlFor="personality" className="block text-sm font-medium text-gray-200 mb-2">
                  Personality
                </label>
                <select
                  id="personality"
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="friendly">Friendly & Casual</option>
                  <option value="professional">Professional & Formal</option>
                  <option value="creative">Creative & Playful</option>
                  <option value="analytical">Analytical & Precise</option>
                  <option value="supportive">Supportive & Encouraging</option>
                </select>
              </div>

              {/* Instructions */}
              <div>
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-200 mb-2">
                  Custom Instructions
                </label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Describe how the agent should behave, its expertise, and any specific guidelines..."
                />
              </div>

              {/* Capabilities */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Capabilities
                </label>
                <div className="space-y-3">
                  {Object.entries({
                    textGeneration: 'Text Generation',
                    imageAnalysis: 'Image Analysis',
                    codeGeneration: 'Code Generation',
                    dataAnalysis: 'Data Analysis',
                    webSearch: 'Web Search',
                  }).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={capabilities[key as keyof typeof capabilities]}
                        onChange={(e) =>
                          setCapabilities({ ...capabilities, [key]: e.target.checked })
                        }
                        className="h-5 w-5 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-200">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  variant="secondary"
                  fullWidth
                >
                  Cancel
                </Button>
                <Button type="submit" fullWidth>
                  Create Agent
                </Button>
              </div>
            </form>
          </div>

          {/* Live Preview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Live Preview</h3>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              {/* Agent Card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-600/20 rounded-xl">
                  {(() => {
                    const selectedAvatar = avatarOptions.find(opt => opt.name === avatar);
                    const IconComponent = selectedAvatar?.icon || Bot;
                    return <IconComponent className="w-12 h-12 text-purple-400" />;
                  })()}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {name || 'Agent Name'}
                  </h4>
                  <p className="text-gray-400 text-sm capitalize">{personality} personality</p>
                </div>
              </div>

              {/* Instructions Preview */}
              {instructions && (
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Instructions</h5>
                  <p className="text-gray-200 text-sm bg-white/5 p-3 rounded-lg">
                    {instructions}
                  </p>
                </div>
              )}

              {/* Capabilities Preview */}
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Capabilities</h5>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(capabilities)
                    .filter(([, enabled]) => enabled)
                    .map(([key]) => (
                      <span
                        key={key}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    ))}
                  {Object.values(capabilities).every((v) => !v) && (
                    <span className="text-gray-400 text-sm">No capabilities selected</span>
                  )}
                </div>
              </div>

              {/* Sample Conversation */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h5 className="text-sm font-medium text-gray-300 mb-3">Sample Conversation</h5>
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-gray-200 text-sm">
                      Hi! I'm {name || 'your agent'}. How can I help you today?
                    </p>
                  </div>
                  <div className="bg-purple-600/20 p-3 rounded-lg ml-8">
                    <p className="text-gray-200 text-sm">
                      {instructions
                        ? `Based on my instructions, I'll ${instructions.slice(0, 50)}...`
                        : 'I can assist you with various tasks!'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
