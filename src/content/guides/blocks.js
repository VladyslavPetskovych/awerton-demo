/*
 * Building blocks for guide articles. Each article body is an array of these blocks and is
 * rendered by <ArticleBody> in src/pages/GuidesPage.jsx.
 *
 * List-like items are either a plain string or a [lead, text] pair — the lead is set in bold.
 */

export const h = (text) => ({ type: 'h', text })
export const p = (text) => ({ type: 'p', text })
export const list = (items) => ({ type: 'list', items })
export const checklist = (items) => ({ type: 'checklist', items })
export const steps = (items) => ({ type: 'steps', items })
export const tip = (text) => ({ type: 'tip', text })
export const takeaways = (items) => ({ type: 'takeaways', items })
export const table = (head, rows) => ({ type: 'table', head, rows })
/** One or two photos side by side, with a shared caption. */
export const figure = (photos, caption) => ({ type: 'figure', photos, caption })

/**
 * Photos from AWERTON properties, stored as /public/images/guide-<name>.webp.
 * The name must start with the property (aristo-, royal- or prime-): the credit shown under
 * each photo comes from it, so a photo can never be captioned with the wrong property.
 */
export const photo = (name, alt) => ({
  src: `/images/guide-${name}.webp`,
  alt,
  property: name.split('-')[0],
})
