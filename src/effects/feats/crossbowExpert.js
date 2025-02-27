import { baseFeatEffect } from "../specialFeats.js";

export function crossbowExpertEffect(document) {
  let effect = baseFeatEffect(document, document.name);
  effect.changes.push({
    key: "flags.midi-qol.ignoreNearbyFoes",
    value: "1",
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    priority: 20,
  });
  effect.transfer = true;
  document.effects.push(effect);
  return document;
}
