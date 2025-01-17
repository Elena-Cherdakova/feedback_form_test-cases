Тест-кейс #1
Название «Проверка успешной отправки формы с корректно заполненными данными»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя валидное значение, например, Иван
2. Ввести валидный email, например, elenacherdakova@yandex.ru
3. Ввести валидный телефон, например, 89000000000
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #2
Название «Проверка поля "Ваше имя:" на корректный формат ввода»
Предусловие 
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1.
- Ввести в поле Имя 5 символов, например, Елена
- Ввести в поле Имя 2 символа, например, Ян
- Ввести в поле Имя заглавные буквы, например, ИВАН
- Ввести в поле Имя строчные буквы, например, иван
- Ввести в поле Имя строку с пробелом, например, Иван Иванов
- Ввести в поле Имя строку с дефисом, например, Иван-Роман
- Ввести в поле Имя английские буквы, например, Alex
2. Ввести валидный email, например, example@yandex.ru
3. Ввести валидный телефон, например, 89000000000
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #3
Название «Проверка поля "Ваше имя:" на некорректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1.
- Ввести в поле Имя 0 символов
- Ввести в поле Имя 30 символов, например, НиколайНиколайНиколайНиколайНи
- Ввести в поле Имя 1 символ, например, О
- Ввести в поле Имя строку со спецсимволом, например, @ван
- Ввести в поле Имя строку с цифрой, например, 1ван
- Ввести в поле Имя арабские буквы, например, ب غوريون
2. Ввести валидный email, например, elenacherdakova@yandex.ru
3. Ввести валидный телефон, например, 89000000000
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма не отправилась, появилось сообщение «Некорректное имя!»
Постусловие -

Тест-кейс #4
Название «Проверка поля "Email:" на корректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. 
- Ввести валидный email, например, example@yandex.ru
- Ввести в поле «Email:» эл. почту с дефисом, например, e-xample@yandex.ru
- Ввести в поле «Email:» эл. почту с нижним подчеркиванием, например, e_xample@yandex.ru
- Ввести в поле «Email:» эл. почту с первыми цифрами, например, 13example@yandex.ru
3. Ввести валидный телефон, например, 89000000000
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #5
Название «Проверка поля "Email:" на некорректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. 
- Ввести в поле Email 2 символа, например, @.
- Ввести в поле Email 3 символа, например, @.t
- Ввести в поле Email 4 символа, например, k@.k
- Ввести в поле Email больше 30 символов, например,  exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@yandex.ru
- Ничего не вводить в поле Email.
- Ввести в поле Email с русскими буквами, например, пример@yandex.ru
- Ввести в поле Email эл. почтy без @, например, rivanyandex.ru
- Ввести в поле Email эл. почту без точки, например, example@yandexru
- Ввести в поле Email эл. почту со спецсимволом, например, example!№%@yandexru
3. Ввести валидный телефон, например, 89000000000
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат
Форма не отправилась, появилось сообщение «Некорректный email!»
Постусловие -

Тест-кейс #6
Название «Проверка поля "Телефон:" на корректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. 
- Ввести в поле «Телефон:» количество символов, входящее в валидное количество символов в поле «Телефон:», в соответствии с документацией, например, если валидное количество символов [10, 15] ввести количество символов 10, 11, 13, 14, 15.
- Ничего не вводить в поле Телефон.
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #7
Название «Проверка поля "Телефон:" на некорректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. 
- Ввести в поле «Телефон:» количество символов, не входящее в валидное количество символов в поле «Телефон:», в соответствии с документацией, например, если валидное количество символов [10, 15] ввести значения -10, 0, 4, 9, 16, 22.
- Ввести в поле Телефон номер с буквами, например, в900223311а
- Ввести в поле Телефон номер с пробелом, например, 8 9002223322
4. Выбрать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма не отправилась, появилось сообщение «Некорректный телефон!»
Постусловие -

Тест-кейс #8
Название «Проверка поля «Цель обращения:» на корректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. Ввести валидный телефон, например, 89000000000.
4. Выбрать «Цель обращения:» из списка по очереди:
- заказ
- вопрос о товаре
- вопрос в тех поддержку
- отзыв
- жалоба
- другое
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #9
Название «Проверка поля «Цель обращения:» на некорректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. Ввести валидный телефон, например, 89000000000.
4. Не выбирать «Цель обращения:» из списка.
5. Ввести валидное сообщение, например, Привет!
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма не отправилась, появилось сообщение «Заполните поле «Цель обращения:»!»
Постусловие -

Тест-кейс #10
Название «Проверка поля «Ваше сообщение:» на корректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. Ввести валидный телефон, например, 89000000000.
4. Выбрать «Цель обращения:» из списка.
5. 
- Ввести в поле «Ваше сообщение:» количество символов, входящее в валидное количество символов в поле «Ваше сообщение:», в соответствии с документацией, например, если валидное количество символов [5, 200] ввести значения 5, 6, 150, 199, 200.
- Ввести в поле «Ваше сообщение:» латиницу, например, Hello what's up
- Ввести в поле «Ваше сообщение:» цифры, например, 12345678900
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма отправилась, появилось сообщение «Благодарим за обращение!»
Постусловие -

Тест-кейс #11
Название «Проверка поля «Ваше сообщение:» на некорректный формат ввода»
Предусловие
Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template
Шаги
1. Ввести в поле Имя 5 символов, например, Елена
2. Ввести валидный email, например,  example@yandex.ru
3. Ввести валидный телефон, например, 89000000000.
4. Не выбирать «Цель обращения:» из списка.
5. 
- Ввести в поле «Ваше сообщение:» количество символов, не входящее в валидное количество символов в поле «Ваше сообщение:», в соответствии с документацией, 
например, если валидное количество символов [5, 200] ввести значения -11, 0, 2, 4, 201, 220.
- Ввести в поле «Ваше сообщение:» текст со спецсимволами, например, !"№;%:?*()()
6. Нажать кнопку Отправить.
Ожидаемый результат 
Форма не отправилась, появилось сообщение «Заполните поле «Ваше сообщение:»!»
Постусловие -
