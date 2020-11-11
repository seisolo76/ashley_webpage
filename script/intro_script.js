// set up text to print, each item in array is new line
var aText = new Array(
  "Q: What is Computational Sustainability?", 
  <br>,
  "A: Computational Sustainability is an interdisciplinary field that aims to apply techniques from computer science, information science, operations research, applied mathematics, and statistics for balancing environmental, economic, and societal needs for sustainable development (Gomez and Sabharwal).",
  <br>,
  "Q: Why Computational Sustainability and not another topic?",
  "A: I chose computational sustainability as my topic because it relates to my major. I am currently a computer science major. When I was first thinking about what I wanted my topic to be I had a couple initial ideas, but none were really sticking. I decided to see if there was any area of environmental stewardship that had to do with computer science and that's how I found out about computational sustainability. The more I read into computational sustainability then more I knew that this is what my topic should be. It involved something I am passionate about so it was the perfect topic for me.",
  "Q: Why should you care about Computational Sustainability?",
  "A: There are so many interesting applications and research being done in this field. It has so much potential to do good and help better the planet. It may sound boring and sound like it is just a bunch of technical jargon, but it is more than that!"	
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
