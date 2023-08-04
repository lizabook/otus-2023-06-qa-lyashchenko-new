export const kolobok = (person) => {
    person = person.toLowerCase();
    switch (person) {
    case 'дедушка':
        return 'Я от дедушки ушёл';
    case 'заяц':
        return 'Я от зайца ушёл';
    case 'лиса':
        return 'Меня съели';
    default:
        return 'Я не знаю, кто это. Введи другое имя';
  }
}

export const newYear = (celebrityName) => {
    if (celebrityName.toLowerCase() === 'дед мороз'){
        celebrityName = 'Дед Мороз';
    } else if (celebrityName.toLowerCase() === 'снегурочка'){
        celebrityName = 'Снегурочка';
    };
    if (celebrityName.toLowerCase()==='дед мороз' || celebrityName.toLowerCase()==='снегурочка') {
        return `${celebrityName}! ${celebrityName}! ${celebrityName}!`;
    } else {
        return 'Кто это? Мы их не звали. Идите в лес.';
    }
}
