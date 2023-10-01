const fse = require ('fs-extra'); //в документации что-то такое... к счастью, я начинаю что-то понимать

const newdir = 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/FolderMadeWithFSE';
fse.ensureDirSync(newdir);
console.log('Achievment Unlocked: Create a folder with some txt inside.');
//на этом этапе оно создает нужную папку... ура... дальше создание файла, код к чему уже готов на момент написание этого комментария, осталось лишь понять, каким образом засунуть его именно в созданную папку

const newfile = 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/FolderMadeWithFSE/textfile.txt';
fse.writeFileSync (newfile, 'Нас ждут абрикосы, но сад подувял, значит время вернуться назад');
console.log('Achievment Unlocked: Create a txt file with some lame qoute.');
//возможно решение настолько простое, вместе с именем файла нужно указать путь, где он должен создасться... сейчас это и проверим
//нет, к соажлению, что-то пошло не так, а значит решение другое.........
//так, оно выдает ошибку по поводу того, что якобы нет такой папки, в которую я хочу создать этот файл
//Я ПОСТАВИЛ НЕ ТОТ СЛЭШ ЫВАХХЫВХЫВХЫВАХЫВАХЫВХАЫВАХЫВХАХЫВХХАЫХВХАВХЫВХАХ УБЕЙТЕ МЕНЯ ПОЖАЛУЙСТА 


const newdir2 = 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/AnotherFolderMadeWithFSE';
fse.ensureDirSync(newdir2);
console.log('Achievment Unlocked: Create another folder.');
//так, теперь у нас две папки, ура
//два часа искать ошибку с не тем слэшем — оно того стоило???????????????????????????????????

fse.moveSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/FolderMadeWithFSE/textfile.txt', 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/AnotherFolderMadeWithFSE/textfile.txt');
console.log('Achievment Unlocked: The lame file was moved to another folder.');
//ура, оно переносит файл... запоминаем на будущее: полный путь файла к полному пути файла

const newdir3 = 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/OneMoreFolderMadeWithFSE';
fse.ensureDirSync(newdir3);
console.log('Achievment Unlocked: Create one more folder.');
//на полной уверенности в себе без проверки создается ли треться папка пойду искать метод копирования, хотя, могу попробовать угадать, что это будет copySync

//кто бы мог подумать, это действительно copySync

fse.copySync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/AnotherFolderMadeWithFSE/textfile.txt', 'C:/JS/VSCprojects/KENOPSIA3/lesson_04/OneMoreFolderMadeWithFSE/copiedlame.txt');
console.log('Achievment Unlocked: Lame — Duplicated.');
//а? так ли оно должно работать?

//да, именно так и работает

fse.removeSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/AnotherFolderMadeWithFSE/textfile.txt');
fse.removeSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/OneMoreFolderMadeWithFSE/copiedlame.txt');
console.log('Achievment Unlocked: Lame — Deleted.');

//а в данный момент я задумался над тем, зачем я вообще ставлю эти точки с запятыми???????????
//а еще это все работает, так что ну чисто с кайфом

fse.removeSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/FolderMadeWithFSE');
fse.removeSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/AnotherFolderMadeWithFSE');
fse.removeSync('C:/JS/VSCprojects/KENOPSIA3/lesson_04/OneMoreFolderMadeWithFSE');
console.log('Achievment Unlocked: Creating equals Destroying');

//вот это финалочка, да? Создание равняется разрушению. Да это почти как у Оруэлла.