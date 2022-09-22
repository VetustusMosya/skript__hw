# 🗿 Типо конспекта и шпоры 🗿

## Navigation

1. [Циклы и условия](#terms-сycles)
1. [Функции](#function)
1. [this](#this)
1. [Обьекты](#object)
1. [Классы](#classes)
1. [Наследование](#extends)
1. [Массивы](#array)
1. [События](#event)
1. [Делегирование](#delegation)
1. [Поиск](#search-element)
1. [Стили](#css)
1. [JSON](#json)
1. [Серверное взаимодействие](#server-interaction)
1. [Обещания](#promise)
1. [Метрики](#metrics)
1. [HTML](#html)
1. [Метиматика](#math)
1. [Задержки и дата](#time)
1. [Другое](#other)
1. [Загрузки скриптов](#skripts-load)
1. [npm](#npm)
<!--  1. []()  -->

## База

`null` - представляет собой «ничего», «пусто» или «значение неизвестно».

`undefined` - означает, что «значение не было присвоено».

`||` ИЛИ : `&&` И : `!` НE : `??` Оператор нулевого слияния

`(item) => { return item*2}` === `item => item*2`

# Not sort

`let result = условие ? значение1 : значение2;`

`let func = (arg1, arg2, ...argN) => expression;`

`??`: возвращает если определено ?? неопределено

`forEach(item => {item.innerHTML += ""})` -> `+=` !

`e.preventDefault` -> отмена стандартного поведения браузера

```js
arr.forEach(function (item, i, arr) {
  `${item} элемент - ${i} номер эл. - ${arr} весь масив`;
});
```

**Spread oparator:**

- `...arr` -> разложит массив на элементы(можно так коппировать массив)

- `function(a, b, ...arr){}` -> соберет следующие аргументы в массив

---

<!-- ! -->

# Terms Сycles

![](./img/014%20.jpg)

[ ↑ В меню](#navigation)

<!-- ! -->

# Function

![](./img/016%20functions.jpg)

Функции, начинающиеся с…

- "show…" – обычно что-то показывают,
- "get…" – возвращают значение,
- "calc…" – что-то вычисляют,
- "create…" – что-то создают,
- "check…" – что-то проверяют и возвращают логическое значение, и т.д

[ ↑ В меню](#navigation)

<!-- ! -->

# this

1. Обычная функция: this = window, но если use strict - undefined
2. Контекст у методов обьекта, и есть этот обьект
3. this в конструкторах и классах - это новый экземпляр обьекта
4. Ручная привязка this:
   - `function.call(obj, 'argument')`-> ручное назначение контекста
   - `function.apply(obj, [argument])`-> ручное назначение контекста
   - `const contecstFunction = function.bind(arg)` -> назначение
5. this = event.target
6. у стрелочной функции контекст берется у родителя

[ ↑ В меню](#navigation)

<!-- ! -->

# Object

![](./img/021%20Objects.jpg)

`const arr = Object.entries(obj)` -> создание массива в виде матрицы [[],[],[]]

`delete obj.name` -> удаление свойства

`for (let key in obj){}` -> перебор всех свойств

`Object.keys(obj)` -> в масив все свойства

**Клонирование обьекта:**

- `Object.assign(obj, addObj)` -> создает обьект из двух обьектов, можно соединять с путым обьектом и таким образом копировать

- `const cloneObj = JSON.parse(JSON.stringify(obj))` -> глубокое копирование обьекта

`const copyObj = obj` -> _передача ссылки на обьект_

## Функции конструкторы

```js
function Constructor(id) {
  this.id = id;
  this.a = true;
  this.metod = function () {};
}
```

`const obj = new Constructor(1)` -> Создание обьекта на основе конструкта

`obj.metod()` -> вызов метода

`Constructor.prototype.newMetod = f()` -> добавление метода

[ ↑ В меню](#navigation)

<!-- ! -->

# Classes

```js
class BigLetter{
	constructor(arg1, arg2){
		this.arg1 = arg1;
		this.arg2 = arg2;
	}

	metod(){
		return this.arg1;
	}
}

const class = new BigLetter(arg1, arg2);
```

[ ↑ В меню](#navigation)

<!-- ! -->

## Extends

```js
class Child extends Parent {
  constructor(parentArg1, arg3) {
    super(parentArg1); //
    this.arg3 = arg3;
  }
}
```

`obj.__proto__ = protoObj;` -> неиспользуется

`Object.setPrototypeOf(obj, protoObj);`

`let obj = Object.create(protoObj);` -> создание обьекта ребенка

[ ↑ В меню](#navigation)

<!-- ! -->

# Array

> **Псевдомассив** - это объект, который похож на массив. У него есть числовые свойства, как у массивов. А также свойство `.length`. У них нет свойств, и методов массивов, таких как forEach, join, slice и др.

> Чаще всего встречается при работе с DOM - все свойства, и методы, которые возвращают несколько элементов обычно возвращают именно псевдомассив.

![](./img/022%20Arrays.jpg)

`const newArr = arr.slice()` -> копируем массив

```js
arr.forEach((item, i, arr) =>{
		(`${item) элемент - ${i) номер эл. - ${arr) весь масив`);
});
```

`const newArr = arr.filter(item =>{ условие });` -> создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции

`const newArr = arr.map((item) => { изменить });` -> создаёт новый массив с результатом вызова указанной функции для каждого элемента массива

`arr.some(item => условие)` -> возвращает true, если хоть один элемент удовлетворяет условию

`arr.every(item => условие)` -> возвращает true, если все элементы удовлетворяют условию

`const a = arr.reduce((sum, next)=>{ sum += next}, first)` -> схлопывает массив в одну переменну

`for ( let value of arr){}` - перебор (позволяет break & contine)

[ ↑ В меню](#navigation)

<!-- ! -->

# Event

`OnClick = "function('')"` -> добавляется в Html, не рекомендуется использовать

`node.onclick = function(){}` -> тоже не используется уже почти ()

`node.addEventListener('click', (event) => {})` -> используем (event - про событие, всегда используется первым)

`node.removeEventListener('clic', f(*))` -> \*точно такая же, что и была установлена

`node.addEventListener('click', f, {once: true})` -> событие происходит один раз

`event.preventDefault()` -> отмена стандартного события браузера

## Событие клавиатуры

```js
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
  }
});
```

## События формы

- `change` -> происходит при смене фокуса с элемента

- `input` -> происходит, когда что-то вводится

## Мобильные события

- `touchstart` -> палец косается элемента

- `touchmove` -> движение пальца по элементу

- `touchend` -> палец оторвался от элемента

- `touchenter` -> палец входит в область с элементом

- `touchleave` -> палец покидает область

- `touchcancel` -> палец вышел за пределы браузера

[ ↑ В меню](#navigation)

<!-- ! -->

# Delegation

Событие навешивается на родительский элемент, потом через if делегируется

```js
wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("blue")) {
    // do something
  }
});
```

[ ↑ В меню](#navigation)

<!-- ! -->

# Search element

`node.qwerySelector('.css selector'/ '[data-smt]')` -> один самый первый подходящий элемент

`document.qwerySelectorAll('#css selector') ` -> продвинутый псевдоМассив элементов

`document.getElementById('id')` -> ~~переведешь сам~~

`dicument.getElementsByTagName('div')` -> ~~переведешь сам~~ и получение [**псевдомассива**](http://old.code.mu/javascript/pages/pseudo-array.html) элементов

`document.getElementsByClassName('class')` -> ~~переведешь сам~~ и получает [**псевдомассив**](http://old.code.mu/javascript/pages/pseudo-array.html)

[ ↑ В меню](#navigation)

<!-- ! -->

# CSS

`node.style.smth = '500'` -> добавление css стилей

`node.style.cssText = 'color: blue; width: ${i}px'` -> добавление нескольких css стилей

`window.getComputedStyle(node)` -> получить обьект стилей **элемента**

## classList

`node.classList.item(i)` -> сласс по определенным индексом

`node.classList.toggle('class')` -> переключает класс

`node.classList.contains('class')` -> возвращает булиан насчет имеется ли класс

`node.classList.add('class', 'class')` -> добавление класса

`node.classList.remove('class')` -> удаляет класса

[ ↑ В меню](#navigation)

<!-- ! -->

# JSON

`JSON.stringify(obj)` -> кодирование в JSON

`JSON.parde(obj)` -> раскодирование в обьект

```JSON
{
	"atribute": "string",
	"obj":{
		"something": 56,
	}
}
```

[ ↑ В меню](#navigation)

<!-- ! -->

# Server interaction

> `name = "atribute"` -> в форме

```js
fetch(url, {
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    "Content-type": "aplication/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

`fetch(url, [options])` -> запрос на сервер. Методы:

- `.ok` -> получен ответ

- `.text` -> обычный текст

- `.json` -> декодирует JSON

- `.formData` -> обьект FormData

```js
const request = new XMLHttpRequest();

request.open("method", url, assync, login, pass); // method: POST, GET
request.setRequestHeader("Content-type", "application/json; charset=гае-8"); //заголовок, для php не нужен

const formData = new FormData(form); //php
request.send(formData);

const object = {}; //JSON
formData.forEach(function (value, key) {
  object[key] = value;
});
request.send(JSON.stringify(object));

request.addEventListener("load", () => {
  if (request.status === 200) {
    request.response;
  }
});
```

Свойства:

- `status` -> 200 - OK; 404 - not fund

- `response` -> ответ

- `readyState` -> 0: unsent; 1: opened; 2: header_recived; 3: loading; 4: done;

События:

- `readystatechange` -> изменение readyState

- `load` -> завершена загрузка

[ ↑ В меню](#navigation)

<!-- ! -->

# Promise

`await function()` -> заставляет функцию ждать выполнения Promise и продолжать выполнение после возвращения Promise значения

```js
const a = new Promise((resolve, reject) => {
  // ассинхронный код
  resolve(b); // удачное выполнение
  reject(); // ошибка
});
a.then((b) => {
  return new Promise((resolve, reject) => {});
})
  .catch(() => {
    // при ошибке
  })
  .finally(() => {
    // при любом исходе
  });
```

`Promise.all([promise1(), promise2()]).then(()=>{})` -> ждет окончания выполнения функций с обещаниями и только потом выполняется

`Promise.race([promise1(), promise2()]).then(()=>{})` -> ждет выпонения самого первого обещания

[ ↑ В меню](#navigation)

<!-- ! -->

# Metrics

`node.clientWidth` -> получение метрик

![](./img/042%20metric-all.png)

`node.getBoundingClientRect().top` -> получаем координаты элемента (координаты зеркальны с css)

`document.documentElement.clientWidth` -> получение метрик для документа

`document.documentElement.clientWidth = 0` -> изменение метрики

`window.scrollBy(x,y)` -> переместить пользователя относительно

`window.scrollTo(x,y)` -> переместить пользователя абсолютно

`window.pageYOffset` -> прокрученость элемента по вертикали

[ ↑ В меню](#navigation)

<!-- ! -->

# HTML

`document.createElement('div')` -> создание элемента **но только внутри js**

`document.createTextNode('text')` -> добавление текста

`document.body.append(div)` -> добавляет элемент в конец body

**`node[]`:**

- `.append(div)` -> добавляет элемент в конец элемента

- `.prepend(div)` -> добавляет элемент в начало элемента

- `.befor(div)` -> добавляет элемент после элементом

- `.after(div)` -> добавляет элемент перед элементом

- `.remove()` -> удаляет элемент

- `.replaceWith(x)` -> заменяет элемент

`node.innerHTML = "<h1>Oi</h1>"` -> вставляет содержимое в элемент

`node.textContent = "onli text"` -> вставляет только текст в целях безопастности

**`node.insertAdjacentHTML("arg", "html")` -> вставляет html.**:

- `beforebegin` -> перед элементом

- `afterbegin` -> вначале элемента

- `beforeend` -> перед концом элемента

- `afterend` -> после конца элемента

> `wrapper.smthChild()` -> старые версии всякого

[ ↑ В меню](#navigation)

<!-- ! -->

# Math

`parseInt('')` -> приведение к целому числу

`isNan(a)` -> проверка на число, возвр не/правду

## Округление:

- `().toFixed(n)` -> n - знаки после запятой

- `x = Math.ceil( )` -> округление до наибольшего целого

- `Math.floor( )` -> округление до наименьшего целого

- `Math.round( )`-> округление до ближайшего целого

- `Math.trunc()`-> округление до целого в сторону нуля

[ ↑ В меню](#navigation)

<!-- ! -->

# Time

`SetInterval(function, 1000, argument)` -> интервал в миллисикундах, функция без скобок

`SetTimeout(function, 1000, argument)` -> задержка в миллисекундах, функция без скобок

> const timer = setTimeout(function, 2000);

`clearInterval(timer)` -> убрать задержку и интервал

## Data

`const now = new Date()` -> получение даты сейчас

> 2022-11-31T15:59:59.444Z

`Date.parse('2022-11-31')` -> перевод строки в дату(миллисекунды)

[ ↑ В меню](#navigation)

<!-- ! -->

# Other

`console.dir(smth)` - получение всей инфы

`checkbox.checked` -> возвращает булевое поставлена ли галочка

`.lenght` -> длина массива и тд

`getAttribute('')` -> получение data-x

`promt` -> ввод в всплывающее окно
`confirm` -> да/нет всплывающего окна

`debugger` -> точка остановки, если открыта консоль

`.toLowerCase` -> уменьшить регистр

`.toUpperCase` -> увеличить регистр

[ ↑ В меню](#navigation)

<!-- ! -->

# Skripts load

`<script defer src="js/script.js"></script>` -> скрипт подгружается в фоновом режиме, запускает ток, когда скрипт загрузит и когда ДОМ дерево загружено

`<script async src="js/script.js"></script>` -> загружаются в фоноом режиме, но выполняется сразу, как загрузится. Используется для счетчиков посещений, т.е. скрипт не взаимодействует с другими скриптами и ДОМ деревом

## npm

npm init

npm i json-server --save-dev

npm i

npx json-server --watch db.json

---

    Идеи:
    - линия языков в резюме
    - фон малевичем в резюме
    - конвертер валют

[ ↑ В меню](#navigation)

---

<!-- ! -->
<!-- ! -->
<!-- ! -->

# 🤡 **Git** 🤡

## Стандартная загрузка

> cntr+alt+` -> открыть Терминал

`git init` - начало отслеживания

`git add` - добавление изменений (`-A` и `.` все изм.)

`git commit -m "massage"` - создание коммита

`git commit --amend -m "m"` - перезаписать предыдущий коммит

`git push origin <branch>` - загрузка на Хаб

`git push --set-upstream origin <branch>` - загрузка на Хаб в новую ветку

---

` git push -f origin <branch>` - принудительная загрузка на Хаб(!опасно)

`^` - на версию выше

`:q` - выйти нах из терминального редактора

---

[ ↑ В меню](#navigation)

`git checkout` - переключение между версиями и **_отмена изменений если надо_**

`git tag <name>` - назвать версию (без "name" просмотр списка тегов)

`git tag -d <name>` - удалить тег

`git reset HEAD <file> --no-edit` - отмена add

`git mv <file> <dir>` - переместить файл

`git checkout -b <branch>` - создать ветку и переместиться в нее

`git merge <branch>` - соединить ветки

`git rebase` - перебазирования

`git fetch` - извлекает комиты из родительского репозитория, но не сливает их

`git pull` - fetch + merge

## **Просмотр состояний**

`git status` - просмотр изменений файлов

`git log` - просмотр истории комитов

## **Алиасы (сокращения)**

Файл С:\Пользователи\Юзер\.gitcongig Пример:

    [alias]
    	co = checkout
    	st = status

[ ↑ В меню](#navigation)
