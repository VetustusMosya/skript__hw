# 🗿 Типо конспекта и шпоры 🗿

## Теория

`null` - представляет собой «ничего», «пусто» или «значение неизвестно».

`undefined` - означает, что «значение не было присвоено».

`||` ИЛИ : `&&` И : `!` НE : `??` Оператор нулевого слияния

---

## Не забыть

`let result = условие ? значение1 : значение2;`

`let func = (arg1, arg2, ...argN) => expression;`

`??`: возвращает если определено ?? неопределено

`if(_true_)`

_Ctrl + L_ -> отчистка терминала

---

## Циклы

![](./img/014%20.jpg)

## Функции

![](./img/016%20functions.jpg)

Функции, начинающиеся с…

- "show…" – обычно что-то показывают,
- "get…" – возвращают значение,
- "calc…" – что-то вычисляют,
- "create…" – что-то создают,
- "check…" – что-то проверяют и возвращают логическое значение, и т.д

## Обьекты

![](./img/021%20Objects.jpg)

`delete obj.name` -> удаление свойства

`for (let key in obj){}` -> перебор всех свойств

`Object.keys(obj)` -> в масив все свойства

`Object.assign(obj, addedObj)` -> создает обьект из двух обьектов

`...arr` -> разложить массив и обьект

## Наследование

`obj.__proto__ = protoObj;` -> неиспользуется

`Object.setPrototypeOf(obj, protoObj);`

`let obj = Object.create(protoObj);` -> создание обьекта ребенка

## Массив

> **Псевдомассив** - это объект, который похож на массив. У него есть числовые свойства, как у массивов. А также свойство `.length`. У них нет свойств, и методов массивов, таких как forEach, join, slice и др.

> Чаще всего встречается при работе с DOM - все свойства, и методы, которые возвращают несколько элементов обычно возвращают именно псевдомассив.

![](./img/022%20Arrays.jpg)

```
arr.forEach(function(item, i, arr){
		(`${item) элемент - ${i) номер эл. - ${arr) весь масив`);
});
```

`for ( let value of arr){}` - перебор (позволяет break & contine)

## События

`OnClick = " function('')"` -> добавляется в Html, не рекомендуется использовать

`node.onclick = function(){}` -> тоже не используется уже почти ()

`node.addEventListener('click', (event) => {})` -> используем (event - про событие, всегда используется первым)

`node.removeEventListener('clic', f(*))` -> \*точно такая же, что и была установлена

`node.addEventListener('click', f, {once: true})` -> событие происходит один раз

`event.preventDefault()` -> отмена стандартного события браузера

    Событие клавиатуры

    document.addEventListener("keydown", (e) => {
    	if (e.code === "Escape") {
    	}
    });

### Мобильные события

- `touchstart` -> палец косается элемента

- `touchmove` -> движение пальца по элементу

- `touchend` -> палец оторвался от элемента

- `touchenter` -> палец входит в область с элементом

- `touchleave` -> палец покидает область

- `touchcancel` -> палец вышел за пределы браузера

## Делегирование событий

Событие навешивается на родительский элемент, потом через if делегируется

```
 wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.classList.contains('blue')){
		// do something
	}
 });
```

## Поиск элемента

`node.qwerySelector('.css selector'/ '[data-smt]')` -> один самый первый подходящий элемент

`document.qwerySelectorAll('#css selector') ` -> продвинутый псевдоМассив элементов

`document.getElementById('id')` -> ~~переведешь сам~~

