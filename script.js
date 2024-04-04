function printMadLib() {
  pos = ['exclamation', 'adjPerAttr', 'nounPlural1', 'adjSize', 'number', 'lyAdv',
    'nounObj', 'verbTransPast1', 'nounPlural2', 'nounPlural3', 'verbTransPast2']
  pos.forEach(getInput)
  document.getElementById("result").innerHTML = story
  console.log("story: " + story);
  storyData[story] = story;
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyJSON;
}

function getInput(item, index, array) {
  word = document.getElementById(item).value;
  storyData[item] = word;
  console.log("word: " + word);
  story = story.replace("___", "<u>" + word + "</u>");
}

function validate(word, item) {
  if (!word)
    return validate(prompt("No, I need a " + item + "!"), item)
  if (item == "number" && isNaN(word)) {
    return validate(prompt("No, I need a " + item + "!"), item)
  }
  if (item == "lyAdv" && word.slice(-2) != "ly")
    return validate(prompt("No, I need a " + item + "!"), item)
  if (item == "exclamation")
    return word.toUpperCase();
  return word;
}

var story = '"___!", the ___ gentleman said,<br>"What are you doing with those ___? You cant do that!<br>You are in ___ trouble there, Buddy!<br>That could get you ___ years in the lock-up." <br>He then ___ grabbed his ___ and ___ it.<br>His scooter was kicking up ___ as he sped away to contact the ___.<br>Somebody was going get ___.';

var storyData = {
  timestamp: Date.now()
}
