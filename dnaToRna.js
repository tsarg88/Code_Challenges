// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription.
// DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.

// Examples:
// dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"
// dnaToRna("CGATATA") ➞ "GCUAUAU"
// dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"

// Notes:
// Transcription is the process of making complementary strand.
// A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

// const dnaToRna = (d) => {
//   p = { A: "U", T: "A", G: "C", C: "G" };
//   return [...d].reduce((acc, curr) => acc + p[curr], "");
// };
// console.log(dnaToRna("ATTAGCGCGATATACGCGTAC"));

// Solution 2:
// function dnaToRna(dna) {
//     const converted = {'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C'};
//     return [...dna].map(i => converted[i]).join('');
// }

// Solution 3:
function dnaToRna(dna) {
  return dna.replace(/[ATGC]/g, (match) =>
    match === "A"
      ? "U"
      : match === "T"
      ? "A"
      : match === "G"
      ? "C"
      : match === "C"
      ? "G"
      : ""
  );
}
console.log(dnaToRna("ATTAGCGCGATATACGCGTAC"));
