import { penjumlahan, perkalian } from "./angka";
import { potongPajak, sapaan } from "./text";

describe("basic testing", () => {
  it("testing sederhana", () => {
    expect(true).toBe(true);
  });

  // it.only("menjumlahkan nilai", () => {
  it("menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });
});

describe("Group Testing Angka", () => {
  test("Fungsi Penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12);
  });

  test("Fungsi Perkalian", () => {
    expect(perkalian(3, 2)).toBe(6);
    expect(perkalian(5, 3)).toBe(15);
  });
});

describe("Group Testing Text/String", () => {
  test("Mengetahui gaji bersih di kurangi pajak", () => {
    expect(potongPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
  });

  test("Menyapa nama", () => {
    expect(sapaan("Abu")).toBe("Hallo Abu");
  });
});
