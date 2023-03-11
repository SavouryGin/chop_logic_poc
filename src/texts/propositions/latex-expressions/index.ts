const latexExpressions = {
  T: `$$\\mathfrak{T}$$`,
  R1Rn: `$\\{R_{1}, R_{2}, ..., R_{n}\\}$`,
  Ri: `$$R_{i}$$`,
  k: `$$k$$`,
  F: `$$F$$`,
  F1Fn: `$$F_{1}, F_{2}, ..., F_{n}$$`,
  G: `$$G$$`,
  Delta: `$$\\Delta$$`,
  Fi: `$$F_{i}$$`,
  Fn: `$$F_{n}$$`,
  DeltaToG: `$$\\Delta \\vdash G.$$`,
  DeltaToNothing: `$$\\Delta~=~\\varnothing$$`,
  toG: `$$\\vdash G$$`,
  IC: `$$\\Phi \\rightarrow (\\Psi \\rightarrow \\Phi)$$`,
  ID: `$$(\\Phi \\rightarrow (\\Psi \\rightarrow \\Chi)) \\rightarrow ((\\Phi \\rightarrow \\Psi) \\rightarrow (\\Phi \\rightarrow \\Chi))$$`,
  CR: `$$(\\neg \\Psi \\rightarrow \\neg \\Phi) \\rightarrow ((\\neg \\Psi \\rightarrow \\Phi) \\rightarrow \\Psi)$$`,
  FtoG: `$$F \\rightarrow G$$`,
  FandG: `$$F \\land G$$`,
  ForG: `$$F \\lor G$$`,
  notF: `$$\\neg F$$`,
  FtoNotG: `$$F \\rightarrow \\neg G$$`,
  FtoH: `$$F \\rightarrow H$$`,
  GtoH: `$$G \\rightarrow H$$`,
  H: `$$H$$`,
};

export default Object.freeze(latexExpressions);
