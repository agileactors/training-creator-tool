const slugify = require('../slugify');

describe('slugify', () => {
  it('should remove dots from title', () => {
    const actual = slugify('....test-title.....');
    const expected = 'test-title';
    expect(actual).toBe(expected);
  });

  it('should remove accents from title', () => {
    const actual = slugify('ÁÄÂÉĚËÈÊẼĔȆ');
    const expected = 'aaaeeeeeeee';
    expect(actual).toBe(expected);
  });

  it('should replace multiple dashes with one dash', () => {
    const actual = slugify('test-----title');
    const expected = 'test-title';
    expect(actual).toBe(expected);
  });

  it('should replace whitespace(s) with dash', () => {
    const actual = slugify('  test   title ');
    const expected = 'test-title';
    expect(actual).toBe(expected);
  });

  it('should replace underscore with dash', () => {
    const actual = slugify('test_title');
    const expected = 'test-title';
    expect(actual).toBe(expected);
  });

  it('should keep greek titles', () => {
    const actual = slugify('τεστ τίτλος');
    const expected = 'τεστ-τίτλος';
    expect(actual).toBe(expected);
  });

  it('should keep mixed greek and english titles', () => {
    const actual = slugify('test τίτλος');
    const expected = 'test-τίτλος';
    expect(actual).toBe(expected);
  });
});
