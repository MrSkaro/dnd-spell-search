import ShowMoreText from "react-show-more-text";
import "./SpellCard.css";

export default function SpellCard({ spell }) {
  // const schoolImages = {
  //   abjuration: require("./SpellImages/abjuration.png"),
  //   conjuration: require("./SpellImages/conjuration.png"),
  //   divination: require("./SpellImages/divination.png"),
  //   enchantment: require("./SpellImages/enchantment.png"),
  //   evocation: require("./SpellImages/evocation.png"),
  //   illusion: require("./SpellImages/illusion.png"),
  //   necromancy: require("./SpellImages/necromancy.png"),
  //   transmutation: require("./SpellImages/transmutation.png"),
  // };

  // const schoolImage = schoolImages[spell.school.name.toLowerCase()];

  return (
    <li className="spell-card">
      {/* <img src={schoolImage} alt={spell.school.name} className="school-img" /> */}
      <hgroup>
        <h4>{spell.name}</h4>
        <small>
          {spell.school.name + " "}
          {spell.level > 0 && `Level ${spell.level}`}
          {spell.level === 0 && "Cantrip"}
        </small>
      </hgroup>
      <div className="stats">
        <p>
          <strong>Casting Time:</strong>
          {spell.casting_time}
        </p>
        <p>
          <strong>Range:</strong>
          {spell.range}
        </p>
        <p>
          <strong>Components:</strong>
          {spell.components.join(", ")}
        </p>
        <p>
          <strong>Duration:</strong>
          {spell.duration}
        </p>
        <p>
          <strong>Concentration?</strong>
          {spell.concentration ? "Yes" : "No"}
        </p>
        <p>
          <strong>Classes:</strong>
          {spell.classes.map((c) => c.name).join(", ")}
        </p>
      </div>
      <div className="description">
        <p>
          <strong>Description:</strong>
          <ShowMoreText
            className="show-more"
            anchorClass="show-more-less-clickable"
            lines={3}
            more="Show more"
            less="...Show less"
            // onClick={this.executeOnClick}
            expanded={false}
            width={0}
          >
            {spell.desc}
          </ShowMoreText>
        </p>
      </div>
    </li>
  );
}
