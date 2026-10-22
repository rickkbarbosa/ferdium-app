/**
 * Recipes whose service no longer exists, or that duplicate another entry.
 *
 * The catalog shown by "Add service" comes from the Ferdium API, not from the
 * recipes bundled with the app, so removing a recipe from the bundle is not
 * enough to keep it out of the UI.
 */
export const DISCONTINUED_RECIPE_IDS: readonly string[] = [
  'tweetdeck',
  'skype',
  'icq',
  'google-duo',
  'hangoutschat',
];

export const isDiscontinuedRecipe = (
  recipe: { id?: string | null } | null | undefined,
): boolean =>
  typeof recipe?.id === 'string' &&
  DISCONTINUED_RECIPE_IDS.includes(recipe.id.toLowerCase());
