import { validateCharacter } from "../../src/Exercicio1/validateCharacter";

// a)

describe("validate characters", () => {
  test("should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      health: 1500,
      defense: 800,
      attack: 700,
    });

    expect(result).toBe(false);
  });

  // b)

  test("should return true for health = 0", () => {
    const result = validateCharacter({
      name: "Personagem",
      health: 0,
      defense: 100,
      attack: 200,
    });

    expect(result).toBe(true);
  });

  // c)

  test("should return false for attack = 0", () => {
    const result = validateCharacter({
      name: "Personagem",
      health: 1500,
      defense: 100,
      attack: 0,
    });

    expect(result).toBe(false);
  });

  // d)

  test("should return false for defense = 0", () => {
    const result = validateCharacter({
      name: "Personagem",
      health: 1500,
      defense: 0,
      attack: 200,
    });

    expect(result).toBe(false);
  });

  // e)

  test("should return false for NEGATIVE health, defense or attack", () => {
    const result = validateCharacter({
      name: "Personagem",
      health: -100,
      defense: -300,
      attack: -400,
    });

    expect(result).toBe(false);
  });

  // f)

  test("should return true for valid information", () => {
    const result = validateCharacter({
      name: "Personagem",
      health: 1500,
      defense: 300,
      attack: 400,
    });

    expect(result).toBe(true);
  });
});
