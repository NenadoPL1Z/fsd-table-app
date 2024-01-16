import { sum } from "@/shared/functions";

describe("sum", () => {
  test("calc plus", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("calc minus", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("zero", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("minus first arg", () => {
    expect(sum(-5, 10)).toBe(5);
  });

  test("minus second arg", () => {
    expect(sum(10, -5)).toBe(5);
  });
});
