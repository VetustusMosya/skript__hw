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

**\`text ${i}`** -> интерполяция

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

### Наследование

`obj.__proto__ = protoObj;` -> неиспользуется

`Object.setPrototypeOf(obj, protoObj);`

`let obj = Object.create(protoObj);` -> создание обьекта ребенка

### Массив

```
arr.forEach(function(item, i, arr){
		(`${item) элемент - ${i) номаер эл. - ${arr) весь масив`);
});
```

![](./img/022%20Arrays.jpg)

`for ( let value of arr){}` - перебор (позволяет break & contine)

<!--
## Выбор элемента

`document.qwerySelector('css selector')` -> один элемент

`document.qwerySelector('css selector') ` -> массив элементов

## Событие

`document.body.addEventListener("событие", function);`

`e.preventDefault();` -> прерывание события

--- -->

## Хорошие команды

`isNan(a)` -> проверка на число, возвр не/правду

`.lenght` -> длина массива и тд

`.toggle('')` -> переключение

`getAttribute('')` -> получение data-x

`parseInt('')` -> приведение к целому числу

`this.` -> внутри функций с необходимым лементом

`promt` -> ввод в всплывающее окно
`confirm` -> да/нет всплывающего окна

`debugger` -> точка остановки, если открыта консоль

`.classList.add = 'name'` -> добавить класс

`.toLowerCase` -> уменьшить регистр

`.toUpperCase` -> увеличить регистр

# 🤡 **Git** 🤡

## Стандартная загрузка

`git init` - начало отслеживания

`git add` - добавление изменений (`-A` и `.` все изм.)

`git commit -m "massage"` - создание коммита

`git commit --amend -m "m"` - перезаписать предыдущий коммит

`git push origin <branch>` - загрузка на Хаб

---

` git push origin <branch>` - принудительная загрузка на Хаб(!опасно)

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
