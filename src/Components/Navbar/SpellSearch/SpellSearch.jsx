import React from 'react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SpellSearch.css";

/* Component to filter spells by text input */
export default function SpellSearch({ spell, onSpellChange }) {
  const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <div className="spell-select-container">
      <input
        className={"spell-select"}
        value={spell}
        placeholder="Spell name..."
        onChange={(e) => onSpellChange(e.target.value)}
      ></input>
      <div className={"spell-select-icon"}>{magnifyingGlass}</div>
    </div>
  );
}
