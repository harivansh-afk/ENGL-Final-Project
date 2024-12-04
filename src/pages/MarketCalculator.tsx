import { useState } from 'react';

interface MarketValue {
  income: number;
  estate: string;
  connections: string;
  location: string;
  accomplishments: string[];
  personality: string[];
}

const ACCOMPLISHMENTS = [
  'Playing the pianoforte',
  'Playing the harp',
  'Drawing landscapes',
  'Speaking French',
  'Embroidery',
  'Reading extensively',
  'Reading Gothic novels',
  'Dancing gracefully',
  'Singing',
  'Writing letters',
  'Moral improvement',
  'Walking great distances'
];

const PERSONALITY_TRAITS = [
  'Wit and vivacity',
  'Serene temperament',
  'Excellent manners',
  'Strong principles',
  'Proper reserve',
  'Charming conversation',
  'Filial devotion',
  'Prudent judgment',
  'Romantic sensibility',
  'Quiet dignity',
  'Natural elegance',
  'Quick understanding'
];

const LOCATIONS = [
  'Derbyshire',
  'Devonshire',
  'Bath',
  'Northamptonshire',
  'Hertfordshire',
  'London',
  'Kent'
];

const MarketCalculator = () => {
  const [values, setValues] = useState<MarketValue>({
    income: 0,
    estate: '',
    connections: '',
    location: '',
    accomplishments: [],
    personality: []
  });

  const [result, setResult] = useState<string>('');

  const calculateMarketValue = () => {
    let score = 0;

    // Income calculations (in pounds per annum)
    score += Math.floor(values.income / 1000) * 5;

    // Estate value
    if (values.estate.toLowerCase().includes('pemberley')) score += 50;
    if (values.estate.toLowerCase().includes('mansfield')) score += 45;
    if (values.estate.toLowerCase().includes('northanger')) score += 40;
    if (values.estate.toLowerCase().includes('estate')) score += 20;
    if (values.estate.toLowerCase().includes('manor')) score += 15;
    if (values.estate.toLowerCase().includes('parsonage')) score += 10;
    if (values.estate.toLowerCase().includes('cottage')) score += 5;

    // Location value
    if (values.location === 'Derbyshire') score += 20;
    if (values.location === 'London') score += 15;
    if (values.location === 'Bath') score += 12;
    if (values.location === 'Northamptonshire') score += 15;
    if (values.location === 'Devonshire') score += 10;
    if (values.location === 'Hertfordshire') score += 8;
    if (values.location === 'Kent') score += 10;

    // Social connections
    if (values.connections.toLowerCase().includes('nobility')) score += 25;
    if (values.connections.toLowerCase().includes('london')) score += 15;
    if (values.connections.toLowerCase().includes('admiral')) score += 12;
    if (values.connections.toLowerCase().includes('clergy')) score += 8;
    if (values.connections.toLowerCase().includes('military')) score += 10;

    // Accomplishments
    score += values.accomplishments.length * 8;

    // Personality traits
    score += values.personality.length * 6;

    // Calculate result with references to the four novels
    let result = '';
    if (score >= 100) {
      result = "Most Eligible! Your prospects rival Mr. Darcy's, and even Lady Catherine de Bourgh would struggle to find fault with your situation.";
    } else if (score >= 75) {
      result = "Highly Suitable! Like Colonel Brandon, you possess both the means and character to make an excellent match.";
    } else if (score >= 50) {
      result = "Quite Promising! You stand with Edmund Bertram - respectable, principled, and possessed of good connections.";
    } else if (score >= 25) {
      result = "Moderately Advantageous! Like Henry Tilney, your situation is comfortable though not grand, with room for improvement.";
    } else {
      result = "Rather Modest! You might find yourself in Fanny Price's position - dependent on the goodwill of others, but possessed of true worth.";
    }

    setResult(result);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Marriage Market Calculator</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Determine your standing in the marriage market through this thoroughly scientific calculation of your worldly and personal merits
        </p>
      </header>

      <div className="bg-cream-50 p-8 rounded-lg space-y-6">
        {/* Income Input */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Annual Income (in pounds)
          </label>
          <input
            type="number"
            value={values.income}
            onChange={(e) => setValues({ ...values, income: Number(e.target.value) })}
            className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
            placeholder="e.g., 10000"
          />
          <p className="text-sm text-sage-600 italic">
            "A single man in possession of a good fortune must be in want of a wife."
          </p>
        </div>

        {/* Estate Input */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Principal Estate
          </label>
          <input
            type="text"
            value={values.estate}
            onChange={(e) => setValues({ ...values, estate: e.target.value })}
            className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
            placeholder="e.g., Pemberley Estate"
          />
        </div>

        {/* Location Selection */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Primary Location
          </label>
          <select
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
          >
            <option value="">Select a location</option>
            {LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Connections Input */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Social Connections
          </label>
          <input
            type="text"
            value={values.connections}
            onChange={(e) => setValues({ ...values, connections: e.target.value })}
            className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
            placeholder="e.g., Connected to nobility, military officers"
          />
        </div>

        {/* Accomplishments Selection */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Notable Accomplishments
          </label>
          <div className="grid grid-cols-2 gap-4">
            {ACCOMPLISHMENTS.map((accomplishment) => (
              <label key={accomplishment} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={values.accomplishments.includes(accomplishment)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setValues({
                        ...values,
                        accomplishments: [...values.accomplishments, accomplishment]
                      });
                    } else {
                      setValues({
                        ...values,
                        accomplishments: values.accomplishments.filter(a => a !== accomplishment)
                      });
                    }
                  }}
                  className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                />
                <span className="text-sage-700">{accomplishment}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Personality Traits Selection */}
        <div className="space-y-2">
          <label className="block text-sage-900 font-semibold">
            Personal Qualities
          </label>
          <div className="grid grid-cols-2 gap-4">
            {PERSONALITY_TRAITS.map((trait) => (
              <label key={trait} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={values.personality.includes(trait)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setValues({
                        ...values,
                        personality: [...values.personality, trait]
                      });
                    } else {
                      setValues({
                        ...values,
                        personality: values.personality.filter(t => t !== trait)
                      });
                    }
                  }}
                  className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                />
                <span className="text-sage-700">{trait}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={calculateMarketValue}
          className="w-full bg-sage-500 text-white px-6 py-3 rounded-lg hover:bg-sage-600 transition"
        >
          Calculate Market Value
        </button>

        {result && (
          <div className="mt-6 p-6 bg-sage-50 rounded-lg">
            <p className="font-cormorant text-xl text-sage-900 italic text-center">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketCalculator;
