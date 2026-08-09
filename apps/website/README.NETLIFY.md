# Deploy Liodev website lên Netlify

Netlify nên trỏ vào **root của repository `lio`**, không trỏ trực tiếp vào
`apps/website`. Cấu hình đã có trong `/netlify.toml`:

- Build command: `bun install --frozen-lockfile && bun --cwd apps/website run build`
- Publish directory: `apps/website/dist`
- Node: 22

Sau khi Netlify cấp domain tạm, gắn custom domain `lio.vn` trong
`Site configuration → Domain management`, sau đó tạo DNS record theo đúng
giá trị Netlify cung cấp. Bật HTTPS/Let's Encrypt trước khi chuyển traffic.

Khu vực tài liệu Astro (`packages/web`) hiện là một app riêng, chạy server
output Cloudflare. Không trộn vào bundle marketing bằng redirect giả. Khi
triển khai docs, tạo Netlify site thứ hai từ cùng repository với build riêng
hoặc dùng Cloudflare Pages, rồi gắn `docs.lio.vn`; sau đó cập nhật link tài
liệu trong marketing về hostname docs chính thức.
