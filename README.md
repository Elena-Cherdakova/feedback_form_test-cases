
<h3><b>Тестирование формы обратной связи на сайте testograf.ru</b></h3>
<p>На реальном проекте я попрошу прислать ТЗ и макеты в Figme (или аналоге).</p>
<p>Ниже я написала тест-кейсы, основываясь на исследовательском тестировании</p>
<a></a>
<p>  </p>
<p><b>Тест-кейс #1 </b> «Проверка успешной отправки формы с корректно заполненными данными»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя валидное значение, например, Иван</p>
<p>2. Ввести валидный email, например, example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #2</b> «Проверка поля "Ваше имя:" на корректный формат ввода»</p>
<p><I>Предусловие</I> </p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1.</p>
<p>- Ввести в поле Имя 5 символов, например, Елена</p>
<p>- Ввести в поле Имя 2 символа, например, Ян</p>
<p>- Ввести в поле Имя заглавные буквы, например, ИВАН</p>
<p>- Ввести в поле Имя строчные буквы, например, иван </p>
<p>- Ввести в поле Имя строку с пробелом, например, Иван Иванов</p>
<p>- Ввести в поле Имя строку с дефисом, например, Иван-Роман</p>
<p>- Ввести в поле Имя английские буквы, например, Alex</p>
<p>2. Ввести валидный email, например, example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #3</b> «Проверка поля "Ваше имя:" на некорректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1.</p>
<p>- Ввести в поле Имя 0 символов</p>
<p>- Ввести в поле Имя 30 символов, например, НиколайНиколайНиколайНиколайНи</p>
<p>- Ввести в поле Имя 1 символ, например, О</p>
<p>- Ввести в поле Имя строку со спецсимволом, например, @ван</p>
<p>- Ввести в поле Имя строку с цифрой, например, 1ван</p>
<p>- Ввести в поле Имя арабские буквы, например, ب غوريون</p>
<p>2. Ввести валидный email, например, example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма не отправилась, появилось сообщение «Некорректное имя!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #4</b> «Проверка поля "Email:" на корректный формат ввода»</p>
<p<I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. </p>
<p>- Ввести валидный email, например, example@yandex.ru</p>
<p>- Ввести в поле «Email:» эл. почту с дефисом, например, e-xample@yandex.ru</p>
<p>- Ввести в поле «Email:» эл. почту с нижним подчеркиванием, например, e_xample@yandex.ru</p>
<p>- Ввести в поле «Email:» эл. почту с первыми цифрами, например, 13example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #5</b> «Проверка поля "Email:" на некорректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. </p>
<p>- Ввести в поле Email 2 символа, например, @.</p>
<p>- Ввести в поле Email 3 символа, например, @.t</p>
<p>- Ввести в поле Email 4 символа, например, k@.k</p>
<p>- Ввести в поле Email больше 30 символов, например,  exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@yandex.ru</p>
<p>- Ничего не вводить в поле Email.</p>
<p>- Ввести в поле Email с русскими буквами, например, пример@yandex.ru</p>
<p>- Ввести в поле Email эл. почтy без @, например, rivanyandex.ru</p>
<p>- Ввести в поле Email эл. почту без точки, например, example@yandexru</p>
<p>- Ввести в поле Email эл. почту со спецсимволом, например, example!№%@yandexru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма не отправилась, появилось сообщение «Некорректный email!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #6</b> «Проверка поля "Телефон:" на корректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. </p>
<p>- Ввести в поле «Телефон:» количество символов, входящее в валидное количество символов в поле «Телефон:», в соответствии с документацией, например, если валидное количество символов [10, 15] ввести количество символов 10, 11, 13, 14, 15.</p>
<p>- Ничего не вводить в поле Телефон.</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #7</b> «Проверка поля "Телефон:" на некорректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. </p>
<p>- Ввести в поле «Телефон:» количество символов, не входящее в валидное количество символов в поле «Телефон:», в соответствии с документацией, например, если валидное количество символов [10, 15] ввести значения -10, 0, 4, 9, 16, 22.</p>
<p>- Ввести в поле Телефон номер с буквами, например, в900223311а</p>
<p>- Ввести в поле Телефон номер с пробелом, например, 8 9002223322</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма не отправилась, появилось сообщение «Некорректный телефон!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #8</b> «Проверка поля «Цель обращения:» на корректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000.</p>
<p>4. Выбрать «Цель обращения:» из списка по очереди:</p>
<p>- заказ</p>
<p>- вопрос о товаре</p>
<p>- вопрос в тех поддержку</p>
<p>- отзыв</p>
<p>- жалоба</p>
<p>- другое</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #9 </b>«Проверка поля «Цель обращения:» на некорректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000.</p>
<p>4. Не выбирать «Цель обращения:» из списка.</p>
<p>5. Ввести валидное сообщение, например, Привет!</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма не отправилась, появилось сообщение «Заполните поле «Цель обращения:»!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #10</b> «Проверка поля «Ваше сообщение:» на корректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000.</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. </p>
<p>- Ввести в поле «Ваше сообщение:» количество символов, входящее в валидное количество символов в поле «Ваше сообщение:», в соответствии с документацией, например, если валидное количество символов [5, 200] ввести значения 5, 6, 150, 199, 200.</p>
<p>- Ввести в поле «Ваше сообщение:» латиницу, например, Hello what's up</p>
<p>- Ввести в поле «Ваше сообщение:» цифры, например, 12345678900</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат </I></p>
<p>Форма отправилась, появилось сообщение «Благодарим за обращение!»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #11</b> «Проверка поля «Ваше сообщение:» на некорректный формат ввода»</p>
<p><I>Предусловие</I></p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя 5 символов, например, Елена</p>
<p>2. Ввести валидный email, например,  example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000.</p>
<p>4. Не выбирать «Цель обращения:» из списка.</p>
<p>5. </p>
<p>- Ввести в поле «Ваше сообщение:» количество символов, не входящее в валидное количество символов в поле «Ваше сообщение:», в соответствии с документацией, 
например, если валидное количество символов [5, 200] ввести значения -11, 0, 2, 4, 201, 220.</p>
<p>- Ввести в поле «Ваше сообщение:» текст со спецсимволами, например, !"№;%:?*()()</p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I> </p>
<p>Форма не отправилась, появилось сообщение «Заполните поле «Ваше сообщение:»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #12 </b> «Проверка SQL-иньекции»</p>
<p><I>Предусловие</I><p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя валидное значение, например, Иван</p>
<p>2. Ввести валидный email, например, example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести сообщение с sql-иньекцией, например, SELECT * FROM users WHERE username = 'admin' </p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма не отправилась, появилось сообщение «Заполните поле «Ваше сообщение:»</p>
<p><I>Постусловие</I> -</p>
<p></p>
<p><b>Тест-кейс #13 </b> «Проверка XSS атаки»</p>
<p><I>Предусловие</I><p>
<p>Перейти на страницу https://www.testograf.ru/ru/blog/feedback-form-template</p>
<p><I>Шаги</I></p>
<p>1. Ввести в поле Имя валидное значение, например, Иван</p>
<p>2. Ввести валидный email, например, example@yandex.ru</p>
<p>3. Ввести валидный телефон, например, 89000000000</p>
<p>4. Выбрать «Цель обращения:» из списка.</p>
<p>5. Ввести сообщениес XSS атакой, например, <script>alert('XSS уязвимость!');</script></p>
<p>6. Нажать кнопку Отправить.</p>
<p><I>Ожидаемый результат</I></p>
<p>Форма не отправилась, появилось сообщение «Заполните поле «Ваше сообщение:»</p>
<p><I>Постусловие</I> -</p>
