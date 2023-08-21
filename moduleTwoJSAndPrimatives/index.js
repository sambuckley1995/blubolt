const input = document.querySelector("input");
const log = document.getElementById("values");


// baseData 
const baseData = [
  {
    id: 1,
    value: "Value for ID 1"
  },
  {
    id: 2,
    value: "Value for ID 2"
  },
  {
    id: 3,
    value: "Value for ID 3"
  },
  {
    id: 4,
    value: "Value for ID 4"
  },
  {
    id: 5,
    value: "Value for ID 5"
  },
  {
    id: 6,
    value: "Value for ID 6"
  },
]

// Add on Data

const addOnData = {
  id: 20,
  value: "I am addon data"
}

console.log('JS Loaded and ready to log!')
console.log({ baseData, addOnData })


/**
 * Your Event listners and Loggers should be added below
 */



const logBaseData = () => {
  console.log(baseData)
};

const logBaseDataInReverse = () => {
  const reversed = baseData.slice().reverse()
  console.log(reversed)
};

const logBaseDataWithoutFirstItem = () => {
  const firstRemoved = baseData.slice()
  firstRemoved.shift()
  console.log(firstRemoved)
};

const logBaseDataIndividually = () => {
  baseData.forEach(item => console.log(item));
};

const logBaseDataWithAddOnAtStart = () => {
  const addOnDataAdded = baseData.slice()
  addOnDataAdded.unshift(addOnData)
  console.log(addOnDataAdded)
};

const logBaseDataWithAddOnAtIndexTwoAndIDUpdated = () => {
  const addOnDataAtIndexTwo = baseData.slice()
  const addOnClone = { ...addOnData }
  addOnClone.id = 2
  addOnDataAtIndexTwo.splice(1, 1, addOnClone)
  console.log(addOnDataAtIndexTwo)
};



const countWords = () => {
  const para = document.getElementById("stringText").innerHTML;
  arr = para.split(' ');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (/fox/i.test(arr[i])) {
      count++;
    }
  }
  console.log(`Occurances of fox: ${count}`);
}

const reverseWords = () => {
  const para = document.getElementById("stringText").innerHTML;
  const reveresed = para.split("").reverse().join("").split(" ").reverse().join(" ")
  console.log(reveresed)
}

const replaceBrownWithSandy = () => {
  const para = document.getElementById("stringText").innerHTML;
  const replaced = para.replaceAll('brown', 'sandy')
  console.log(replaced)
}

const updateValue = (e) => {
  log.textContent = e.target.value
  localStorage.setItem("savedValue", JSON.stringify(log.textContent));
}

const retreiveValue = () => {
  const displayValue = JSON.parse(localStorage.getItem("savedValue"))
  document.getElementById("values").value = displayValue;
}

document.getElementById("baseData").addEventListener("click", logBaseData);

document.getElementById("baseDataReverse").addEventListener("click", logBaseDataInReverse);

document.getElementById("baseDataWithoutFirst").addEventListener("click", logBaseDataWithoutFirstItem);

document.getElementById("baseDataEachNew").addEventListener("click", logBaseDataIndividually);

document.getElementById("baseDataIncAddOn").addEventListener("click", logBaseDataWithAddOnAtStart);

document.getElementById("baseDataIndexTwoReplaced").addEventListener("click", logBaseDataWithAddOnAtIndexTwoAndIDUpdated);

document.getElementById("countFox").addEventListener("click", countWords);

document.getElementById("reverseWords").addEventListener("click", reverseWords);

document.getElementById("replaceBrownWithSandy").addEventListener("click", replaceBrownWithSandy);

input.addEventListener("input", updateValue);

retreiveValue();











