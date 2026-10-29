/** 把文案里的 [文字](链接) 变成超链接，其余内容转义 */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rich(text: string): string {
  return esc(text).replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, (_, label, href) => {
    const external = href.startsWith('http');
    return `<a class="link" href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
  });
}
