const salary: number = 4000;
const friendSalaries: number[] = [7600, 2300,7800, 9000, 10000];
const friends: string[] = ['khalil', 'Fakir', 'Jalil', 'Kodu Mia'];

friendSalaries[0] = 10500;
friendSalaries.push(12300);
// friendSalaries[4] = '6700';

friends.push('mofij');
friends[2] = 'Kuddus';
// friends.push(4600);

let max = 0;
for(const salary of friendSalaries){
    if(salary > max){
        max = salary;
    }
}
