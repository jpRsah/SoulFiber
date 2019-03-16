---
path: "/blog/tests/robot/2"
date: "2019-03-12"
title: "Теcт по Робототехнике и программированию №2"
description: "Arduino для начинающих. Тест 2. Стиль кода, VIM, Описание приложения"
---
<!-- 
красивый код 
<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css">

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js">

</script> -->

## Стиль кода

>
    // Проблема С++ в том, что необходимо узнать всё о нём перед тем, как начать писать на нём все что угодно.
    // Larry Wall

1. Когда следует использовать цикл `while`?
<!-- Когда количество повторений неизвестно  -->
1. Что такое чрезмерность?
<!--  Это повторение одинакового кода. -->
1. Что делать, если код который мы написали сложен?
<!--  Прокомментировать его. -->
1. Когда могут потребоваться коментарии?
<!-- В начале файла, беред функцией, в исключении, в сложном участке кода -->
1. Что следует использовать вместо команды `exit`?
<!-- return как естественный выход из программы -->

***

>
    // Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.
    // Martin Fowler

1. Поправьте код, чтобы он стал более эффективным:

```cpp
    if (millis() - lastPollingTime > lastPollingTimeOut) { 
        if (millis() > u32wait) u8state++;
    }
```
<!--  -->

2. Перепишите код так, чтобы условий стало меньше:

```cpp
    if (grade <= 90 && grade > 80) {
        cout << "A!";
    }
    if (grade >= 90 && grade < 100) {
        cout << "B!";
    }
    if (grade >= 70 && grade < 80) {
        cout << "C!";
    }
```
<!--  -->

3. Поправьте код так, чтобы он удовлетворял принципам чрезмерности:

```cpp
    if (sensors_values[2] < smallest_sensor_id) {
      smallest_sensor_id = 2;
    }    
    if (sensors_values[1] < smallest_sensor_id) {
      smallest_sensor_id = 1;
    }
```
<!-- 
helper(1);
helper(2);
...

void helper(int x) {
    if (sensors_values[x] < smallest_sensor_id) {
      smallest_sensor_id = x;
    }
}
 -->

4. Исправьте ошибки стиля кода:

```cpp
    int X=18;int Y= 18;
    foo();if(x<y){y+=y+2;x++;}else{y++;}
```
<!--  -->

5. Исправьте ошибки стиля кода:

```cpp
    const int voting_age1=18;voting_age1++;
    int voting_age2=18;int Voting_age3=voting_age1;
    if(Voting_age3==voting_age2)return true;
```
<!--  -->

***
## Vim редактор
>
    // Я использую Vim уже 2 года, потому что не могу из него выйти.

С помощью какой команды можно:

1. Удалить строку?
<!-- dd -->
1. Удалить строку и перейти в режим вставки?
<!-- cc -->
1. Сохранить файл и выйти из Vim?
<!-- :wq -->
1. Перейти в конец строки?
<!-- $ -->
1. Вставить текст ?
<!-- p -->

***

>
    // Если вы владеете стандартным Vim, то считайте, что вы приобрели полезный навык на всю жизнь.

1. Ваш курсор находится на открывающей скобке, как переместиться к закрывающей скобке и обратно?
<!-- % -->
1. Как создать строку выше курсора и перейти в режим вставки?
<!-- O -->
1. Как одной клавишей войти в режим вставки в конце строки?
<!-- A -->
1. Как скопировать 3 строки?
<!-- 3yy -->
1. Как отменить предыдущие действия?
<!-- u -->


***
## Игра на Arduino LCD1602 I2C

Расскажите своими словами, что делает эта команда:

1. ```cpp 
  #include <LiquidCrystal_I2C.h>
  ```
1. ```cpp
  int complexity = 2;
  ```
1. ```cpp
  unsigned long counter = 0;
  ```
1. ```cpp
  const unsigned STONES_MAX = 10;
  ```
1. ```cpp
  const unsigned int RELOAD_TIME = 10;
  ```

***

Расскажите своими словами, что делает этот участок кода:
1. ```cpp
  for(int i=0; i<complexity; i++){
    stones[0][i]=random(15,50);
    stones[1][i]=rand()%2; 
  }
   ```
1. ```cpp
    if(ledState == 1) {
      if(reloads < RELOAD_TIME) {
        reloads++;
      }
      if(fired == true) {
        fired = false;
        reloads = 0;
      }
      box = ox;
    }
  ```
1. ```cpp
    if(X > 600){
      if(ox >= 15){
        ox = 15;
      }else{
        ox++;
      }
      box = ox;
    }
    if(X<400){
      if(ox<0){
        ox = 0;
      }else{
        ox--;
      }
      box = ox;
    }
  ```
1. ```cpp
    if (complexity<STONES_MAX && counter > difficulty_divisor*2){
      complexity=counter/difficulty_divisor;
    }
  ```
1. ```cpp
    for(int i=0; i<complexity; i++){
      if((ox==stones[0][i] || ox==stones[0][i]+1) && oy==stones[1][i]){
        isLife=false;
        break;
      }
    }
  ```

***

## Когда закончил

1. Выбери соревнования в которых ты бы хотел принять участие и пришли мне название или ссылку: http://www.russianrobofest.ru/sorevnovaniya/
1. Читай источники, это важно :)

## Источники: 
- [Программирование микроконтроллеров для начинающих](https://arduinoplus.ru/programmirovanie-mikrokontrollerov-dlya-nachinayuschih/)
- [Гайд по оформлению кода на С++ от Стэнфордского университета](https://tproger.ru/translations/stanford-cpp-style-guide/)
- [Что вам стоит знать, если вы начали изучение Vim](https://proglib.io/p/vim-what-i-wish-i-knew/)
- [100 самых актуальных цитат о программировании](https://tproger.ru/devnull/programming-quotes/)
- [Arduino LCD1602 I2C game](https://gist.github.com/jpRsah/f2f241dff9f06c5d7e5a64261d3cde6a)