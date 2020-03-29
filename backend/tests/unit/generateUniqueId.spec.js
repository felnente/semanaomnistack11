const generateUniquId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniquId();
    expect(id).toHaveLength(8);
  })
})