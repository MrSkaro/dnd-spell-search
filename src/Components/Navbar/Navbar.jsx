import React from 'react';
import SpellSearch from "./SpellSearch/SpellSearch";
import ClassSelect from "./ClassSelect/ClassSelect";
import LevelSelect from "./LevelSelect/LevelSelect";
import "./Navbar.css";

/* Navbar component containing page title and filter inputs */
export default function Navbar({
  spell,
  onSpellChange,
  spellClass,
  setSpellClass,
  level,
  setLevel,
}) {
  return (
    <div className="Navbar">
      <h1 className={"title"}>
        D<span style={{ color: "red" }}>&</span>D 5E Spell Library
      </h1>

      <div className={"filters"}>
        {/* Component to filter spells by text input */}
        <SpellSearch spell={spell} onSpellChange={onSpellChange} />

        {/* Component to filter spells by class */}
        <ClassSelect spellClass={spellClass} onClassChange={setSpellClass} />

        {/* Component to filter spells by level */}
        <LevelSelect
          level={level}
          onLevelChange={setLevel}
          spellClass={spellClass}
        />
      </div>
    </div>
  );
}
