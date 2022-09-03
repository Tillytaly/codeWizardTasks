# Zadania komponenty

## Zadanie 1
Stwórz komponent o nazwie Card, który wyświetli osobę w wirtualnej książce telefonicznej lokalnej firmy transportowej. Sugeruj się szkicem ze zdjęcia poniżej, ma to jedynie obrazować rozłożenie elementów na stronie. Stylowanie pozostawiam Twojej inwencji twórczej.
![card](./assets/card.png)

## Zadanie 2
Rozbuduj komponent Card z poprzedniego zadania, aby można do niego było przekazywać propsy takie jak link do zdjęcia, imie, nazwisko, ulica, kod pocztowy, miasto, województwo i numer telefonu, a następnie przekaż do niego dane z obiektu zdefiniowanego poniżej.
```js
    const singleData={
        imgSrc:"",
        name: "Adam",
        surname: "Jochemczyk",
        street:"TestStreet",
        postCode: "00-123",
        town: "Town",
        subRegion: "Region",
        phoneNumber:"+48 123 456 789"
    }
```
## Zadanie 3
Stwórz komponent Wrapper, który będzie odpowiedzialny za rozmieszczenie wielu komponentów Card na stronie w zależności od wielkości ekranu. Na desktopie rozmieść komponenty Card obok siebie, a na mniejszych ekranach jeden pod drugim. Wykorzystaj mapowanie i tablicę obiektów zdefiniowaną niżej
```js
    const cards=[{
        id: 1,
        imgSrc:"",
        name: "Zigniew",
        surname: "Herbert",
        street:"TestStreet",
        postCode: "00-123",
        town: "Town",
        subRegion: "Region",
        phoneNumber:"+48 123 456 789"
    },{
        id:2,
        imgSrc:"",
        name: "Henryk",
        surname: "Sienkiewicz",
        street:"TestStreet",
        postCode: "00-123",
        town: "Town",
        subRegion: "Region",
        phoneNumber:"+48 123 456 789"
    },
    {
        id:3,
        imgSrc:"",
        name: "Wisława",
        surname: "Szymborska",
        street:"TestStreet",
        postCode: "00-123",
        town: "Town",
        subRegion: "Region",
        phoneNumber:"+48 123 456 789"
    }]
```
## Zadanie 4

Razem z Adrianem z JsMastery zaimplementuj stronę GPT-3
https://www.youtube.com/watch?v=LMagNcngvcU
będzie tam jeden hook jako zapowiedź przyszłej lekcji ;)