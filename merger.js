const PDFMerger = require('pdf-merger-js');

let merger = new PDFMerger();


let mergeIt = async (p1, p2, p3, p4, p5) => {
  await merger.add(p1)
  await merger.add(p2)
  await merger.add(p3)
  await merger.add(p4)
  await merger.add(p5)
  let d = `merged${new Date().getTime()}.pdf`
  await merger.save(`./static/public/${d}`)
  return d
}

module.exports = { mergeIt }