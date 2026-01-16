import React, { useState } from 'react';
import { BookOpen, ChevronRight, Download, ExternalLink } from 'lucide-react';

const PhotochemistryGuide = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: "Laws of Photochemistry",
      filename: "01_laws_of_photochemistry.md",
      subtopics: [
        "Grotthuss-Draper Law",
        "Stark-Einstein Law",
        "Lambert-Beer Law",
        "Quantum Efficiency"
      ]
    },
    {
      id: 2,
      title: "Quantum Yield",
      filename: "02_quantum_yield.md",
      subtopics: [
        "Definition and Significance",
        "Primary and Overall Quantum Yield",
        "Calculation Methods",
        "Factors Affecting Quantum Yield"
      ]
    },
    {
      id: 3,
      title: "Decomposition of Hydrogen Halides",
      filename: "03_hydrogen_halide_decomposition.md",
      subtopics: [
        "Photochemical Decomposition Mechanism",
        "Chain Reactions",
        "Quantum Yield Analysis",
        "Thermodynamic Considerations"
      ]
    },
    {
      id: 4,
      title: "Photosensitized Reactions",
      filename: "04_photosensitized_reactions.md",
      subtopics: [
        "Energy Transfer Mechanisms",
        "Sensitizers and Their Properties",
        "Applications in Organic Synthesis",
        "Singlet vs Triplet Sensitization"
      ]
    },
    {
      id: 5,
      title: "Fluorescence and Phosphorescence",
      filename: "05_fluorescence_phosphorescence.md",
      subtopics: [
        "Jablonski Diagram",
        "Fluorescence Mechanism",
        "Phosphorescence Mechanism",
        "Quantum Mechanical Basis"
      ]
    },
    {
      id: 6,
      title: "Luminescence Phenomena",
      filename: "06_luminescence_chemiluminescence.md",
      subtopics: [
        "Types of Luminescence",
        "Chemiluminescence Mechanism",
        "Bioluminescence",
        "Practical Applications"
      ]
    }
  ];

  const getTopicContent = (topicId) => {
    const contents = {
      1: {
        intro: "The fundamental laws governing photochemical reactions, establishing the relationship between light absorption and chemical change.",
        keyPoints: [
          "Grotthuss-Draper Law: Only absorbed light can cause chemical change",
          "Stark-Einstein Law: One photon activates one molecule (quantum equivalence)",
          "Lambert-Beer Law: Quantifies light absorption by matter"
        ],
        equations: [
          "A = εcl (Lambert-Beer Law)",
          "Φ = (Number of molecules reacting)/(Number of photons absorbed)",
          "I = I₀ × 10^(-εcl)"
        ]
      },
      2: {
        intro: "Quantum yield measures the efficiency of photochemical processes, relating the number of events to photons absorbed.",
        keyPoints: [
          "Primary quantum yield: molecules initially activated per photon",
          "Overall quantum yield: total product molecules per photon",
          "Can be >1 for chain reactions, <1 for non-radiative decay"
        ],
        equations: [
          "Φ = n/N where n = molecules reacted, N = photons absorbed",
          "Φ_fluorescence = photons emitted/photons absorbed",
          "Φ can range from 0 to 10⁶ in chain reactions"
        ]
      },
      3: {
        intro: "Photochemical decomposition of hydrogen halides demonstrates chain reaction mechanisms and high quantum yields.",
        keyPoints: [
          "HX → H· + X· (initiation by light)",
          "Chain propagation through radical reactions",
          "Quantum yields can exceed 10⁴ due to chain mechanisms"
        ],
        equations: [
          "HI + hν → H· + I·",
          "H· + HI → H₂ + I·",
          "I· + I· → I₂ (termination)"
        ]
      },
      4: {
        intro: "Photosensitized reactions involve energy transfer from an excited sensitizer to a substrate molecule.",
        keyPoints: [
          "Sensitizer absorbs light and transfers energy",
          "Enables reactions with molecules that don't absorb available wavelengths",
          "Important in photodynamic therapy and solar energy conversion"
        ],
        equations: [
          "S + hν → S*",
          "S* + A → S + A* (energy transfer)",
          "A* → Products"
        ]
      },
      5: {
        intro: "Fluorescence and phosphorescence are emission processes following light absorption, differing in spin state and timescale.",
        keyPoints: [
          "Fluorescence: S₁ → S₀ transition (10⁻⁹ to 10⁻⁷ s)",
          "Phosphorescence: T₁ → S₀ transition (10⁻³ to 10¹ s)",
          "Jablonski diagram maps electronic transitions"
        ],
        equations: [
          "τ_f = 1/k_f (fluorescence lifetime)",
          "k_isc = rate of intersystem crossing",
          "Φ_f + Φ_p + Φ_ic + Φ_isc = 1"
        ]
      },
      6: {
        intro: "Luminescence encompasses light emission from various excitation sources, including chemical reactions.",
        keyPoints: [
          "Chemiluminescence: light from chemical reactions",
          "Bioluminescence: enzymatic light production in living organisms",
          "Applications in analytical chemistry and medical diagnostics"
        ],
        equations: [
          "A + B → [AB]* → Products + hν",
          "Luciferin + O₂ → Oxyluciferin + Light",
          "Φ_CL = (photons emitted)/(molecules reacted)"
        ]
      }
    };
    return contents[topicId] || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-t-4 border-indigo-600">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-indigo-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Photochemistry Study Guide</h1>
              <p className="text-gray-600 mt-2">Comprehensive University-Level Resource</p>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-indigo-900">
              📚 Created: January 7, 2026 | 🎓 Level: University | 📖 6 Comprehensive Topics
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Topic List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-indigo-600 rounded"></span>
                Topics
              </h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopic(topic.id);
                      setSelectedSubtopic(null);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      selectedTopic === topic.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-bold ${
                        selectedTopic === topic.id ? 'text-white' : 'text-indigo-600'
                      }`}>
                        {topic.id}
                      </span>
                      <span className="text-sm font-medium">{topic.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      selectedTopic === topic.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            {selectedTopic ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {(() => {
                  const topic = topics.find(t => t.id === selectedTopic);
                  const content = getTopicContent(selectedTopic);
                  
                  return (
                    <>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-3xl font-bold text-gray-800">{topic.title}</h2>
                          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                            Topic {topic.id}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{content.intro}</p>
                      </div>

                      {/* Key Points */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Key Concepts</h3>
                        <div className="space-y-2">
                          {content.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                              <p className="text-gray-700 text-sm">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Equations */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Important Equations</h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                          {content.equations.map((eq, idx) => (
                            <div key={idx} className="font-mono text-sm text-gray-800 p-2 bg-white rounded border border-gray-200">
                              {eq}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subtopics */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Detailed Subtopics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {topic.subtopics.map((subtopic, idx) => (
                            <div
                              key={idx}
                              className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 hover:shadow-md transition-all cursor-pointer"
                              onClick={() => setSelectedSubtopic(idx)}
                            >
                              <p className="text-sm font-medium text-gray-800">{subtopic}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* File Download */}
                      <div className="border-t border-gray-200 pt-6">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-bold mb-2">Complete Documentation</h4>
                              <p className="text-sm text-indigo-100">Download the full markdown file with examples and proofs</p>
                            </div>
                            <Download className="w-8 h-8" />
                          </div>
                          <div className="mt-4">
                            <code className="text-xs bg-white/20 px-3 py-2 rounded text-indigo-100">
                              {topic.filename}
                            </code>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <BookOpen className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">Select a Topic</h3>
                <p className="text-gray-500">Choose a topic from the left to view detailed content</p>
              </div>
            )}
          </div>
        </div>

        {/* References Footer */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-indigo-600" />
            Online References
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "IUPAC Gold Book - Photochemistry", url: "https://goldbook.iupac.org" },
              { name: "Physical Chemistry by Atkins & de Paula", url: "https://www.oup.com" },
              { name: "Modern Molecular Photochemistry", url: "https://pubs.acs.org" },
              { name: "Photochemistry and Photophysics", url: "https://www.sciencedirect.com" }
            ].map((ref, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                <p className="text-sm font-medium text-gray-800">{ref.name}</p>
                <p className="text-xs text-indigo-600 mt-1">{ref.url}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotochemistryGuide;