<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portable static assets
- Keep original website photos in `public/images` and reference their root-relative paths through `siteImages` in `src/data/site.ts`; independent hosts do not serve Lovable's `/__l5e/assets-v1` infrastructure.
- Keep all site copy and shared image paths in `src/data/site.ts` so page components use a single content source.
