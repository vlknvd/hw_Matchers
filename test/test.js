import { character } from '../src/index';

test('Sort character', () => {
    let result = character.sort((x,y) => y.health - x.health);
    expect(character).toEqual(result);
})