import {
  DISCONTINUED_RECIPE_IDS,
  isDiscontinuedRecipe,
} from '../../src/helpers/discontinued-recipes';

describe('discontinued recipes', () => {
  it('flags every id in the blocklist', () => {
    for (const id of DISCONTINUED_RECIPE_IDS) {
      expect(isDiscontinuedRecipe({ id })).toBe(true);
    }
  });

  it('is case insensitive', () => {
    expect(isDiscontinuedRecipe({ id: 'SkyPe' })).toBe(true);
  });

  it('ignores active recipes', () => {
    expect(isDiscontinuedRecipe({ id: 'midjourney' })).toBe(false);
    expect(isDiscontinuedRecipe({ id: 'whatsapp' })).toBe(false);
  });

  it('tolerates missing ids', () => {
    expect(isDiscontinuedRecipe({})).toBe(false);
    expect(isDiscontinuedRecipe(null)).toBe(false);
  });

  it('drops discontinued entries from a catalog', () => {
    const catalog = [
      { id: 'slack' },
      { id: 'tweetdeck' },
      { id: 'skype' },
      { id: 'deepseek' },
    ];

    expect(catalog.filter(recipe => !isDiscontinuedRecipe(recipe))).toEqual([
      { id: 'slack' },
      { id: 'deepseek' },
    ]);
  });
});
