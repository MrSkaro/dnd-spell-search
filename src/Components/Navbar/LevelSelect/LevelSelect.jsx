import React from 'react';
import "./LevelSelect.css";

/* Component to filter spells by level */
export default function LevelSelect({ level, onLevelChange, spellClass }) {
  {
    /* Most classes in D&D have 10 spell levels to draw from */
  }
  const nineSpellLevels = ["All", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  {
    /* Several classes only use 5 */
  }
  const fiveSpellLevels = ["All", 1, 2, 3, 4, 5];

  return (
    <div className="filters level-select-container">
      {/* Buttons rendered depending on how many levels the class draws from */}
      {spellClass == "Paladin" || spellClass == "Ranger"
        ? fiveSpellLevels.map((l) => (
            <button
              onClick={() => onLevelChange(l)}
              className={`${"button levelButton fiveLevels"} ${
                l === level ? "selectedButton" : "nonSelectedButton"
              }`}
              value={l}
              key={l}
            >
              {l}
            </button>
          ))
        : nineSpellLevels.map((l) => (
            <button
              onClick={() => onLevelChange(l)}
              className={`${"button levelButton nineLevels"} ${
                l === level ? "selectedButton" : "nonSelectedButton"
              }`}
              value={l}
              key={l}
            >
              {l}
            </button>
          ))}
    </div>
  );
}
