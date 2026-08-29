# CHERYL PORTFOLIO - Redesign

使用色：`#E2E7EF` / `#1E2532` / `#FEFEFE`

構成：MV → ABOUT ME → SKILLS → WORKS → CONTACT

## 画像の差し替え
`assets/images/` 内を差し替えるだけで更新できます。

- MV：`mv.svg`
- ABOUT：`about.svg`
- WORKS：`work-01.svg` 〜 `work-06.svg`

JPG / PNG / WebP に変える場合は `index.html` の `src` も同じファイル名に変更してください。

## GitHubへの反映
既存の `Cheryl` と接続済みの `portfolio-site` フォルダに、この中身を上書きしてから以下を実行します。

```bash
git add .
git commit -m "Redesign portfolio"
git push origin main
```
