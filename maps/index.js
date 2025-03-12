import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4, 5);

document.write('maps');

source$.pipe(mergeMap(id => of(`User Data ${id}`).pipe(delay(200)))).subscribe(console.log);


const search$ = of(1, 2, 3, 4, 5);

search$.pipe(switchMap(id => of(`${id}`).pipe(delay(200)))).subscribe(console.log);


const tasks$ = of('Task1', 'Task2', 'Task3');


tasks$.pipe(concatMap(task => of(`${task} done`).pipe(delay(200)))).subscribe(console.log)