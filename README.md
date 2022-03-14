# React_-Website_Animation_2022_YT
**Источник**  https://www.youtube.com/watch?v=sKs9FiAHSN4&list=PLs1fqgQpnCmJSkrDA2wTsSsLnYpE8jpVy&index=29



В этом проекте было использовано библиотека **__Styled Components__**


__Styled Components — это библиотека для React и React Native для написания и управления CSS. Это решение «CSS-in-JS», то есть вы пишете CSS в файлах Javascript (в частности, в компонентах, которые являются файлами Javascript).__


- Это простой CSS. Да, вы пишете CSS в файле JS, но синтаксис CSS не изменился.

- Вендорные префиксы автоматически добавляются при использовании стилизованных компонентов, повышая производительность в браузерах.

- Весь неиспользуемый CSS и стили автоматически удаляются

- Вы вообще не пишете никаких имен классов. Имена классов генерируются автоматически, поэтому нет необходимости управлять методологией именования классов CSS, такой как БЭМ.




**Установка стилизованных компонентов**
```
npm install styled-components // установить

import styled from 'styled-components'; // импортируем на каждый файл
```


**Разбор стили**


```
const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
```

```
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    `
```
- Как и при написании функционального компонента React, объявите имя компонента с помощью const ColumnRight
- styled это то, что мы импортировали выше, и это предоставляет нам функционал стилизованных компонентов
- div, section - Это представляет собой HTML, При объявлении стилизованного компонента вы можете использовать здесь любой HTML-элемент (h1, p, a, ul ...)


**При объявлении адаптивной стили**

```
const Container = styled.div`
    padding: 3rem calc((100vw-1300px)/2);
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`;

```



**Можно написать в виде вложенности и внутри стили написать разные логики**


```
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')}

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 2rem;
    }

    `;
```

- теги  h1, р они вложенные елементы div
-  order: ${({ reverse }) => (reverse ? '2' : '1')} - как здесь видно используется стрелочная функция и троичный аператор.



**Можно импортировать стили , написав их в отдельный файл**

```
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: .3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
font-size: ${({ big }) => (big ? "20px" : "14px")};
&:hover {
    transform: translateY(-2px);
}
`
```


_После им пользоваться в разных компонентах_

```

import { Button } from './Button';


  <Button to={slide.path} primary='true'
        css={`max-width: 160px;`}
         >
        {slide.label}
        <Arrow />
  </Button>
```

