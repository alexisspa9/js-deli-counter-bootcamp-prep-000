var katzDeliLine = [];

function takeANumber(line, name) {
    var position = line.length + 1;
    line.push(name);
    console.log(`Welcome, ${name}. You are number ${position} in line.`);
}

function nowServing() {
  if (katzDeliLine.length > 0) {
  return katzDeliLine[0];
  }
  else {
  console.log('There is nobody waiting to be served!');
  }
  katzDeliLine.shift();
  console.log(katzDeliLine);
}

function currentLine() {
    if (katzDeliLine.length > 0) {
  var i = 0;
  var position = i + 1;
  var text = "The line is currently: ";
  while (katzDeliLine.length >= 1) {
    text.push(`${position}. ${katzDeliLine[i]},`);
  }
  console.log(text);
    }
    else {
      console.log('The line is currently empty.');
    }
}
currentLine();
takeANumber(katzDeliLine, 'Alex');
takeANumber(katzDeliLine, 'George');
nowServing();
nowServing();
nowServing();