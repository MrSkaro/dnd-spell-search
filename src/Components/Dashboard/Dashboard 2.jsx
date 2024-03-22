import React, { useEffect, useState } from "react";
import { getAllSpells } from "../../hooks/api";
import Navbar from "../Navbar/Navbar";
import SpellCard from "../SpellCard/SpellCard";
import "./Dashboard.css";

export default function Dashboard() {
  /* Complete list of spells */
  const [spells, setSpells] = useState([]);

  /* Current spell to be displayed */
  const [spell, setSpell] = useState("");

  /* Current spell class, used for filtering */
  const [spellClass, setSpellClass] = useState("All");

  /* Complete level, used for filtering */
  const [level, setLevel] = useState("All");

  /* Populate list of spells, filtering by search entry and level/class selections */
  const filteredList = spells.filter((element) => {
    if (
      (spell == "") &
      (spellClass == "All" || element.classes.includes(spellClass)) &
      (level == "All" || element.level == level)
    ) {
      return true;
    }
    if (
      element.name.toLowerCase().includes(spell) &
      (spellClass == "All" ||
        element.classes.map((c) => c.name).includes(spellClass)) &
      (level == "All" || element.level == level)
    ) {
      return true;
    }
    return false;
  });

  /* Function to convert JSON spell data to iterable list */
  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  return (
    <div>
      {/* Navbar component containing page title and filter inputs */}
      <Navbar
        spell={spell}
        onSpellChange={setSpell}
        spellClass={spellClass}
        setSpellClass={setSpellClass}
        level={level}
        setLevel={setLevel}
      />

      {/* Loading placeholder */}
      {spells.length === 0 && <span className="loading">Loading...</span>}

      {/* Render filtered list of spell cards */}
      <div className="body spell-list">
        {filteredList.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>
    </div>
  );
}
