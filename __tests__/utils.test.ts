import { measurementSort } from '../src/lib/common/utils';
describe('Utility testing', ()=>{
  it('should sort elements by date', async (done)=>{
    const data = [{date: new Date('1990')},{date: new Date('2018')},{date: new Date('2052')},{date: new Date('1979')}];
    const sort = data.sort(measurementSort);
  });
});
