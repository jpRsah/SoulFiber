---
path: "/blog/lessons/robot/3"
date: "2019-01-14"
title: "Урок по Робототехнике и программированию №3"
description: "Arduino для начинающих. Урок 3. Подключение кнопки. Теория."
---

##ТЕОРЕТИЧЕСКАЯ ЧАСТЬ

Источник https://www.7ya.ru/article/Opyty-s-jelektrichestvom-dlya-detej-ohrannaya-signalizaciya-svoimi-rukami/
Источник https://www.arduino.cc/en/tutorial/button

 - Что такое электрон
 [Электрон](https://img.7ya.ru/pub/img/22268/27.jpg)
 - Напряжение заставляет электроны двигаться
 - что такое Омы Единица измерения сопротивления
 [Как работает сопротивление](https://img.7ya.ru/pub/img/22268/29.jpg)

10^3 Ом  килоом  кОм  kΩ  
10^−3 Ом  миллиом  мОм  mΩ

 - резисторы, какие они бывают 
 - - с 4 полосками и с 5 полосками, 
 - - каждая из полосок означает число, 
 - - предпоследняя это множитель, последняя это погрешность
 
##ПРАКТИЧЕСКАЯ ЧАСТЬ

```cpp
    const int BUTTON = 2;
    const int LED = 8;

    void setup() {
        pinMode(LED, OUTPUT);
        pinMode(BUTTON, INPUT);
    }

    void loop(){
        if (digitalRead(BUTTON) == HIGH) {
            digitalWrite(LED, HIGH);
        } else {
            digitalWrite(LED, LOW);
        }
    }
```

 - Записываем код с комментариями в тетрадку
 - зачем нам нужна точка с запятой в конце строки
 - Регистрозависимость
 - Константы и переменные