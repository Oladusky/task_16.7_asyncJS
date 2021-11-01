const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const xmlName = xmlDOM.querySelector("list");
const firstName = bookNode.querySelector("first");
const secondName = bookNode.querySelector("second");
const age = bookNode.querySelector("age");
const profession = bookNode.querySelector("prof");
const language = nameNode.getAttribute("lang");

const result = {
    category: categoryAttr,
    name: firstName.textContent + secondName.textContent,
    age: age.textContent,
    prof: profession.textContent,
    lang: language,
  };
  console.log('result', result);