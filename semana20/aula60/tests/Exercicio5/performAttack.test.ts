import { Character } from "../../src/Exercicio1/validateCharacter";
import { performAttackWithInversion } from "../../src/Exercicio3/performAttack";

// a)

describe("test attacks", () => {
  test("should perform an attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Atacante",
      health: 1500,
      defense: 300,
      attack: 400,
    };

    const defender: Character = {
      name: "Defensor",
      health: 1500,
      defense: 200,
      attack: 400,
    };

    performAttackWithInversion(attacker, defender, validatorMock as any);

    expect(defender.health).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toBeCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  // b)

  test("should not perform an attack with invalid character", () => {
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Atacante",
      health: 1500,
      defense: 0,
      attack: 400,
    };

    const defender: Character = {
      name: "Defensor",
      health: 1500,
      defense: 200,
      attack: 400,
    };

    try {
      performAttackWithInversion(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toBeCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