`dicument.getElementsByTagName('div')` -> ~~переведешь сам~~ и получение [**псевдомассива**](http://old.code.mu/javascript/pages/pseudo-array.html) элементов

`document.getElementsByClassName('class')` -> ~~переведешь сам~~ и получает [**псевдомассив**](http://old.code.mu/javascript/pages/pseudo-array.html)

> стили из .html имеют более высокий приоритет

> элемент == нод

## classList

`node.classList.item(i)` -> сласс по определенным индексом

`node.classList.toggle('class')` -> переключает класс

`node.classList.contains('class')` -> возвращает булиан насчет имеется ли класс

`node.classList.add('class', 'class')` -> добавление класса

`node.classList.remove('class')` -> удаляет класса

## Стили

`node.style.smth = '500'` -> добавление css стилей

`node.style.cssText = 'color: blue; width: ${i}px'` -> добавление нескольких css стилей

`window.getComputedStyle(node)` -> получить обьект стилей **обьекта**

`node.clientWidth` -> получение метрик

![](./img/042%20metric-all.png)

`node.getBoundingClientRect().top` -> получаем координаты элемента (координаты зеркальны с css)

`document.documentElement.clientWidth` -> получение метрик для документа

`document.documentElement.clientWidth = 0` -> изменение метрики

`window.scrollBy(x,y)` -> переместить пользователя относительно

`window.scrollTo(x,y)` -> переместить пользователя абсолютно

`window.pageYOffset` -> прокрученость элемента по вертикали

## Взаимодействие с Html

`document.createElement('div')` -> создание элемента !но только внутри js

`document.createTextNode('text')` -> добавление текста

`document.body.append(div)` -> добавляет элемент в конец body

`node.innerHTML = "<h1>Oi</h1>"` -> вставляет содержимое в элемент

`node.textContent = "onli text"` -> вставляет только текст в целях безопастности

## Штуки для ВРЕМЕНИ

`SetInterval(function, 1000, argument)` -> интервал в миллисикундах, функция без скобок

`SetTimeout(function, 1000, argument)` -> задержка в миллисекундах, функция без скобок

> const timer = setTimeout(function, 2000);

`clearInterval(timer)` -> убрать задержку и интервал

## Date

`const now = new Date()` -> получение даты сейчас

> 2022-11-31T15:59:59.444Z

`Date.parse('2022-11-31')` -> перевод строки в дату(миллисекунды)

## Добавление элемента

`node.insertAdjacentHTML("arg", "html")` -> вставляет html.
Аргументы:

- `beforebegin` -> перед элементом

- `afterbegin` -> вначале элемента

- `beforeend` -> перед концом элемента

- `afterend` -> после конца элемента

**`node[]`:**
m

- `.append(div)` -> добавляет элемент в конец элемента

- `.prepend(div)` -> добавляет элемент в начало элемента

- `.befor(div)` -> добавляет элемент после элементом

- `.after(div)` -> добавляет элемент перед элементом

- `.remove()` -> удаляет элемент

- `.replaceWith(x)` -> заменяет элемент

> `wrapper.smthChild()` -> старые версии всякого

## Подгрузка скриптов

`<script defer src="js/script.js"></script>` -> скрипт подгружается в фоновом режиме, запускает ток, когда скрипт загрузит и когда ДОМ дерево загружено

`<script async src="js/script.js"></script>` -> загружаются в фоноом режиме, но выполняется сразу, как загрузится. Используется для счетчиков посещений, т.е. скрипт не взаимодействует с другими скриптами и ДОМ деревом

## Всякие команды

`console.dir(smth)` - получение всей инфы

`isNan(a)` -> проверка на число, возвр не/правду

`checkbox.checked` -> возвращает булевое поставлена ли галочка

`.lenght` -> длина массива и тд

`getAttribute('')` -> получение data-x

`parseInt('')` -> приведение к целому числу

`this.` -> внутри функций с необходимым лементом

`promt` -> ввод в всплывающее окно
`confirm` -> да/нет всплывающего окна

`debugger` -> точка остановки, если открыта консоль

`.toLowerCase` -> уменьшить регистр

`.toUpperCase` -> увеличить регистр

---

    							Идеи для проектов:

    							- конвертер валют

---

## 🤡 **Git** 🤡

---

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
