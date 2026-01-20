export const slugify = (input) =>
  input
    .toString()
    .normalize('NFKD')                 // split accents from letters
    .replace(/[\u0300-\u036f]/g, '')   // remove accents
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')           // spaces/underscores -> hyphen
    .replace(/[^a-z0-9-]/g, '')        // drop non-url-safe chars
    .replace(/-+/g, '-')               // collapse multiple hyphens
    .replace(/^-|-$/g, '');            // trim hyphens ends
