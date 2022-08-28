import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
export const switch_to_contact = ()=>{
    const INFORMATION = document.getElementsByClassName(`information`);
    const container = document.createElement(`div`);
    container.classList.add(`container`);
    INFORMATION[0].appendChild(container);

    const items = [];
    items.push(document.createElement(`div`));


    items.forEach(item => {
        item.classList.add(`item`);
        container.appendChild(item);
        item.textContent = lorem.generateSentences(5);
    })

};