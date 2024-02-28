import React from 'react';
import "./ClassSelect.css";

/* Component to filter spells by class */
export default function ClassSelect({ spellClass, onClassChange }) {
  {
    /* List of classes to populate dropdown */
  }
  const classes = [
    "All",
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  return (
    <div className="filters class-select-container">
      <p className={"class-title"}>Class:</p>
      <select
        className={"class-select"}
        value={spellClass}
        onChange={(c) => onClassChange(c.target.value)}
      >
        {classes.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
